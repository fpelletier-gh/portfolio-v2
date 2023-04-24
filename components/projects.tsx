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
import pomodoroClockImg from "../public/pomodoro-clock.jpg";
import wdNotesImg from "../public/wd-notes.jpg";
import darkBackground from "../public/dark_background.jpg";
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
            imgSrc={darkBackground}
            tags={[
              "Typescript",
              "React Query",
              "Vite js",
              "Vitest",
              "React Router",
            ]}
            title="Todolists"
            description="An application Designed to help you get organized, achieve your goals and never forget a thing"
            livePreviewUrl="https://todolists.francispelletier.ca"
            githubUrl="https://github.com/fpelletier-gh/todolist-ui"
          />
          <ProjectCard
            imgSrc={darkBackground}
            tags={[
              "Typescript",
              "Node",
              "express",
              "mongoDB",
              "mongoose",
              "Zod",
              "Jest",
              "Supertest",
            ]}
            title="Rest Api todolist"
            description="A REST api for a todolist application"
            livePreviewUrl="#"
            githubUrl="https://github.com/fpelletier-gh/rest-api-todolist"
          />
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
        </SimpleGrid>
        <Text textAlign="center" fontSize="1.2rem" pt="5rem" px={[6, 10]}>
          For more projects and this portfolio source code visit my{" "}
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
