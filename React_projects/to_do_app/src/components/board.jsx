const Board = ({ task, index, taskList, setTaskList }) => {
    const handleButtonDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTaskList) =>
            currentTaskList.filter((todo => index === removeIndex)
            ));
    };

    return (
        <>
            <div
                className="max-w-md rounded-xl flex flex-col items-center justify-start border text-center text-lg pt-2 pb-4 px-4 md:px-6"
            >
                <p>{task}</p>
                <button
                    className="bg-amber-500 text-white rounded-lg py-1 px-2 mt-4"
                    onClick={handleButtonDelete}
                >
                    Delete
                </button>
            </div>
        </>
    );
};

export default Board;
