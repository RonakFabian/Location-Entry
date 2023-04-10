import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) =>
{
    const [modal, setModal] = useState(false);

    let url = ""
    const toggle = () =>
    {
        setModal(!modal);
    }

    const updateTask = (obj) =>
    {
        updateListArray(obj, index)
    }

    const handleDelete = () =>
    {
        deleteTask(index)
    }

    const Locate = () =>
    {
        console.log(taskObj);
        url = "geo:" + taskObj.Latitude + "," + taskObj.Longitude + "?q=" + taskObj.Latitude + "," + taskObj.Longitude
        console.log(url);
        window.open(url);

    }
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    return (
        <div class="card justify-content-center w-100 mt-2 md-2 p-2">
            <div class="task-holder top-border">
                < div class="text-center  mb-3" >
                    <h3 class=" p-2 header-text">{taskObj.Name}</h3>
                </div>
                <div><p className="mt-1">Latitude : {taskObj.Latitude}</p></div>
                <div><p className="mt-1">Longitude : {taskObj.Longitude}</p></div>
                <div><p className="mt-1">Description : {taskObj.Description}</p></div>

                <div class="mx-auto">
                    <button class="btn btn-success m-2 " onClick={Locate}>Locate</button>
                    <button class="btn btn-primary m-2" onClick={() => setModal(true)}>Edit</button>
                    <button class="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div >
    );
};

export default Card;