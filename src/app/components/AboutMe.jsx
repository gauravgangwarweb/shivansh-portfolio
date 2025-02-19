import React from "react";

const AboutMe = () => {
  return (
    <div className="relative">
      <div className="w-full lg:max-w-[1025px] mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3 lg:gap-8">
          <div>
            <div className="w-full flex items-center gap-2">
              <h3 className="text-[32px] font-semibold">
                <span className="text-primary">#</span>about me
              </h3>
              <hr className="bg-primary w-1/3 lg:w-1/2 h-[2px] border-0" />
            </div>
            <div className="text-gray-500 mt-8">
              <p className="text-[25px] ">"Hey, I'm Shivansh Gangwar!</p>
              <p className="text-xl mt-4">A UI/UX designer passionate about crafting seamless digital experiences that look great and feel even better. When I'm not obsessing over pixels and user flows, I dive into the world of forex trading—just a little bit to keep things exciting. Always exploring, always learning!"</p>
            </div>
            <div className="flex justify-center mt-16">
                <img className="hidden lg:block" loading="lazy" src="/about/illustration.png" alt="illustration" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              loading="lazy"
              src="/about/profile-pic.png"
              alt="profile-pic"
            />
          </div>
        </div>
      </div>
      <img className="hidden lg:block absolute left-0 top-40" loading="lazy" src="about/rectangle.png" alt="square" />
      <img className="hidden lg:block absolute right-0 top-72" loading="lazy" src="about/dots.png" alt="square" />
    </div>
  );
};

export default AboutMe;
