import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="icon">
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://www.linkedin.com/in/lacey-trokey-3b2837106/"
        />
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://github.com/ltrokey"
        />
        <SocialIcon
          bgColor="black"
          fgColor="white"
          url="https://www.facebook.com/zltrokey"
        />
      </div>
    </footer>
  );
}
