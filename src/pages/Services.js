import React from 'react';
import { Card } from '../components';
import styled from 'styled-components';
// icons
import ironOreSrc from '../assets/iron_ore.png';
import silverOreSrc from '../assets/silver_ore.png';
import goldOreSrc from '../assets/gold_ore.png';

const cardsData = [
  {
    cardImgSrc: ironOreSrc,
    cardImgAlt: 'Iron Ore by iconIcons8',
    cardTitle: 'Start Pack',
    cardCost: '112',
    cardCostTitle: 'per month',
    buttonText: 'Choose Plan',
    pros: ['100 New Users', '$10,000 Budget', 'Retargeting analytics'],
  },
  {
    cardImgSrc: silverOreSrc,
    cardImgAlt: 'Silver Ore by iconIcons8',
    cardTitle: 'Gold Rush',
    cardCost: '328',
    cardCostTitle: 'per month',
    buttonText: 'Choose Plan',
    pros: ['1000 New Users', '$50,000 Budget', 'Lead Gen Analytics'],
  },
  {
    cardImgSrc: goldOreSrc,
    cardImgAlt: 'Gold Ore by iconIcons8',
    cardTitle: 'Diamond Kings',
    cardCost: '946',
    cardCostTitle: 'per month',
    buttonText: 'Choose Plan',
    pros: ['Unlimited Users', 'Unlimited Budget', '24/7 Support'],
  },
];

const ServicesWrapper = styled.div`
  padding: 8rem 0;
  background-color: ${({ theme: { color } }) => color.white};
`;

const Heading = styled.h1`
  color: ${({ theme: { color } }) => color.secondary};
  font-size: 4.8rem;
  margin-top: 1.4rem;
  line-height: 1.1;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 3.6rem;
  }
`;

function Services() {
  return (
    <ServicesWrapper>
      <Heading>Services</Heading>
      <Card cardsData={cardsData} />
    </ServicesWrapper>
  );
}

export default Services;
