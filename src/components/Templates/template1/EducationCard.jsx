import { Card, CardBody, Divider } from "@nextui-org/react";
import { useState } from "react";
// import Icon from "../Icon";

/**
 *
 * @param type : school,college
 * @param place : name of the site
 * @param std : class 12 or class 10 [if type == school]
 * @param degree : BA,MA,...
 * @param branch : Mathematics, Computer Science
 * @param percent : 100%
 * @param start : commencement of the education
 * @param end : end of the education
 * @returns
 */
function EducationCard(props) {
  const {
    type,
    place,
    degree,
    branch,
    percent,
    start,
    end,
    std,
    // onEducationOpen,
    // setCurrentModalProps,
    isDark
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  // const handleOpenModal = () => {
  //   setCurrentModalProps({
  //     ...props,
  //   });
  //   onEducationOpen();
  // };
  return (
    <Card
      className="aep-card text-black-500"
      radius={isDark ? "sm" : isHovered ? "sm" : "none"}
      shadow={isDark ? "md" : isHovered ? "md" : "none"}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <CardBody>
        <div className="flex flex-row justify-between content-center">
          <p style={{ fontWeight: "bold" }}>
            {type === "school" ? std : degree}
            {type === "college" && " " + branch}
          </p>
          {/* <Icon
            Icon={GrEdit}
            size="md"
            color="blue"
            onclick={handleOpenModal}
          /> */}
        </div>
        <Divider />
        <p style={{ fontStyle: "italic" }}>{place}</p>
        <p>
          {type === "school" ? start : start + " - " + end} | {percent}%
        </p>
      </CardBody>
    </Card>
  );
}
export default EducationCard;
