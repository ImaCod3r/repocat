import {
    Instagram,
    GithubIcon
} from "lucide-react";

// Other components
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="flex flex-col gap-6 p-8">
            <div>
                <Logo />
                <p>Transforme qualquer repositório em um README profissional em minutos.</p>
            </div>

            <div className="w-full bg-gray-300 h-px"></div>

            <div className="flex flex-col-reverse gap-4 items-center md:flex-row md:justify-between">
                <p className="text-center md:text-left">&copy; {new Date().getFullYear()} RepoCat. Todos os direitos reservados.</p>
                <div className="flex items-center gap-2">
                    <a className="no-underline hover:text-[#F54900]" href="https://www.instagram.com/repo.cat" target="__blank">
                        <Instagram size={20} />
                    </a>
                    <a className="no-underline hover:text-[#F54900]" href="https://www.github.com/imaCod3r" target="__blank">
                        <GithubIcon size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;