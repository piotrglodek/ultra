import React from 'react';
import { Container, Button } from '../../shared/components';
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardCost,
  CardCostTitle,
  CardRow,
  CardColumn,
  CardList,
  CardItem,
  CardContainer,
} from './styled';

function Card({ cardsData }) {
  return (
    <CardWrapper>
      <Container>
        <CardRow>
          {cardsData.map((card) => {
            const {
              cardImgSrc,
              cardImgAlt,
              cardTitle,
              cardCost,
              cardCostTitle,
              buttonText,
              pros,
            } = card;
            return (
              <React.Fragment key={cardTitle}>
                <CardColumn>
                  <CardContainer>
                    <CardImage src={cardImgSrc} alt={cardImgAlt} />
                    <CardTitle>{cardTitle}</CardTitle>
                    <CardCost>${cardCost}</CardCost>
                    <CardCostTitle>{cardCostTitle}</CardCostTitle>
                    <CardList>
                      {pros.map((item) => (
                        <CardItem key={item}>{item}</CardItem>
                      ))}
                    </CardList>
                    <Button>{buttonText}</Button>
                  </CardContainer>
                </CardColumn>
              </React.Fragment>
            );
          })}
        </CardRow>
      </Container>
    </CardWrapper>
  );
}

export default Card;
