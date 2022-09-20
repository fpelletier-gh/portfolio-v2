import ResponsiveImage from "../components/responsiveImage";
import javascriptCertificationImg from "../public/javascript-certification.jpg";
import webDesignCertificationImg from "../public/web-design-certification.jpg";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ActiveLink from "./activeLink";

export default function Certifications() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const controlAnimation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [controlAnimation, inView]);

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
        <Heading
          as="h3"
          textAlign={["center", "center", "right"]}
          size="lg"
          mb={[4, 5]}
        >
          Certifications
        </Heading>
        <Flex
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <ActiveLink
            m={5}
            href="https://freecodecamp.org/certification/francispelletier/responsive-web-design"
          >
            <Box>
              <ResponsiveImage
                src={webDesignCertificationImg}
                width={300}
                height={250}
                w="auto"
                h="auto"
              />
            </Box>
          </ActiveLink>
          <ActiveLink
            m={5}
            href="https://freecodecamp.org/certification/francispelletier/javascript-algorithms-and-data-structures"
          >
            <Box>
              <ResponsiveImage
                src={javascriptCertificationImg}
                width={300}
                height={250}
                w="auto"
                h="auto"
              />
            </Box>
          </ActiveLink>
        </Flex>
      </MotionDiv>
    </>
  );
}
