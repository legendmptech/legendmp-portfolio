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
  Chip,
} from "@nextui-org/react";
import "../App.css";
import Particle from "../components/Particle";
import NavTemplate1 from "../components/Templates/template1/Navbar";
import AEPCard from "../components/Templates/template1/AEPCard";
import RefLinkContainer from "../components/RefLinkContainer";
import EducationCard from "../components/Templates/template1/EducationCard";

function Template1(props) {
  const { data } = props;
  const [education, setEducation] = useState(data.education);
  const [skills, setSkills] = useState(data.skills);
  const [projects, setProjects] = useState(data.projects);
  const [experiences, setExperiences] = useState(data.experiences);
  const [achievements, setAchievements] = useState(data.achievements);
  const [socialLinks, setSocialLinks] = useState(data.socialLinks);
  const [sections, setSections] = useState(data.sections);
  useEffect(() => {
    console.log("----------------->", education);
  }, []);
  return (
    <div className="page">
      <NavTemplate1 sections={data?.sections} />
      <div className="page-container flex flex-row md:flex-col ">
        <div className="w-1/4 temp-con1">
          <div className="flex flex-col w-full justify-center items-center p-3">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              style={{ width: "140px", height: "140px" }}
            />
            <div className="flexyC headline">
              <p id="About">
                Hello
                <span style={{ fontSize: "40px" }} className="hand">
                  👋🏻
                </span>
              </p>
              <br />
              <p>
                I`m{" "}
                <b>
                  <span>{data?.personalDetails?.name},</span>
                </b>{" "}
                {data?.personalDetails?.oneLiner}
              </p>
              <br />
            </div>
          </div>
          <RefLinkContainer refData={data?.sections} />
          <Button
            as={Link}
            color="secondary"
            showAnchorIcon
            variant="solid"
            onClick={() => {
              const subject = "I saw your portfolio";
              const body = "I wanted to get in touch with you...";
              const mailtoLink = `mailto:${
                data?.personalDetails?.email
              }?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;

              window.location.href = mailtoLink;
            }}
          >
            Get in touch
          </Button>
        </div>
        <div style={{ width: "10%" }}></div>
        <div className="w-3/4 temp-con2 h-full">
          <div className="px-5">
            <h1 className="heading" id="About">
              About
            </h1>
            <p id="About">{data.personalDetails.about}</p>
          </div>
          {sections.includes("Education") && education?.list?.length != 0 && (
            <div className="section" id="Education">
              <h1 className="heading">Education</h1>
              <div className="flex flex-col gap-3 pt-5">
                {education?.list?.map((id) => {
                  return <EducationCard {...education?.data[id]} />;
                })}
              </div>
            </div>
          )}
          {sections.includes("Skills") && (
            <div className="section" id="Skills">
              <h1 className="heading">Skills</h1>
              <div className="flex flex-col gap-3 pt-5">
                <Tabs aria-label="options">
                  {skills?.["soft skills"].length !== 0 && (
                    <Tab key="soft skills" title="Soft skills">
                      <Card>
                        <CardBody>
                          <div className="flex flex-col gap-2">
                            {skills?.["soft skills"]?.map((title, k) => (
                              <Chip color="secondary">{title}</Chip>
                            ))}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                  {skills?.["computer skills"].length !== 0 && (
                    <Tab key="computer skills" title="Computer skills">
                      <Card>
                        <CardBody>
                          <div className="flex flex-col gap-2">
                            {skills?.["computer skills"]?.map((title, k) => (
                              <Chip color="secondary">{title}</Chip>
                            ))}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                  {skills?.["software skills"].length !== 0 && (
                    <Tab key="software skills" title="Software skills">
                      <Card>
                        <CardBody>
                          <div className="flex flex-col gap-2">
                            {skills?.["software skills"]?.map((title, k) => (
                              <Chip color="secondary">{title}</Chip>
                            ))}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                </Tabs>
              </div>
            </div>
          )}
          {sections.includes("Projects") && projects?.list?.length != 0 && (
            <div className="section" id="Projects">
              <h1 className="heading">Projects</h1>
              <div className="flex flex-col gap-3 pt-5">
                {projects["list"].map((id) => {
                  return <AEPCard {...projects["data"][id]} />;
                })}
              </div>
            </div>
          )}
          {sections.includes("Experience") &&
            experiences?.list?.length != 0 && (
              <div className="section" id="Experience">
                <h1 className="heading">Experiences</h1>
                <div className="flex flex-col gap-3 pt-5">
                  {experiences?.map((id) => {
                    return <AEPCard {...experiences["data"][id]} />;
                  })}
                </div>
              </div>
            )}
          {sections.includes("Achievements") &&
            achievements?.list?.length != 0 && (
              <div className="section" id="Achievements">
                <h1 className="heading">Achievements</h1>
                <div className="flex flex-col gap-3 pt-5">
                  {achievements?.list.map((id) => {
                    return <AEPCard {...achievements?.data[id]} />;
                  })}
                </div>
              </div>
            )}
          {sections.includes("Social Links") && socialLinks?.length != 0 && (
            <div className="flex flex-row gap-3" id="Social Links">
              <h1 className="heading">Social Links</h1>
              {socialLinks?.map((props) => {
                return (
                  <Link href={props.url}>
                    <Chip color="success">{props.label}</Chip>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Particle />
    </div>
  );
}

export default Template1;
