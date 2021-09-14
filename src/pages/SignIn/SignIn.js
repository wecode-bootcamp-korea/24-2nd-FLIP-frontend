import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const { Kakao } = window;

  const kakaoLoginClick = () => {
    Kakao.Auth.login({
      success: function (success) {
        fetch('http://10.58.5.148:8000/users/signin?access_token=', {
          method: 'POST',
          body: JSON.stringify({
            access_token: success.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('kakao-token', res.TOKEN);
            if (res.TOKEN) {
              alert('Flip에 오신걸 환엽합니다!');
              history.push('/');
            }
          });
      },
    });
  };

  return (
    <Container>
      <Login>로그인 및 회원가입</Login>
      <KakaoBtn
        alt="kakao"
        src="image/kakao_login_medium_narrow.png"
        onClick={kakaoLoginClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Login = styled.h2`
  //color: ${props => props.theme.grey};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.54px;
  text-align: center;
`;

const KakaoBtn = styled.img`
  cursor: pointer;
  margin-top: 30px;
`;

export default SignIn;
