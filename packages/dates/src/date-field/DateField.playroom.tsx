import { forwardRef, useState } from 'react';

import { DateString } from '../date-time-utils/DateTimeUtils';
import { DateField as SDDateField, DateFieldProps } from './DateField';

export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(
  ({ value, onChange, ...props }, ref) => {
    const [state, setState] = useState<DateString>();

    return (
      <SDDateField
        {...props}
        ref={ref}
        value={value || state}
        onChange={(date) => {
          onChange?.(date);
          setState(date.stringValue);
        }}
      />
    );
  },
);
