import {useState} from "react";

const Input = ({taskList, setTaskList}) => {
    const [inputValue, setInputValue] = useState('');
    function handleAddTask(e) {
        e.preventDefault()
        setTaskList([...taskList, inputValue])
        setInputValue("")
    }
    return (
        <>
            <form className="flex flex-row items-center gap-3">
                <input
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type="text"
                    placeholder="Add Task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button className="bg-cyan-400 text-white py-1 px-3.5 rounded-lg hover:opacity-70"
                        onClick={handleAddTask}>Add</button>
            </form>
        </>
    )
}

export default  Input