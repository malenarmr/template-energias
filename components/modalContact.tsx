"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./contact";

interface ModalContactProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ModalContact({
  isOpen,
  onOpenChange,
}: ModalContactProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="!w-[95vw] lg:!w-[80vw] xl:!w-[60vw] xl:!w-[60vw] p-4 md:p-10 !max-w-none bg-gradient-to-br from-blue-950 via-blue-800 to-gray-300 !max-h-[90vh] overflow-y-auto scrollbar-visible"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ffffff40 transparent",
        }}
      >
        <style jsx>{`
          .scrollbar-visible::-webkit-scrollbar {
            width: 8px;
          }

          .scrollbar-visible::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          .scrollbar-visible::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.5);
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .scrollbar-visible::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.7);
          }
        `}</style>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
