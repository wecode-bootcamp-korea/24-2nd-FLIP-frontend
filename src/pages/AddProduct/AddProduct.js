import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';
import Postcode from './Postcode';
import { API } from '../../config';

const AddProduct = () => {
  const [addAddress, setAddAddress] = useState('');
  const [productInfo, setProductInfo] = useState({
    title: '서핑가자',
    price: 1000,
    sale_percent: 10,
    sub_category: '서핑',
    description: '위서핑',
    playing_location: '서울시 강남구 테헤란로 427 (삼성동, 위워크타워)',
    gather_location: '서울시 강남구 테헤란로 427 (삼성동, 위워크타워)',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleCategory = e => {
    const { name, value } = e;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleAddress = e => {
    setProductInfo({ ...productInfo, playing_location: addAddress });
  };

  const handleImg = e => {
    const img = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < img.length; i++) {
      formData.append('img[' + i + ']', img[i]);
    }

    for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  };

  const callBack = e => {
    setAddAddress(e);
  };

  const handleClick = () => {
    fetch(`${API}/products/host/1`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('kakao-token'),
      },
      body: JSON.stringify(productInfo),
    }).then(response => response.json());
  };

  return (
    <>
      <AddHeader>플립 만들기</AddHeader>
      <LineWrapper>
        <Line>
          카테고리 선택
          <Select options={main}></Select>
          <div>
            <Select
              onChange={handleCategory}
              name="sub_category"
              options={sub}
            ></Select>
          </div>
        </Line>
        <Line>
          플립명
          <input onChange={handleInput} name="title" type="text"></input>
        </Line>
        <Line>
          캐치프라이즈
          <input onChange={handleInput} name="description" type="text"></input>
        </Line>
        <Line>
          가격
          <input onChange={handleInput} name="price" type="text"></input>
        </Line>
        <Line>
          할인율
          <input onChange={handleInput} name="sale_percent" type="text"></input>
        </Line>
        <Line>
          <Link to="/img">이미지 업로드</Link>
        </Line>
        <Line>
          진행장소
          <div>{addAddress}</div>
          <Postcode
            onChange={handleAddress}
            autoClose="true"
            parentCallback={callBack}
          ></Postcode>
        </Line>
        <button onClick={handleClick}>등록</button>
      </LineWrapper>
    </>
  );
};
const AddHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 1.5em 0;
`;

const LineWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  > * {
    width: 100%;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  > div {
    width: 150px;
  }
  > * {
    margin: 0 20px;
  }
`;

const main = [
  { value: 'sports', label: '스포츠' },
  { value: 'outdoors', label: '아웃도어' },
  { value: 'baking', label: '베이킹' },
];

const sub = [
  { name: 'sub_category', value: 'skydiving', label: '스카이다이빙' },
  { name: 'sub_category', value: 'yoga', label: '요가' },
  { name: 'sub_category', value: 'fitness', label: '헬스/PT/GX' },
  { name: 'sub_category', value: '등산', label: '등산' },
];

export default AddProduct;
