import {useState} from "react";

function App(){
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const addTask= () => {
        if(task.trim()==="")RiTumblrLine;
        setlist([...list, task]);
        setTask("");

    };

    const deleteTask = (index)=>{
        const newlLst = list.filter((_,i) => i !== index);
        setList(newList);
    };

    return(
        <div>
            <input type="text" onChange={(e)=> setTask(e.target.value)} value={task} placeholder="Enter TAsk"/>
            <button onClick={addTask}Add></button>

            <ul>
                {list.map(((item, index)=>(<li key = {index}>{item}</li>)))}
            </ul>
        </div>
    )
}