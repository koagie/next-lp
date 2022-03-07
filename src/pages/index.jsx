import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo.jsx';
import Layout from 'components/layout.jsx';
import Banner from '../sections/banner.jsx';
import KeyFeature from '../sections/key-feature.jsx';
import ServiceSection from '../sections/service-section.jsx';
import Feature from '../sections/feature.jsx';
import CoreFeature from '../sections/core-feature.jsx';
import WorkFlow from '../sections/workflow.jsx';
import Package from '../sections/package.jsx';
import TeamSection from '../sections/team-section.jsx';
import TestimonialCard from '../sections/testimonial.jsx';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
