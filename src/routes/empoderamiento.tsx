import { createFileRoute } from "@tanstack/react-router";
import { DOCS_BASE } from "@/data/documentos";

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
  const pdfUrl = `${DOCS_BASE}Empowerm.pdf`;

  return (
    <div className="section-x py-16 text-center md:py-24">
      <h1 className="font-display text-4xl text-foreground md:text-5xl mb-10">EMPODERAMIENTO</h1>
      
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-gold/20 bg-card shadow-2xl">
        <iframe
          src={pdfUrl}
          className="h-[600px] w-full md:h-[800px]"
          title="Documento de Empoderamiento"
          frameBorder="0"
        />
      </div>

      <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground italic">
        Si no puede visualizar el documento, puede contactarnos en{" "}
        <a
          href="mailto:fundacionhariharananda@gmail.com"
          className="text-primary hover:underline"
        >
          fundacionhariharananda@gmail.com
        </a>
      </p>
    </div>
  );
}
