import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full lg:max-w-[1025px] mx-auto mt-10 border-t border-primary">
        <div className="flex items-center justify-between mt-7 lg:mt-0">
          <img className="w-32 lg:w-[200px]" loading="lazy" src="footer/footer-logo.png" alt="footer-logo" />
          <div className="w-32 lg:w-[173px] border rounded-sm p-3">
            <p className="text-2xl font-medium">Media</p>
            <div className="flex gap-4 items-center mt-2">
              <Link href="https://www.instagram.com/shivansh_uiux?igsh=MWl1eXFnaGJkZjRnNg==">
                <img loading="lazy" src="/footer/linkedin.png" alt="linkedin" />
              </Link>
              <Link href="https://www.linkedin.com/in/shivansh-gangwar/">
                <img
                  loading="lazy"
                  src="/footer/instagram.png"
                  alt="instagram"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-xl text-center mt-16">© 2025 Shivansh Gangwar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

