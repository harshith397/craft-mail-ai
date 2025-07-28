import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, CheckCircle } from "lucide-react";

interface EmailFormData {
  recipient_name: string;
  recipient_designation: string;
  subject: string;
  purpose: string;
  tone: string;
  cta: string;
  sender_name: string;
  closing: string;
}

const EmailForm = () => {
  const [formData, setFormData] = useState<EmailFormData>({
    recipient_name: '',
    recipient_designation: '',
    subject: '',
    purpose: '',
    tone: 'Formal',
    cta: '',
    sender_name: '',
    closing: 'Best regards,'
  });
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof EmailFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate API call - replace with actual API endpoint
    try {
      // Mock email generation
      const mockEmail = `Subject: ${formData.subject}

Dear ${formData.recipient_name},

I hope this email finds you well. ${formData.purpose}

${formData.cta ? formData.cta : 'Please let me know if you have any questions or need further information.'}

${formData.closing}
${formData.sender_name}`;

      setTimeout(() => {
        setGeneratedEmail(mockEmail);
        setIsGenerating(false);
        toast({
          title: "Email Generated Successfully!",
          description: "Your email has been generated and is ready to use.",
        });
      }, 2000);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Error",
        description: "Failed to generate email. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async () => {
    if (!generatedEmail.trim()) {
      toast({
        title: "No Content",
        description: "No email content to copy!",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedEmail);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Email copied to clipboard successfully.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl">
      <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">AI Email Generator</h2>
      
      <form onSubmit={generateEmail} className="space-y-6">
        {/* Recipient Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Recipient's Name"
            value={formData.recipient_name}
            onChange={(e) => handleInputChange('recipient_name', e.target.value)}
            required
            className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground"
          />
          <Input
            placeholder="Recipient's Designation/Role"
            value={formData.recipient_designation}
            onChange={(e) => handleInputChange('recipient_designation', e.target.value)}
            className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Email Subject */}
        <Input
          placeholder="Enter Email Subject"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          required
          className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground"
        />

        {/* Email Purpose */}
        <Textarea
          placeholder="Purpose of the Email"
          value={formData.purpose}
          onChange={(e) => handleInputChange('purpose', e.target.value)}
          required
          rows={4}
          className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground resize-none"
        />

        {/* CTA and Sender Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Prompts (CTA)"
            value={formData.cta}
            onChange={(e) => handleInputChange('cta', e.target.value)}
            className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground"
          />
          <Input
            placeholder="Sender's Name"
            value={formData.sender_name}
            onChange={(e) => handleInputChange('sender_name', e.target.value)}
            required
            className="glass-subtle border-0 bg-card/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Tone and Closing Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
            <SelectTrigger className="glass-subtle border-0 bg-card/50 text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass border-0">
              <SelectItem value="Formal">Formal</SelectItem>
              <SelectItem value="Semi-formal">Semi-formal</SelectItem>
              <SelectItem value="Casual">Casual</SelectItem>
            </SelectContent>
          </Select>

          <Select value={formData.closing} onValueChange={(value) => handleInputChange('closing', value)}>
            <SelectTrigger className="glass-subtle border-0 bg-card/50 text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass border-0">
              <SelectItem value="Best regards,">Best regards,</SelectItem>
              <SelectItem value="Sincerely,">Sincerely,</SelectItem>
              <SelectItem value="Thanks,">Thanks,</SelectItem>
              <SelectItem value="Warm regards,">Warm regards,</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Generate Button */}
        <Button
          type="submit"
          disabled={isGenerating}
          className="w-full py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {isGenerating ? 'Generating...' : 'Generate Email'}
        </Button>
      </form>

      {/* Generated Email Display */}
      <div className="mt-8 relative">
        <div className="relative">
          <Textarea
            value={generatedEmail}
            placeholder="Generated Email will appear here..."
            readOnly
            rows={10}
            className="glass-subtle border-0 bg-card/30 text-foreground placeholder:text-muted-foreground resize-none pr-12"
          />
          {generatedEmail && (
            <Button
              onClick={copyToClipboard}
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 p-2 hover:bg-accent/20"
              title="Copy to clipboard"
            >
              {isCopied ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <Copy className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailForm;