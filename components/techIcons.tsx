import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionDiv } from "../components/animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  DiJsBadge,
  DiGit,
  DiHtml5,
  DiCss3,
  DiReact,
  DiPython,
  DiDjango,
  DiBootstrap,
  DiNodejsSmall,
  DiSass,
  DiMarkdown,
  DiVisualstudio,
  DiVim,
  DiPostgresql,
  DiLinux,
  DiGithubFull,
  DiDigitalOcean,
} from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { RiGatsbyFill } from "react-icons/ri";

const BoxedIcon = ({ icon, tooltip, ...props }) => {
  return (
    <Tooltip hasArrow label={tooltip} placement="top">
      <Box px={[2, 3]} py={[2, 3]}>
        <Icon as={icon} w={["40px", "60px"]} h={["40px", "60px"]} {...props} />
      </Box>
    </Tooltip>
  );
};

export default function TechIcons() {
  const black = useColorModeValue("black", "teal.300");
  const djangoGreen = useColorModeValue("#092D1F", "green.300");

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
        maxW="1024px"
        m="auto"
        pt="5rem"
        pb="5rem"
        px={4}
      >
        <Heading
          as="h3"
          textAlign={["center", "center", "right"]}
          size="lg"
          mb={[4, 5]}
        >
          Languages and Frameworks
        </Heading>
        <Text textAlign="center">
          Languages, frameworks and technologies that I've used in my projects
        </Text>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          py={[5]}
        >
          <BoxedIcon icon={DiJsBadge} color="#EFD81D" tooltip="Javascript" />
          <BoxedIcon icon={SiTypescript} color="#2F74C0" tooltip="Typescript" />
          <BoxedIcon icon={DiHtml5} color="#254BDD" tooltip="Html" />
          <BoxedIcon icon={DiCss3} color="#D1522E" tooltip="Css" />
          <BoxedIcon icon={DiReact} color="#5ED3F3" tooltip="React" />
          <BoxedIcon icon={SiNextdotjs} color={black} tooltip="Next js" />
          <BoxedIcon icon={DiPython} color="#356C9B" tooltip="Python" />
          <BoxedIcon icon={DiDjango} color={djangoGreen} tooltip="Django" />
          <BoxedIcon icon={DiSass} color="#C76494" tooltip="Sass" />
          <BoxedIcon icon={DiPostgresql} color="#31648C" tooltip="Postgresql" />
          <BoxedIcon icon={DiGit} color="#E84D31" tooltip="Git" />
          <BoxedIcon icon={DiGithubFull} color={black} tooltip="Github" />
          <BoxedIcon icon={DiNodejsSmall} color="#73AA60" tooltip="Node js" />
          <BoxedIcon icon={DiBootstrap} color="#6D42A4" tooltip="Bootstrap" />
          <BoxedIcon icon={DiMarkdown} color={black} tooltip="Markdown" />
          <BoxedIcon icon={DiLinux} color={black} tooltip="Linux" />
          <BoxedIcon icon={DiVisualstudio} color="#0076C6" tooltip="VScode" />
          <BoxedIcon icon={DiVim} color="#019331" tooltip="Vim & Neovim" />
          <BoxedIcon icon={RiGatsbyFill} color="#633194" tooltip="Gatsby" />
          <BoxedIcon
            icon={DiDigitalOcean}
            color="#007CF7"
            tooltip="DigitalOcean"
          />
        </Flex>
      </MotionDiv>
    </>
  );
}
