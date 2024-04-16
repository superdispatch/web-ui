import {
  getAsYouType,
  getExample,
  parsePhoneNumber,
} from 'awesome-phonenumber';
import { CountryISO } from '../country-code-metadata/CountryCodeMetadata';
import {
  PhoneNumberFormat,
  PhoneService,
  PhoneValidationRules,
} from '../phone-service/PhoneService';

test.each([
  ['', 'US', ''],
  ['5', 'US', '5'],
  ['50', 'US', '50'],
  ['506', 'US', '506'],
  ['506', 'US', '506'],
  ['506', 'US', '506'],
  ['5062', 'US', '5062'],
  ['50623', 'US', '50623'],
  ['506234', 'US', '506234'],
  ['5062345', 'US', '5062345'],
  ['50623456', 'US', '50623456'],
  ['506234567', 'US', '506234567'],
  ['5062345678', 'US', '506-234-5678'],
  ['50623456789', 'US', '50623456789'],
  ['506234567890', 'US', '506234567890'],

  ['1', 'US', '1'],
  ['15', 'US', '15'],
  ['150', 'US', '150'],
  ['1506', 'US', '1506'],
  ['15062', 'US', '15062'],
  ['150623', 'US', '150623'],
  ['1506234', 'US', '1506234'],
  ['15062345', 'US', '15062345'],
  ['150623456', 'US', '150623456'],
  ['1506234567', 'US', '1506234567'],
  ['15062345678', 'US', '506-234-5678'],
  ['150623456789', 'US', '50623456789'],
  ['1506234567890', 'US', '506234567890'],

  ['+', 'US', ''],
  ['+1', 'US', ''],
  ['+15', 'US', '5'],
  ['+150', 'US', '50'],
  ['+1506', 'US', '506'],
  ['+15062', 'US', '5062'],
  ['+150623', 'US', '50623'],
  ['+1506234', 'US', '506234'],
  ['+15062345', 'US', '5062345'],
  ['+150623456', 'US', '50623456'],
  ['+1506234567', 'US', '506234567'],
  ['+15062345678', 'CA', '506-234-5678'],
  ['+150623456789', 'US', '50623456789'],
  ['+1506234567890', 'US', '506234567890'],
  ['+15062345678,+15062345679,+15062345680', 'CA', '506-234-5678'],
])(
  '#getInfo(%p): { country: %p, nationalNumber: %p }',
  (input, country, nationalNumber) => {
    expect(
      new PhoneService({ parsePhoneNumber, getAsYouType, getExample }).getInfo(
        input,
      ),
    ).toEqual({
      country,
      nationalNumber,
    });
  },
);

test.each<
  [
    input: string,
    format: undefined | PhoneNumberFormat,
    country: undefined | CountryISO,
    expected: string,
  ]
