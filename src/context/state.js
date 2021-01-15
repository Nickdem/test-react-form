import { useReducer } from 'react';
import { inputsValidate } from '../utils/valid';
import { Context } from './context';
import { reducer } from './reducer';

export function State({ children }) {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    lang: '',
    checkbox: false,
    disabled: true
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { disabled, name, phone, email, lang, checkbox } = state;

  function setValue(value, type) {
    type === 'text' && changeStateInputs(value, 'SET_NAME');
    type === 'email' && changeStateInputs(value, 'SET_EMAIL');
    type === 'tel' && changeStateInputs(value, 'SET_PHONE');
  };

  function changeStateInputs(str, aType) {
    dispatch({
      type: aType,
      payload: str
    });
    setDisabled();
  };

  function setLang(value) {
    dispatch({
      type: 'SET_LANGUAGE',
      payload: value
    });
    setDisabled();
  };

  function setCheckbox(value) {
    dispatch({
      type: 'SET_CHECKBOX',
      payload: !value
    });
    setDisabled();
  };

  function setDisabled() {
    const bool = (((name && email && phone && lang) !== '') && (checkbox !== true));

    dispatch({
      type: 'SET_DISABLED',
      payload: !bool
    });
  };

  function submitHandler() {
    const form = {
      name,
      email,
      phone,
      lang,
      checkbox
    };
    console.log(form);
  };

  return (
    <Context.Provider value={{ disabled, setValue, inputsValidate, submitHandler, setLang, setCheckbox }}>
      {children}
    </Context.Provider>
  );
};