
import React from "react";

export default function EnglishHero() {
  const whatsapp = "https://wa.me/59892783602";

  const certificateUrl =
    "https://drive.google.com/file/d/1hUnupqlPlU50Zyhg-KVZSo00n6n5c-8U/view?usp=drive_link";

  return (
    <section className="flex min-h-screen items-center overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">

          {/* Fotografía personal */}
          <div className="relative mx-auto w-full max-w-md self-stretch md:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-blue-100" />

            <img
              src="/images/IMG_20250430_155138.jpg"
              alt="Fernando Bueno"
              className="relative h-full min-h-[320px] w-full rounded-3xl object-cover shadow-xl md:min-h-[500px]"
            />
          </div>

          {/* Presentación */}
          <div className="flex min-w-0 flex-col items-start">
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
              Clases de apoyo de inglés
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Aprendé inglés a tu ritmo.
              <span className="mt-2 block text-blue-600">
                Ganá confianza y seguí avanzando.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
              Clases de apoyo personalizadas para niños,
              adolescentes y adultos que quieran fortalecer
              sus conocimientos de inglés, mejorar su comprensión
              y desarrollar sus habilidades de comunicación.
            </p>

            {/* Niveles */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Nivel básico",
                "Nivel intermedio",
                "Apoyo personalizado",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Propuesta de valor */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Un espacio para aprender, resolver dudas y reforzar
              conocimientos con explicaciones claras y adaptadas
              a tus necesidades.
            </p>

            {/* Contacto */}
            <div className="mt-7 flex w-full flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                Consultar por clases
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition duration-200 hover:bg-slate-50"
              >
                Ver certificación
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
