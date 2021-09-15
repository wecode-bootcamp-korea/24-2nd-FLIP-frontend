import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <ApplyMenu>
          <li>
            <a href="/">호스트 지원</a>
          </li>
          <li>
            <a href="/">단체신청</a>
          </li>
          <li>
            <a href="/">기업복지 신청</a>
          </li>
          <li>
            <a href="/">인재채용</a>
          </li>
        </ApplyMenu>

        <HappyCenter>
          <h3>고객센터</h3>
          <span>
            이메일 : <a href="/">cs@flip.com</a>
          </span>
          <span>
            고객센터 : <a href="/">112</a>
          </span>
          <span>업무시간 : 평일 10:00 - 17:00 (점심 : 12:00 - 13:00)</span>
        </HappyCenter>

        <Company>
          <h2>GalaxyFlip</h2>

          <span>(주)은하수접기 | 사업자 등록번호 : 17-822-324122</span>
          <span>통신판매업신고번호 : 2019-서울강남-02391</span>
          <span>대표 : 이재용 | 개인정보 관리 책임자 : 이재용</span>
          <span>서울시 강남구 테헤란로</span>
          <span>
            은하수 접기는 통신판매중개자도 아니고 거래당사자도 아니며 호스트가
            등록한 상품 정보 및 거래 모두 사실이 아니므로 일체의 책임을 지지
            않습니다.
          </span>

          <TermsList>
            <Term>
              <a href="/">이용약관</a>
            </Term>
            <Term>
              <a href="/">개인정보 처리방침</a>
            </Term>
            <Term>
              <a href="/">위치기반 서비스 이용약관</a>
            </Term>
          </TermsList>

          <AppDownBtn>앱 다운로드</AppDownBtn>

          <SnsIcon>
            <li>
              <a href="/">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-youtube-square" />
              </a>
            </li>
          </SnsIcon>
        </Company>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding-bottom: 92px;
  background-color: whitesmoke;
`;

const FooterContent = styled.div`
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const ApplyMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;

  li {
    padding-right: 30px;
    font-size: 1rem;
  }
`;

const HappyCenter = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 20px;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 0;
  }

  span {
    display: block;
    padding: 10px 0;
    font-size: 0.8rem;
  }
`;

const Company = styled.div`
  font-size: 0.8rem;

  h2 {
    font-size: 1rem;
    font-weight: bold;
    padding: 20px 0;
  }

  span {
    display: block;
    color: ${props => props.theme.grey};
    padding: 3px 0;
  }
`;

const TermsList = styled.ul`
  display: flex;
  padding: 15px 0;
`;

const Term = styled.li`
  padding-right: 10px;

  i {
    padding: 0 10px;
    font-size: 1rem;
  }
`;

const AppDownBtn = styled.button`
  width: 100%;
  margin: 5px 0;
  padding: 10px 0;
  color: white;
  background-color: #333333;
  border: none;
`;

const SnsIcon = styled.ul`
  display: flex;
  padding: 10px 0;

  i {
    font-size: 1.5rem;
    padding-right: 20px;
  }
`;
export default Footer;
