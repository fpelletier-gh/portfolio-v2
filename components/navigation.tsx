import ActiveLink from "./activeLink";
import { useColorModeValue, Box, Flex } from "@chakra-ui/react";

export default function Navigation({
  scrollHandler,
  pageInView,
  scrollBehavior,
  home,
  ...props
}) {
  const linkColor = useColorModeValue("teal.600", "teal.300");

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
        color={pageInView === "welcome" ? linkColor : null}
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
        color={pageInView === "about" ? linkColor : null}
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
        color={pageInView === "projects" ? linkColor : null}
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
        color={pageInView === "contact" ? linkColor : null}
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
