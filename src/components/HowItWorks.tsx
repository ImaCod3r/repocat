import { UserPlus, Fingerprint, PlugZap } from "lucide-react";

const steps = [
  {
    title: "Conectar GitHub",
    description:
      "Faça login com sua conta GitHub em segundos. Nenhuma configuração manual.",
    icon: UserPlus,
  },
  {
    title: "Analisar Repositório",
    description:
      "O RepoCat entende sua estrutura, dependências e propósito do projeto.",
    icon: Fingerprint,
  },
  {
    title: "Gerar README",
    description:
      "README profissional pronto para commit direto no repositório.",
    icon: PlugZap,
  },
];

function HowItWorks() {
  return (
    <section className="relative bg-zinc-50 py-24 px-6">
      <div className="mx-auto max-w-6xl text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-zinc-900">
          Pronto para documentar em 3 passos
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Do repositório ao README profissional sem fricção.
        </p>

        {/* Steps */}
        <div className="relative mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Linha */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-zinc-200 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                {/* Text */}
                <h3 className="mt-6 text-xl font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm text-zinc-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;