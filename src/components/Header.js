import { NF_LOGO, USER_IMG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user);

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="absolute z-10 w-screen flex justify-between  bg-gradient-to-b from-black">
      <div><img className="w-64 pl-16 pt-6 bg-transparent" src={NF_LOGO} alt="Netflix Logo" /></div>
      {isLoggedIn && <img onClick={logout} className="w-32 pr-16 pt-6 cursor-pointer" src={USER_IMG} alt="User" />}
    </div>
  );
};

export default Header;
