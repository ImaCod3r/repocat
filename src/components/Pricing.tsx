import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Para testar o RepoCat sem compromisso.",
    features: [
      "5 gerações de README",
      "Análise básica do repositório",
      "Suporte comunitário",
    ],
    highlighted: false,
    cta: "Começar grátis",
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    description: "Para devs que levam documentação a sério.",
    features: [
      "Gerações ilimitadas",
      "Análise completa do repositório",
      "Commit direto no GitHub",
      "Histórico de versões",
      "Suporte prioritário",
    ],
    highlighted: true,
    badge: "Mais popular",
    cta: "Assinar Pro",
  },
  {
    name: "Team",
    price: "R$ 149",
    period: "/mês",
    description: "Para times e empresas.",
    features: [
      "Tudo do Pro",
      "Múltiplos repositórios",
      "Gerenciamento de equipe",
      "Logs e auditoria",
      "Suporte dedicado",
    ],
    highlighted: false,
    cta: "Falar com vendas",
  },
];

function Pricing() {
  return (
    <section className="bg-zinc-50 py-28 px-6">
      <div className="mx-auto max-w-6xl text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-zinc-900">
          Preços simples e transparentes
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Sem contratos. Cancele quando quiser.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-10 text-left shadow-sm transition ${
                plan.highlighted
                  ? "border-orange-500 bg-white shadow-xl scale-105"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-zinc-900">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-zinc-900">
                  {plan.price}
                </span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>

              <p className="mt-4 text-sm text-zinc-600">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-zinc-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;