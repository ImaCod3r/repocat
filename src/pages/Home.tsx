import {
    LockIcon,
    EyeIcon,
    BookIcon
} from "lucide-react";

// Components
import UsageRing from '@/components/UsageRing';

const INITIAL_REPOS = [
    {
        name: "Repositório 1",
        description: "Descrição do repositório 1",
        visibility: "Público"
    }
];

function Home() {
    return (
        <div className="flex items-start gap-6">
            <div className="flex flex-col items-center text-center gap-4 bg-white w-full md:w-75 py-8 rounded-xl shadow-md">
                <img className="w-30 h-30 rounded-full" src="https://github.com/imaCod3r.png" alt="Github profile" />

                <div>
                    <h2 className="text-xl">ImaCod3r</h2>
                    <p className="text-gray-600 text-[12px] mb-6">Edson Rodrigues</p>

                    <h2 className="text-lg font-semibold mb-4">Estatísticas de Uso</h2>
                    <div className="rounded-full">
                        <UsageRing used={30} total={100} />
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md w-full">
                <h1 className="text-2xl font-bold">Seus repositórios</h1>

                <div className="w-full h-0.5 bg-gray-200 mb-6 mt-2" />

                {INITIAL_REPOS.map((repo, index) => (
                    <div key={index} className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <div className="bg-white border border-gray-300 w-20 px-2 py-1 rounded-full mb-2">
                                {repo.visibility === "Privado" ? (
                                    <div className="flex items-center gap-1">
                                        <LockIcon className="h-3 w-3 text-gray-600" />
                                        <p className="text-[12px] text-gray-600">Privado</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1">
                                        <EyeIcon className="h-3 w-3 text-gray-600" />
                                        <p className="text-[12px] text-gray-600">Público</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{repo.name}</h2>
                                <p className="text-gray-600">{repo.description}</p>
                            </div>
                        </div>

                        <button className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 cursor-pointer">
                            <BookIcon className="h-4 w-4" color="#ffff" />
                            <p className="text-white font-semibold">Gerar README</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;