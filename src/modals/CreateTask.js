import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) =>
{
    const [taskName, setTaskName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) =>
    {

        const { name, value } = e.target

        if (name === "taskName")
        {
            setTaskName(value)
        }
        else if (name === "latitude")
        {
            setLatitude(value)
        }
        else if (name === "longitude")
        {
            setLongitude(value);
        }
        else
        {
            setDescription(value)
        }

    }

    const handleSave = (e) =>
    {
        e.preventDefault()

        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Latitude"] = latitude
        taskObj["Longitude"] = longitude
        taskObj["Description"] = description

        save(taskObj)

        setTaskName('')
        setLatitude('')
        setLongitude('')
        setDescription('')

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <form>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>

                    <div className="form-group">
                        <label>Entry Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group">
                        <label>Latitude</label>
                        <input type="number" className="form-control" value={latitude} onChange={handleChange} name="latitude" />
                    </div>
                    <div className="form-group">
                        <label>Longitude</label>
                        <input type="number" className="form-control" value={longitude} onChange={handleChange} name="longitude" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};

export default CreateTaskPopup;