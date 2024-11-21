import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function ContactUs() {
  return (
    <>
      <div className="contactUs">
        <h3 style={{ fontWeight: "bolder" }}>Contact Us</h3>
        <p style={{ marginTop: "18px" }}>
          <ImLocation2 />
          &nbsp;&nbsp; tdi-kingsbury,c-block,kundli,sonipat
        </p>
        <p>
          <MdEmail />
          &nbsp;&nbsp; dakshchhipa1001@gmail.com
        </p>
        <p>
          <AiFillPhone />
          &nbsp;&nbsp; 7665562122
        </p>
      </div>
    </>
  );
}
export default ContactUs;
