import React, { useState, useContext } from 'react';
import './styles.css'
import Select, {components} from 'react-select';
import { ContextCalculate } from '../../context/ContextCalculate';
import arrowImg from '../icons/arrow.svg';


const Operator = () => {

  const { setOperatorCalc, setChoosenOperator } = useContext(ContextCalculate);
  const [openDetect, setOpendetect] = useState(false);

  const options = [
    { value: 'operatorOne', label: 'Оператор №1'},
    { value: 'operatorTwo', label: 'Оператор №2'},
    { value: 'operatorThree', label: 'Оператор №3'},
  ];

  // ↓↓ действия на выбор опции ↓↓

  const handleMenuOpen = () => {
    setOpendetect(true);
  };

  const handleMenuClose = () => {
  document.activeElement.blur();
    setOpendetect(false);
  };

  const handleChange = (selectedOption) => {

    switch (selectedOption.value) {
      case 'operatorOne' :
        setOperatorCalc(100);
        setChoosenOperator('firstOperator');
      break;
      case 'operatorTwo' :
        setOperatorCalc(150);
        setChoosenOperator('secondOperator');
      break;
      case 'operatorThree' :
        setOperatorCalc(200);
        setChoosenOperator('thirdOperator');
      break;
      default :
      setOperatorCalc(100);
    }

  // ↓↓ закрытие меню при выборе опции ↓↓
  setTimeout(() => {
    document.activeElement.blur();
  }, 0);
  };

  // ↓↓ кастомный индикатор библиотеки React-select ↓↓
  const CustomDropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
      <img src={arrowImg} alt="Custom Indicator" />
  </components.DropdownIndicator>
  );
  const customStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: openDetect ? 'rotate(180deg)' : 'none',
    }),
  };


    return (
      <div>

        <div className='operator__title'>
          <h2>Оператор</h2>
        </div>

        <div data-testid='testselect'>
          <Select
          placeholder='Оператор №1'
          classNamePrefix='my__select'
          options={options}
          onChange={handleChange}
          isSearchable={false}
          onMenuClose={handleMenuClose}
          onMenuOpen={handleMenuOpen}
          components={{DropdownIndicator: CustomDropdownIndicator,}}
          styles={customStyles}
          role='select'/>
        </div>

      </div>
    );
};

export default Operator;