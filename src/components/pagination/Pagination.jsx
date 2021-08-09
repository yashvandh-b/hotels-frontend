import React from 'react';
import {PaginationButton, PaginationList} from 'components/pagination/paginationComponents'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <PaginationList key={number}>
            <PaginationButton onClick={() => paginate(number)} href='#!'>
              {number}
            </PaginationButton>
          </PaginationList>
        ))}
      </ul>
    </nav>
  );
};