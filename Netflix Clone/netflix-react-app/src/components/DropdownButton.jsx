import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton() {
  return (
    <Dropdown className='mt-2 ms-5 bg-black rounded'>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className='text-white'>
        Genres
      </Dropdown.Toggle>
    </Dropdown>
  );
}

export default DropdownButton;