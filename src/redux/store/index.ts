import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {ColorPaletteStateType} from '../reducers/palette';
import reducer from '../reducers';

const enhancer = applyMiddleware();
export type RootStateType = {
    palette: ColorPaletteStateType
}
  
export default createStore(reducer, composeWithDevTools(enhancer));
  
