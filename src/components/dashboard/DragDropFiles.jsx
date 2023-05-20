import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFile, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { infoAlert } from '../../helpers/AlertHelper';
import { toast } from 'react-toastify';
import LanguageSelector from './LanguageSelector';
import PropTypes from 'prop-types';
import axios from 'axios';

function DragDropFiles({ onDataChange }) {
    const [files, setFiles] = useState(null);
    const [language, setLanguage] = useState('');
    const [responseData, setResponseData] = useState("")

    const handleLanguageChange = (data) => {
        setLanguage(data);
    }

    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFiles(file);
        onDataChange("");
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    //send files to server
    const handleUpload = async () => {
        const id = toast.loading("Uploading files...");
        var start = new Date().getTime();

        const base64 = await toBase64(files);

        await axios.post("https://textractor.marun.tk/api/recognize", {
            imageUrl: base64, language: language
          })
            .then(function (response) {
                setResponseData(response.data.data);
                onDataChange(response.data.data);
                toast.update(id, { render:"Files uploaded successfully!", type: "success", isLoading: false, closeOnClick: true, autoClose: 4000}); 
            })
            .catch(function (error) {
                console.log(error);
                toast.update(id, { render: "Error uploading files!", type: "error", isLoading: false, closeOnClick: true, autoClose: 4000 });
            });

        setLanguage('');
        setFiles(null);

        var end = new Date().getTime();
        var time = end - start;
        time = time / 1000;
        infoAlert("Processing time: " + time + " s");
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
                        setFiles(e.target.files[0]);
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