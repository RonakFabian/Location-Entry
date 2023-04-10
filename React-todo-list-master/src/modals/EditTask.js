import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) =>
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

    useEffect(() =>
    {
        setTaskName(taskObj.Name)
        setLatitude(taskObj.Latitude)
        setLongitude(taskObj.Longitude)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) =>
    {
        e.preventDefault();
        taskObj['Name'] = taskName
        taskObj['Latitude'] = latitude
        taskObj['Longitude'] = longitude
        taskObj['Description'] = description
        updateTask(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                </div>
                <div className="form-group">
                    <label>Latitude</label>
                    <input type="text" className="form-control" value={latitude} onChange={handleChange} name="latitude" />
                </div>
                <div className="form-group">
                    <label>Longitude</label>
                    <input type="text" className="form-control" value={longitude} onChange={handleChange} name="longitude" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;