import React from 'react';
import { StyledBaseLayout, StyledContentArea, StyledHeaderArea } from '.';

export function BaseLayout({ header, content }) {
  return (
    <StyledBaseLayout>
      <StyledHeaderArea>{header}</StyledHeaderArea>
      <StyledContentArea>{content}</StyledContentArea>
    </StyledBaseLayout>
  );
}
