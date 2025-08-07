import Image from "next/image";
import Link from "next/link";

export default function Header(){

    return(

        <header className="sticky top-0 z-50 border-b bg-[#fcfeff] backdrop-blur-sm">

          <div className="container mx-auto flex h-16 items-center justify-end gap-4 px-4">
            
            <a href="/#home" className="mr-auto flex items-center gap-2">
              <Image src='/logo.png' alt="logo" width={200} height={200} className="" />
            </a>

            <nav className="hidden gap-4 text-sm md:flex lg:gap-6 lg:text-base">
              <a href="/#benefits" className="text-[#7e8490] transition-colors hover:text-black"> Beneficios</a>
              <a href="/#how-it-works" className="text-[#7e8490] transition-colors hover:text-black">Como Funciona</a>
              <a href="/#prices" className="text-[#7e8490] transition-colors hover:text-black">Preços</a>
              <a href="/#contact" className="text-[#7e8490] transition-colors hover:text-black">Contato</a>
            </nav>

            <Link href="/login" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#08C6FA] border border-transparent text-white hover:bg-primary/90">
              Entrar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in size-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
            </Link>

          </div>

        </header>

    );

}