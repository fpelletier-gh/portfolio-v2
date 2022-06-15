import NextLink from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import {
  ChakraProps,
  OmitCommonProps,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { chakra, Heading } from "@chakra-ui/react";

export function LogoSpan(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
      keyof ChakraProps
    > &
    ChakraProps & { as?: "span" }
) {
  const color = useColorModeValue("teal.600", "teal.300");
  return <chakra.span as="span" color={color} {...props} />;
}

export function LogoWithoutLink() {
  return (
    <Heading
      as="h1"
      variant="base"
      fontSize={{ base: "xl", md: "2xl" }}
      my={4}
      mx={2}
    >
      <LogoSpan>Francis</LogoSpan> Pelletier
    </Heading>
  );
}

export default function Logo({ handleLinkClick }) {
  return (
    <Heading
      as="h1"
      variant="base"
      fontSize={{ base: "xl", md: "2xl" }}
      my={4}
      mx={2}
    >
      <NextLink href="/" passHref>
        <Link id="0" onClick={handleLinkClick} variant="logo">
          Francis Pelletier
        </Link>
      </NextLink>
    </Heading>
  );
}
