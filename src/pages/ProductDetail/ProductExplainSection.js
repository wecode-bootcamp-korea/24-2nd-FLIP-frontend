import React from 'react';
import styled from 'styled-components';
import GatherMap from './GatherMap';
import LocationMap from './LocationMap';

const ProductExplainSection = ({ location, product }) => {
  return (
    <ExplainSection>
      <ExplainHead>
        <ExplainTitle>프립 소개</ExplainTitle>
      </ExplainHead>
      <Explaincontents>
        {product.image &&
          product.image.map((img, idx) => (
            <p>
              <img key={idx} alt="상품설명" src={img} />
            </p>
          ))}
      </Explaincontents>
      <ExplainDescpription>
        <div>
          <DescriptionTitle>포함 사항</DescriptionTitle>
          <DescriptionDetail>
            클래스에 필요한 모든 물품은 제공됩니다.
            <br />
            강습비, 재료비 전부 포함 되어 있습니다.
          </DescriptionDetail>
        </div>
        <div>
          <DescriptionTitle>유의사항</DescriptionTitle>
          <DescriptionDetail>
            구매 시 호스트 연락처를 카톡 혹은 문자로 보내드립니다. <br />
            호스트 연락처로 진행가능한 날짜를 예약 바랍니다. <br />
            예약 확정 시 호스트가 출석체크를 진행합니다.
          </DescriptionDetail>
        </div>
        <div>
          <DescriptionTitle>진행 장소</DescriptionTitle>
          <DescriptionDetail>
            <LocationMap location={location.location} />
          </DescriptionDetail>
        </div>
        <div>
          <DescriptionTitle>모이는 장소</DescriptionTitle>
          <DescriptionDetail>
            <GatherMap location={location.gather} />
          </DescriptionDetail>
        </div>
      </ExplainDescpription>
    </ExplainSection>
  );
};

const ExplainSection = styled.div`
  width: 100%;
  padding-bottom: 24px;
  line-height: 1.8;
  font-size: 14px;
`;

const ExplainHead = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px;
`;
const ExplainTitle = styled.h4`
  margin: 0px;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
`;
const Explaincontents = styled.div`
  padding: 0 20px;
  margin: 0;
  p {
    text-align: center;
  }
  & img {
    width: 100%;
    max-width: 100%;
  }
`;
const ExplainDescpription = styled.div`
  padding-bottom: 24px;
  line-height: 1.8;
`;
const DescriptionTitle = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0;
  line-height: 22px;
  font-size: 18px;
  font-weight: bold;
`;
const DescriptionDetail = styled.div`
  padding: 0 20px;
  font-size: 14px;
  line-height: 1.8;
`;

export default ProductExplainSection;
