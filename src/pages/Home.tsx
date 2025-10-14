import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import CrestoraSection from "@/components/home/CrestoraSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <StatisticsSection />
        <CrestoraSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
