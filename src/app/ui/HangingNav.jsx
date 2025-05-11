import Link from "next/link";

const HangingNav = () => {
  return (
    <div className="fixed hidden top-0 left-10 lg:flex flex-col items-center z-50">
      <img loading="lazy" src="line.png" alt="line" />
      <Link 
        className="cursor-pointer transition-transform duration-300 hover:scale-110 mt-2" 
        href="https://www.instagram.com/shivansh_uiux?igsh=MWl1eXFnaGJkZjRnNg=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          src="Instagram.png"
          alt="instagram"
          className="w-6 h-6"
        />
      </Link>
      <Link 
        className="cursor-pointer transition-transform duration-300 hover:scale-110 mt-2"
        href="https://www.linkedin.com/in/shivansh-gangwar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          src="Linkedin.png"
          alt="linkedin"
          className="w-6 h-6"
        />
      </Link>
    </div>
  );
};

export default HangingNav;
