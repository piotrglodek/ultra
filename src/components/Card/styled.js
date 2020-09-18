import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  padding: 2rem 3.2rem;
  border-radius: 0.4rem;
  background-color: ${({ theme: { color } }) => color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardColumn = styled.div`
  width: 33%;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const CardImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 1.4rem;
`;

export const CardTitle = styled.h4`
  color: ${({ theme: { color } }) => color.white};
  font-size: 2.4rem;
  margin: 0;
`;

export const CardCost = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: 3.6rem;
  margin: 1.4rem 0;
`;

export const CardCostTitle = styled.p`
  font-size: 1.6rem;
  color: ${({ theme: { color } }) => color.white};
`;

export const CardList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 1.4rem 0;
`;

export const CardItem = styled.li`
  margin-bottom: 1rem;
  color: ${({ theme: { color } }) => color.primary};
`;
