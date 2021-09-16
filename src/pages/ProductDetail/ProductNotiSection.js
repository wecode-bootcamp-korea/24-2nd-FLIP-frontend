import React from 'react';
import styled from 'styled-components';

const ProductNotiSection = () => {
  return (
    <NotiSection>
      <NotiContent>
        <NotiTitle>
          <NotiTitleImg />
        </NotiTitle>
        <NotiFaq>
          <NotiQnA>
            <NotiSentence></NotiSentence>
          </NotiQnA>
        </NotiFaq>
      </NotiContent>
    </NotiSection>
  );
};

const NotiSection = styled.div`
  width: 100%;
`;
const NotiContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px;
  color: black;
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const NotiTitle = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 22px;
  cursor: pointer;
  text-align: left;
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
`;
const NotiTitleImg = styled.div`
  display: inline-block;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 16px;
  right: 0px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NotiFaq = styled.div`
  display: block;
  overflow: hidden auto;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;
const NotiQnA = styled.div`
  margin-bottom: 10px;
`;
const NotiSentence = styled.div`
  margin-bottom: 10px;
  display: flex;
  img {
    flex: 0 0 auto;
    margin-top: 2px;
    margin-right: 12px;
    width: 18px;
    height: 18px;
  }
`;

export default ProductNotiSection;
