import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const [profile, setprofile] = useState({});
  const [loading, setloading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [profile.displayName]);
  return <SelectProfileContainer user={user} setprofile={setprofile} />;
}