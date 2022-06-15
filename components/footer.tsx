import {
  useColorModeValue,
  Box,
  HStack,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import ActiveLink from "./activeLink";
import { BsGithub, BsCodeSlash, BsLinkedin } from "react-icons/bs";

export default function Footer(props) {
  const bgGradient = useColorModeValue(
    "linear(to-t, teal.200, blue.400)",
    "linear(to-t, teal.800, blue.900)"
  );

  return (
    <Box maxH="400px" overflow="hidden">
      <Box
        bgGradient={bgGradient}
        transform="skewY(-5deg)"
        pt="50px"
        pb="420px"
        mt="220px"
      >
        <HStack
          as="footer"
          spacing="1.5rem"
          mt={5}
          pt={5}
          alignItems="center"
          justifyContent="center"
          transform="skewY(5deg)"
          {...props}
        >
          <Tooltip hasArrow label="Github Profile" placement="top">
            <Box>
              <ActiveLink href="https://github.com/fpelletier-gh">
                <Icon as={BsGithub} w={6} h={6} />
              </ActiveLink>
            </Box>
          </Tooltip>
          <Tooltip hasArrow label="Linkedin" placement="top">
            <Box>
              <ActiveLink href="https://www.linkedin.com/in/francis-pelletier-4604061a2">
                <Icon as={BsLinkedin} w={6} h={6} />
              </ActiveLink>
            </Box>
          </Tooltip>
          <Tooltip hasArrow label="This Project Repository" placement="top">
            <Box>
              <ActiveLink href="https://github.com/fpelletier-gh/web-development-notes">
                <Icon as={BsCodeSlash} w={6} h={6} />
              </ActiveLink>
            </Box>
          </Tooltip>
        </HStack>
      </Box>
    </Box>
  );
}
