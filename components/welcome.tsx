import { Heading, Box, useColorModeValue } from "@chakra-ui/react";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Welcome({ scrollRef, setPageInView }) {
  const bgGradient = useColorModeValue(
    "linear(to-t, teal.200, blue.300)",
    "linear(to-t, teal.900, blue.900)"
  );

  const firstHeading = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const secondHeading = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const controlAnimation = useAnimation();
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      controlAnimation.start("visible");
      setPageInView("welcome");
    } else {
      controlAnimation.start("hidden");
    }
  }, [controlAnimation, inView, entry]);

  return (
    <Box
      ref={scrollRef}
      w="100%"
      bgGradient={bgGradient}
      transform="skewY(-5deg)"
      mt="-170px"
      mb="220px"
    >
      <MotionDiv
        initial="hidden"
        animate={controlAnimation}
        transition={{ duration: "1" }}
        variants={firstHeading}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        h="90vh"
        transform="skewY(5deg)"
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems={["center", "center", "start"]}
          pt={[10, null]}
          px={6}
        >
          <Heading ref={ref} as="h2" size={["2xl", "3xl"]} my={[6, 8]}>
            Hi, I'm Francis.
          </Heading>
          <MotionDiv variants={secondHeading} transition={{ duration: "2" }}>
            <Heading as="h2" size={["lg", "2xl"]} mb={4}>
              I like building things for the web.
            </Heading>
          </MotionDiv>

          <Heading
            as="h4"
            size="md"
            fontWeight="normal"
            variant="base"
            maxW="60ch"
            textAlign="center"
            mb={4}
          ></Heading>
        </Box>
      </MotionDiv>
    </Box>
  );
}
