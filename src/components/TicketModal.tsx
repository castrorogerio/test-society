import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useEffect } from "react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Lock scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Buy Your Ticket</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Iframe Content */}
        <div className="p-2">
          <iframe 
            src="https://www.last2ticket.com/embed/e/6487" 
            frameBorder="0" 
            style={{ width: '100%', height: '600px' }}
            title="Test Society 2025 Ticket Purchase"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketModal; 