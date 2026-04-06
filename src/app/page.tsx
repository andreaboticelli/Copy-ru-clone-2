import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationSection } from "@/components/LocationSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { WhyItWorksSection } from "@/components/WhyItWorksSection";
import { ServicesListSection } from "@/components/ServicesListSection";
import { HowToStartSection } from "@/components/HowToStartSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Контакты", href: "/contacts/" },
  { label: "Копицентр Москва-Сити 1" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />
        <LocationSection />
        <WhatWeDoSection />
        <WhyItWorksSection />
        <ServicesListSection />
        <HowToStartSection />
        <ServicesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
