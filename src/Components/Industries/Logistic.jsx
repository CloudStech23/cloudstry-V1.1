import React from "react";
import "./Common.css";

function Logistic() {
  return (
    <div>
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
            <a href=" " className="btn btn-danger">
              Learn More
            </a>
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
                Navigating Complexities in Logistics
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
                    <span className="fw-bold">Supply Chain Disruptions:</span>
                    Unforeseen events, such as natural disasters or geopolitical
                    tensions, can cause significant delays and disruptions in
                    the supply chain.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Rising Costs:</span>
                    Increasing fuel prices, labor costs, and regulatory
                    compliance expenses can drive up the overall cost of
                    logistics operations.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Technology Integration:</span>
                    Implementing and integrating new technologies, such as IoT
                    and AI, into existing systems can be complex and costly.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Sustainability Pressure:</span>
                    There is growing demand for environmentally friendly
                    practices, which requires investment in green technologies
                    and sustainable supply chain practices.
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
                Logistic Solutions with Metroxone
              </h3>
              <p>
                Metroxone Tech's logistics platform is engineered to optimize
                the entire logistics process, ensuring efficiency, scalability,
                seamless integration with existing systems, and real-time
                tracking. Our strategic partnerships further solidify our
                position as a leader in driving global trade and economic
                growth.
              </p>

              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Supply Chain Disruptions:</span>
                    Unforeseen events, such as natural disasters or geopolitical
                    tensions, can cause significant delays and disruptions in
                    the supply chain.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Rising Costs:</span>
                    Increasing fuel prices, labor costs, and regulatory
                    compliance expenses can drive up the overall cost of
                    logistics operations.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Technology Integration:</span>
                    Implementing and integrating new technologies, such as IoT
                    and AI, into existing systems can be complex and costly.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Sustainability Pressure:</span>
                    There is growing demand for environmentally friendly
                    practices, which requires investment in green technologies
                    and sustainable supply chain practices.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Enhanced Efficiency:</span>
                    Our platform is designed to optimize every step of the
                    logistics process, from transportation to order fulfillment,
                    ensuring that goods are delivered on time and at the lowest
                    possible cost.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Scalability:</span>
                    As trade volumes increase, particularly with the growth of
                    the India-Middle East Economic Corridor, our platform can
                    scale to meet the demands of both large and small logistics
                    operations.
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
    </div>
  );
}

export default Logistic;
