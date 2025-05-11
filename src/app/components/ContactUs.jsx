import React from "react";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="w-full lg:max-w-[1025px] mx-auto mt-32">
        <div className="w-full flex items-center gap-2">
          <h3 className="text-[32px] font-semibold">
            <span className="text-primary">#</span>contact
          </h3>
          <hr className="bg-primary w-1/3 h-[2px] border-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="">
                <p className="font-medium text-gray-500">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="w-full md:w-[320px] border border-primary/50 rounded-sm p-4
                    group hover:bg-white/5 transition-all duration-500 hover:border-primary
                    hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm">
                    <p className="font-semibold text-gray-500 group-hover:text-primary 
                        transition-colors duration-500">Message me here</p>
                    <span className="flex items-center gap-2 text-gray-500 mt-2 
                        group-hover:text-gray-300 transition-colors duration-500">
                        <img src="contact/email-logo.png" alt="email-logo" 
                            className="transition-transform duration-500 group-hover:scale-110" />
                        <p>shivanshgang2004@gmail.com</p>
                    </span>
                </div>
            </div>
        </div>
      </div>
      <img className="hidden lg:block absolute bottom-0 left-0" loading="lazy" src="contact/dots.png" alt="dots" />
    </div>
  );
};

export default ContactUs;
