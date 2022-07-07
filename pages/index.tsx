import { createRef, useRef, useState } from "react";
import Head from "next/head";
import Welcome from "../components/welcome";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  const [pageInView, setPageInView] = useState("");
  const pages = ["welcome", "about", "projects", "contact"];
  const scrollRefs = useRef([]);

  scrollRefs.current = [...Array(4).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  const scrollHandler = (index, scrollBehavior = "smooth") => {
    scrollRefs.current[index].current.scrollIntoView({
      block: "center",
      behavior: scrollBehavior,
    });
    setTimeout(() => setPageInView(pages[index]), 100);
  };

  return (
    <Layout scrollHandler={scrollHandler} pageInView={pageInView}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Welcome
        scrollRef={scrollRefs.current[0]}
        setPageInView={setPageInView}
      />
      <About scrollRef={scrollRefs.current[1]} setPageInView={setPageInView} />
      <Projects
        scrollRef={scrollRefs.current[2]}
        setPageInView={setPageInView}
      />
      <Contact
        scrollRef={scrollRefs.current[3]}
        setPageInView={setPageInView}
      />
    </Layout>
  );
}
