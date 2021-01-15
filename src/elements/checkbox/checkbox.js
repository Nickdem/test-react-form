import './checkbox.css';

function Checkbox({ change }) {
  function clickHandler(value) {
    if (value !== undefined) {
      change(value);
    }
  };

  return (
    <div className="form__checkbox">
      <input type="checkbox" id="checkbox" />
      <label
        onClick={(e) => clickHandler(e.target.previousSibling.checked)}
        htmlFor="checkbox"
      >
        Принимаю <a href="#">условия</a> использования
      </label>
    </div>
  );
};

export default Checkbox;