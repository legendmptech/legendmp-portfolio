import React, { useEffect, useState } from "react";
import TemplateFooter from "../components/templates.footer";
import {
  Link,
  Avatar,
  Card,
  CardBody,
  Button,
  Tab,
  Tabs,
} from "@nextui-org/react";
import "../App.css";
import Particle from "../components/Particle";
import NavTemplate1 from "../components/Templates/template1/Navbar";
import AEPCard from "../components/Templates/AEPCard";

function Template1(props) {
  const { data } = props;
  const [userData, setUserData] = useState();
  let skills = [
    {
      id: "skill1",
      label: "Soft skills",
      content: "Presentation skills",
    },
    {
      id: "skill2",
      label: "Computer skills",
      content: "Python",
    },
    {
      id: "skill3",
      label: "Software skills",
      content: "MS Word",
    },
  ];
  const recipientEmail = "s.mohanprasath19478@gmail.com";
  const subject = "I saw your portfolio";
  const body = "I wanted to get in touch with you...";

  const handleMailtoClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  useEffect(() => {
    setUserData(data);
  }, []);
  return (
    <div className="page">
      <div className="page-container flex flex-row md:flex-col ">
        <div className="w-1/4 temp-con1 h-full">
          <div className="flex flex-col content-center">
            <div className="flex flex-col w-full justify-center items-center p-3">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="flexyC headline">
              <p id="About">
                Hello<span style={{ fontSize: "40px" }}>👋🏻</span>
              </p>
              <br />
              <p>
                I`m{" "}
                <b>
                  <span>Mohan Prasath S,</span>
                </b>{" "}
                a software developer and an aspiring Tech Entrepreneur👩🏻‍💻
              </p>
              <br />
              <Button
                as={Link}
                color="secondary"
                showAnchorIcon
                variant="solid"
                onClick={handleMailtoClick}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <div style={{ width: "10%" }}></div>
        <div className="w-3/4 temp-con2 h-full">
          <div className="">
            <h1 className="heading">Education Details</h1>
            <div className="flex flex-col gap-3 pt-5">
              {userData?.projects["list"].map((id) => {
                return <AEPCard {...userData.projects["data"][id]} />;
              })}
            </div>
          </div>
          <div className="">
            <h1 className="heading">Skills</h1>
            <div className="flex flex-col gap-3 pt-5">
              {userData?.skills?.list?.map(categoryId=>{
                
              })}
            </div>
          </div>
          <div className="">
            <h1 className="heading">Projects</h1>
            <div className="flex flex-col gap-3 pt-5">
              {userData?.projects["list"].map((id) => {
                return <AEPCard {...userData.projects["data"][id]} />;
              })}
            </div>
          </div>
          <div className="">
            <h1 className="heading">Experiences</h1>
            <div className="flex flex-col gap-3 pt-5">
              {userData?.projects["list"].map((id) => {
                return <AEPCard {...userData.projects["data"][id]} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Particle />
    </div>
  );
}

export default Template1;
