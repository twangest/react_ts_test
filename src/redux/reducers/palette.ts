import {PALETTE, ADD, UPDATE, DELETE} from '../constants';
import { v4 as uuid4 } from 'uuid';

const DEFAULT_COLOR = '#00FF00';

export type ColorType = {
    id: string;
    color: string;
    isNew?:boolean
}

export type ColorPaletteStateType = ColorType[] ;

const initialState:ColorPaletteStateType = [];

export type PaletteActionType = {
    type: string;
    id?: string
    color?: string ;
}

const colorPalette = (state = initialState, action: PaletteActionType):ColorPaletteStateType => {
  const {type, id=uuid4(), color = DEFAULT_COLOR} = action;
  
  const newState = state.filter(item => item.id !== id);

  switch (type) {

  case PALETTE + ADD: 
    return [...state, {id, color, isNew: true}];

  case PALETTE + UPDATE:
    return state.map(item => {
      if (item.id === id) {
        item.color = color;
        if (typeof item.isNew !== 'undefined') {
          delete item.isNew;
        }
      }
      return item;
    });

  case PALETTE + DELETE:
    
    return [...newState];

  default: return state;
  }
};
export default colorPalette;