"use client";
import Hero from "../components/ui/features/hero/hero";
import CourseSection from "../components/ui/features/courses";
import DrivingSkill from "../components/ui/features/drivingskill";
import BenefitsSection from "../components/ui/features/benefitsSection/benefits";
import Map from "../components/ui/features/map";
import ApplicationSection from "../components/ui/features/application";
import AccessSection from "../components/ui/features/Access/AccessSection";
import DrivingExam from "../components/ui/features/DrivingExam/DrivingExam";
import TrustUs from "../components/ui/features/TrustUs/TrustUs";
import SuccessSection from "../components/ui/SuccessSection/SuccessSection";
import OurPartner from "../components/ui/features/OurPartner/OurPartner";
import Testimonials from "../components/ui/features/Testimonials/Testimonials";
import BetweenCourse from "../components/ui/Home/BetweenCourse";

export default function Home() {
  return (
    <main>
      <Hero />
      <AccessSection />
      <CourseSection />
      <BetweenCourse />
      <DrivingSkill />
      <DrivingExam />
      <BenefitsSection />
      <TrustUs />
      <Testimonials />
      <Map />
      <ApplicationSection />
      <SuccessSection />
      <OurPartner />
    </main>
  );
}
