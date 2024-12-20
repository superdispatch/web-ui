import { PhoneField } from './PhoneField.playroom';

export default { title: 'Phones/PhoneField', component: PhoneField };

export const basic = () => <PhoneField />;
export const validation = () => <PhoneField value="+1 201555123" />;
export const disabled = () => (
  <PhoneField value="+1 201555123" disabled={true} />
);
