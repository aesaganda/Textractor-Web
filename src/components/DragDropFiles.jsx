import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFile, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { errorAlert, infoAlert, successAlert } from '../helpers/AlertHelper';


function DragDropFiles() {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    //Yalnızca bir dosya seçilmesini sağlamak için
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFiles([file]);

        // e.preventDefault();
        // const files = e.dataTransfer.files;
        // const filesArray = Array.from(files);
        // setFiles(filesArray);
        
    }

    //send files to server
    const handleUpload = () => {
        infoAlert("Uploading files...");
        errorAlert("Error uploading files!");
        successAlert("Files uploaded successfully!");
        setFiles(null);
    }

    if (files) {
        return (
            <>
                <div className="files">
                    <ul>
                        {
                            Array.from(files).map((file, index) => {
                                return (
                                    <li key={index}>
                                        <span>{file.name}</span>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                    <div className='action-buttons'>
                        <button className="button button-upload" onClick={handleUpload}>
                            <FontAwesomeIcon icon={faUpload} size="lg" />
                            Upload</button>
                        <button className="button button-cancel" onClick={() => setFiles(null)}>
                            <FontAwesomeIcon icon={faTrash} size="lg" />
                            Clear</button>
                    </div>
                </div>

            </>
        )

    }

    return (
        <>
            {
                !files &&
                <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <FontAwesomeIcon icon={faFile} size="2x" />
                    <h3>Drag and drop to files upload!</h3>
                    <p>or</p>
                    <input type="file" onChange={(e) => setFiles(e.target.files)} hidden ref={inputRef} />
                    <button className='file-select-button' onClick={() => {
                        inputRef.current.click();
                    }}>
                        <FontAwesomeIcon icon={faPlus} size="lg" />
                        Select Files
                    </button>
                </div>
            }
        </>
    )
}

export default DragDropFiles
