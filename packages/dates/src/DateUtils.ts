import { DateObjectUnits, DateTime } from 'luxon';

export type DateFormat = 'DateISO' | 'DateTimeISO' | 'JodaISO';
export type DateUnit =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond';
export type DateUnitValues = Partial<Record<DateUnit, number>>;

export type NullableDate = null | undefined | Date;
export type DateLike = number | Date;
export type NullableDateLike = null | undefined | DateLike;
export type DateRange = [Date?, Date?];
export type DateRangeLike = [DateLike?, DateLike?];
export type NullableDateRangeLike = null | undefined | DateRangeLike;

export interface DateUtilsOptions {
  locale?: string;
  timeZoneOffset?: number;
}

const defaultDateUtilsOptions: Required<DateUtilsOptions> = {
  locale: 'en-US',
  timeZoneOffset: 0,
} as const;

const formats: Record<DateFormat, string> = {
  DateISO: '_',
  DateTimeISO: '_',
  JodaISO: "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ",
} as const;

function toDateTime(
  value: DateLike,
  { timeZoneOffset }: Required<DateUtilsOptions> = defaultDateUtilsOptions,
): DateTime {
  const dateTime =
    typeof value === 'number'
      ? DateTime.fromMillis(value)
      : DateTime.fromJSDate(value);

  return dateTime.toUTC(timeZoneOffset);
}

export function isDate(value: unknown): value is Date {
  return value != null && value instanceof Date;
}

export function isDateLike(value: unknown): value is DateLike {
  return (
    isDate(value) || (typeof value === 'number' && Number.isInteger(value))
  );
}

export function isValidDate(value: unknown): value is Date {
  return isDate(value) && Number.isFinite(value.getTime());
}

export function toDate(value: NullableDateLike): Date {
  return !isDateLike(value) ? new Date(NaN) : new Date(value);
}

export function toDateRange(range: NullableDateRangeLike): DateRange {
  if (range == null || !Array.isArray(range)) {
    return [];
  }

  const [start, end] = range
    .filter(isDateLike)
    .slice(0, 2)
    .map(toDate)
    .sort((a, b) => a.getTime() - b.getTime());

  return [start, end];
}

export function isSameDate(
  value: NullableDateLike,
  compare: NullableDateLike,
  unit: DateUnit = 'millisecond',
) {
  if (value == null && compare == null) {
    return true;
  }

  if (value == null || compare == null) {
    return false;
  }

  return toDateTime(value)
    .startOf(unit)
    .equals(toDateTime(compare).startOf(unit));
}

export function isSameDateRange(
  value: NullableDateRangeLike,
  compare: NullableDateRangeLike,
  unit?: DateUnit,
) {
  const range1 = toDateRange(value);
  const range2 = toDateRange(compare);

  return !range1.some((date, idx) => isSameDate(date, range2[idx], unit));
}

export function parseDate(value: unknown, format: DateFormat): Date {
  if (Object.prototype.hasOwnProperty.call(formats, format)) {
    if (isDateLike(value)) {
      return toDate(value);
    }

    if (typeof value === 'string') {
      if (format === 'DateISO' || format === 'DateTimeISO') {
        return DateTime.fromISO(value, { zone: 'UTC' }).toJSDate();
      }

      return DateTime.fromFormat(value, formats[format]).toJSDate();
    }
  }

  return new Date(NaN);
}

export function stringifyDate(value: DateLike, format: DateFormat): string {
  const dateTime = toDateTime(value);

  if (!dateTime.isValid) {
    return 'Invalid Date';
  }

  if (format === 'DateISO') {
    return dateTime.toISODate();
  }

  if (format === 'DateTimeISO') {
    return dateTime.toISO();
  }

  return dateTime.toFormat(formats[format]);
}

export interface FormatDateOptions
  extends DateUtilsOptions,
    Omit<Intl.DateTimeFormatOptions, 'timeZone' | 'timeZoneName'> {}

export class DateUtils {
  protected options: Required<DateUtilsOptions>;

  constructor({
    locale = defaultDateUtilsOptions.locale,
    timeZoneOffset = defaultDateUtilsOptions.timeZoneOffset,
  }: DateUtilsOptions = {}) {
    this.options = { locale, timeZoneOffset };
  }

  get locale() {
    return this.options.locale;
  }

  get timeZoneOffset() {
    return this.options.timeZoneOffset;
  }

  get localTimeZoneOffset() {
    return DateTime.local().offset;
  }

  protected toDateTime(value: DateLike): DateTime {
    return toDateTime(value, this.options);
  }

  update(value: DateLike, values: DateObjectUnits): Date {
    return this.toDateTime(value)
      .set(values)
      .toJSDate();
  }

  startOf(value: DateLike, unit: DateUnit): Date {
    return this.toDateTime(value)
      .startOf(unit)
      .toJSDate();
  }

  endOf(value: DateLike, unit: DateUnit): Date {
    return this.toDateTime(value)
      .endOf(unit)
      .toJSDate();
  }

  plus(value: DateLike, values: DateUnitValues): Date {
    return this.toDateTime(value)
      .plus(values)
      .toJSDate();
  }

  minus(value: DateLike, values: DateUnitValues): Date {
    return this.toDateTime(value)
      .minus(values)
      .toJSDate();
  }

  toDateWithoutOffset(value: DateLike): Date {
    return this.toDateTime(value)
      .toUTC(this.localTimeZoneOffset, { keepLocalTime: true })
      .toJSDate();
  }

  fromDateWithoutOffset(value: DateLike): Date {
    return this.toDateTime(value)
      .toUTC(-this.localTimeZoneOffset, { keepLocalTime: true })
      .toJSDate();
  }

  mergeTime(dateValue: DateLike, timeValue: DateLike): Date {
    const time = this.toDateTime(timeValue);

    return this.update(dateValue, {
      hour: time.hour,
      minute: time.minute,
      second: time.second,
      millisecond: time.millisecond,
    });
  }

  formatDate(
    value: DateLike,
    options?: Omit<Intl.DateTimeFormatOptions, 'timeZone' | 'timeZoneName'>,
  ): string {
    return this.toDateTime(value).toLocaleString({
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      ...options,
      locale: this.options.locale,
    });
  }

  formatTime(value: DateLike, options?: FormatDateOptions): string {
    return this.formatDate(value, {
      hour: 'numeric',
      minute: 'numeric',
      day: undefined,
      month: undefined,
      year: undefined,
      ...options,
    });
  }

  formatDateTime(value: DateLike, options?: FormatDateOptions): string {
    return this.formatDate(value, {
      hour: 'numeric',
      minute: 'numeric',
      ...options,
    });
  }

  formatDateRange(range: DateRangeLike): string {
    const [from, to] = toDateRange(range);

    if (!from) {
      return '';
    }

    if (!isValidDate(from) || (isDate(to) && !isValidDate(to))) {
      return 'Invalid Date Range';
    }

    const fromText = !isSameDate(from, to, 'year')
      ? this.formatDate(from)
      : this.formatDate(from, { year: undefined });

    const toText = !to ? '…' : this.formatDate(to);

    return `${fromText} - ${toText}`;
  }

  formatRelativeTime(value: DateLike, compare: DateLike): string {
    return (
      this.toDateTime(value).toRelative({
        locale: this.options.locale,
        base: this.toDateTime(compare),
      }) || 'Invalid Date'
    );
  }
}
