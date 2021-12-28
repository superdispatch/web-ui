import { RadioField } from '@superdispatch/ui';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderFormField } from '../__testutils__/renderFormField';
import { FormikRadioGroupField } from './FormikRadioGroupField';

test('changes', async () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const view = renderFormField(
    <FormikRadioGroupField
      name="color"
      label="Color"
      onBlur={onBlur}
      onChange={onChange}
    >
      <RadioField label="Red" value="red" />
      <RadioField label="Green" value="green" />
    </FormikRadioGroupField>,
    {
      onSubmit,
      initialValues: { color: '' },
    },
  );

  const red = screen.getByLabelText('Red');

  userEvent.click(red);
  fireEvent.blur(red);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onBlur).toHaveBeenCalledTimes(1);

  view.submitForm();

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(onSubmit).toHaveBeenLastCalledWith({ color: 'red' });
});

test('errors', async () => {
  const onSubmit = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();
  const view = renderFormField(
    <FormikRadioGroupField
      name="color"
      label="Color"
      onBlur={handleBlur}
      onChange={handleChange}
      validate={(value) => (value === 'red' ? 'No' : undefined)}
    >
      <RadioField label="Red" value="red" />
      <RadioField label="Green" value="green" />
    </FormikRadioGroupField>,
    {
      onSubmit,
      initialValues: { color: '' },
    },
  );

  const red = screen.getByLabelText('Red');

  userEvent.click(red);
  fireEvent.blur(red);

  view.submitForm();

  expect(onSubmit).not.toHaveBeenCalled();

  await screen.findByText('No');
});
