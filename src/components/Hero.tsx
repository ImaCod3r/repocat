function Hero() {
    const textVariants = [
        {
            title: "Se o seu código é bom, o README precisa provar isso.",
            subtitle: "Repocat entende seu repositório e escreve a documentação que seu projeto merece."
        },
        {
            title: "Projetos sérios começam com documentação séria.",
            subtitle: "Transforme qualquer repositório em um README profissional em minutos."
        },
        {
            title: "Código bem escrito merece ser bem explicado.",
            subtitle: "READMEs gerados automaticamente a partir do seu repositório GitHub."
        },
        {
            title: "Você escreve código. A gente escreve o README.",
            subtitle: "Automatize sua documentação sem sair do fluxo de desenvolvimento."
        }
    ]

    const randomIndex = Math.floor(Math.random() * textVariants.length);
    const { title, subtitle } = textVariants[randomIndex];

    return (
        <section className="text-center py-20 px-4 bg-gray-50">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">{title}</h1>
            <p className="text-lg text-gray-600 mb-4">{subtitle}</p>
            <button className="bg-[#ff6b1c] text-white px-6 py-2 rounded-lg hover:bg-[#e55a0f] transition-colors cursor-pointer">
                Começar Agora
            </button>
        </section>
    )
}

export default Hero;