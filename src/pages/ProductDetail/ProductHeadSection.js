import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductHeadSection = ({ product }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <HeadSection>
      <HeadImg className="wrapper">
        <Slider {...settings} className="imgSlider">
          {product.image &&
            product.image.map((image, idx) => (
              <div>
                <img key={idx} alt="상품 사진" src={image} />
              </div>
            ))}
        </Slider>
      </HeadImg>
      <HeadInfo>
        <InfoWrap>
          <InfoTitle>{product && product.title}</InfoTitle>
          <InfoPrice>
            {product.discount_percent !== 0 && (
              <PricePercent>
                {product && product.discount_percent}%
              </PricePercent>
            )}

            <PriceDiscount>
              {product.price && product.discounted_price.toLocaleString()}원
            </PriceDiscount>

            {product.discount_percent !== 0 && (
              <PriceOriginal>
                {product.price && product.price.toLocaleString()}원
              </PriceOriginal>
            )}
          </InfoPrice>
        </InfoWrap>
        {product.user && (
          <InfoHost>
            <HostImage>
              <HostImg alt="호스트 이미지" src={product.user.image} />
            </HostImage>
            <HostContent>
              <HostId>{product.user.name}</HostId>
              <HostDetail>
                프립 {product.user.product_count}
                <span>|</span>
                후기 {product.user.review_count}
              </HostDetail>
            </HostContent>
          </InfoHost>
        )}
      </HeadInfo>
    </HeadSection>
  );
};

const HeadSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const HeadImg = styled.div`
  display: flex;
  width: 50%;
  float: left;
  max-width: 375px;
  max-height: 375px;
  text-align: center;
  margin-right: 10px;

  .imgSlider {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    .slick-dots {
      position: absolute;
      bottom: 10px;
    }

    .slick-next {
      /* background-color: red; */
      right: 0;
    }

    .slick-prev {
      /* background-color: red; */
      z-index: 1;
      left: 0;
    }
  }
`;

const HeadInfo = styled.div`
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 375px;
  justify-content: space-between;
`;
const InfoWrap = styled.div`
  height: 100%;
  position: relative;
  padding: 0px 0px 12px;
`;
const InfoTitle = styled.div`
  width: 100%;
  min-width: 0px;
  font-size: 19px;
  line-height: 1.8;
`;
const InfoPrice = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.8;
`;
const PricePercent = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.72px;
  color: rgb(255, 63, 51);
  margin-right: 12px;
`;
const PriceDiscount = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.72px;
  color: rgb(51, 51, 51);
  margin-right: 8px;
`;
const PriceOriginal = styled.div`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0px.48px;
  text-decoration: line-through;
  color: rgb(204, 204, 204);
`;
const InfoHost = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  padding: 6px 12px 0 12px;
  font-size: 14px;
  line-height: 1.8;
`;
const HostImage = styled.div`
  margin-right: 20px;
  overflow: hidden;
  width: 56px;
  height: 56px;
  min-width: 56px;
`;

const HostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const HostContent = styled.div`
  width: 100%;
`;
const HostId = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 212px;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: -0.54px;
  color: rgb(51, 51, 51);
`;
const HostDetail = styled.span`
  margin-top: 2px;
  color: rgb(170, 170, 170);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0px.36px;

  span {
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export default ProductHeadSection;
