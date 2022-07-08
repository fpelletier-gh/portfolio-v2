import { LogoWithoutLink as Logo } from "./logo";
import ActiveLink from "./activeLink";
import { useRef, useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "./footer";
import Navigation from "./navigation";

export default function MenuDrawer({ scrollHandler, pageInView }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const btnRef = useRef();
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      <Button
        ref={btnRef}
        display={{ base: "block", md: "none" }}
        alignSelf="center"
        onClick={onOpen}
        p="2"
        variant="outline"
        border="none"
      >
        <HamburgerIcon h="100%" w="100%" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex alignItems="center">
              <Logo />
              <Spacer />
              <Button bg="transparent" onClick={onClose}>
                <CloseIcon w={4} h={4} />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDir="column" alignItems="center" w="100%" h="100%" pt={2}>
              <Navigation
                scrollHandler={scrollHandler}
                pageInView={pageInView}
                scrollBehavior={"auto"}
                home={true}
                onClick={onClose}
              />
            </Flex>
          </DrawerBody>

          <DrawerFooter p={0} m={0} maxH="130px">
            <Footer w="20rem" pt="5px" mt="80px" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
