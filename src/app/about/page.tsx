import AboutExtended from "@/components/layout/AboutExtended";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Team from "@/components/layout/Team";
import { Testimonials } from "@/components/layout/Testimonials";

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <AboutExtended />
      <Team />
      <Testimonials />
      <Footer />
    </PageWrapper>
  );
}
