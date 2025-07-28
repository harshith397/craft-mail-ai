const Sidebar = () => {
  const steps = [
    "Fill in the recipient's details.",
    "Enter the subject of the email.",
    "Describe the purpose of the email.",
    "Choose the tone and closing of the email.",
    "If you don't enter the details correctly the Email Generator can give some random content."
  ];

  return (
    <div className="glass-subtle rounded-2xl p-8 h-fit sticky top-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">How To Use</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-muted-foreground leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;