import { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <div className={`dropdown-wrapper open`}>
        <button className='btn' onClick={onClickList}>
          <span>Account Settings</span>
          <i className='material-icons'>public</i>
        </button>
        {isOpen && <DropdownList />}
      </div>
    </div>
  );
}

export default Dropdown;
