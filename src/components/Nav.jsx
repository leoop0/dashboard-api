import { Box, Heading, Spacer } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Nav() {
  const colorMode = useColorMode();
  return (
    <Box p={4} shadow="md" d="flex">
      <Link to="/">
        <Heading>Dashboard</Heading>
      </Link>
      <Spacer />
      <Menu>
        <MenuButton mr={4} as={Button} rightIcon={<ChevronDownIcon />}>
          Exp
        </MenuButton>
        <MenuList>
          <Link to="/pokemon">
            <MenuItem>Pokemon</MenuItem>
          </Link>
          <Link to="/meteo">
            <MenuItem>Meteo</MenuItem>
          </Link>
          <Link to="/minecraft">
            <MenuItem>Minecraft</MenuItem>
          </Link>
          <Link to="/github">
            <MenuItem>Github</MenuItem>
          </Link>
          {/* <Link to="/stage">
            <MenuItem>Stage</MenuItem>
          </Link> */}
        </MenuList>
      </Menu>
      <IconButton
        icon={colorMode.colorMode === "dark" ? <FiSun /> : <FiMoon />}
        onClick={() => {
          if (colorMode.colorMode === "dark") {
            colorMode.setColorMode("light");
          } else {
            colorMode.setColorMode("dark");
          }
        }}
      ></IconButton>
    </Box>
  );
}

export default Nav;
