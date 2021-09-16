import React, { useEffect } from 'react';
import styled from 'styled-components';

const LocationMap = ({ location }) => {
  useEffect(() => {
    // make map
    const { kakao } = window;
    const container = document.getElementById('map');
    const options = {
      // center: new kakao.maps.LatLng(33.450701, 126.570667),
      center: new kakao.maps.LatLng(location?.y, location?.x),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    // make marker
    // const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const markerPosition = new kakao.maps.LatLng(location?.y, location?.x);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [location]);

  return (
    <Wrapper>
      <KakaoMap id="map" />
    </Wrapper>
  );
};

export default LocationMap;

const Wrapper = styled.div`
  height: 10rem;
  margin-bottom: 20rem;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 28rem;
`;
