import React from 'react';

function CategoryList({ categoryInfo, moveToList }) {
  return (
    <li
      id={categoryInfo.main_category_id}
      onClick={() => moveToList(categoryInfo.main_category_id)}
    >
      <img src={categoryInfo.main_category_image_url} alt="플랩" />
      <span>{categoryInfo.main_category_name}</span>
    </li>
  );
}

export default CategoryList;
