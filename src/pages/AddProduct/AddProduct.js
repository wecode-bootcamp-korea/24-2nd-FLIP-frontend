import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Postcode from './Postcode';

const AddProduct = () => {
  const [addAddress, setAddAddress] = useState('');
  const [productInfo, setProductInfo] = useState({
    title: 'dd',
    price: '100',
    sale_percent: '2',
    sub_category: '등산',
    description: '등산하자자자자',
    playing_location: '서울특별시 강원도',
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
    fetch('http://10.58.7.108:8080/products/host/1', {
      method: 'POST',
      // headers: {
      // Authorization:
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0._fleYhEIx5512GwejJ70cid7blXOsKEmcbf5zeHBHtA',
      // },
      body: JSON.stringify({
        title: 'dd',
        price: '100',
        sale_percent: '2',
        sub_category: '등산',
        description: '등산하자자자자',
        playing_location: '서울특별시 강원도',
        gather_location: '서울특별시 강원도',
      }),
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
          이미지
          <div>
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="image_url"
              multiple
              onChange={handleImg}
            ></input>
          </div>
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
