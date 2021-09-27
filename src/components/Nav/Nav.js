import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

function Nav() {
  const [isFold, setIsFold] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [bank_name, setBank] = useState('');
  const [account_number, setAccount] = useState('');

  const clickHandler = () => {
    setIsFold(!isFold);
  };

  const clickHostApply = () => {
    setIsModal(!isModal);
  };

  const selectBank = e => {
    setBank(e.target.value);
  };

  const accountInfo = e => {
    setAccount(e.target.value);
  };

  const applyHost = e => {
    fetch('http://10.58.5.187:8000/users/bank_account/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account_holder: 'jun',
        bank_name: bank_name,
        account_number: account_number,
      }),
    }).then(response => response.json());

    setIsModal(!isModal);
  };

  return (
    <>
      <SubNavWrapper>
        <SubNav>
          <div>
            <MenuItem onClick={clickHostApply}>호스트 지원</MenuItem>
          </div>
          <UserMenus>
            <UserMenu>
              <MenuItem>회원가입</MenuItem>
            </UserMenu>
            <UserMenu>
              <MenuItem>로그인</MenuItem>
            </UserMenu>
            <UserMenu>
              <MenuItem>자주 묻는 </MenuItem>질문
            </UserMenu>
            <UserMenu>
              <MenuItem>공지사항</MenuItem>
            </UserMenu>
          </UserMenus>
        </SubNav>
      </SubNavWrapper>
      <Navbar>
        <MainNav>
          <Category
            onClick={clickHandler}
            onMouseLeave={() => {
              setIsFold(false);
            }}
          >
            <FaBars />
            <span>카테고리</span>
            <InnerCategory
              isFold={isFold}
              onMouseLeave={() => {
                setIsFold(false);
              }}
            >
              <li>
                <a href="/">서핑</a>
              </li>
              <li>
                <a href="/">축구</a>
              </li>
              <li>
                <a href="/">공예DIY</a>
              </li>
              <li>
                <a href="/">스노우보드</a>
              </li>
              <li>
                <a href="/">서핑</a>
              </li>
            </InnerCategory>
          </Category>
          <SearchBarWrapper>
            <Line />
            <Logo src="/image/logo.png" />
            <InputWrapper>
              <i className="fas fa-search" />
              <SearchBar placeholder="검색어를 입력해주세요" />
            </InputWrapper>

            <NavBtn>
              <i className="far fa-plus-square" />
            </NavBtn>
            <NavBtn>
              <i className="far fa-user-circle" />
            </NavBtn>
          </SearchBarWrapper>
        </MainNav>

        <HostModal isModal={isModal}>
          <ModalWrapper>
            <img src="/image/logo.png" alt="logo" />
            <SelectBank onChange={selectBank}>
              <option value="">은행 선택</option>
              <optgroup label="은행">
                <option value="국민은행">국민은행</option>
                <option value="우리은행">우리은행</option>
                <option value="신한은행">신한은행</option>
                <option value="농협은행">농협은행</option>
                <option value="기업은행">기업은행</option>
                <option value="광주은행">광주은행</option>
                <option value="BNK은행">BNK은행</option>
                <option value="전북은행">전북은행</option>
              </optgroup>
              <optgroup label="증권">
                <option value="KB증권">KB증권</option>
                <option value="현대차증권">현대차증권</option>
                <option value="미래에셋대우">미래에셋대우</option>
                <option value="키움증권">키움증권</option>
                <option value="상상인증권">상상인증권</option>
                <option value="NH증권">NH증권</option>
                <option value="삼성증권">삼성증권</option>
                <option value="대신증권">대신증권</option>
              </optgroup>
            </SelectBank>
            <EmailInput
              onChange={accountInfo}
              placeholder="계좌번호를 입력해주세요"
            ></EmailInput>
            <button onClick={applyHost}>호스트 지원</button>
          </ModalWrapper>
        </HostModal>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const SubNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: whitesmoke;
  border: none;
`;

const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  max-width: 768px;
  padding: 10px;
  color: ${props => props.theme.grey};
  background-color: whitesmoke;
  font-size: 0.6rem;
`;

const UserMenus = styled.ul`
  display: flex;
`;

const UserMenu = styled.li`
  padding: 0 0.5em;
`;

const MenuItem = styled.a`
  cursor: pointer;
`;

const MainNav = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

const Category = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4em;
  cursor: pointer;

  div {
    width: 35px;
    background-color: red;
    height: 35px;
  }

  svg {
    font-size: 1.3rem;
  }

  span {
    font-size: 0.7rem;
    margin-top: 0.5em;
  }
`;

const InnerCategory = styled.ul`
  display: ${props => (props.isFold === true ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  border: 1px solid whitesmoke;
  white-space: nowrap;
  background-color: white;

  li {
    font-size: 0.8rem;
    padding: 10px;
  }

  li:hover {
    background-color: whitesmoke;
  }
`;

const Line = styled.span`
  display: inline-block;
  width: 0.05rem;
  height: 2.5rem;
  margin: 0.1em 1em;
  background-color: ${props => props.theme.grey};
  opacity: 0.5;
`;

const Logo = styled.img`
  width: 100px;
  height: 35px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 100px;
  margin: 0 1em;

  i {
    position: absolute;
    left: 0.5em;
    top: 0.4em;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding-left: 2em;
  background-color: whitesmoke;
  border: none;
  border-radius: 1em;
  font-size: 1rem;

  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid ${props => props.theme.starBlue};
  }
`;

const NavBtn = styled.button`
  margin: 0 0.5em;
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
`;

const HostModal = styled.div`
  position: fixed;
  display: ${props => (props.isModal === true ? 'block' : 'none')};
  width: 50vh;
  height: 50vh;
  top: 25%;
  background-color: white;
  border: 1px solid ${props => props.theme.grey};
  border-radius: 50px;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin: 10px 0;
    font-size: 20em;
  }

  span {
    display: block;
    margin: 10px 0;
    color: ${props => props.theme.logoBlue};
  }

  button {
    margin: 10px 0;
    padding: 10px;
    border-radius: 30px;
    border-style: none;
    background-color: ${props => props.theme.logoBlue};
    color: white;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SelectBank = styled.select`
  display: block;
  width: 80%;
  margin: 10px 10px;
  padding: 0 10px;
  text-align: center;
`;

const EmailInput = styled.input`
  display: block;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.grey};
  outline: none;

  ::placeholder {
    color: ${props => props.theme.grey};
  }
`;

export default Nav;
