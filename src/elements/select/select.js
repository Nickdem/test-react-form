import { useState } from 'react';
import './select.css';

function Select({ item, change }) {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState(item.label);

  function clickHandler(value) {
    setValue(value);
    change(value);
  };

  const renderOptions = item.options.map((option, idx) => {
    return (
      <li
        key={idx}
        className={value !== option ? 'dropdown__item' : 'dropdown__item dropdown__item--active'}
        onClick={() => clickHandler(option)}>
        {option}
      </li>
    );
  });

  return (
    <div className="form__control">
      <span className="form__control-label">{item.label}</span>
      <div className="form__control-select" onClick={() => setDropdown(!dropdown)}>
        <span>{value}</span>
        {dropdown
          &&
          <div className="dropdown">
            <ul>
              {renderOptions}
            </ul>
          </div>}
      </div>
    </div>
  );
};

export default Select;