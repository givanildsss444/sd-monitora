import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    return(

        <footer className="w-full border-t bg-white">
          <div className="container mx-auto">

            <div className="grid gap-8 px-4 py-12 text-center md:grid-cols-2 md:py-24 md:text-left lg:py-32">

              <div className="space-y-4">
                <Image src='/logo.png' alt="logo" width={200} height={200} className="" />
                <p className="mt-2 max-w-screen-sm text-black/60">Transformando a relação médico-paciente através do monitoramento contínuo e mudança de hábitos para uma vida mais saudável.</p>
                <div className="space-x-3 text-black">

                  <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10 border border-black/20 bg-white hover:bg-accent hover:text-accent-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="!size-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37M17.5 6.5h.01"></path></svg>
                  </button>

                  <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10 border border-black/20 bg-white hover:bg-accent hover:text-accent-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="!size-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>

                  <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10 border border-black/20 bg-white hover:bg-accent hover:text-accent-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="!size-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>

                  <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 w-10 border border-black/20 bg-white hover:bg-accent hover:text-accent-foreground">
                    <svg viewBox="0 0 448 512" fill="currentColor" className="!size-5"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"></path></svg>
                  </button>

                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 text-black/80">

                <div>
                  <h4 className="mb-3 font-semibold">Legal</h4>
                  <ul className="space-y-2">

                    <li>
                      <Link href="/terms" className="text-black/60 transition-colors hover:text-black">Termos de uso</Link>
                    </li>

                    <li>
                      <Link href="/privacy" className="text-black/60 transition-colors hover:text-black">Política de privacidade</Link>
                    </li>

                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">Empresa</h4>
                  <ul className="space-y-2">

                    <li>
                      <a href="/" className="text-black/60 transition-colors hover:text-black">Sobre</a>
                    </li>

                    <li>
                      <a href="/" className="text-black/60 transition-colors hover:text-black">Blog</a>
                    </li>

                    <li>
                      <a href="#contact" className="text-black/60 transition-colors hover:text-black">Contato</a>
                    </li>

                  </ul>
                </div>

              </div>

            </div>

            <div className="border-t p-4">
              <p className="text-center text-sm text-black/60">© 2025 SD Monitora. Todos os direitos reservados.</p>
            </div>

          </div>
        </footer>

    );

}