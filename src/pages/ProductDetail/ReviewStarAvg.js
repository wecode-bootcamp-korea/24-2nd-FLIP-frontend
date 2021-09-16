import React from 'react';
import styled from 'styled-components';

const ReviewStarAvg = ({ review }) => {
  return (
    <Container>
      <BackgroundStar>
        <GrayStar>
          <i class="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i class="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i class="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i class="fas fa-star"></i>
        </GrayStar>
        <GrayStar>
          <i class="fas fa-star"></i>
        </GrayStar>
      </BackgroundStar>
      <ColorStar>
        {[...Array(review)].map((star, idx) => (
          <RedStar key={idx}>
            <i class="fas fa-star"></i>
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
