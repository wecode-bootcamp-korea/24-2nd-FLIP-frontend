import React from 'react';

function CategoryList({ categoryInfo }) {
  return (
    <li id={categoryInfo.main_category_id}>
      <a href="/">
        <img src={categoryInfo.main_category_image_url} alt="플랩" />
        <span>{categoryInfo.main_category_name}</span>
      </a>
    </li>
  );
}

export default CategoryList;
