import {PALETTE, ADD, UPDATE, DELETE} from '../constants';

export type PaletteActionType  = {
    type: string;
    id?: string;
    color?: string | undefined;
}

export const addColor = (color: string | undefined) => ({
  type: PALETTE + ADD,
  color
});

export const updateColor = (id:string, color: string) => ({
  type: PALETTE + UPDATE,
  id,
  color   
});

export const deleteColor = (id: string) => ({
  type: PALETTE + DELETE,
  id
});