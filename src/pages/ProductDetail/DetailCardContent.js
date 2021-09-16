import React, { useState } from 'react';
import styled from 'styled-components';
import DetailStarImg from './DetailStarImg';
import DetailExplanation from './DetailExplanation';

export default function DetailCardContent({ card }) {
  const [bookMark, setBookmark] = useState(false);

  return (
    <Wrapper>
      <ImgContainer>
        <IconWrapper>
          {/* <Bookmark onClick={() => setBookmark(!bookMark)}>
            <i class={`${bookMark ? 'fas' : 'far'} fa-bookmark`} />
          </Bookmark> */}
        </IconWrapper>
        <ProductImg src={card.image_url[0]} />
      </ImgContainer>

      <DetailExplanation></DetailExplanation>

      <Desc>
        <span>{card.title}</span>
      </Desc>

      <Price>
        <span>{card.price.toLocaleString()}원</span>
      </Price>

      <RatingSection>
        <DetailStarImg alt="rating-star" />
        <span>{card.rating}</span>
      </RatingSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-right: 15px;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  box-sizing: inherit;
  position: relative;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
`;

const Desc = styled.div`
  height: auto;
  max-height: 36px;
  margin-top: 6px;
  font-size: 12px;
  word-break: keep-all;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`;

const Price = styled.div`
  height: 14px;
  margin-top: 12px;
  line-height: 14px;
  font-weight: 900;
`;

const RatingSection = styled.div`
  display: flex;
  margin-top: 12px;
`;

const Bookmark = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 167px;
  height: 18px;
  margin-top: 3px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
`;