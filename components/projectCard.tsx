import ResponsiveImage from "../components/responsiveImage";
import ActiveLink from "../components/activeLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Text,
  Flex,
  Box,
  SimpleGrid,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function ProjectCard({
  imgSrc,
  tags,
  title,
  description,
  livePreviewUrl,
  githubUrl,
  ...rest
}) {
  const headingOverlayTextColor = useColorModeValue("gray.200", "gray.400");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const cardAnimation = {
    hidden: { opacity: 0, y: 150, scale: 1 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const imageOverlayAnimation = {
    noOverlay: { opacity: 1 },
    overlay: { opacity: 0.2, transition: { duration: "0.5" } },
  };

  const textOverlayAnimation = {
    hidden: { opacity: 0, y: -290 },
    visible: { opacity: 1, y: -290 },
  };

  const controlCardAnimation = useAnimation();
  const controlTextOverlayAnimation = useAnimation();
  const controlImageOverlayAnimation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controlCardAnimation.start("visible");
    } else {
      controlCardAnimation.start("hidden");
    }
  }, [controlCardAnimation, inView]);

  const handleImageMouseEnter = () => {
    controlTextOverlayAnimation.start("visible");
    controlImageOverlayAnimation.start("overlay");
    setOverlayVisible(true);
  };

  const handleImageMouseLeave = () => {
    controlTextOverlayAnimation.start("hidden");
    controlCardAnimation.start("visible");
    controlImageOverlayAnimation.start("noOverlay");
    setOverlayVisible(false);
  };

  return (
    <>
      <MotionDiv
        ref={ref}
        initial="hidden"
        animate={controlCardAnimation}
        transition={{ duration: "1" }}
        variants={cardAnimation}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Flex
          display="flex"
          flexDir="column"
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
          borderRadius="2xl"
          boxShadow="2xl"
          w={["325px", "325px", "450px"]}
          maxW={["325px", "325px", "450px"]}
          backgroundColor="black"
          {...rest}
        >
          <MotionDiv
            initial="noOverlay"
            animate={controlImageOverlayAnimation}
            transition={{ duration: "0.5" }}
            variants={imageOverlayAnimation}
            h={["325px", "325px", "450px"]}
            borderRadius="2xl"
          >
            <ResponsiveImage src={imgSrc} borderRadius="2xl" />
          </MotionDiv>
          <MotionDiv
            initial="hidden"
            animate={controlTextOverlayAnimation}
            transition={{ duration: "0.5" }}
            variants={textOverlayAnimation}
            h="0"
            display="flex-column"
            justifyContent="end"
            alignContent="end"
            px={10}
          >
            <Heading
              as="h3"
              color={headingOverlayTextColor}
              size={["md", "md", "lg"]}
              textAlign="left"
              pb={4}
            >
              {title}
            </Heading>
            <Text
              display="flex"
              justifyContent="left"
              alignItems={["center", "center", "flex-start"]}
              color={headingOverlayTextColor}
              fontSize={["sm", "sm", "md"]}
              textAlign="left"
              h="75px"
              maxH="75px"
              minH="75px"
              overflow="hidden"
            >
              <span>{description}</span>
            </Text>
            <Box textAlign="left">
              <ActiveLink
                href={livePreviewUrl}
                variant="imageOverlay"
                fontSize={["sm", "sm", "md"]}
                fontWeight="regular"
                onClick={(e) => {
                  if (!overlayVisible) {
                    e.preventDefault();
                  }
                }}
              >
                Live Preview
                <ExternalLinkIcon ml={2} mb={1} />
              </ActiveLink>
            </Box>
            <Box textAlign="left" mt={1}>
              <ActiveLink
                href={githubUrl}
                variant="imageOverlay"
                fontSize={["sm", "sm", "md"]}
                fontWeight="regular"
                pb={1}
                onClick={(e) => {
                  if (!overlayVisible) {
                    e.preventDefault();
                  }
                }}
              >
                Github Repository
                <ExternalLinkIcon ml={2} mb={1} />
              </ActiveLink>
            </Box>
            <Flex justifyContent="left" wrap="wrap" pt={2}>
              {tags.map((tag, index) => {
                return (
                  <Tag
                    key={index}
                    size={["sm", "sm", "md"]}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="teal"
                    zIndex="10"
                    px={3}
                    mr={2}
                    my={1}
                  >
                    {tag}
                  </Tag>
                );
              })}
            </Flex>
          </MotionDiv>
        </Flex>
      </MotionDiv>
    </>
  );
}
