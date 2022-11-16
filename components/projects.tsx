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
import babyJournalImg from "../public/baby-journal.jpg";
import boxShadowGeneratorImg from "../public/box-shadow-generator.jpg";
import pomodoroClockImg from "../public/pomodoro-clock.jpg";
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
            imgSrc={babyJournalImg}
            tags={[
              "Python",
              "Django",
              "Bootstrap",
              "PostgreSql",
              "MVC",
              "Html",
            ]}
            title="Baby Journal"
            description="Keep a record of all the important events happening while your baby's growing"
            livePreviewUrl="https://babyjournal.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/baby-journal-MVC"
          />
          <ProjectCard
            imgSrc={wdNotesImg}
            tags={[
              "Next Js",
              "Typescript",
              "React",
              "Chakra ui",
              "Javascript",
              "Markdown",
            ]}
            title="Web Development Notes"
            description="A website for all kind of notes about web development"
            livePreviewUrl="https://webdevelopmentnotes.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/web-development-notes"
          />
          <ProjectCard
            imgSrc={pomodoroClockImg}
            tags={["Vite.js", "Typescript", "React", "Sass"]}
            title="Pomodoro Clock"
            description="A simple pomodoro clock built with typescript, vite.js and sass"
            livePreviewUrl="https://francis-pomodoro-clock.netlify.app"
            githubUrl="https://github.com/fpelletier-gh/pomodoro-clock"
          />
          <ProjectCard
            imgSrc={githubFinderImg}
            tags={["Javascript", "Bootstrap", "Webpack", "Html"]}
            title="Github Finder"
            description="Find Github user by username"
            livePreviewUrl="https://githubfinder.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/github-finder"
          />
          <ProjectCard
            imgSrc={boxShadowGeneratorImg}
            tags={["Javascript", "Css", "Html"]}
            title="Box-Shadow Generator"
            description="A simple visual tool for generating css box-shadow"
            livePreviewUrl="https://boxshadow.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/box-shadow-generator"
          />
          <ProjectCard
            imgSrc={noteAppImg}
            tags={["Javascript", "React", "Gatsby", "Sass", "Html", "Pwa"]}
            title="Note App"
            description="A simple note taking application (Pwa) built with Gatsby"
            livePreviewUrl="https://noteapp.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/note-app"
          />
        </SimpleGrid>
        <Text textAlign="center" fontSize="1.2rem" pt="5rem" px={[6, 10]}>
          For more projects, this portfolio source code, my linux and neovim
          configs, visit my{" "}
        </Text>
        <Heading as="h3" size="lg">
          <ActiveLink href="https://github.com/fpelletier-gh" variant="ghLink">
            Github Profile
          </ActiveLink>
        </Heading>
      </MotionDiv>
    </Box>
  );
}
