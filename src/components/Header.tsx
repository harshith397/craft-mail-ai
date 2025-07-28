import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const emailSection = document.getElementById('email-section');
      if (emailSection) {
        const rect = emailSection.getBoundingClientRect();
        setIsVisible(rect.top > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="glass px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              {/* AI Logo Square */}
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg animate-glow">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              
              {/* Logo Text */}
              <div className="text-foreground">
                <div className="text-xl font-semibold">Email</div>
                <div className="text-lg font-normal -mt-1">Generator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;