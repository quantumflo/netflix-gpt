import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/browse");
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
