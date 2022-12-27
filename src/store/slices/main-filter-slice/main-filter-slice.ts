import { createSlice } from '@reduxjs/toolkit';

import { MainFilterSelectorCategoryOptionValue } from 'src/components/containers/main-filter/main-filter-selector-category/constants';
import { SliceNameSpace } from 'src/store/constants';
import { MainFilterSliceInitialState } from 'src/store/slices/main-filter-slice/types';

const initialState: MainFilterSliceInitialState = {
  selectedCategory: MainFilterSelectorCategoryOptionValue.All,
};

export const mainFilterSlice = createSlice({
  name: SliceNameSpace.MainFilter,
  initialState,
  reducers: {
    changeCategory(
      state,
      { payload: selectedCategory }: { payload: MainFilterSelectorCategoryOptionValue },
    ) {
      state.selectedCategory = selectedCategory;
    },
  },
});

export const { changeCategory } = mainFilterSlice.actions;
