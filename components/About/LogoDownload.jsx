import React from "react";
import Container from "../Common/Container";

export default function LogoDownload() {
  return (
    <section className="py-16 bg-secondary">
      <Container>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Looking for Reply System logos?
        </h2>
        <button className="bg-primary text-secondary font-semibold px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors text-lg shadow-lg hover:shadow-xl">
          Download logos
        </button>
      </Container>
    </section>
  );
} 