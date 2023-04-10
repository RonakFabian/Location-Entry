import { Button } from 'bootstrap';
import { BsSearch } from 'react-icons/bs';
import AddLocation from './AddLocation';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';


function Searchbar()
{
  const [openModal, setModalOpen] = useState(false);

  function SetModalOpen()
  {
    setModalOpen(true)
  }
  function SetModalClose()
  {
    setModalOpen(false)
  }

  return (
    <>

      {openModal ||
        <nav class="navbar navbar-light bg-light justify-content-center sticky-top">
          <form class="form-inline justify-content-center">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button> */}
            <button type="button" class="btn btn-primary m-2" onClick={SetModalOpen}>< AiOutlinePlus />  Add Entry </button>
          </form>
        </nav>}
      {openModal && <AddLocation closeModal={SetModalClose} />}


    </>
  );
}

export default Searchbar;

