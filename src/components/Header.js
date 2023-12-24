import { NF_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black">
      <img className="w-64 pl-16 pt-6" src={NF_LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
