import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
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
    id,
    type,
    title,
    desc,
    url,
    company,
    start,
    end,
    onAEPModalOpen,
    setCurrentModalProps,
  } = props;
  const handleOpenModal = () => {
    onAEPModalOpen();
    setCurrentModalProps({
      ...props,
    });
  };
  return (
    <Card style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
      <div className="w-full flex flex-row justify-between content-center"></div>
      <CardBody>
        <div
          className={`${
            type === "project"
              ? "flex flex-row gap-2 justify-center content-center"
              : ""
          }`}
        >
          <p className="head2" style={{ color: "rgba(0,0,0,1)" }}>
            {title}
          </p>
          <div className="flex flex-row gap-2">
            {type === "experience" && <p className="subtitle">{company}</p>}
            {type !== "achievement" && (
              <p className="subtitle">
                [{start} - {end}]
              </p>
            )}
          </div>
        </div>
        <Divider />
        <p className="para" style={{ zIndex: 0 }}>
          {desc}
        </p>
        {url && (
          <>
            <Divider />
            <Link isExternal showAnchorIcon href={url} className="url">
              Visit project
            </Link>
          </>
        )}
      </CardBody>
    </Card>
  );
}
export default AEPCard;
