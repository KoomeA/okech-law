import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const phoneNumber = "254722225225";
  const message = encodeURIComponent("Hello, I would like to enquire about your legal services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-1000"
    >
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </a>
  );
}
