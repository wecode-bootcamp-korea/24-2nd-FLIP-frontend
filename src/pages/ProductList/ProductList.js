import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';
import ProductListCard from './ProductCard';

export default function ProductList() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [subcategory, setSubCategory] = useState([]);
  const [sortState, setSortState] = useState('price');
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  //제품들 받아 오는 거
  useEffect(() => {
    console.log('productlist ', sortState);
    fetch(
      `http://3.37.182.60:8000/products/list/${params.listid}?order=${sortState} `
    )
      .then(res => res.json())
      .then(res => {
        setProducts(res.MESSAGE);
        setAllProducts(res.MESSAGE);
      });
  }, [sortState]);

  //메인카테고리 이름과 서브카테고리 이름 받아오는 fetch.
  useEffect(() => {
    fetch(`http://3.37.182.60:8000/products/main_category/${params.listid}`)
      .then(res => res.json())
      .then(res => setSubCategory(res.sub_category_list));
  }, []);

  const handleBtns = e => {
    let word = e.target.value;
    console.log(3333, products.sub_category_name);
    console.log(11111, word);
    console.log(22222, allProducts);
    const filteredData = allProducts.filter(
      item => item.sub_category_name === word
    );
    console.log(33333, filteredData);
    setProducts(filteredData);
  };

  console.log('a' + products.length);

  return (
    <Container>
      <CategoryNameSection>
        <CategoryName>{subcategory[0]?.main_category_name}</CategoryName>
      </CategoryNameSection>
      <SubCategoryList>
        {subcategory &&
          subcategory.map(sub => {
            return (
              <CategoryItems
                key={sub.sub_category_id}
                value={sub.sub_category_name}
                onClick={handleBtns}
              >
                {sub.sub_category_name}
              </CategoryItems>
            );
          })}
      </SubCategoryList>
      <ButtonWrapperStyles>
        <FilterBtn onClick={() => setIsOpen(true)}>필터</FilterBtn>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sort={sortState}
          setSort={setSortState}
        ></Modal>
      </ButtonWrapperStyles>
      <MainCategoryName>{/* <h2>인기 실내 다이빙</h2> */}</MainCategoryName>
      <CardCompSection>
        {products.length === 31 ? (
          <div>검색결과가 없습니다.</div>
        ) : (
          <ProductListCard
            product={products}
            setProducts={setProducts}
            sort={sortState}
            setSortState={setSortState}
          />
        )}
      </CardCompSection>
    </Container>
  );
}

const ButtonWrapperStyles = styled.div`
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
`;

const SubCategoryList = styled.div`
  margin-bottom: 20px;
`;

const CategoryNameSection = styled.div`
  padding: 20px 0px;
`;

const CategoryName = styled.span`
  color: #000000;
  line-height: 20px;
  font-size: 20px;
`;

const CategoryItems = styled.button`
  margin-right: 20px;
  border: none;
  color: #000000;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: rgb(51, 151, 255);
  }
`;

const MainCategoryName = styled.div`
  margin-bottom: 20px;
`;

const CardCompSection = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterBtn = styled.button`
  width: auto;
  height: auto;
  line-height: 14px;
  padding: 11px 20px;
  margin-bottom: 20px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 5px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
