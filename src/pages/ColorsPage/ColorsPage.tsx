import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { addColor, updateColor, deleteColor, PaletteActionType } from '../../redux/actions';
import { paletteSelector } from '../../redux/selectors';
import { ColorType } from '../../redux/reducers';
import ColorPicker from '../../components/ColorPicker';
import FormSubmit from "../../components/FormSubmit";

interface IColorsPageProps {
  palette: ColorType[];
  addColor: (color?: string) => void;
  updateColor: (id: string, color: string) => void;
  deleteColor: (id: string) => void;
}

const ColorsPage: React.FunctionComponent<IColorsPageProps> = ({ addColor, updateColor, palette, deleteColor }) => {
  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    addColor();
  };

  return (
    <div className='row'>
      <div className='col s6'>
        <div className='row'>
          {palette.map((colorItem) => {
            const { id } = colorItem;
            return <ColorPicker  key={id} colorItem={colorItem} updateColor={updateColor} deleteColor={deleteColor}/>;
          })}
        </div>
        <FormSubmit title="Добавить цвет" onClick={handleOnClick} type="button"/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  palette: paletteSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<PaletteActionType>) => ({
  addColor: (color?: string | undefined) => dispatch(addColor(color)),
  updateColor: (id: string, color: string) => dispatch(updateColor(id, color)),
  deleteColor: (id: string) => dispatch(deleteColor(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsPage);
