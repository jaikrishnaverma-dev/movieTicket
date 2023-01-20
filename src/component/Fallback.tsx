import React from 'react'

const Fallback = ({error, resetErrorBoundary}:any) => {
  return (
    <div className="list-group list-group  ulist">
    <div className="list-group-item d-flex justify-content-between align-items-start border-danger">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{error.message}</div>
        </div>
        <span className="badge bg-primary rounded-pill bg-danger" onClick={resetErrorBoundary}>Reset</span>
      </div>
    
  </div>
  )
}

export default Fallback