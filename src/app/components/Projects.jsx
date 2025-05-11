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
    category: "UX design",
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
              <div 
                key={project.id} 
                className="group flex flex-col border-primary/50 border-2 p-3 rounded-xl 
                  hover:bg-white/5 transition-all duration-500 hover:border-primary
                  hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm
                  relative overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    className="rounded-lg h-56 w-full object-cover transition-all duration-500 
                      group-hover:scale-110 group-hover:rotate-1" 
                    loading="lazy" 
                    src={project.img} 
                    alt={project.img} 
                  />
                </div>
                <div className="w-full relative z-10">
                  <div className="px-4 my-4">
                    <span className="text-xs text-primary/80 font-medium tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-medium mt-2 group-hover:text-primary 
                      transition-colors duration-300">
                      {project.title}
                    </h4>
                    <button 
                      className="mt-4 px-4 py-2 border border-primary/50 text-primary/80 
                        hover:border-primary hover:text-primary transition-all duration-300 
                        flex items-center gap-2 text-sm hover:gap-3"
                    >
                      Live <span className="transition-all duration-300">{"→"}</span>
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
