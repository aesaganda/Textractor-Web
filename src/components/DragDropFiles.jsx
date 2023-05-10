import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFile } from '@fortawesome/free-solid-svg-icons'

function DragDropFiles() {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const filesArray = Array.from(files);
        setFiles(filesArray);
        console.log(filesArray);
    }

    //send files to server
    const handleUpload = () => {
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
                        <button className="button button-upload" onClick={handleUpload}>Upload</button>
                        <button className="button button-cancel" onClick={() => setFiles(null)}>Clear</button>
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
                    <input type="file" multiple onChange={(e) => setFiles(e.target.files)} hidden ref={inputRef} />
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
