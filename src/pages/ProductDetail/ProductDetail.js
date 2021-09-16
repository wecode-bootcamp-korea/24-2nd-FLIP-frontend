import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductExplainSection from './ProductExplainSection';
import ProductFloatContents from './ProductFloatContents';
import ProductHeadSection from './ProductHeadSection';
import ProductNotiSection from './ProductNotiSection';
import ProductRecommandSection from './ProductRecommandSection';
import ProductReviewSection from './ProductReviewSection';
import { useParams } from 'react-router';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch(`http://10.58.7.68:8000/product/${params.id}`)
      .then(result => result.json())
      .then(product => setProduct(product.result));

    fetch(`http://10.58.7.68:8000/product/${params.id}/review`)
      .then(result => result.json())
      .then(data => setReview(data.result));

    fetch(`http://10.58.7.68:8000/product/${params.id}/location`)
      .then(result => result.json())
      .then(location => setLocation(location.result));
  }, []);

  return (
    <DetailWrap>
      <Container>
        <ProductHeadSection product={product} />
        <ProductReviewSection review={review} />
        <ProductExplainSection location={location} product={product} />
        <ProductNotiSection />
      </Container>
      <ProductFloatContents />
      <ProductRecommandSection />
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  position: absolute;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default ProductDetail;
