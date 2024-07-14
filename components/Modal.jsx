import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaCalendarAlt } from "react-icons/fa";
const ModalComponent = ({ btn, handleShow, handleClose, show }) => {
  // State hooks for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [adultsNumber, setAdultsNumber] = useState(1);
  const [status, setStatus] = useState("");

  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const [ticketsNumber, setTicketsNumber] = useState(0);
  const [ticketsPrice, setTicketsPrice] = useState(280);

  const [childsNumber, setChildsNumber] = useState(0);

  function CustomInput({ value, onClick, onChange }) {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
          onClick={onClick}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <FaCalendarAlt onClick={onClick} /> {/* Icon inside input group */}
          </span>
        </div>
      </div>
    );
  }
  // const handleTicketsNumberChange = () => {

  // };
  useEffect(() => {
    setTicketsNumber(Number(adultsNumber) + Number(childsNumber / 2));
  }, [adultsNumber, childsNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      mobileNumber,
      emailAddress,
      ticketsNumber,
      adults: adultsNumber,
      children: childsNumber,
      message,
      totalPrice: ticketsNumber * ticketsPrice,
      selectedDate: startDate.toISOString(),
    };

    try {
      const response = await fetch(
        "https://api.cleoparksharm.com/api/order/createOrder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      setStatus("Form submitted successfully");
      setFirstName("");
      setLastName("");
      setMobileNumber("");
      setEmailAddress("");
      setMessage("");
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setStatus("There was an error submitting the form:");
      handleClose();
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      {btn}

      <Modal show={show} onHide={handleClose} style={{ zIndex: "9999999999" }}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Book Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-between">
              <Form.Group
                className="col-5 mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="col-5 mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between">
              <Form.Group
                className=" mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="01*********"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Label className="me-3 ">Select Date</Form.Label>
              <DatePicker
                className="col-12"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInput />}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              {" "}
              <Form.Group
                className="mb-3 col-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Adults (13+)</Form.Label>
                <Form.Control
                  type="number"
                  value={adultsNumber}
                  onChange={(e) => setAdultsNumber(e.target.value)}
                  className="py-0"
                  placeholder="Adult Number"
                  size="lg"
                  required
                  min={0}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Child to 13</Form.Label>
                <Form.Control
                  type="number"
                  value={childsNumber}
                  onChange={(e) => setChildsNumber(e.target.value)}
                  className="py-0"
                  placeholder="Child Number"
                  size="lg"
                  required
                  min={0}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-4"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Tickets Number</Form.Label>

                <Form.Control
                  disabled
                  type="text"
                  value={ticketsNumber}
                  className="py-0 text-bg-light fw-bold f fs-5"
                  placeholder="Tickets Number"
                  size="lg"
                  required
                />
              </Form.Group>
            </div>

            {/* <h3 className="px-0 py-3 m-0 fs-5 text-center">
              Price: {ticketsNumber * ticketsPrice} 
              {ticketsNumber === 0 ? "" : "LE"}
            </h3> */}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Your Message Here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="bg-main col-4 mx-auto bg-primary fs-5"
              variant="primary"
              onClick={handleShowModal}
            >
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{
          zIndex: "9999999999",
          top: "40%",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">{status}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
