import { useContext } from 'react';
import { Context } from '../../context';
import Button from '../../elements/button';
import Checkbox from '../../elements/checkbox';
import Input from '../../elements/input';
import Select from '../../elements/select';
import './form.css';

function Form() {
  const { setValue, disabled, inputsValidate, submitHandler, setLang, setCheckbox } = useContext(Context);

  const inputs = [
    { for: 'name', label: 'Имя', type: 'text', placeholder: 'Введите Ваше имя' },
    { for: 'email', label: 'Email', type: 'email', placeholder: 'Введите ваш email' },
    { for: 'phone', label: 'Номер телефона', type: 'tel', placeholder: 'Введите номер телефона' }
  ]

  const select = { label: 'Язык', options: ['Русский', 'Английский', 'Китайский', 'Испанский'] };

  return (
    <form className="form">
      <h1 className="form__title">Регистрация</h1>
      <div className="form__subtitle">
        <span>Уже есть аккаунт?</span> <a className="login" href="#">Войти</a>
      </div>
      {inputs.map(item => <Input key={item.for} item={item} validate={inputsValidate} change={setValue} />)}
      <Select
        item={select}
        change={setLang}
      />
      <Checkbox
        change={setCheckbox}
      />
      <Button
        disabled={disabled}
        handler={submitHandler}
      />
    </form>
  );
};

export default Form;