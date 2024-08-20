import React from 'react';

function Consultancy() {
  return (
    <div className="container  px-3 mx-auto mt-5">
      <section className="text-center  mb-5">
        <div className="panel d-flex flex-column justify-content-center text-center">
          <div className="bg-light p-5 mx-auto  shadow text-center" style={{ border: '1px solid #efefef', borderRadius: '10px' }}>
            <h1 className="display-5 text-primary fw-light">
              IT Strategy and Consultancy
            </h1>
            <p className="text-dark">
              Discover how our tech solutions can transform your business.
              Explore our features and take your business to new heights.
            </p>
          </div>
          <div className="position-relative mt-4 mb-4">
            <div className=" rounded overflow-hidden">
              <img
                className="img-fluid object-cover rounded"
                alt="Consultancy Image"
                src="https://via.placeholder.com/1200x500.png?text=Dummy+Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="  p-4 rounded-3 mb-5" style={{marginTop:'5rem'}}>
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 mb-4">
             
            <h2 className="display-5 text-primary fw-light">
              Transforming Animal Identification in India
            </h2>
            <p className="text-muted">
              India's vast livestock industry faces significant challenges in
              the areas of animal identification, health monitoring, and data
              management. Traditional methods are often inconsistent and prone
              to errors, making effective disease control and breeding management
              difficult. The need for a reliable, unified solution is essential
              for the continued growth and modernization of the sector.
            </p>
            <a href="https://agent511.com/contact-us/" className="btn btn-danger">
              Schedule a Demo
            </a>
          </div>
          <div className="col-md-5">
            <img
              src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
              alt="Transforming Animal Identification"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      <section className="mb-5  " style={{marginTop:'6rem'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                className="img-fluid rounded"
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="Rationale Behind Pashu Aadhaar"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
                Rationale Behind Pashu Aadhaar
              </h3>
              <p>
                Pashu Aadhaar is a pivotal advancement in livestock management
                throughout India. By assigning unique identification numbers to
                each animal, it optimizes tracking, health monitoring, and data
                management.
              </p>
              <ul className="list-unstyled">
                <li className="mb-4">
                <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Enhances the accuracy and reliability of animal identification.
                </li>
                <li className="mb-4">
                <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Improves disease control and vaccination efforts through precise tracking.
                </li>
                <li className="mb-4">
                <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Facilitates better management of breeding and ownership records.
                </li>
                <li className="mb-4">
                <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Increases operational efficiency by centralizing data management.
                </li>
                <li className="mb-4">
                <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Strengthens overall livestock productivity through informed decision-making.
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consultancy;
