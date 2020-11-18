import {
  DateField,
  DateFieldProps,
  DatePayload,
  DateString,
  NullableDateInput,
  parseDate,
  stringifyDate,
  useDateConfig,
} from '@superdispatch/dates';
import { useField, useFormikContext } from 'formik';
import React, { ReactElement } from 'react';

export interface FormikDateFieldProps extends Omit<DateFieldProps, 'error'> {
  name: string;
  validate?: (info: DatePayload) => void | string;
}

export function FormikDateField({
  name,
  format,
  onChange,
  disabled,
  helperText,
  validate: validateProp,
  ...props
}: FormikDateFieldProps): ReactElement {
  const config = useDateConfig({ format });
  const { isSubmitting } = useFormikContext();

  function validate(value: unknown): void | string {
    if (!validateProp) return;

    const dateValue = parseDate(value as NullableDateInput, config);
    return validateProp({
      config,
      dateValue,
      stringValue: stringifyDate(dateValue, config),
    });
  }

  const [{ value }, { error, touched }, { setValue, setTouched }] = useField<
    undefined | DateString
  >({ name, validate });
  const errorText = touched && error;

  return (
    <DateField
      {...props}
      name={name}
      value={value}
      format={format}
      error={!!errorText}
      disabled={disabled || isSubmitting}
      helperText={errorText || helperText}
      onChange={(nextValue) => {
        onChange?.(nextValue);
        setTouched(true, false);
        setValue(nextValue.stringValue);
      }}
    />
  );
}
