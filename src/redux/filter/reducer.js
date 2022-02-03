import { filterContact } from './action';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  // eslint-disable-next-line no-sequences
  [filterContact]: (state, { payload }) => (state, payload),
});
