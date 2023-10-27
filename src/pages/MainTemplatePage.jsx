import React from "react";
import Template1 from "./Template1";

function MainTemplatePage(props) {
  const { data } = props;
  return <>{data.ui.template == 1 && <Template1 data={data} />}</>;
}

export default MainTemplatePage;
