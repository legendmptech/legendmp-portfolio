import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fstore } from "../firebase-config";
import LoadingPage from "./LoadingPage";
import MainTemplatePage from "../pages/MainTemplatePage";
import Page404 from "./Page404";

function UserPortfolioPage(props) {
  const { id } = useParams();
  const [stateOfData, setStateOfData] = useState("loading"); // failed,loading,success
  let [data, setData] = useState({});
  console.log(id);
  // Getting data from Firestore
  useEffect(() => {
    const getDataFromStore = async (id) => {
      const docRef = doc(fstore, "portfolios", id);
      await getDoc(docRef)
        .then((snap) => {
          setStateOfData("success");
          setData(snap.data());
          return snap.data();
        })
        .catch((err) => {
          setStateOfData("failed");
          console.log(err);
        });
    };
    getDataFromStore(id);
  }, [id]);
  return (
    <div>
      {stateOfData === "loading" && <LoadingPage />}
      {stateOfData === "success" && <MainTemplatePage data={data} />}
      {stateOfData === "failed" && <Page404 />}
    </div>
  );
}

export default UserPortfolioPage;
