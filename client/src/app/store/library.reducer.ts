// const initial_productList_state =[{}]
import { IBook } from '../types';
import * as fromState from './app.state';

export interface BookState {
  books: IBook[];

}


export interface State extends fromState.State {
  books: BookState;
}


export function reducer(state: BookState, action: any): BookState {
  switch (action.type) {
    default:
    case 'LIB_DATA_ARRIVED':
      return {
        ...state
      };
  }
}
