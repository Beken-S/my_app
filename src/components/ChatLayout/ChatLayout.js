import { StyledChatArea, StyledChatLayout, StyledChatListArea } from '.';

export function ChatLayout({ chatList, chat }) {
  return (
    <StyledChatLayout>
      <StyledChatListArea>{chatList}</StyledChatListArea>
      <StyledChatArea>{chat}</StyledChatArea>
    </StyledChatLayout>
  );
}
