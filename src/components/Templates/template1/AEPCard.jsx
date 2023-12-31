import React, { useState } from "react";
import {
  Card,
  CardBody,
  Divider,
  Link,
} from "@nextui-org/react";

/**
 *
 * @param type : experience, project , Achievement
 * @param title : title of the job, project or Achievement
 * @param description : description of the job, project or Achievement
 * @param url : url of the project or Achievement
 * @param company : name of the company if [type === 'experience']
 * @param start : start date of the experience or project
 * @param end : start date of the experience or project
 * @returns
 */
function AEPCard(props) {
  const {
    type,
    title,
    desc,
    url,
    company,
    // start,
    // end,
    // onAEPModalOpen,
    // setCurrentModalProps,
    // isDark
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  // const handleOpenModal = () => {
  //   onAEPModalOpen();
  //   setCurrentModalProps({
  //     ...props,
  //   });
  // };
  return (
    <ConditionalWrapper
      wrapper={(children) => (
        <Link isExternal href={url}>
          {children}
        </Link>
      )}
      type={type}
    >
      <Card
        className="aep-card text-black-500"
        radius={"sm"}
        shadow={"md"}
        // radius={isDark ? "sm" : isHovered ? "sm" : "none"}
        // shadow={isDark ? "md" : isHovered ? "md" : "none"}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardBody>
          <div className={`${type === "project" ? "flex flex-row gap-2" : ""}`}>
            <p className="head2" style={{ color: "black" }}>
              {title}
            </p>
            <div className="flex flex-row gap-2">
              {type === "experience" && <p className="text-xl text-black">{company}</p>}
              {/* {type !== "achievement" && (
                <p className="subtitle">
                  [{start} - {end}]
                </p>
              )} */}
              {url && (
                <span
                  class={`material-symbols-outlined`}
                >
                  north_east
                </span>
              )}
            </div>
          </div>
          {isHovered && <Divider />}
          <p className="para" style={{ zIndex: 0 }}>
            {desc}
          </p>
        </CardBody>
      </Card>
    </ConditionalWrapper>
  );
}
const ConditionalWrapper = ({ type, wrapper, children }) =>
  type === "project" ? wrapper(children) : children;
export default AEPCard;
