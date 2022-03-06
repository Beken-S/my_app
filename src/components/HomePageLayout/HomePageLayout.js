import { StyledHomePageLayout, StyledDescriptionArea, StyledFormArea } from '.';

export function HomePageLayout({ description, form }) {
  return (
    <StyledHomePageLayout>
      <StyledDescriptionArea>
        {description && description}
      </StyledDescriptionArea>
      <StyledFormArea>{form}</StyledFormArea>
    </StyledHomePageLayout>
  );
}
