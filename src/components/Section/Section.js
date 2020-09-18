import React from 'react';
import {
  SectionContainer,
  SectionRow,
  SectionColumn,
  Wrapper,
  Subtitle,
  Heading,
  Text,
  SectionImage,
} from './styled';
import { Container, Button } from '../../shared/components';

function Section({ sectionProps }) {
  const {
    theme,
    sectionImgSrc,
    subtitle,
    heading,
    text,
    buttonText,
    isButton,
    isReversed,
    altImageText,
  } = sectionProps;
  return (
    <SectionContainer sectionTheme={theme}>
      <Container>
        <SectionRow>
          {isReversed ? (
            <>
              <SectionColumn>
                <SectionImage src={sectionImgSrc} alt={altImageText} />
              </SectionColumn>
              <SectionColumn>
                <Wrapper>
                  <Subtitle sectionTheme={theme}>{subtitle}</Subtitle>
                  <Heading sectionTheme={theme}>{heading}</Heading>
                  <Text sectionTheme={theme}>{text}</Text>
                  {isButton ? <Button>{buttonText}</Button> : null}
                </Wrapper>
              </SectionColumn>
            </>
          ) : (
            <>
              <SectionColumn>
                <Wrapper>
                  <Subtitle sectionTheme={theme}>{subtitle}</Subtitle>
                  <Heading sectionTheme={theme}>{heading}</Heading>
                  <Text sectionTheme={theme}>{text}</Text>
                  {isButton ? <Button>{buttonText}</Button> : null}
                </Wrapper>
              </SectionColumn>
              <SectionColumn>
                <SectionImage src={sectionImgSrc} alt={altImageText} />
              </SectionColumn>
            </>
          )}
        </SectionRow>
      </Container>
    </SectionContainer>
  );
}

export default Section;
