import React, { 
  Fragment, 
  useState, 
  useEffect,
  useMemo } from 'react';
import { Pagination } from 'antd';

import WithNotesList from '../HOC/withNotesList';
import { NotePropsList } from '../lib/types';
import { DEFAULT_PAGINATION_SIZE } from '../lib/helpers';
import { paginationData } from '../lib/helpers';
import NoteListComponent from '../components/notes/NoteList';

import './style.scss';

const NoteListContainer = ({notes}: NotePropsList) => {
  const [pageTotal, setPageTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = DEFAULT_PAGINATION_SIZE;
  const data = paginationData({notes});
    
  useEffect(() => {
    if (notes) {
      setPageTotal(notes.length + 1);
      console.log(notes.length)
    }
  }, [notes]);

  const paginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const pagination = useMemo(() => {
    return <Pagination
            total={pageTotal}
            current={currentPage}
            onChange={paginationChange}
          />;
    }, [pageTotal, currentPage, defaultPageSize]);

  return (
    <Fragment>
      {pagination}
      <NoteListComponent notes={data[currentPage - 1]}/>
    </Fragment> 
  );
}

export default WithNotesList(NoteListContainer);