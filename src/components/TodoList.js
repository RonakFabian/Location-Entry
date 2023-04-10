import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import { AiOutlinePlusSquare } from 'react-icons/ai'

const TodoList = () =>
{
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>
    {
        let arr = localStorage.getItem("taskList")

        if (arr)
        {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) =>
    {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) =>
    {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () =>
    {
        setModal(!modal);
    }

    const saveTask = (taskObj) =>
    {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <div class="input-group p-2">
                <input type="search" onChange={(e) => setSearch(e.target.value)} class="form-control rounded" placeholder="Search Entry.." aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary">    <i class="fas fa-search"></i></button>
            </div>
            <div className="header text-center">
                <h3>Location Entry</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)} ><AiOutlinePlusSquare /> Create Task</button>
            </div>
            <div className="container justify-content-center">
                {taskList && taskList.filter((obj) => { return search.toLowerCase === '' ? obj : (obj.Name.toLowerCase().includes(search) || obj.Description.toLowerCase().includes(search)); }).map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;