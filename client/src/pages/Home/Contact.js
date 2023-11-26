import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const contact = {
        name:"Parth Upman",
        gender:"Male",
        email:"parthupman@gmail.com",
        country:"INDIA"
    }
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]  mx-20 px-20 ">
          <dotlottie-player src="https://lottie.host/3e1b5d6f-7cc0-4578-8607-823713bf326b/Uqm3O2kDUl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;