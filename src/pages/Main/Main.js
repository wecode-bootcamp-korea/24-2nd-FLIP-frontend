import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 768px;
  margin: 0 auto;
  border: 1px solid black;
`;

const Banner = styled.div`
  width: 100%;
  height: 310px;
`;

function Main() {
  return (
    <Content>
      <Banner></Banner>
    </Content>
  );
}

export default Main;
