import React from "react";
import PropTypes from "prop-types"; 
import './support.css'

const Support = (props) => {
  const { items } = props;

  return (
    <div className="support-container-ins">
      <div className="support-header">
        <div className="header-title">Support</div>
        <div>
          <i className="fa fa-arrow-right arrow-rotate"></i>
        </div>
      </div>
      <div className="support-cards">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="support-card">
              <div className="d-flex justify-content-between align-items-center">
                <div>{item.title}</div>
                <div>
                  <i
                    className="fa fa-arrow-right"
                    style={{ color: "#a2a2a2" }}
                  ></i>
                </div>
              </div>
            </div>
            {index < items.length - 1 && <hr className="width-90 m-auto" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Support.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Support;
