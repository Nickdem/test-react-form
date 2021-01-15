import './button.css';

function Button({ disabled, handler }) {
  return (
    <button
      onClick={(e) => { e.preventDefault(); handler() }}
      className="form__button" disabled={disabled}
    >
      Зарегистрироваться
    </button>
  );
};

export default Button;