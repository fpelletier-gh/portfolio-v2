import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";
const ResponsiveImage = chakra(NextImage, {
  baseStyle: { maxH: 200, maxW: 200 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default ResponsiveImage;
