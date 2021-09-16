import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import CategoryList from './CategoryList/CategoryList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Main() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const bannerArr = [
    {
      src: 'https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1860x744%20(24)_6139c371f7a2e8c7bb876bd3fbd7a3d2f6dd7dcae4fa5f9408624b4fb54cd5b7',
    },
    {
      src: 'https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1860x744_dcb0317d04782c9f586d16b8147b538798860ae75e227680aed3d5d5fe964b3d',
    },
    {
      src: 'https://res.cloudinary.com/frientrip/image/upload/ar_5:2,c_fill,dpr_2,f_auto,w_930/Web_%EB%A9%94%EC%9D%B8_1860x744_dcb0317d04782c9f586d16b8147b538798860ae75e227680aed3d5d5fe964b3d',
    },
  ];
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch('./data/categoryIcons.json')
      .then(res => res.json())
      .then(data => setCategoryData(data.main_category_info));
  }, []);

  return (
    <Content>
      <Banner>
        <Slider {...settings}>
          {bannerArr.map(item => {
            return <img src={item.src} alt="배너" />;
          })}
        </Slider>
      </Banner>
      <CategoryIconList>
        {categoryData &&
          categoryData.map((item, idx) => (
            <CategoryList key={idx} categoryInfo={item} />
          ))}
      </CategoryIconList>
      <CardHeader>
        <span className="bigHeader">주간베스트</span>
        <span>전체보기</span>
      </CardHeader>
      <Card></Card>
    </Content>
  );
}

const Content = styled.div`
  width: 768px;
  margin: 0 auto;
`;

const Banner = styled.div`
  width: 100%;
  height: 310px;

  .slick-prev::before,
  .slick-next::before {
    color: ${props => props.theme.grey};
  }

  .slick-prev {
    z-index: 1;
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }

  .slick-dots {
    bottom: 10px;
  }

  img {
    width: 100%;
  }
`;

const CategoryIconList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    span {
      padding: 10px;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  padding-bottom: 20px;

  .bigHeader {
    font-size: 1.5rem;
  }

  span {
    font-weight: bold;
  }
`;

export default Main;
