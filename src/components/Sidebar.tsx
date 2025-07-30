const Sidebar = () => {
  const steps = [
    "Fill in the recipient's details.",
    "Enter the subject of the email.",
    "Describe the purpose of the email.",
    "Choose the tone and closing of the email.",
    "If you don't enter the details correctly the Email Generator can give some random content."
  ];

  return (
    <div className="glass-subtle rounded-2xl p-4 sm:p-6 lg:p-8 h-fit lg:sticky lg:top-24 font-georgia">
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 text-center">How To Use</h2>
      <div className="space-y-3 sm:space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="group p-2 sm:p-3 rounded-lg border-l-4 border-amber-600 bg-gradient-to-r from-amber-50/10 to-yellow-50/10 hover:from-amber-50/20 hover:to-yellow-50/20 transition-all duration-300 hover:translate-x-1">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;