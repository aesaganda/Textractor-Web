import DragDropFiles from "./DragDropFiles"
import { useState } from "react"

function Dashboard() {
    const [fileContentData, setFileContentData] = useState("");

    const handleDataChange = (data) => {
        setFileContentData(data);
    };

  return (
    <>
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-card-wrapper">
                    <div className="card card-upload">
                        <DragDropFiles onDataChange = {handleDataChange}/>
                    </div>
                    <div className="card card-text">
                        <p>{fileContentData}</p>
                    </div>
                </div>
            </div>
        </div>
            
    </>
  )
}

export default Dashboard


