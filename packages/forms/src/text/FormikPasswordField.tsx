import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useRef,
  useState,
} from 'react';
import { FormikTextField, FormikTextFieldProps } from './FormikTextField';

export const FormikPasswordField: ForwardRefExoticComponent<FormikTextFieldProps> =
  forwardRef(({ name, ...props }) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <FormikTextField
        {...props}
        name={name}
        validate={(value) => (value ? undefined : 'Please enter password')}
        type={isPasswordVisible ? 'text' : 'password'}
        onBlur={() => {
          setIsPasswordVisible(false);
        }}
        inputRef={passwordRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  passwordRef.current?.focus();
                  setIsPasswordVisible(!isPasswordVisible);
                }}
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  });
