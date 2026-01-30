// Other components
import Logo from "./Logo";
import { Link } from "react-scroll";

// Assets
import LogoGithub from "@/assets/github-logo.png";

function NavBar() {
    const navLinks = [
        {
            label: "Como funciona",
            path: "howitworks"
        },
        {
            label: "Preços",
            path: "pricing"
        },
        {
            label: "Feedback",
            path: "feedback"
        }
    ]

    return (
        <header className="flex items-center justify-between px-8 py-4">
            <Logo />
            <nav>
                <ul className="flex gap-8">
                    {navLinks.map(link => (
                        <li>
                            <Link className="text-gray-700 hover:text-[#ff6b1c] cursor-pointer transition-colors" to={link.label} smooth={true} duration={300}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className="bg-[#ff6b1c] text-white flex px-4 py-2 rounded-lg gap-2 items-center hover:bg-[#C2410C] transition-colors cursor-pointer">
                <img src={LogoGithub} alt="GitHub logo" width={20} height={20} />
                Entrar agora
            </button>
        </header>
    )
}

export default NavBar;