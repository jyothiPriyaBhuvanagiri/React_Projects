import React, {useState} from 'react';
import {useDrag} from 'react-dnd';

const Note = ({note}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'note',
        item : {note: note},
        end: (item, monitor) =>{
            const dropResult = monitor.getDropResult()
            if(item && dropResult && dropResult.length > 0){
                alert(`you dropped ${item.name} into ${dropResult.name}`);
            }
        }

    }))
    return (
        <div>
            {note}
        </div>
    );
};

export default Note ;