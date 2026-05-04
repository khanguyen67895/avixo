"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ContactProvider } from "@/components/common/contact-context";
import { ContactModal } from "@/components/common/ContactModal";
// import { FloatingContact } from "@/components/common/FloatingContact";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ContactProvider>
        {children}
        <ContactModal />
        {/* <FloatingContact /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </ContactProvider>
    </QueryClientProvider>
  );
}
