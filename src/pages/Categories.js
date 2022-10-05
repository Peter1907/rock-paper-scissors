import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkState } from '../redux/categories/categories';

const Categories = () => {
  const info = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => dispatch(checkState())}
      >
        Check Status
      </button>
      <p>{info}</p>
    </div>
  );
};

export default Categories;