>([
  // Normalizes national number
  ['!+@1#1$', undefined, undefined, '+11'],
  ['!+@6#4$1', undefined, undefined, '+641'],

  // Uses `e164` by default
  ['', undefined, undefined, ''],
  ['5', undefined, undefined, '+15'],
  ['50', undefined, undefined, '+150'],
  ['506', undefined, undefined, '+1506'],
  ['506', undefined, undefined, '+1506'],
  ['5062', undefined, undefined, '+15062'],
  ['50623', undefined, undefined, '+150623'],
  ['506234', undefined, undefined, '+1506234'],
  ['5062345', undefined, undefined, '+15062345'],
  ['50623456', undefined, undefined, '+150623456'],
  ['506234567', undefined, undefined, '+1506234567'],
  ['5062345678', undefined, undefined, '+15062345678'],
  ['50623456789', undefined, undefined, '+150623456789'],
  ['506234567890', undefined, undefined, '+1506234567890'],

  // Formats national with default country
  ['', undefined, undefined, ''],
  ['5', undefined, undefined, '+15'],
  ['50', undefined, undefined, '+150'],
  ['506', undefined, undefined, '+1506'],
  ['5062', undefined, undefined, '+15062'],
  ['50623', undefined, undefined, '+150623'],
  ['506234', undefined, undefined, '+1506234'],
  ['5062345', undefined, undefined, '+15062345'],
  ['50623456', undefined, undefined, '+150623456'],
  ['506234567', undefined, undefined, '+1506234567'],
  ['5062345678', undefined, undefined, '+15062345678'],
  ['50623456789', undefined, undefined, '+150623456789'],
  ['506234567890', undefined, undefined, '+1506234567890'],

  // Formats national with provided country
  ['', undefined, 'NZ', ''],
  ['5', undefined, 'NZ', '+645'],
  ['50', undefined, 'NZ', '+6450'],
  ['506', undefined, 'NZ', '+64506'],
  ['5062', undefined, 'NZ', '+645062'],
  ['50623', undefined, 'NZ', '+6450623'],
  ['506234', undefined, 'NZ', '+64506234'],
  ['5062345', undefined, 'NZ', '+645062345'],
  ['50623456', undefined, 'NZ', '+6450623456'],
  ['506234567', undefined, 'NZ', '+64506234567'],
  ['5062345678', undefined, 'NZ', '+645062345678'],
  ['50623456789', undefined, 'NZ', '+6450623456789'],
  ['506234567890', undefined, 'NZ', '+64506234567890'],

  ['', 'e164', undefined, ''],
  ['+', 'e164', undefined, ''],
  ['+1', 'e164', undefined, '+1'],
  ['+15', 'e164', undefined, '+15'],
  ['+150', 'e164', undefined, '+150'],
  ['+1506', 'e164', undefined, '+1506'],
  ['+1506', 'e164', undefined, '+1506'],
  ['+15062', 'e164', undefined, '+15062'],
  ['+150623', 'e164', undefined, '+150623'],
  ['+1506234', 'e164', undefined, '+1506234'],
  ['+15062345', 'e164', undefined, '+15062345'],
  ['+150623456', 'e164', undefined, '+150623456'],
  ['+1506234567', 'e164', undefined, '+1506234567'],
  ['+15062345678', 'e164', undefined, '+15062345678'],
  ['+150623456789', 'e164', undefined, '+150623456789'],
  ['+1506234567890', 'e164', undefined, '+1506234567890'],

  ['', 'rfc3966', undefined, ''],
  ['+', 'rfc3966', undefined, ''],
  ['+1', 'rfc3966', undefined, 'tel:+1'],
  ['+15', 'rfc3966', undefined, 'tel:+1-5'],
  ['+150', 'rfc3966', undefined, 'tel:+1-50'],
  ['+1506', 'rfc3966', undefined, 'tel:+1-506'],
  ['+1506', 'rfc3966', undefined, 'tel:+1-506'],
  ['+15062', 'rfc3966', undefined, 'tel:+1-5062'],
  ['+150623', 'rfc3966', undefined, 'tel:+1-50623'],
  ['+1506234', 'rfc3966', undefined, 'tel:+1-506234'],
  ['+15062345', 'rfc3966', undefined, 'tel:+1-5062345'],
  ['+150623456', 'rfc3966', undefined, 'tel:+1-50623456'],
  ['+1506234567', 'rfc3966', undefined, 'tel:+1-506234567'],
  ['+15062345678', 'rfc3966', undefined, 'tel:+1-506-234-5678'],
  ['+150623456789', 'rfc3966', undefined, 'tel:+1-50623456789'],
  ['+1506234567890', 'rfc3966', undefined, 'tel:+1-506234567890'],

  ['', 'national', undefined, ''],
  ['+', 'national', undefined, ''],
  ['+1', 'national', undefined, ''],
  ['+15', 'national', undefined, '5'],
  ['+150', 'national', undefined, '50'],
  ['+1506', 'national', undefined, '506'],
  ['+15062', 'national', undefined, '5062'],
  ['+150623', 'national', undefined, '50623'],
  ['+1506234', 'national', undefined, '506234'],
  ['+15062345', 'national', undefined, '5062345'],
  ['+150623456', 'national', undefined, '50623456'],
  ['+1506234567', 'national', undefined, '506234567'],
  ['+15062345678', 'national', undefined, '506-234-5678'],
  ['+150623456789', 'national', undefined, '50623456789'],
  ['+1506234567890', 'national', undefined, '506234567890'],

  ['', 'international', undefined, ''],
  ['+', 'international', undefined, ''],
  ['+1', 'international', undefined, '+1'],
  ['+15', 'international', undefined, '+1 5'],
  ['+150', 'international', undefined, '+1 50'],
  ['+1506', 'international', undefined, '+1 506'],
  ['+15062', 'international', undefined, '+1 5062'],
  ['+150623', 'international', undefined, '+1 50623'],
  ['+1506234', 'international', undefined, '+1 506234'],
  ['+15062345', 'international', undefined, '+1 5062345'],
  ['+150623456', 'international', undefined, '+1 50623456'],
  ['+1506234567', 'international', undefined, '+1 506234567'],
  ['+15062345678', 'international', undefined, '+1 506-234-5678'],
  ['+150623456789', 'international', undefined, '+1 50623456789'],
  ['+1506234567890', 'international', undefined, '+1 506234567890'],
])('formatPhoneNumber(%p, %p): %p', (input, format, country, phone) => {
  expect(
    new PhoneService({ parsePhoneNumber, getAsYouType, getExample }).format(
      input,
      !format && !country ? undefined : { format, country },
    ),
  ).toBe(phone);
});

