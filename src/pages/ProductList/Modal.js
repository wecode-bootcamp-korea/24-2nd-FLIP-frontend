import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { Slider } from '@material-ui/core';

const fifty = 500000;

const FILTER_BTN_DATA = [
  {
    id: 1,
    filter: 'rating_count',
    text: '평점 낮은순',
  },
  {
    id: 2,
    filter: '-rating_count',
    text: '평점 높은순',
  },

  {
    id: 3,
    filter: '-price',
    text: '가격 높은순',
  },
  {
    id: 4,
    filter: 'price',
    text: '가격 낮은순',
  },
];

function Modal({ open, onClose, sort, setSort }) {
  const [val, setVal] = useState([0, 500000]);
  const updateRange = (e, data) => {
    setVal(data);
  };
  if (!open) return null;

  console.log(sort);

  return ReactDom.createPortal(
    <>
      <OverlayStyles />
      <ModalWrapper>
        <ModalStyles>
          <ModalHeader>
            <div>필터</div>
            <div>
              <i className="fas fa-times" onClick={onClose}></i>
            </div>
          </ModalHeader>
          <div>
            {FILTER_BTN_DATA.map(btn => {
              return (
                <ModalSection key={btn.id}>
                  <div className="inner-modal-section">
                    <Label>
                      {btn.text}
                      <input
                        type="radio"
                        name="filter"
                        label={btn.filter}
                        onClick={() => setSort(btn.filter)}
                      />
                    </Label>
                  </div>
                </ModalSection>
              );
            })}

            <div>
              <div>
                <PriceRange>
                  가격 {val[0]} ~ {val[1]}원
                </PriceRange>
              </div>
              <Slider value={val} onChange={updateRange} max={fifty} />
              <PriceRangeBelow>
                <span>0원</span>
                <span>300,000원 이상</span>
              </PriceRangeBelow>
            </div>
          </div>
          <BtnSection>
            <ApplyBtn onClick={onClose}>적용하기</ApplyBtn>
          </BtnSection>
        </ModalStyles>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
}

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalStyles = styled.div`
  max-width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 0px 18px;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 18px;
  margin: 20px 0;
`;

const ModalSection = styled.div`
  padding-bottom: 20px;
`;

const PriceRange = styled.span`
  color: rgb(51, 151, 255);
  font-weight: normal;
  margin-left: 10px;
`;

const PriceRangeBelow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgb(155, 155, 155);
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

const BtnSection = styled.div`
  padding: 20px;
`;

const ApplyBtn = styled.button`
  width: 280px;
  height: 50px;
  line-height: 13px;
  padding: 20px;
  background-color: rgb(51, 151, 255);
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

export default Modal;
