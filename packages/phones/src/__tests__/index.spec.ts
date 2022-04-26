import * as api from '..';

test('api', () => {
  const { v5, ...v4 } = api;

  expect(v4).toMatchInlineSnapshot(`
    Object {
      "DEFAULT_COUNTRY": "US",
      "PhoneField": React.forwardRef(PhoneField),
      "PhoneLink": React.forwardRef(PhoneLink),
      "PhoneService": [Function],
      "PhoneText": [Function],
      "SuspendedPhoneField": React.forwardRef(SuspendedPhoneField),
      "SuspendedPhoneLink": React.forwardRef(SuspendedPhoneLink),
      "SuspendedPhoneText": [Function],
      "formatCountry": [Function],
      "getCountryCode": [Function],
      "isCountryISO": [Function],
      "listCountries": [Function],
      "toCountryISO": [Function],
      "useFormattedPhoneNumber": [Function],
      "usePhoneService": [Function],
    }
  `);
});
