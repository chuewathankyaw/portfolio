import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css'
import { useForm, ValidationError } from "@formspree/react";

import TrackVisibility from "react-on-screen";
export const Contact = () => {
    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //    message: ''
    // }
    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState('send');
    // const [status, setStatus] = useState({});
    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //         ...formDetails,
    //         [category]: value
    // })
    // }
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result =await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //         setStatus({ success: true, message: 'Message sent successfully' });
    //     } else {
    //         setStatus ({success: false, message: 'Something went wrong, please try again later.'})
    //     }
    // }

    // return (
    //   <section className="contact" id="connect">
    //     <Container>
    //       <Row className="align-items-center">
    //         <Col size={12} md={6}>
    //           <TrackVisibility>
    //             {({ isVisible }) => (
    //               <img
                    
    //                 className={
    //                   isVisible ? "animate__animated animate__zoomIn" : ""
    //                 }
    //                 src={contactImg}
    //                 alt="Contact Us"
    //               />
    //             )}
    //           </TrackVisibility>
    //         </Col>
    //         <Col size={12} md={6}>
    //           <TrackVisibility>
    //             {({ isVisible }) => (
    //               <div
    //                 className={
    //                   isVisible ? "animate__animated animate__fadeIn" : ""
    //                 }
    //               >
    //                 <h2>Get In Touch</h2>
    //                 <form onSubmit={handleSubmit}>
    //                   <Row>
    //                     <Col sm={6} className="px-1">
    //                       <input
    //                         type="text"
    //                         value={formDetails.firstName}
    //                         placeholder="First Name"
    //                         onChange={(e) =>
    //                           onFormUpdate("firstName", e.target.value)
    //                         }
    //                       />
    //                     </Col>
    //                     <Col sm={6} className="px-1">
    //                       <input
    //                         type="text"
    //                         value={formDetails.lastName}
    //                         placeholder="Last Name"
    //                         onChange={(e) =>
    //                           onFormUpdate("lastName", e.target.value)
    //                         }
    //                       />
    //                     </Col>
    //                     <Col sm={6} className="px-1">
    //                       <input
    //                         type="email"
    //                         value={formDetails.email}
    //                         placeholder="Email Address"
    //                         onChange={(e) =>
    //                           onFormUpdate("email", e.target.value)
    //                         }
    //                       />
    //                     </Col>
    //                     <Col sm={6} className="px-1">
    //                       <input
    //                         type="tel"
    //                         value={formDetails.phone}
    //                         placeholder="Phone No."
    //                         onChange={(e) =>
    //                           onFormUpdate("phone", e.target.value)
    //                         }
    //                       />
    //                     </Col>
    //                     <Col>
    //                       <textarea
    //                         row="6"
    //                         value={formDetails.message}
    //                         placeholder="Message"
    //                         onChange={(e) =>
    //                           onFormUpdate("message", e.target.value)
    //                         }
    //                       />
    //                       <button type="submit">
    //                         <span>{buttonText}</span>
    //                       </button>
    //                     </Col>
    //                     {status.message && (
    //                       <Col>
    //                         <p
    //                           className={
    //                             status.success === false ? "danger" : "success"
    //                           }
    //                         >
    //                           {status.message}
    //                         </p>
    //                       </Col>
    //                     )}
    //                   </Row>
    //                 </form>
    //               </div>
    //             )}
    //           </TrackVisibility>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </section>
    // );
  const [state, handleSubmit] = useForm("mjvdkpwy");
  if (state.succeeded) {
    return <p className="thankmsg">Thanks for Contact to me!</p>;
  }
  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col sm={12} className="px-1">
                          <label htmlFor="email">Email Address</label>
                          <input id="email" type="email" name="email" />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </Col>
                        <Col sm={12} className="px-1">
                          <label htmlFor="email">Phone.no</label>
                          <input id="phone" type="text" name="phone" />
                          <ValidationError
                            prefix="Phone"
                            field="number"
                            errors={state.errors}
                          />
                        </Col>
                        <Col sm={12} className="px-1">
                          <label htmlFor="email">Message</label>

                          <textarea id="message" name="message" />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />

                          <button type="submit" disabled={state.submitting}>
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}