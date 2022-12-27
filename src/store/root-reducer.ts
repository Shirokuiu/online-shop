import { combineReducers } from '@reduxjs/toolkit';

import { api } from 'src/services/api';
import { SliceNameSpace } from 'src/store/constants';
import { mainFilterSlice } from 'src/store/slices/main-filter-slice/main-filter-slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [SliceNameSpace.MainFilter]: mainFilterSlice.reducer,
});
