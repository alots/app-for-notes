import { NotePropsList } from '../types';

export const DEFAULT_PAGINATION_SIZE = 7;

export const paginationData = ({notes}: NotePropsList) => {
  const size = DEFAULT_PAGINATION_SIZE;
  let result = [];
  
  for (let i = 0; i <Math.ceil(notes.length/size); i++){
    result[i] = notes.slice((i*size), (i*size) + size);
  }

  return result;
}