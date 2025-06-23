import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import { Button, Input } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = "service_qi2tpis";
  const YOUR_TEMPLATE_ID = "template_shckzpk";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        "fSRdAvbSix7arUrKO"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.contactMainContainer}>
      <h2>Contact Me</h2>

      <div className={style.contactContainer}>
        <div className={style.contactLeftDiv}>
          <h4>Reach out and let's work together on something exciting.</h4>
          <div>
            <div className={style.contactIconsDiv}>
              <a
                href="mailto:shubhammrakhonde@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaEnvelope
                  color="#ff6263"
                  size={"40px"}
                  className={style.MainContactIcon}
                />
              </a>
              <div>
                <a
                  href="mailto:shubhammrakhonde@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  shubhammrakhonde@gmail.com
                </a>
              </div>
            </div>

            <div className={style.contactIconsDiv}>
              <a
                href="https://www.linkedin.com/in/shubham-rakhonde-102964166/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin
                  color="#ff6263"
                  size={"40px"}
                  className={style.MainContactIcon}
                />
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/in/shubham-rakhonde-102964166/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  /in/shubham-rakhonde-102964166
                </a>
              </div>
            </div>

            <div className={style.contactIconsDiv}>
              <a href="https://github.com/Shubham0442" target={"_blank"} rel="noreferrer">
                <FaGithub
                  color="#ff6263"
                  size={"40px"}
                  className={style.MainContactIcon}
                />
              </a>
              <div>
                <a href="https://github.com/Shubham0442" target={"_blank"} rel="noreferrer">
                  Shubham0442
                </a>
              </div>
            </div>

            <div className={style.contactIconsDiv}>
              <MdCall
                color="#ff6263"
                size={"40px"}
                className={style.MainContactIcon}
              />
              <div>+91 8390601936</div>
            </div>
          </div>
        </div>

        <div className={style.formRightDiv}>
          <h2 className="right-heading">Messsage me</h2>
          <form ref={form} onSubmit={sendEmail} className={style.formBox}>
            <div className={style.upperBoxInputs}>
              <div className="input-name">
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  variant="outline"
                  bg="white"
                  required
                />
              </div>
              <div className="input-email">
                <Input
                  type="email"
                  name="email"
                  variant="outline"
                  bg="white"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className={style.subjectInputDiv}>
              <Input
                type="text"
                variant="outline"
                bg="white"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className={style.textAreaDiv}>
              <textarea
                cols="30"
                rows="5"
                name="message"
                placeholder="    Message.."
                required
              ></textarea>
            </div>
            <div className="bnbnbn">
              <Button
                size="lg"
                color={"white"}
                mt={"10px"}
                bg={"#ff6263"}
                type="submit"
              >
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
