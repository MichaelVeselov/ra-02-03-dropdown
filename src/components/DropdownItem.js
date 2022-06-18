import PropTypes from 'prop-types';

function DropdownItem(props) {
  const { item, onClick, selected } = props;

  let selectedItemColor = { color: 'inherit' };

  if (selected === item.id) {
    selectedItemColor = { color: 'blue', fontWeight: 'bold' };
  }

  return (
    <li onClick={onClick}>
      <a href='#/' style={selectedItemColor}>
        {item.value}
      </a>
    </li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default DropdownItem;
