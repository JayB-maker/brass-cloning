import React from "react";
import EverythingYouNeed from "../components/home/everythingYouNeed";
import Faq from "../components/home/faq";
import FinancialStacks from "../components/home/financialStacks";
import GetStarted from "../components/home/getStarted";
import GetStartedForFree from "../components/home/getStartedForFree";
import HomeHeroSection from "../components/home/homeHeroSection";
import Integration from "../components/home/integrations";
import Support from "../components/home/support";
import Testimonials from "../components/home/testimonials";
import Layout from "../components/layout";

const Homepage = () => {
  return (
    <>
      <Layout>
        <HomeHeroSection />
        <FinancialStacks />
        <EverythingYouNeed />
        <Testimonials />
        <Integration />
        <Support />
        <GetStarted />
        <Faq />
        <GetStartedForFree />
      </Layout>
    </>
  );
};

export default Homepage;
