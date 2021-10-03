##

---

# FLIP | 플립

<img src='https://github.com/wecode-bootcamp-korea/24-2nd-FLIP-backend/blob/main/flip_log.png?raw=true' alt='logo'>

<br><br>

---

## frip | 프립

- [프립](https://www.frip.co.kr/) 사이트
- 소개: 여가, 액티비티 공유 플랫폼



## 팀원

- Front-end: 금보배, 김세준, 지의선
- Back-end: 서동규, 성우진, 손명희(PM)



## 개발 기간

- 기간: 2021.09.13 ~ 2021.10.01 (16일(추석기간 9일 제외))



## 적용 기술

- Front-end: React, Styled Component, Javascript, Slider-Slicker, React-router-DOM
- Back-end: Django, Python, MySQL, jwt, bcrypt, Storage, Transaction, AWS S3, AWS RDS, AWS EC2
- 협업툴: Trello, Slack, Git-flow, Github(Rebase), AQuery



## 영상

[프립 구현 영상](https://youtu.be/INw3JLtYq-o)



## 구현 기능 및 개인 역할


## `금보배`

- 상세페이지 레이아웃
- 백엔드 API 및 동적라우팅 이용하여 상품 상세페이지 렌더링
- 상세페이지 상품 및 리뷰 이미지 슬라이드 기능 구현
- 카카오 지도 API를 이용하여 장소(진행 장소 및 모이는 장소) 지도 구현

##`김세준`
- 메인페이지 레이아웃
- `react-slick-slider` 라이브러리 사용하여 배너 슬라이드 기능 구현
- `fetch` API 사용하여 백엔드 데이터 전달받아 map() 메서드 사용하여 반복적인 컴포넌트 구현
- `react-daum-post` API 사용하여 주소찾기 기능 구현 및 백엔드로 데이터 전달
- 이미지 업로드 기능 구현 및 `axios` 라이브러리 사용하여 백엔드 서버에 formData 형식으로 전달
- callback 함수 사용하여 자식 컴포넌트에서 업로드된 이미지 부모 컴포넌트로 전달될 수 있도록 기능 구현
  
## `지의선`
- 카카오 소셜 로그인 구현 (env파일을 이용해 키값 숨기기)
- 카테고리페이지 API를 이용하요 제품 렌더링
- 카테고리 페이지 필터 함수를 이용하여 프론트단에서 필터링 구현
