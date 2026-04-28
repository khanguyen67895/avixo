"use client";

import { createContext, useContext, useState } from "react";

type ContactContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactContext = createContext<ContactContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactContext);
