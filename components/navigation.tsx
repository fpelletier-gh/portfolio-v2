import ActiveLink from "./activeLink";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function Navigation({
  scrollHandler,
  pageInView,
  scrollBehavior,
  home,
  ...props
}) {
  const borderColor = useColorModeValue("teal.800", "teal.300");

  const handleLinkClick = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id);

    scrollHandler(id, scrollBehavior);
  };

  return (
    <Flex
      flexDir={["column", "column", "row"]}
      justifyContent={["center", "right"]}
      alignItems="center"
      {...props}
    >
      <ActiveLink
        id="0"
        href="#home"
        borderBottomColor={pageInView === "welcome" ? borderColor : null}
        onClick={handleLinkClick}
        display={home ? { base: "block", md: "block" } : "none"}
        m={4}
        alignSelf="center"
        fontWeight="bold"
      >
        Home
      </ActiveLink>
      <ActiveLink
        id="1"
        href="#about"
        borderBottomColor={pageInView === "about" ? borderColor : null}
        onClick={handleLinkClick}
        display={{ base: "block", md: "block" }}
        m={4}
        alignSelf="center"
        fontWeight="bold"
      >
        About
      </ActiveLink>
      <ActiveLink
        id="2"
        href="#projects"
        onClick={handleLinkClick}
        borderBottomColor={pageInView === "projects" ? borderColor : null}
        display={{ base: "block", md: "block" }}
        m={4}
        alignSelf="center"
        fontWeight="bold"
      >
        Projects
      </ActiveLink>
      <ActiveLink
        id="3"
        href="#contact"
        onClick={handleLinkClick}
        borderBottomColor={pageInView === "contact" ? borderColor : null}
        display={{ base: "block", md: "block" }}
        m={4}
        alignSelf="center"
        fontWeight="bold"
      >
        Contact
      </ActiveLink>
    </Flex>
  );
}
