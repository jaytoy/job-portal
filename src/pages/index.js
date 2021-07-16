import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing1/Content1";
import Numbers from "../sections/landing1/Numbers";
import Content2 from "../sections/landing1/Content2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Categories />
        <Content1 />
        <Numbers />
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
