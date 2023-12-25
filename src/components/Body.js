import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const u = auth.currentUser;
        // User is signed in
        dispatch(
          login({
            uid: u.uid,
            email: u.email,
            displayName: u.displayName,
          })
        );
        // not working bcz on refresh the redux state is lost so wont ever navigate to /gpt-search
        // how can i do this
        gptSearch? navigate("/gpt-search") : navigate("/browse");

      } else {
        // User is signed out
        dispatch(logout());
         navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="body">
      <Outlet />
    </div>
  );
};

export default Body;
