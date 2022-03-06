import {
  SendMessageButton,
  StyledSendMessageFormControl,
  StyledSendMessageTextField,
} from '.';

export function SendMessageFormBody({ children }) {
  return (
    <StyledSendMessageFormControl>{children}</StyledSendMessageFormControl>
  );
}

SendMessageFormBody.TextField = StyledSendMessageTextField;
SendMessageFormBody.Button = SendMessageButton;
