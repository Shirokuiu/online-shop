import { SliceNameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getSelectedCategory = (state: State) =>
  state[SliceNameSpace.MainFilter].selectedCategory;
