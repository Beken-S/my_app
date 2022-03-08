import { useCallback } from 'react';
import {
  FormProvider,
  FormTitle,
  FormPasswordField,
  StyledForm,
  StyledFormButton,
  StyledFormTextField,
} from '.';

export function ChatForm({ children, onSubmit, value, ...props }) {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(value);
    },
    [value, onSubmit]
  );

  return (
    <FormProvider value={{ handleSubmit }}>
      <StyledForm {...props} onSubmit={handleSubmit}>
        {children}
      </StyledForm>
    </FormProvider>
  );
}

ChatForm.Title = FormTitle;
ChatForm.TextField = StyledFormTextField;
ChatForm.PasswordField = FormPasswordField;
ChatForm.Button = StyledFormButton;
