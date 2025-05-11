import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full lg:max-w-[1025px] mx-auto mt-10 border-t border-primary">
        <div className="flex items-center justify-between mt-7 lg:mt-0">
          <img
            className="w-32 lg:w-[200px]"
            loading="lazy"
            src="footer/footer-logo.png"
            alt="footer-logo"
          />
          <div
            className="w-32 lg:w-[173px] border border-primary/50 rounded-sm p-3
            group hover:bg-white/5 transition-all duration-500 hover:border-primary
            hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm"
          >
            <p className="text-2xl font-medium group-hover:text-primary transition-colors duration-500">
              Media
            </p>
            <div className="flex gap-4 items-center mt-2">
              <Link
                href="https://www.instagram.com/shivansh_uiux?igsh=MWl1eXFnaGJkZjRnNg=="
                className="transition-transform duration-500 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src="/footer/Instagram.png"
                  alt="linkedin"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shivansh-gangwar/"
                className="transition-transform duration-500 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src="/footer/Linkedin.png"
                  alt="instagram"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-xl text-center mt-16">
          © 2025 Shivansh Gangwar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
