import { Link } from "@nextui-org/react";
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
  const [clicked, setClicked] = useState(true);
  return (
    <a
      href={`#${label}`}
      className={`ref-link`}
      onClick={() => setClicked(true)}
    >
      <div className={`line`}></div>
      {label}
    </a>
  );
}
export default RefLinkContainer;
