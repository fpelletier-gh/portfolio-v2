import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

function ActiveLink(props: any) {
  const router = useRouter();
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  const linkColor = useColorModeValue("teal.600", "teal.300");

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          variant="navigation"
          onClick={handleClick}
          color={router.asPath === href ? linkColor : null}
          {...props}
        >
          {props.children}
        </Link>
      </NextLink>
    );
  }

  return <Link target="_blank" rel="noopener noreferrer" {...props} />;
}

export default ActiveLink;
