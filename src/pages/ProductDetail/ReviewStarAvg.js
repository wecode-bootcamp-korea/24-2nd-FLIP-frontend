import React from 'react';
import styled from 'styled-components';

const ReviewStarAvg = ({ review }) => {
  console.log(review);
  return (
    <Container>
      <BackgroundStar>
        <GrayStar>
          <i className="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i className="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i className="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i className="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i className="fas fa-star"></i>
        </GrayStar>
      </BackgroundStar>
      <ColorStar>
        {[...Array(review && Math.floor(review))].map((star, idx) => (
          <RedStar key={idx}>
            <i className="fas fa-star"></i>
          </RedStar>
        ))}
      </ColorStar>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 5px;
`;

const BackgroundStar = styled.div`
  position: absolute;
  display: inline-block;
`;

const ColorStar = styled.div`
  position: absolute;
  display: inline-block;
`;

const GrayStar = styled.div`
  & i {
    color: grey;
  }
`;

const RedStar = styled.div`
  & i {
    color: red;
  }
`;

export default ReviewStarAvg;
