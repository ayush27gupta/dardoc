import React, { useRef, useState } from "react";

const AppointmentCards = (props) => {
  const data = {
    name: "Lab Results Consultation",
    patientName: "John Doe",
    date: "2024-12-15",
    time: "10:00 AM",
    duration: "30 minutes",
    bookingId: "ABC123",
  };
  const { appointCards } = props;
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  const handleCopy = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="appointment-cards-container">
      {appointCards?.map((item, index) => (
        <div className="appointment-card">
          <div className="appoint-card-name-header">
            <div className="appoint-card-name">{item?.name}</div>
            <div className="appoint-card-patient">
              <div className="appoint-with">with</div>
              <div className="appoint-card-image">
                <img
                  src={item?.img}
                  alt="None"
                  className="appoint-card-image"
                  height="20"
                  width="20"
                />
              </div>
              <div className="appoint-card-patient-name">
                {item?.patientName}
              </div>
            </div>
          </div>
          <div className="appoint-book-details">
            <div className="d-flex justify-content-between align-items-center w-75 mt-3">
              <div className="appoint-book">
                <div className="appoint-book-det-header">Date</div>
                <div className="appoint-book-det-value">{item?.date}</div>
              </div>
              <div className="appoint-book">
                <div className="appoint-book-det-header">Time</div>
                <div className="appoint-book-det-value">{item?.time}</div>
              </div>
              <div className="appoint-book">
                <div className="appoint-book-det-header">Duration</div>
                <div className="appoint-book-det-value">{item?.duration}</div>
              </div>
              <div className="appoint-book">
                <div className="appoint-book-det-header">Booking Id</div>
                <div className="appoint-book-det-value">
                  {item?.bookingId}
                  <i
                    className={`fa fa-copy ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    aria-hidden="true"
                  />
                  {/* {copied && <span className="copied-message">Copied!</span>} */}
                </div>

                <textarea
                  ref={textAreaRef}
                  value={item?.bookingId}
                  readOnly
                  className="hidden-textarea"
                />
              </div>
            </div>
          </div>
          <div className="appoint-call-btn"></div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCards;
