import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getFetchAddMessage } from '../../store';
import { SendMessageFormBody, StyledSendMessageForm } from '.';

export function SendMessageForm({ chatId, userId, username }) {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (value) => {
      if (value !== '') {
        const message = {
          chatId,
          authorUid: userId,
          author: username,
          text: value,
        };
        dispatch(getFetchAddMessage(message));
        setValue('');
        inputRef.current?.focus();
      }
    },
    [chatId, userId, username, dispatch]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [chatId]);

  return (
    <StyledSendMessageForm onSubmit={handleSubmit} value={value}>
      <SendMessageFormBody>
        <SendMessageFormBody.TextField
          inputRef={inputRef}
          value={value}
          onChange={handleChange}
        />
        <SendMessageFormBody.Button />
      </SendMessageFormBody>
    </StyledSendMessageForm>
  );
}