test.each([
  ['', 'unknown'],
  ['6', 'unknown'],
  ['61', 'too-short'],
  ['615-9', 'too-short'],
  ['615-99', 'too-short'],
  ['615-994', 'too-short'],
  ['615-994-3', 'invalid'],
  ['615-994-33', 'too-short'],
  ['615-994-330', 'too-short'],
  ['615-994-3300', 'is-possible'],
  ['615-994-33001', 'too-long'],
  ['1 6', 'unknown'],
  ['1 61', 'too-short'],
  ['1 615-9', 'too-short'],
  ['1 615-99', 'too-short'],
  ['1 615-994', 'invalid'],
  ['1 615-994-3', 'too-short'],
  ['1 615-994-33', 'too-short'],
  ['1 615-994-330', 'invalid'],
  ['1 615-994-3300', 'is-possible'],
  ['1 615-994-33001', 'too-long'],
  ['+1 6', 'unknown'],
  ['+1 61', 'too-short'],
  ['+1 615-9', 'too-short'],
  ['+1 615-99', 'too-short'],
  ['+1 615-994', 'too-short'],
  ['+1 615-994-3', 'invalid'],
  ['+1 615-994-33', 'too-short'],
  ['+1 615-994-330', 'too-short'],
  ['+1 615-994-3300', 'is-possible'],
  ['+1 615-994-33001', 'too-long'],

  ['3242225555', 'invalid'],
])('#checkPossibility(%p): %p', (input, expected) => {
  expect(
    new PhoneService({
      parsePhoneNumber,
      getAsYouType,
      getExample,
    }).checkPossibility(input),
  ).toBe(expected);
});

test.each<
  [
    input: unknown,
    rules: undefined | PhoneValidationRules,
    expectedMessage: string | undefined,
  ]
>([
  [' ', undefined, undefined],
  [null, undefined, undefined],
  [undefined, undefined, undefined],

  ['615-994-3300', undefined, undefined],
  ['+1 615-994-3300', undefined, undefined],

  [' ', { required: true }, 'This field is required'],
  [null, { required: true }, 'This field is required'],
  [undefined, { required: true }, 'This field is required'],
  [undefined, { required: true, requiredMessage: 'Required.' }, 'Required.'],

  [
    'Phone: (585) 617-5555 (Home) | (585) 489-6666 (Cell)',
    undefined,
    'Invalid phone number',
  ],
  ['+1', undefined, 'Invalid phone number'],
  ['+1', { invalidMessage: 'Invalid.' }, 'Invalid.'],

  ['615', undefined, 'Phone number is too short'],
  ['+1 615', undefined, 'Phone number is too short'],
  ['+1 615', { tooShortMessage: 'Too short.' }, 'Too short.'],

  ['615-994-3300 00', undefined, 'Phone number is too long'],
  ['+1 615-994-3300 00', undefined, 'Phone number is too long'],
  ['+1 615-994-3300 00', { tooLongMessage: 'Too long.' }, 'Too long.'],

  ['3242225555', undefined, 'Invalid phone number'],
])('#validate(%p, %j): %p', (input, rules, expected) => {
  expect(
    new PhoneService({ parsePhoneNumber, getAsYouType, getExample }).validate(
      input,
      rules,
    ),
  ).toBe(expected);
});
