import { NF_LOGO, USER_IMG, HOME, OPEN_AI_LOGO, OPEN_AI_LOGO_2 } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleGptSearch } from "../redux/gptSlice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user);
  const isGptSearch = useSelector((state) => state.gpt.gptSearch);

  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="absolute z-10 w-screen flex justify-between  bg-gradient-to-b from-black">
      <div>
        {/* TODO: Route to Home. setGptSearch to false action is needed */}
        {/* <Link to="/browse" onClick={handleGptSearchClick}> */} 
          <img className="w-64 pl-16 pt-6 bg-transparent" src={NF_LOGO} alt="Netflix Logo" />
        {/* </Link> */}
      </div>
      {isLoggedIn && (
        <div className="flex items-center">
          {isGptSearch ? (
            <Link to="/browse">
              <button
                onClick={handleGptSearchClick}
                className="mt-6 h-16 rounded-sm mr-4 p-4 zoom gptButton cursor-pointer bg-darkseagreen text-white font-medium inline"
              >
                <img src={HOME} alt="Open AI" className="w-12 inline mr-2" />
                HOME
              </button>
            </Link>
          ) : (
            <Link to="/gpt-search">
              <button
                onClick={handleGptSearchClick}
                className="mt-6 h-16 rounded-sm mr-4 p-4 zoom gptButton cursor-pointer bg-darkseagreen text-white font-medium inline"
              >
                <img src={OPEN_AI_LOGO} alt="Open AI" className="w-10 inline mr-2" />
                GPT Search
              </button>
            </Link>
          )}
          <img
            onClick={logout}
            className="w-32 pr-16 pt-6 cursor-pointer"
            src={USER_IMG}
            alt="User"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
