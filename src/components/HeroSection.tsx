const HeroSection = () => {
  const scrollToForm = () => {
    const emailSection = document.getElementById('email-section');
    emailSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Title Container */}
        <div className="flex items-center justify-center space-x-8 mb-12 flex-wrap">
          {/* AI Logo Square */}
          <div className="w-24 h-24 md:w-28 md:h-28 bg-primary flex items-center justify-center rounded-2xl shadow-2xl animate-slide-up transform translate-y-full">
            <span className="text-primary-foreground font-bold text-4xl md:text-5xl animate-drop-ai opacity-0">AI</span>
          </div>
          
          {/* Hero Text */}
          <div className="text-center md:text-left animate-slide-up-delayed transform translate-y-full">
            <h2 className="text-4xl md:text-6xl font-light text-foreground leading-none opacity-0 animate-slide-up-text">Email</h2>
            <h2 className="text-4xl md:text-6xl font-light text-foreground leading-none opacity-0 animate-slide-up-text-delayed">Generator</h2>
          </div>
        </div>

        {/* Hero Tagline */}
        <div className="space-y-8 opacity-0 animate-fade-in">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            One Tool, Every Email:
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
              Personal, Professional, Perfected by AI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Whether you're wishing a friend happy birthday or pitching a client, generate the perfect email—instantly.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground px-8 py-3 md:px-12 md:py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-32"
          >
            Try It Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;