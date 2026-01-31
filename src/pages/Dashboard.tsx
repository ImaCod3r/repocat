import { Outlet } from "react-router-dom";
import {
    LogOut
} from "lucide-react"

// Components
import Logo from '@/components/Logo';
import Footer from "@/components/Footer";

function Dashboard() {
    return (
        <>
            <header className="flex justify-between items-center px-6 py-2">
                <Logo />
                <button className="flex items-center gap-2 p-4 cursor-pointer rounded-full hover:bg-gray-200">
                    <LogOut color="#ff6b1c" />
                </button>
            </header>

            <main className="bg-zinc-50 md:mx-6 px-8 py-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Dashboard;