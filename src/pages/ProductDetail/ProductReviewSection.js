import React from 'react';
import ReviewStarAvg from './ReviewStarAvg';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductReviewSection = ({ review }) => {
  const showSlide =
    review.reviewer && review.reviewer.length > 2
      ? 3
      : review.reviewer && review.reviewer.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showSlide,
    slidesToScroll: 3,
  };
  console.log(review);

  return (
    <ReviewSection>
      {review.count === 0 ? (
        <ReviewPlaceholder>
          아직 후기가 없어요.
          <br />
          <ReviewText>
            첫 후기를 남기고 <Bold>1,000에너지</Bold> 받아가세요!
          </ReviewText>
        </ReviewPlaceholder>
      ) : (
        <>
          <ReviewSummary>
            <div>
              <ReviewStarAvg review={review && review.avg} />
              <div className="starInfo">
                <span>{review && Math.floor(Number(review.avg))}</span>
                <span className="span">•</span>
                <span className="span">{review && review.count}개 후기</span>
              </div>
            </div>
            <p>
              경험한 대원의
              {review && Math.round(review.perfect_rate * 100) / 100}%가 5점을
              줬어요!
            </p>
          </ReviewSummary>
          <ReviewComments>
            <Slider {...settings}>
              {review.reviewer &&
                review.reviewer.map((review, idx) => (
                  <ReviewCard>
                    <ReviewCardImg>
                      <img
                        key={idx}
                        alt="리뷰 이미지"
                        src={review.image[0]}
                      ></img>
                    </ReviewCardImg>
                    <ReivewCardComment>
                      <ReviewCardUser>
                        <ReviewCardUserImg>
                          <img
                            key={idx}
                            alt="유저 이미지"
                            src={review.profile}
                          ></img>
                        </ReviewCardUserImg>
                        <ReviewCardUserId>{review.user}</ReviewCardUserId>
                      </ReviewCardUser>
                      <ReviewCardText>{review.comment}</ReviewCardText>
                    </ReivewCardComment>
                  </ReviewCard>
                ))}
            </Slider>
          </ReviewComments>
        </>
      )}
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const ReviewPlaceholder = styled.div`
  position: relative;
  display: block;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.54px;
  text-align: center;
  padding: 48px 24px;
`;

const ReviewSummary = styled.div`
  padding: 32px 0px 24px;
  div {
    display: flex;
    align-items: center;
  }
  .span {
    color: rgb(170, 170, 170);
  }
  p {
    color: rgb(51, 51, 51);
    font-size: 18px;
    margin-top: 8px;
  }

  .starInfo {
    margin-left: 100px;
  }
`;

const ReviewComments = styled.div`
  padding-top: 24px;
  border-top: 1px solid rgb(219, 237, 255);
  border-bottom: 1px solid rgb(219, 237, 255);
  background-color: rgb(244, 250, 255);
  /* overflow: hidden; */
  margin-bottom: 56px;
  /* padding: 0px 18px; */
  .slick-next {
    right: 0px;
  }
  .slick-prev {
    left: 0px;
    z-index: 1;
  }
`;
const ReviewText = styled.p`
  font-size: 14px;
  color: rgb(151, 151, 151);
`;

const Bold = styled.span`
  font-weight: bold;
  color: rgb(51, 51, 51);
`;
const ReviewCard = styled.div`
  margin: 24px 6px 12px 6px;
  width: 232px;
`;
const ReviewCardImg = styled.div`
  border-radius: 3px;
  overflow: hidden;
  min-height: 232px;
  background-color: rgb(250, 250, 250);
  width: 232px;
  margin-bottom: 18px;
  img {
    width: 100%;
    height: 100%auto;
  }
`;
const ReivewCardComment = styled.div`
  width: 100%;
`;
const ReviewCardUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const ReviewCardUserImg = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const ReviewCardUserId = styled.div`
  margin-left: 9px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 1px;
`;
const ReviewCardText = styled.div`
  display: --webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: rgb(51, 51, 51);
  margin-bottom: 22px;
  word-break: break-all;
  font-size: 14px;
  margin-left: 8px;
  margin-right: 15px;
`;

export default ProductReviewSection;
