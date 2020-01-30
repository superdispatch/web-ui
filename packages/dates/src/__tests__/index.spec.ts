import * as api from '..';

it('exposes public api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "Calendar": [Function],
      "CalendarQuickSelection": Object {
        "$$typeof": Symbol(react.forward_ref),
        "displayName": "CalendarQuickSelection",
        "render": [Function],
      },
      "CalendarQuickSelectionItem": Object {
        "$$typeof": Symbol(react.forward_ref),
        "displayName": "CalendarQuickSelectionItem",
        "render": [Function],
      },
      "DateField": Object {
        "$$typeof": Symbol(react.forward_ref),
        "displayName": "DateField",
        "render": [Function],
      },
      "DatePicker": [Function],
      "DatePickerBase": [Function],
      "DateRangeField": Object {
        "$$typeof": Symbol(react.forward_ref),
        "displayName": "DateRangeField",
        "render": [Function],
      },
      "DateRangePicker": [Function],
      "DateTextField": Object {
        "$$typeof": Symbol(react.forward_ref),
        "displayName": "DateTextField",
        "render": [Function],
      },
      "DateUtils": [Function],
      "formatDate": [Function],
      "formatDateRange": [Function],
      "formatDateTime": [Function],
      "isDate": [Function],
      "isDateLike": [Function],
      "isSameDate": [Function],
      "isSameDateRange": [Function],
      "isValidDate": [Function],
      "parseDate": [Function],
      "setEndOfDate": [Function],
      "setStartOfDate": [Function],
      "stringifyDate": [Function],
      "toDate": [Function],
      "toDateRange": [Function],
      "useDatePickerPopoverState": [Function],
      "useDateRangePickerStyles": [Function],
    }
  `);
});
