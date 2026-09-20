import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empoderamiento")({
  head: () => ({
    meta: [
      { title: "Empoderamiento | Fundación Hariharananda Kriya Yoga" },
      {
        name: "description",
        content:
          "Sección Empoderamiento de la Fundación Hariharananda Kriya Yoga (FHKY), Envigado, Antioquia, Colombia.",
      },
      { property: "og:title", content: "Empoderamiento | FHKY" },
      {
        property: "og:description",
        content: "Consulte el documento de Empoderamiento de la Fundación Hariharananda Kriya Yoga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Empoderamiento,
});

function Empoderamiento() {
  return (
    <div className="section-x py-16 text-center md:py-24">
      <h1 className="font-display text-4xl text-foreground md:text-5xl mb-10">EMPODERAMIENTO</h1>
      
      <div className="mx-auto w-full max-w-5xl">
        <iframe
          src="/docs/Empowerm.pdf"
          className="h-[600px] w-full md:h-[800px]"
          title="Documento de Empoderamiento"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
