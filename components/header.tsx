import Logo from "./logo";
import MenuDrawer from "./menuDrawer";
import Navigation from "./navigation";
import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Container,
  useDisclosure,
  Slide,
  Button,
  useColorMode,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function Header({ scrollHandler, pageInView }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColorModeValue = useColorModeValue(
    "whiteAlpha.600",
    "blackAlpha.800"
  );
  const bgColor = lastScrollY <= 100 ? "transparent" : bgColorModeValue;
  const shadow = lastScrollY > 100 ? "md" : null;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        onClose();
      } else {
        onOpen();
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (lastScrollY === 0) {
        onOpen();
      }
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id);
    scrollHandler(id);
  };

  return (
    <>
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Container variant="headerContainer" bg={bgColor} boxShadow={shadow}>
          <Flex
            as="header"
            px={2}
            w="100%"
            maxW="1024px"
            h="4rem"
            alignItems="center"
            m="auto"
            zIndex="100"
          >
            <Logo handleLinkClick={handleLinkClick} />
            <Spacer />
            <Navigation
              scrollHandler={scrollHandler}
              pageInView={pageInView}
              display={{ base: "none", md: "flex" }}
              scrollBehavior={"smooth"}
              home={false}
            />
            <Button
              onClick={toggleColorMode}
              alignSelf="center"
              bg="transparent"
              _hover={{ background: "transparent" }}
            >
              {colorMode === "light" ? (
                <MoonIcon color="teal.900" _hover={{ color: "teal.700" }} />
              ) : (
                <SunIcon color="teal.300" _hover={{ color: "teal.100" }} />
              )}
            </Button>
            <MenuDrawer scrollHandler={scrollHandler} pageInView={pageInView} />
          </Flex>
        </Container>
      </Slide>
    </>
  );
}
