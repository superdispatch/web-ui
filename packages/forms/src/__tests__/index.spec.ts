import * as api from '..';

it('exposes public api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "FormikCheckboxField": React.forwardRef(FormikCheckboxField),
      "FormikCurrencyField": React.forwardRef(FormikCurrencyField),
      "FormikDateField": React.forwardRef(FormikDateField),
      "FormikEnhanced": [Function],
      "FormikMaxLengthTextField": React.forwardRef(FormikMaxLengthTextField),
      "FormikNumberField": React.forwardRef(FormikNumberField),
      "FormikPasswordField": React.forwardRef(FormikPasswordField),
      "FormikPhoneField": React.forwardRef(FormikPhoneField),
      "FormikRadioGroupField": React.forwardRef(FormikRadioGroupField),
      "FormikTextField": React.forwardRef(FormikTextField),
      "FormsProvider": [Function],
      "SuspendedFormikPhoneField": React.forwardRef(SuspendedFormikPhoneField),
      "useFormikEnhanced": [Function],
      "useFormsContext": [Function],
    }
  `);
});
