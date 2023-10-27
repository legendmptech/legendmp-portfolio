import React from "react";
import { CircularProgress } from "@nextui-org/react";

function LoadingPage(props) {
  return (
    <div
      className="text-center flex flex-row justify-center content-center w-full"
      style={{ height: "100vh" }}
    >
      <div className="flex flex-col justify-center">
        <CircularProgress size="lg" aria-label="Loading..." />
        <p>Loading ...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
