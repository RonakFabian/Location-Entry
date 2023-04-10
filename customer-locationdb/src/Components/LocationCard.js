import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';


function LocationCard({ Data })
{
  function deleteEntry()
  {
  }
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <Card style={{ width: '100%', marginTop: '2rem' }}>
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Tags</Card.Subtitle>
            <Card.Text>
              Notes
            </Card.Text>
            <button className='btn btn-primary m-2'><FaMapMarkerAlt />Locate</button>
            <button className='btn btn-primary m-2'><MdModeEditOutline />Edit</button>
            <button className='btn btn-primary m-2' onClick={deleteEntry}><MdDelete />Delete</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LocationCard;

