import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderFormField } from '../__testutils__/renderFormField';
import { FormikCheckboxField } from './FormikCheckboxField';

test('handles changes', async () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();
  const view = renderFormField(
    <FormikCheckboxField
      label="Agree"
      name="agree"
      onChange={handleChange}
      onBlur={handleBlur}
    />,
    { initialValues: { agree: true }, onSubmit: handleSubmit },
  );

  const field = screen.getByLabelText('Agree');

  userEvent.click(field);
  fireEvent.blur(field);

  expect(field).not.toBeChecked();
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleBlur).toHaveBeenCalledTimes(1);

  view.submitForm();

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  expect(handleSubmit).toHaveBeenLastCalledWith({ agree: false });
});

test('format and parse value', async () => {
  const handleSubmit = jest.fn();

  const view = renderFormField(
    <FormikCheckboxField
      label="Agree"
      name="agree"
      format={(_, checked) => !checked}
      parse={(_, checked) => !checked}
    />,
    { initialValues: { agree: true }, onSubmit: handleSubmit },
  );

  const field = screen.getByLabelText('Agree');

  expect(field).not.toBeChecked();

  userEvent.click(field);
  fireEvent.blur(field);

  expect(field).toBeChecked();

  view.submitForm();

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  expect(handleSubmit).toHaveBeenLastCalledWith({ agree: false });
});

test('format and parse value with enum', async () => {
  const handleSubmit = jest.fn();

  const view = renderFormField(
    <FormikCheckboxField
      name="status"
      label="Status"
      format={(value) => value === 'active'}
      parse={(_, checked) => (checked ? 'active' : 'inactive')}
    />,
    { initialValues: { status: 'active' }, onSubmit: handleSubmit },
  );

  const field = screen.getByLabelText('Status');

  expect(field).toBeChecked();

  for (const status of ['inactive', 'active']) {
    userEvent.click(field);
    fireEvent.blur(field);

    if (status === 'active') {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(field).toBeChecked();
    } else {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(field).not.toBeChecked();
    }

    view.submitForm();

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    expect(handleSubmit).toHaveBeenLastCalledWith({ status });
    handleSubmit.mockClear();
  }
});

test('validates field', async () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const handleBlur = jest.fn();
  renderFormField(
    <FormikCheckboxField
      label="Agree"
      name="agree"
      onChange={handleChange}
      onBlur={handleBlur}
      validate={(value) =>
        value === false ? 'Check agree before continue' : undefined
      }
    />,
    { initialValues: { agree: true }, onSubmit: handleSubmit },
  );

  const field = screen.getByLabelText('Agree');

  expect(field).toBeValid();

  userEvent.click(field);
  fireEvent.blur(field);

  await screen.findByText('Check agree before continue');
});
