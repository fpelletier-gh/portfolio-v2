import ResponsiveImage from "../components/responsiveImage";
import Certifications from "../components/certifications";
import { Heading, Text, Flex } from "@chakra-ui/react";
import aboutPhoto from "../public/about-photo.jpg";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TechIcons from "./techIcons";

export default function About({ scrollRef, setPageInView }) {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const controlAnimation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlAnimation.start("visible");
      if (entry?.boundingClientRect.y > 0) {
        setPageInView("about");
      }
    } else {
      controlAnimation.start("hidden");
    }
  }, [controlAnimation, inView, entry]);

  return (
    <>
      <MotionDiv
        ref={ref}
        initial="hidden"
        animate={controlAnimation}
        transition={{ duration: "1" }}
        variants={variants}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Flex
          direction={["column", "column", "row"]}
          py={["6rem", 10]}
          px={[6, null]}
          mx="auto"
          maxW="1024px"
          justifyContent="center"
          alignItems={["center", "center", "start"]}
        >
          <Flex flexDir="column" order={[2, 2, 1]}>
            <Heading
              as="h2"
              textAlign={["center", "center", "right"]}
              size="xl"
              mb={[4, 5]}
            >
              About Me
            </Heading>
            <Text textAlign={["center", "center", "right"]} fontSize="1.2rem">
              I am a front end developer, who aims to work with businesses to
              bring their goals and their passion to life. Also, I like
              exploring new technologies from frontend to backend. If you’re
              looking for a developer to add to your team, i’d love to hear from
              you!
            </Text>
          </Flex>
          <Flex
            ref={scrollRef}
            justifyContent="center"
            minW={200}
            minH={200}
            mx={[0, 10]}
            pb={[10, 10, null]}
            alignItems={["center", "center", "flex-start"]}
            order={[1, 1, 2]}
          >
            <ResponsiveImage
              src={aboutPhoto}
              width={200}
              height={200}
              borderRadius={100}
              filter="grayscale(80%)"
              w="auto"
              h="auto"
            />
          </Flex>
        </Flex>{" "}
      </MotionDiv>
      <TechIcons />
      <Certifications />
    </>
  );
}
