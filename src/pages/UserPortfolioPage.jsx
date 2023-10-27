import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { fstore } from "../firebase-config";
import LoadingPage from "./LoadingPage";
import MainTemplatePage from "../pages/MainTemplatePage";
import userData from "./user.json";

function UserPortfolioPage(props) {
  const { id } = useParams();
  const [stateOfData, setStateOfData] = useState("loading"); // failed,loading,success
  let [data, setData] = useState({});
  console.log(id);
  // Getting data from Firestore
  useEffect(() => {
    // const getDataFromStore = async (id) => {
    //   const docRef = doc(fstore, "portfolios", id);
    //   await getDoc(docRef)
    //     .then((snap) => {
    //       setStateOfData("success");
    //       console.log(JSON.stringify(snap.data()));
    //       return snap.data();
    //     })
    //     .catch((err) => {
    //       setStateOfData("failed");
    //       console.log(err);
    //     });
    // };
    // setData(getDataFromStore(id));
    setData(userData);
    setStateOfData("success");
  }, [id]);
  return (
    <div>
      {stateOfData === "loading" ? (
        <LoadingPage />
      ) : (
        <MainTemplatePage data={userData} />
      )}
    </div>
  );
}

export default UserPortfolioPage;
