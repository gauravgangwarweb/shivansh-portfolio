import React from "react";
import PixelCard from "../../ui/PixelCard";

const projectsData = [
  {
    id: 1,
    img: "/projects/project-1.jpg",
    category: "UI design",
    title: "Don Clothing",
    link: "codekrafter.xyz",
  },
  {
    id: 2,
    img: "/projects/project-2.png",
    category: "UI design",
    title: "Code Krafter",
    link: "codekrafter.xyz",
  },
  {
    id: 3,
    img: "/projects/project-3.png",
    category: "UI design",
    title: "siella Medical",
    link: "codekrafter.xyz",
  },
];

const Projects = () => {
  return (
    <div className="relative">
      <div className="max-w-[1025px] mx-auto mt-10">
        <div className="w-full flex items-center gap-2">
          <h3 className="text-[32px] font-semibold">
            <span className="text-primary">#</span>projects
          </h3>
          <hr className="bg-primary w-1/2 h-[2px] border-0" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {projectsData.map((project) => {
            return (
              <div key={project.id} className="flex flex-col border">
                <img loading="lazy" src={project.img} alt={project.img} />
                <PixelCard className="w-full h-full" variant="pink">
                  <div className="absolute w-full">
                    <p className="text-base text-gray-500 p-2 border-b">
                      {project.category}
                    </p>
                    <div className="px-4 my-4">
                      <h4 className="text-2xl font-medium">{project.title}</h4>
                      <button className="w-24 border border-primary py-1 mt-2">
                        {"Live <~>"}
                      </button>
                    </div>
                  </div>
                </PixelCard>
              </div>
            );
          })}
        </div>
      </div>
      <img
        className="hidden md:block absolute bottom-0 right-0"
        loading="lazy"
        src="/projects/rectangle.png"
        alt="rectangle"
      />
    </div>
  );
};

export default Projects;
