import CallToAction from "@/components/CallToAction";
import CustomerReviewSlider from "@/components/CustomerReviewSlider";
import FAQSupportTeaser from "@/components/FAQSupport";
import HeroSection from "@/components/HeroSection";
import KeyStatistics from "@/components/KeyStaticstics";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      <CustomerReviewSlider />
      <CallToAction />
      <FAQSupportTeaser />
      <KeyStatistics />
    </div>
  );
};

export default Home;
