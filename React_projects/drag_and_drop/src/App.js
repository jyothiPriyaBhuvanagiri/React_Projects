import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Bin from "./components/Bin";
import Note from "./components/note";
import {useEffect} from "react";

function App() {
    const [notes, setNotes] = React.useState([]);
    const[binned, setBinned] = React.useState([]);

    useEffect( () =>{

        }, [])
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-center text-3xl font-semibold mt-4 py-2">Drag And Drop Application</h1>
   <Bin></Bin>
        <Note></Note>
    </DndProvider>
  );
}

export default App;