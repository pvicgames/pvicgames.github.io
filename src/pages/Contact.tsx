//import React from "react";
import ActualPage from "../components/global/ActualPage";
import PierreModel from "../components/PierreModel";

const Contact = () => {
  return (
    <ActualPage>
      <div className="xl:min-h-screen flex items-center justify-center">
        <PierreModel />
      </div>

      <div className="xl:min-h-screen flex flex-col content-center justify-center">
        <div>
          <h1 className="text-7xl text-pvic-blue font-adlib">Contact Us.</h1>
          <p className="font-helvetica text-justify pt-3 pb-5">
            reach out — let’s turn imagination into reality
          </p>

          <ul className="font-helvetica font-bold text-pvic-blue mt-5">
            <li className="hover:underline">
              <a href="mailto:contact.pvicvg@gmail.com">
                contact.pvicvg@gmail.com
              </a>
            </li>
            <li className="hover:underline">
              <a
                href="https://www.linkedin.com/company/pvic-games/"
                target="_blank"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ActualPage>
  );
};

export default Contact;
