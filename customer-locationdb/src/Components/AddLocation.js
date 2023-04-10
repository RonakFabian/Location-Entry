import Card from 'react-bootstrap/Card';



function AddLocation({ closeModal })
{
  function AddEntry()
  {
    closeModal();
  }
  return (
    <>

      <div className="container add-location">
        <div className="row justify-content-center">
          <Card style={{ width: '20rem', marginTop: '2rem' }}>
            <Card.Body>
              <Card.Title>Add New Entry:</Card.Title>
              Username:
              <input type="text" class="form-control" placeholder="Name"></input>
              Latitude:
              <input type="text" class="form-control" placeholder="Latitude"></input>
              Longitude:
              <input type="text" class="form-control" placeholder="Longitude"></input>
              <div className="text-center m-2">
                <button type="button" class="btn btn-primary" onClick={AddEntry}>Add Entry</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>

  );
}

export default AddLocation;

