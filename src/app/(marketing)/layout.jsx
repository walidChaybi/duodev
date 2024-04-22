import React from "react";
import Header from "./header";
import Footer from "./Footer";

function layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default layout;
