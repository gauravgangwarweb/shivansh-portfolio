import Link from "next/link";

const HangingNav = () => {
  return (
    <div className="fixed hidden top-0 left-10 lg:flex flex-col items-center">
      <img loading="lazy" src="line.png" alt="line" />
      <Link href="https://www.instagram.com/shivansh_uiux?igsh=MWl1eXFnaGJkZjRnNg==">
        <img
          className="mt-2"
          loading="lazy"
          src="Instagram.png"
          alt="intsagram"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/shivansh-gangwar/">
        <img
          className="mt-2"
          loading="lazy"
          src="Linkedin.png"
          alt="linkedin"
        />
      </Link>
    </div>
  );
};

export default HangingNav;
