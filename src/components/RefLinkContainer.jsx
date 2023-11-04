import React, { useState } from "react";

function RefLinkContainer(props) {
  const { refData } = props;
  return (
    <div className="ref-cont">
      {refData?.map((title, key) => {
        // <Link key={key} isBlock={true}>{refData?.data[id]}</Link>
        return <RefLink label={title} />;
      })}
    </div>
  );
}

function RefLink(props) {
  const { label } = props;
  return (
    <a
      href={`#${label}`}
      className={`ref-link`}
    >
      <div className={`line`}></div>
      {label}
    </a>
  );
}
export default RefLinkContainer;
