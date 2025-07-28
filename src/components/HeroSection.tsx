const HeroSection = () => {
  const scrollToForm = () => {
    const emailSection = document.getElementById('email-section');
    emailSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Title Container */}
        <div className="flex items-center justify-center space-x-8 mb-12 animate-float">
          {/* AI Logo Square */}
          <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-2xl shadow-2xl animate-glow">
            <span className="text-primary-foreground font-bold text-4xl">AI</span>
          </div>
          
          {/* Hero Text */}
          <div className="text-left">
            <h2 className="text-6xl font-light text-foreground leading-none">Email</h2>
            <h2 className="text-6xl font-light text-foreground leading-none">Generator</h2>
          </div>
        </div>

        {/* Hero Tagline */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            One Tool, Every Email:
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Personal, Professional, Perfected by AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you're wishing a friend happy birthday or pitching a client, generate the perfect email—instantly.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="group relative px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
          >
            <span className="relative z-10">Try It Now</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;