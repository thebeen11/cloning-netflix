import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listerner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setuser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setuser(null);
      }
    });
    return () => listerner;
  }, []);
  return { user };
}
