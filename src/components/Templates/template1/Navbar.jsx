import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { SunIcon } from "../../icons/SunIcon";
import { MoonIcon } from "../../icons/MoonIcon";

function NavTemplate1(props) {
  const { sections } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{ zIndex: 120 }}
      className="nav-bar"
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
        {/* <Switch
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        /> */}
      </NavbarContent>

      <NavbarMenu>
        {sections?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              className="w-full"
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
  );
}

export default NavTemplate1;
