import { NF_LOGO, USER_IMG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";

const Header = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen flex justify-between  bg-gradient-to-b from-black">
      <img className="w-64 pl-16 pt-6" src={NF_LOGO} alt="Netflix Logo" />
      <img onClick={logout} className="w-32 pr-16 pt-6 cursor-pointer" src={USER_IMG} alt="User" />
    </div>
  );
};

export default Header;
