import Image from "next/image";

export default function NavBar(){

    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md h-20 flex items-center justify-evenly px-4 md:px-8">

            
                <Image
                    src='/logo.png'
                    alt='Logo'
                    height={250}
                    width={170}
                />

                <nav className="items-center justify-center hidden gap-4 text-sm md:flex lg:gap-6 lg:text-base">
                    <a className="cursor-pointer text-muted-foreground text-[#6e7582] transition-colors hover:text-black">Benefícios</a>
                    <a className="cursor-pointer text-muted-foreground text-[#6e7582] transition-colors hover:text-black">Como Funciona</a>
                    <a className="cursor-pointer text-muted-foreground text-[#6e7582] transition-colors hover:text-black">Preços</a>
                    <a className="cursor-pointer text-muted-foreground text-[#6e7582] transition-colors hover:text-black">Contato</a>
                    <a className="cursor-pointer inline-flex itens-center justify-center text-muted-foreground text-white transition-colors hover:text-foreground bg-[#08c6fa] px-4 py-2 rounded-xl ">Entrar
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="relative top-[1px] lucide lucide-log-in size-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
                    </a>
                </nav>

         

        </header>

    );

}