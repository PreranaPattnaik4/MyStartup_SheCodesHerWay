
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function StartupSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
