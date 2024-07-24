import Hero from "components/Hero";
import Services from "components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicAbout = dynamic(() => import("components/About"), {
  suspense: true,
});

const DynamicTestimonials = dynamic(() => import("components/Testimonials"), {
  suspense: true,
});

function Index() {
  return (
    <>
      <NextSeo
        title="Web Design and App Development Agency New Jersey | The Code Creative"
        description="The Code Creative website design and custom application development agency in New Jersey."
      />
      <main id="header-section">
        <Hero />
        <Services />
        <Suspense fallback={`Loading...`}>
          <DynamicTestimonials />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <DynamicAbout />
        </Suspense>
      </main>
    </>
  );
}

export default Index;
