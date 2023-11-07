import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
const useAuth = () => {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return { currentUser };
};

export default useAuth;
