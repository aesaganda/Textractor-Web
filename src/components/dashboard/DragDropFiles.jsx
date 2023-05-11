import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFile, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { errorAlert, infoAlert, successAlert } from '../../helpers/AlertHelper';
import LanguageSelector from './LanguageSelector';
import PropTypes from 'prop-types';

function DragDropFiles({ onDataChange }) {
    const [files, setFiles] = useState(null);
    const [language, setLanguage] = useState('');

    const handleLanguageChange = (data) => {
        setLanguage(data);
    }

    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    //Yalnızca bir dosya seçilmesini sağlamak için
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFiles([file]);
        onDataChange("");
    }

    //send files to server
    const handleUpload = () => {
        infoAlert("Uploading files...");
        errorAlert("Error uploading files!");
        successAlert("Files uploaded successfully!");
        setLanguage('');
        setFiles(null);
        console.log(files[0]);
        console.log(language);


        // upload files to server
        // response server data
        const responseData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit iste consequuntur quaerat! Commodi dolor similique veritatis, consectetur nam aut. Deleniti ipsum doloribus, neque unde voluptate ea molestias vel adipisci?";
        onDataChange(responseData);
    }

    if (files) {
        return (
            <>
                <div className="files">
                    <div className='ul-wrapper'>
                        <ul>
                            {
                                Array.from(files).map((file, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{file.name}</p>
                                        </li>
                                    )
                                }
                                )
                            }
                        </ul>
                        {
                            !language ?
                            <p> Please select a language for the file to be uploaded.</p>
                            :
                            null
                        }
                    </div>
                    <div className='action-buttons'>
                        <button className={language ? "button button-upload" : "button button-disabled"} onClick={handleUpload} disabled={!language}>
                            <FontAwesomeIcon icon={faUpload} size="lg" />
                            Upload</button>
                        <button className="button button-cancel" onClick={() => {
                            setFiles(null);
                            onDataChange("");
                            setLanguage('');
                            }}>
                            <FontAwesomeIcon icon={faTrash} size="lg" />
                            Clear</button>
                        <LanguageSelector onLanguageChange={handleLanguageChange} />
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
                    <input type="file" onChange={(e) => {
                        setFiles(e.target.files);
                        onDataChange("");
                    }} hidden ref={inputRef} />
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

DragDropFiles.propTypes = {
    onDataChange: PropTypes.func.isRequired,
};