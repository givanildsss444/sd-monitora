import Image from "next/image";

import Header from "../../components/Header";
import Start from "../../components/Start";
import Benefits from "../../components/Benefits";
import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import Ambassadors from "../../components/Ambassadors";
import Prices from "../../components/Prices"
import Simulator from "../../components/Simulator";
import Contact from "../../components/Contact";
import Questions from "../../components/Questions";


export default function Home() {

  return (
    <div id="root">

      <div className="flex min-h-screen flex-col bg-background">

        <Header />

        <div className="flex-1">

          <Start />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Benefits />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Features />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <HowItWorks />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


          <Testimonials />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Ambassadors />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Prices />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <div className="shrink-0 h-[1px] w-full border-t border-dashed bg-[#DBF5FF]"></div>

          <Simulator />
          
          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <div className="shrink-0 h-[1px] w-full border-t border-dashed bg-[#DBF5FF]"></div>

          <Contact />

          <div className="shrink-0 h-[1px] w-full border-t border-dashed bg-[#DBF5FF]"></div>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Questions />

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="relative w-full bg-[#eafaff] from-[#40CDFB]/20 to-[#40CDFB] py-20">

            <div className="absolute right-0 top-0 size-full overflow-hidden">
              <div className="absolute right-0 top-0 size-[2000px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#ebf9fe]"></div>
              <div className="absolute right-0 top-0 size-[1200px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#cff2fc]"></div>
              <div className="absolute right-0 top-0 size-[600px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#b4eafb]"></div>
            </div>

            <div className="container relative mx-auto max-w-6xl space-y-6 px-4 text-black">

              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Seu plano já entrega cuidado. Com o SD Monitora, ele entrega presença, dados e resultado.</h2>
                <p className="text-lg text-black/80">Você já decidiu tratar obesidade com seriedade. Agora é hora de escalar, automatizar e mostrar esse valor todos os dias.</p>
                <p className="text-lg font-medium text-black/80">Só continua no plano quem sente que está sendo acompanhado. Com o SD Monitora, você garante isso — sem comprometer seu tempo.</p>                
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/90">
                  <a href="/login" data-discover="true">Quero testar grátis por 30 dias</a>
                </button>
                <p className="text-sm italic text-black/80">Sem cartão. Sem compromisso. Apenas valor real para você e seus pacientes.</p>
              </div>

            </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        </div>

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
                      <a href="" className="text-black/60 transition-colors hover:text-black">Termos de uso</a>
                    </li>

                    <li>
                      <a href="" className="text-black/60 transition-colors hover:text-black">Política de privacidade</a>
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

      </div>

    </div>
  );

}

