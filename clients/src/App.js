import React, { useEffect, useState } from "react";
import { UidContext } from "./Components/AppContext";
import Routes from "./Components/Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import { getAdmin } from "./actions/admin.action";

const App = () => {
  const [uid, setUid] = useState(null);
  const [uidAdmin, setUidAdmin] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  //Administrateur //
  useEffect(() => {
    const fetchTokenAdmin = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}adminjwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUidAdmin(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchTokenAdmin();

    if (uidAdmin) dispatch(getAdmin(uidAdmin));
  }, [uidAdmin, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
