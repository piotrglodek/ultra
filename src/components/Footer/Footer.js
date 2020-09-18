import React from 'react';
import { Container } from '../../shared/components';
import {
  FooterWrapper,
  FooterRow,
  FooterColumn,
  FooterColumnTitle,
  FooterList,
  FooterItem,
  FooterLink,
} from './styled';

const footerData = [
  {
    columnTitle: 'About us',
    links: [
      { text: 'How it works', path: '/' },
      { text: 'Testimonials', path: '/' },
      { text: 'Careers', path: '/' },
      { text: 'Terms of Service', path: '/' },
    ],
  },
  {
    columnTitle: 'Contact Us',
    links: [
      { text: 'Contact', path: '/' },
      { text: 'Support', path: '/' },
      { text: 'Sponsorships', path: '/' },
    ],
  },
  {
    columnTitle: 'Social media',
    links: [
      { text: 'Instagram', path: '/' },
      { text: 'Facebook', path: '/' },
      { text: 'Twitter', path: '/' },
      { text: 'Youtube', path: '/' },
    ],
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterRow>
          {footerData.map((item) => {
            const { columnTitle, links } = item;
            return (
              <FooterColumn key={columnTitle}>
                <FooterColumnTitle>{columnTitle}</FooterColumnTitle>
                <FooterList>
                  {links.map((link) => {
                    const { text, path } = link;
                    return (
                      <React.Fragment key={text}>
                        <FooterItem>
                          <FooterLink to={path}>{text}</FooterLink>
                        </FooterItem>
                      </React.Fragment>
                    );
                  })}
                </FooterList>
              </FooterColumn>
            );
          })}
        </FooterRow>
        ULTRA &copy; 2020
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
