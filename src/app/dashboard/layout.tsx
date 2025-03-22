import { SidebarProvider } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import DashboardHeader from "@/components/layouts/dashboard-header";
import DashboardSidebar from "@/components/layouts/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Admin Panel",
    description: "A modern ecommerce store with an admin panel.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <DashboardSidebar />
          <main className="w-full h-full mx-auto">
            <DashboardHeader />
            <ScrollArea className="h-[calc(100vh-4rem)] p-4 overflow-hidden">
              {children}    
            </ScrollArea>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
