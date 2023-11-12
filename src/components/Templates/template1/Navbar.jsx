import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle, Link,
  // Switch
} from "@nextui-org/react";
import React from "react";
// import { Link } from "react-router-dom";
// import { SunIcon } from "../../icons/SunIcon";
// import { MoonIcon } from "../../icons/MoonIcon";

function NavTemplate1(props) {
  const { sections, name } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{ zIndex: 120 }}
      className="nav-bar text-black"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden flex-row justify-between content-between"
      >
        <NavbarBrand>
          <p className="text-inherit">{name}</p>
        </NavbarBrand>
        {/* <Switch
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        /> */}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key={"About"} ><Link href={"#About"} size={"lg"} color="foreground" onClick={() => setIsMenuOpen(false)}>About</Link></NavbarMenuItem>
        {sections?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={`#${item}`}
              size="lg"
              color="foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavTemplate1;
