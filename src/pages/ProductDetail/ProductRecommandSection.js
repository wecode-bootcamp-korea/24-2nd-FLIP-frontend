import React from 'react';
import styled from 'styled-components';
import DetailCard from './DetailCard';

const ProductRecommandSection = () => {
  return (
    <RecommandSection>
      <RecommandHeader>이런 플립은 어때요?</RecommandHeader>
      <RecommandProducts>
        <DetailCard />
      </RecommandProducts>
    </RecommandSection>
  );
};

const RecommandSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;

  margin: 0 auto 30px;
  padding-top: 30px;
`;
const RecommandHeader = styled.header`
  padding: 0px 20px;
  display: flex;
  /* justify-content: space-between; */
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const RecommandProducts = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  overflow: auto;
`;
export default ProductRecommandSection;
