import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 16rem 0;
  background: ${({ sectionTheme, theme: { color } }) =>
    sectionTheme === 'dark' ? color.secondary : color.white};
  @media screen and (max-width: 768px) {
    padding: 8rem 0;
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
`;
export const SectionColumn = styled.div`
  width: 50%;
  padding: 0 1.6rem;
  margin-bottom: 1.6rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 6rem;
`;

export const Subtitle = styled.span`
  color: ${({ sectionTheme, theme: { color } }) =>
    sectionTheme === 'dark' ? color.grey : color.primary};
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Heading = styled.h1`
  color: ${({ sectionTheme, theme: { color } }) =>
    sectionTheme === 'dark' ? color.white : color.secondary};
  font-size: 4.8rem;
  margin-top: 1.4rem;
  line-height: 1.1;
  @media screen and (max-width: 768px) {
    font-size: 3.6rem;
  }
`;
export const Text = styled.p`
  color: ${({ sectionTheme, theme: { color } }) =>
    sectionTheme === 'dark' ? color.grey : color.black};
  margin-bottom: 2.4rem;
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
`;
