import DragDropFiles from "./DragDropFiles"

function Dashboard() {
  return (
    <>
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-card-wrapper">
                    <div className="card card-upload">
                        <DragDropFiles />
                    </div>
                    <div className="card card-text"></div>
                </div>
            </div>
        </div>
            
    </>
  )
}

export default Dashboard
