import React, {useState} from 'react';

const DragAndDrop = (props) => {
    const [inDropZone, setInDropZone] = useState(false);
    let dragCounter = 0;

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setInDropZone(true);
        }
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(dragCounter);
        dragCounter--;
        console.log(dragCounter);
        if (dragCounter < 0) {
            setInDropZone(false);
        }
    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setInDropZone(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log(e.dataTransfer.files);
            const file = [...e.dataTransfer.files][0];
            e.dataTransfer.clearData();
            dragCounter = 0;
            props.uploadPhotosHandler(file);
        }
    };

    return (
        <div onDrop={e => handleDrop(e)}
             onDragOver={e => handleDragOver(e)}
             onDragEnter={e => handleDragEnter(e)}
             onDragLeave={e => handleDragLeave(e)}>
            
        </div>
    );
};

export default DragAndDrop;