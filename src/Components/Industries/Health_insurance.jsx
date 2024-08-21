import React from 'react'

function Healthinsurance() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center py-5 px-5">
        <div className="text-primary fw-light display-5">
          We are working on this page..
          <span>
            <i className="fa fa-spinner spinning" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <style jsx>{`
        .spinning {
          font-size: 3rem; /* Adjust size if needed */
          display: inline-block;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Healthinsurance