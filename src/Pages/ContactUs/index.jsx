import React from "react";
import "./style.css";
import contact from "../../Assests/images/contact.png";
import mail from "../../Assests/Icons/mail.svg";
import phone from "../../Assests/Icons/phone.svg";
import WhatsAppButton from "../../Layout/wp";

const Contactus = () => {
  return (
    <div>
      <div className="contact">
        <div></div>
        <div></div>

        <div>
          <img src={contact} alt="avr img" />
        </div>
        <div></div>
      </div>
      <div className="contact-text">
        <div className="contact-text-1">Let’s Get</div>
        <div className="contact-text-2">
          in <span className="contact-underline">touch</span>
        </div>

        <div className="contact-text-3">
          <div>Don’t be late</div>
          <div>to say hi to us !</div>
        </div>
        <div>
          <div className="contactus1">
            <span>
              <img src={phone} alt="avr img" height={20} width={20} />
            </span>
            <span className="left-pad1  ">
              <WhatsAppButton
                phoneNumber="+91 9207987475"
                message="Hello,Is this AVR VISION "
              />
    
            </span>
          </div>
          <div className="contactus2">
            <span>
              <img src={mail} alt="avr img" height={20} width={20} />
            </span>
            <span className="left-pad">
              <a href="https://mail.google.com/" className="gmail-link">
                avrvisions@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
