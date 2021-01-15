import { useState } from 'react';
import './input.css';

function Input({ item, change, validate }) {
  const [inputState, setInputState] = useState({ error: false, value: '', message: null });

  function changeHandler(value) {
    setInputState((prev) => ({...prev, value}));
  };

  function blurHandler(type) {
    let msg = validate(inputState.value, type);
    if (msg === 'trim') {
      setInputState((prev) => ({ ...prev, error: true, message: 'Поле не должно быть пустым' }));
      change('', type);
    } else if (msg === 'name') {
      setInputState((prev) => ({ ...prev, error: true, message: 'Разрешены только буквы, пробелы и дефисы' }));
      change('', type);
    } else if (msg === 'email') {
      setInputState((prev) => ({ ...prev, error: true, message: 'Введите корректную почту' }));
      change('', type);
    } else if (msg === 'tel') {
      setInputState((prev) => ({ ...prev, error: true, message: `${inputState.value.length}/11. Только цифры, скобки и дефисы` }));
      change('', type);
    } else {
      setInputState((prev) => ({ ...prev, error: false, message: null}));
      change(inputState.value, type);
    }
  };

  return (
    <div className="form__control">
      <label
        className="form__control-label"
        htmlFor={item.for}
      >
        {item.label}
      </label>
      <input
        className="form__control-input"
        type={item.type}
        id={item.for}
        value={inputState.value}
        autoComplete="off"
        placeholder={item.placeholder}
        onChange={event => changeHandler(event.target.value)}
        onBlur={() => blurHandler(item.type)}
      />
      {inputState.error && <span className="form__control-error">{inputState.message}</span>}
    </div>
  );
};

export default Input;