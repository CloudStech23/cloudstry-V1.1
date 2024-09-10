import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";

function Logistic() {
  return (
    <div>
      <header className="bg-white text-white text-center py-5 position-relative">
        {/* Navigation Path */}
        <div
          className="position-absolute top-0 start-0 ms-0 mt-0 p-4 fs-5 fw-bold"
          style={{ zIndex: 100 }}
        >
          <span className="small text-primary">
            <a href="#" className="">
              Industries We Serve /
            </a>{" "}
            <a href="#">Logistic</a>
          </span>
        </div>

        {/* Header Content */}
        <div className="container text-primary mt-5">
          <h1 className="display-6">
            {" "}
            Revolutionizing Logistics: Smart Solutions for a Complex Supply
            Chain
          </h1>
          <p className="lead">
            Streamline your supply chain with our innovative technology
            solutions. From real-time tracking to AI-driven optimization,
            discover how we enhance efficiency, reduce costs, and drive success
            in the logistics sector
          </p>
        </div>
      </header>
      <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              Logistic
            </span>
            <h2
              className=" display-5 text-primary "
              style={{ fontWeight: 300 }}
            >
              Strategic Engagement in Logistics
            </h2>
            <p className="text-muted mb-4">
              Logistics is the backbone of global trade, ensuring that goods are
              efficiently transported from manufacturers to consumers. It
              encompasses a wide range of activities, including transportation,
              warehousing, inventory management, and order fulfillment. As
              international trade becomes more complex, the logistics sector
              must evolve to meet the growing demands of global supply chains.
              This is particularly evident in the ambitious India-Middle East
              Economic Corridor, where streamlined logistics are crucial for
              enhancing trade and economic cooperation between these regions.
            </p>
            <Link to="/3PL-Solution" className="btn btn-danger">
              Learn More
            </Link>
          </div>

          {/* Video Content */}
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img
              src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
              alt="Dummy"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-6 mt-4 mb-2">
            <h2
              className=" display-6 text-primary "
              style={{ fontWeight: 300 }}
            >
              Comprehending the Logistics Process
            </h2>
            <p className="text-muted mb-4">
              The logistics flow encompasses the systematic movement of goods,
              information, and resources throughout the supply chain. This
              process includes various stages, from initial production or
              sourcing to the final delivery to the customer. Key activities
              within the logistics flow involve transportation, inventory
              management, planning, and distribution of goods. Ensuring that
              each stage is synchronized is essential for minimizing costs and
              maximizing efficiency. Effective logistics flow is crucial for
              meeting market demands, enhancing customer satisfaction, and
              maintaining a competitive edge.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check-circle text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <span className="fw-bold">Transportation:</span> Goods are
                  transported from manufacturers to distribution centers or
                  markets using efficient modes such as road, rail, sea, or air.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check-circle text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <span className="fw-bold">Warehousing:</span> Products are
                  stored in strategically located warehouses, ensuring
                  availability for timely distribution and effective inventory
                  management.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check-circle text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <span className="fw-bold">Order Fulfillment:</span> Orders are
                  processed and packed at fulfillment centers, ensuring accurate
                  picking, secure packaging, and timely delivery to customers.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check-circle text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <span className="fw-bold">Distribution:</span> The final step
                  involves delivering goods to end customers, including the
                  challenging and often costly last-mile delivery.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - 2x2 Grid of Images */}
          <div className="col-md-6">
            <div className="row mt-5">
              {/* First Row of Images */}
              <div className="col-6 mb-3 position-relative">
                <img
                  src="https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1724416744~exp=1724420344~hmac=7d91edf7ec1adb51ffb308cfd7593913e7d77ce246d7ae8fcee7e3111457a411&w=996"
                  alt="Placeholder"
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="overlay">
                  <p className="overlay-text">Transportation</p>
                </div>
              </div>
              <div className="col-6 mb-3 position-relative">
                <img
                  src="https://img.freepik.com/free-photo/view-full-warehouse-with-forklift_181624-44643.jpg?t=st=1724416814~exp=1724420414~hmac=3506397e94e4536dd651753b9385ef4e845afb753ad328ee7c0719e5618d99eb&w=996"
                  alt="Placeholder"
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="overlay">
                  <p className="overlay-text">Warehousing</p>
                </div>
              </div>

              {/* Second Row of Images */}
              <div className="col-6 mb-3 position-relative">
                <img
                  src="https://img.freepik.com/free-photo/handsome-young-man-working-with-papers_1150-7681.jpg?t=st=1724416851~exp=1724420451~hmac=038d0ac090d6542ed87f76c5669f1a01f336352f97d56ea427c68c78f14d3f36&w=996"
                  alt="Placeholder"
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="overlay">
                  <p className="overlay-text">Order Fulfillment</p>
                </div>
              </div>
              <div className="col-6 mb-3 position-relative">
                <img
                  src="https://img.freepik.com/free-photo/happy-deliverer-carrying-packages-while-making-home-delivery-his-customer_637285-1282.jpg?t=st=1724416889~exp=1724420489~hmac=997273860f6d54fdbb739b730141b83dd24b37a6c5d552e96ac038bef33836b8&w=996"
                  alt="Placeholder"
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="overlay">
                  <p className="overlay-text">Distribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x500.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 ">
              <h3 className="text-primary fw-bold mb-3">
                Major Challenges in the Logistics Sector !
              </h3>
              <p className="">
                The logistics sector faces numerous challenges as it navigates
                the complexities of global supply chains, fluctuating demand,
                and evolving customer expectations. Managing these challenges
                requires careful planning, advanced technology, and strategic
                partnerships. Key challenges include:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Supply Chain Visibility:</span>
                    Lack of real-time visibility into supply chain operations
                    can lead to inefficiencies and delays.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Inventory Management:</span>
                    Balancing inventory levels to meet demand while minimizing
                    excess stock and storage costs is a complex task.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Route Optimization:</span>
                    Efficiently planning and optimizing delivery routes to
                    reduce transportation costs and improve delivery times is a
                    challenge.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Data Integration:</span>
                    Integrating data from various sources and systems to gain
                    actionable insights and improve decision-making is often
                    difficult.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Regulatory Compliance:</span>
                    Navigating complex regulatory requirements and ensuring
                    compliance across different regions can be challenging.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
                How Digitalization Solving Logistics Challenges ?
              </h3>
              <p>
                Digitalization is revolutionizing the logistics sector by
                addressing these key challenges:
              </p>

              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Enhanced Visibility:</span> IoT
                    and tracking technologies provide real-time visibility into
                    shipments and inventory, improving transparency and
                    coordination.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Intelligent Inventory Management:
                    </span>{" "}
                    Advanced analytics and AI help predict demand and optimize
                    inventory levels, reducing costs and enhancing efficiency.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Route Optimization Solutions:
                    </span>{" "}
                    Digital tools and algorithms optimize delivery routes,
                    reducing fuel consumption, improving delivery times, and
                    minimizing costs.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Seamless Data Integration:</span>{" "}
                    Integrated platforms and data analytics unify information
                    from various sources, providing actionable insights and
                    improving decision-making.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Automated Compliance:</span>{" "}
                    Digital solutions automate compliance processes, ensuring
                    adherence to regulatory requirements and reducing manual
                    effort.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-md-end mt-4 mt-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x500.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 ">
              <h3 className="text-primary fw-bold mb-3">
                How We Can Support the Logistics Industry ?
              </h3>
              <p className="">
                MetroXone Tech offers a range of IT solutions tailored to the
                logistics sector’s needs:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Real-Time Tracking Systems:</span>{" "}
                    Implement advanced tracking systems that provide real-time
                    updates on shipments and inventory, enhancing visibility and
                    control.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      AI-Driven Inventory Solutions:
                    </span>{" "}
                    Utilize AI and machine learning to manage inventory more
                    efficiently, predict demand, and optimize stock levels.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Route Optimization Tools:</span>{" "}
                    Deploy route optimization software to enhance delivery
                    efficiency, reduce costs, and improve customer satisfaction.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Integrated Data Platforms:</span>{" "}
                    Our solutions integrate data from multiple sources to
                    provide a unified view of operations and support data-driven
                    decision-making.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Compliance Management Systems:
                    </span>{" "}
                    Ensure regulatory compliance with automated systems that
                    simplify and streamline adherence to complex regulations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5 mt-5 mb-4">
        <div className="container">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-6  mt-5  half-underline"
              style={{ marginBottom: "2rem" }}
            >
             Key Features for the Logistics Industry
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto">
              <div
                className="p-5 bg-white shadow  rounded"
                style={{ width: "100%", height: "auto" }}
              >
                <div className="media feature-card">
                  <h3 className="text-primary fw-normal mb-3">
                  Advanced 3PL Logistics Services
                  </h3>
                  <div className="media-body ml-3">
                    <div className="blockquote border-0 p-0">
                      <p className="font-italic lead">
                      Our 3PL (Third-Party Logistics) services offer comprehensive solutions for warehousing, distribution, and fulfillment, optimizing your supply chain and reducing operational costs. Our expertise in 3PL logistics ensures efficient management of your logistics needs, from inventory handling to delivery, providing you with scalable and flexible solutions tailored to your business requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logistic;
