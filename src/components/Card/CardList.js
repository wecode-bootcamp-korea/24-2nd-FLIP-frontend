import Card from './Card';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function App() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch('/data/CardMockData.json')
      .then(res => res.json())
      .then(res => setCard(res.Result));
  }, []);

  return (
    <Container>
      {cards &&
        cards.map((card, idx) => {
          return <Card key={idx} card={card} />;
        })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;
