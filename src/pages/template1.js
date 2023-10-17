import React from "react";
import { SunIcon } from "../components/icons/SunIcon";
import { MoonIcon } from "../components/icons/MoonIcon";
import TemplateFooter from "../components/templates.footer";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Avatar,
  Card,
  CardBody,
  Switch,
  Tab,
  Tabs,
} from "@nextui-org/react";
import "../App.css";
import Particle from "../components/Particle";

function Template1(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Education",
    "Projects",
    "Experience",
    "Connect with Me",
  ];
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

  return (
    <>
      <Particle />
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        style={{ zIndex: 120 }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent
          className="sm:hidden pr-3 flex-row justify-between content-between"
          justify="center"
        >
          <NavbarBrand>
            <p className="text-inherit">Mohan Prasath S</p>
          </NavbarBrand>
          <Switch
            defaultSelected
            size="lg"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Mohan Prasath S</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a
                className="w-full"
                color={index === 2 ? "warning" : "foreground"}
                href={`#${item}`}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="px-5 my-5">
        <div className="flex flex-col w-full justify-center items-center p-3">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            style={{ width: "140px", height: "140px" }}
          />
        </div>
        <div
          style={{ fontSize: "28px", fontWeight: "lighter" }}
          className="t-container"
        >
          <p id="About">
            Hello<span style={{ fontSize: "40px" }}>👋🏻</span>
          </p>
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
        <div className="t-container">
          <h1 id="Education">Education</h1>
          <Card className="flex flex-col ">
            <CardBody>
              <Card className="mb-3">
                <CardBody>
                  <h2>Bachelor of Mathematics</h2>
                  <p style={{ fontStyle: "italic" }}>
                    PSG College of Arts & Science
                  </p>
                  <p>2021 - 2024</p>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody>
                  <h2>High School</h2>
                  <p style={{ fontStyle: "italic" }}>
                    Jaisaradha Matriculation Higher Secondary School
                  </p>
                  <p>2019 - 2021</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h2>Class 10</h2>
                  <p style={{ fontStyle: "italic" }}>
                    Jaisaradha Matriculation Higher Secondary School
                  </p>
                  <p>2019</p>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
        {/* SKILLS_______________________- */}
        <div className="t-container flex w-full flex-col">
          <h1 id="Skills">Skills</h1>
          <Tabs
            aria-label="Dynamic tabs"
            items={skills}
            color="secondary"
            variant="light"
            style={{ zIndex: 25 }}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
        <TemplateFooter />
      </div>
    </>
  );
}

export default Template1;
