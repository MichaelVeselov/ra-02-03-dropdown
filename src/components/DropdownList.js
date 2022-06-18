import { useState } from 'react';
import DropdownItem from './DropdownItem';

function DropdownList() {
  const listItems = [
    { id: '1', value: 'Profile Information' },
    { id: '2', value: 'Change Password' },
    { id: '3', value: 'Become PRO' },
    { id: '4', value: 'Help' },
    { id: '5', value: 'Log Out' },
  ];

  const [selected, setSelected] = useState('0');

  const onClickItem = (e) => {
    for (let item of listItems) {
      if (item.value === e.target.textContent) {
        setSelected(item.id);
      }
    }
  };

  const listElements = listItems.map((item) => {
    return (
      <DropdownItem
        key={item.id}
        item={item}
        onClick={onClickItem}
        selected={selected}
      />
    );
  });

  return <ul className='dropdown'>{listElements}</ul>;
}

export default DropdownList;
