import React from 'react';
import styled from 'styled-components';

const ProductFloatContents = ({ product }) => {
  return (
    <Floatcontents>
      <Floatbox>
        <FloatSave>
          {product && product.is_like ? (
            <i className="fas fa-bookmark" />
          ) : (
            <i className="far fa-bookmark" />
          )}

          <span>{product && product.like_count}</span>
        </FloatSave>
        <FloatPayment>참여하기</FloatPayment>
      </Floatbox>
    </Floatcontents>
  );
};

const Floatcontents = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 12px 20px 24px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-color: white;
  z-index: 10000;
`;
const Floatbox = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  max-width: 768px;
`;
const FloatSave = styled.button`
  padding: 0px;
  margin-right: 20px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  border: none;
  background-color: white;
  i {
    font-size: 28px;
  }
  span {
    margin-top: -1px;
  }
`;
const FloatPayment = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0px 13px;
  background-color: rgb(0, 117, 239);
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  margin: 0px;
  outline: none;
  border: none;
`;

export default ProductFloatContents;
