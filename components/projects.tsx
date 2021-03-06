import {
  Heading,
  Text,
  Flex,
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "./projectCard";
import ActiveLink from "./activeLink";
import boxShadowGeneratorImg from "../public/box-shadow-generator.jpg";
import noteAppImg from "../public/note-app.jpg";
import wdNotesImg from "../public/wd-notes.jpg";
import githubFinderImg from "../public/github-finder.jpg";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects({ scrollRef, setPageInView }) {
  const variants = {
    hidden: { opacity: 0, y: 150, skewY: "5deg" },
    visible: { opacity: 1, y: 0, skewY: "5deg" },
  };

  const bgGradient = useColorModeValue(
    "linear(to-t, blue.300, teal.200)",
    "linear(to-t, blue.900, teal.900)"
  );

  const controlAnimation = useAnimation();
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      controlAnimation.start("visible");
      if (entry?.boundingClientRect.y > 0) {
        setPageInView("projects");
      }
    } else {
      if (
        entry?.boundingClientRect.y > 0 &&
        entry?.boundingClientRect.y < 1500
      ) {
        setPageInView("about");
      }
      controlAnimation.start("hidden");
    }
  }, [controlAnimation, inView, entry]);

  return (
    <Box
      id="projects"
      bgGradient={bgGradient}
      transform="skewY(-5deg)"
      py="220px"
      my="220px"
      px={{ lg: 10 }}
    >
      <MotionDiv
        ref={ref}
        initial="hidden"
        animate={controlAnimation}
        transition={{ duration: "1" }}
        variants={variants}
        display="flex"
        flexDir="column"
        py={[10, 10]}
        mx="auto"
        maxW="1024px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDir="column" pb={20}>
          <Heading
            ref={scrollRef}
            id="about"
            as="h2"
            textAlign="center"
            size="xl"
            mb={[4, 5]}
          >
            Projects
          </Heading>
          <Text textAlign="center" fontSize="1.2rem">
            Some projects I've been working on
          </Text>
        </Flex>
        <SimpleGrid
          w="100%"
          column={2}
          spacing={20}
          minChildWidth={["325px", "450px"]}
          justifyContent="center"
          alignContent="center"
        >
          <ProjectCard
            imgSrc={wdNotesImg}
            tags={["Next Js", "typescript", "Chakra", "html", "css"]}
            title="Web Development Notes"
            description="Documentation website built with NextJs to generate pages from MDX files from the posts directory and subdirectory"
            livePreviewUrl="https://web-development-notes.vercel.app/"
            githubUrl="https://github.com/fpelletier-gh/web-development-notes"
          />
          <ProjectCard
            imgSrc={noteAppImg}
            tags={["Gatsby", "Javascript", "Css", "Html"]}
            title="Note App"
            description="A simple note taking application built with Gatsby"
            livePreviewUrl="https://francisnoteapp.netlify.app/"
            githubUrl="https://github.com/fpelletier-gh/note-app"
          />
          <ProjectCard
            imgSrc={githubFinderImg}
            tags={["Javascript", "Webpack", "Bootstrap", "Html"]}
            title="Github Finder"
            description="Find Github user by username"
            livePreviewUrl="https://francis-github-finder.netlify.app/"
            githubUrl="https://github.com/fpelletier-gh/github-finder"
          />
          <ProjectCard
            imgSrc={boxShadowGeneratorImg}
            tags={["Javascript", "Css", "Html"]}
            title="Box-Shadow Generator"
            description="A simple note taking application built with Gatsby"
            livePreviewUrl="https://boxshadowgenerator.netlify.app/"
            githubUrl="https://github.com/fpelletier-gh/box-shadow-generator"
          />
        </SimpleGrid>
        <Text textAlign="center" fontSize="1.2rem" pt="5rem" px={[6, 10]}>
          For more projects, this portfolio source code and my neovim config see
          my{" "}
          <ActiveLink
            href="https://github.com/fpelletier-gh"
            variant="navigation"
          >
            Github Profile
          </ActiveLink>
        </Text>
      </MotionDiv>
    </Box>
  );
}
