import React from 'react';
import styled from 'styled-components';

function DetailExplanation() {
  return (
    <Ex>
      <span>오프라인 || Zone으로 만나요!</span>
    </Ex>
  );
}

const Ex = styled.div`
  height: 14px;
  margin-top: 12px;
  color: rgb(155, 155, 155);
  font-size: 10px;
  line-height: 14px;
  text-overflow: hidden;
`;

export default DetailExplanation;
