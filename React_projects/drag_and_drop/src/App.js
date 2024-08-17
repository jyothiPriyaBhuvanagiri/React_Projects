import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Bin from "./components/Bin";
import Note from "./components/note";
import {useState, useEffect} from "react";

function App() {
    const [notes, setNotes] = useState([]);
    const[binned, setBinned] = useState([]);

    useEffect(() => {
       const initialNotes = ["Note 1", "Note 2", "Note 3"]
        localStorage.setItem("noteList", JSON.stringify(initialNotes))

       let array = localStorage.getItem("noteList");
       setNotes(JSON.parse(array));

    }, []);
console.log(notes)

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-center text-3xl font-semibold mt-4 py-2">Drag And Drop Application</h1>
   <Bin></Bin>
        <Note></Note>
    </DndProvider>
  );
}

export default App;