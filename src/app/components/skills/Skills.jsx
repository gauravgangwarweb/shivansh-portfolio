import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full lg:max-w-[1025px] mx-auto mt-32">
        <div className="w-full flex items-center gap-2">
          <h3 className="text-[32px] font-semibold">
            <span className="text-primary">#</span>skills
          </h3>
          <hr className="bg-primary w-1/4 h-[2px] border-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
          <img
            className="hidden md:block"
            loading="lazy"
            src="/skills/vectors.png"
            alt="left-vectors"
          />
          <div className="">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start items-center">
              <img src="/skills/icons/figma.png" alt="figma-icon" />
              <img src="/skills/icons/xd.png" alt="figma-icon" />
              <img src="/skills/icons/ai.png" alt="figma-icon" />
              <img src="/skills/icons/ps.png" alt="figma-icon" />
              <img src="/skills/icons/canva.png" alt="figma-icon" />
            </div>
            <div className="flex gap-6 mt-10">
              <div className="w-[178px] border rounded-sm">
                <h6 className="font-semibold border-b p-2">Other</h6>
                <p className="p-2">i can see design in trading chart</p>
              </div>
              <div className="w-[178px] border rounded-sm">
                <h6 className="font-semibold border-b p-2">Tools</h6>
                <div className="p-2">
                  <p>Canva</p>
                  <p>Figma</p>
                  <p>Photoshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
