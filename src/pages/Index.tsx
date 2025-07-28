import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import EmailForm from "@/components/EmailForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Email Generation Section */}
      <div id="email-section" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
