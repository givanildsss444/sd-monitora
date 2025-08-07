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

          <section id="contact" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 bg-white">
            
            <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 transform">
                <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
            </div>

            <div className="container relative mx-auto px-4 md:grid-cols-2 md:px-6">

              <div className="mx-auto grid max-w-6xl grid-cols-1  items-center gap-16 lg:grid-cols-2">
                <div>
                  <div className="space-y-2 text-center text-black lg:text-left">
                    <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Contato</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vamos conversar sobre como escalar o acompanhamento dos seus pacientes com obesidade?</h2>
                    <p className="max-w-3xl md:text-xl/relaxed">Preencha o formulário abaixo para falar com um especialista do nosso time.</p>
                    <p className="max-w-3xl md:text-xl/relaxed">Vamos entender sua realidade e te mostrar como o SD Monitora pode se integrar ao seu plano de forma simples, eficiente e lucrativa.</p>
                  </div>

                  <div className="mt-12 text-black">
                    <ul className="w-full space-y-2 text-left">

                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Conheça os benefícios do acompanhamento contínuo e automatizado via WhatsApp</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Descubra como personalizar metas e relatórios para sua rotina clínica</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Entenda o modelo de precificação e as possibilidades de escala e receita recorrente</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Veja como médicos como você já estão aplicando a ferramenta com sucesso</span>
                        </div>
                      </li>
                    </ul>
                  </div>


                </div>

                <div className="flex flex-col gap-4 rounded-xl border bg-white md:gap-6 md:py-6 border-none p-6 shadow-lg">
                  <form className="space-y-6">
                    <div className="space-y-4">

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nome</label>
                        <input className="flex h-10 w-full rounded-md border border-[#E4E7EB] bg-white px-4 py-2 text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:data-[invalid=true]:border-input" placeholder="Digite seu nome" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" aria-invalid="false" data-invalid="false" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <input className="flex h-10 w-full rounded-md border border-[#E4E7EB] bg-white px-4 py-2 text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:data-[invalid=true]:border-input" placeholder="seu-email@exemplo.com" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" aria-invalid="false" data-invalid="false" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Telefone</label>
                        <input className="flex h-10 w-full rounded-md border border-[#E4E7EB] bg-white px-4 py-2 text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:data-[invalid=true]:border-input" placeholder="(00) 00000-0000" id=":r1:-form-item" aria-describedby=":r1:-form-item-description" aria-invalid="false" data-invalid="false" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mensagem (opcional)</label>
                        <textarea className="flex min-h-[80px] text-black w-full rounded-md border border-[#E4E7EB] mt-2 bg-white px-3 py-2  ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:data-[invalid=true]:border-input" placeholder="Como podemos ajudar?" id=":r4:-form-item" aria-describedby=":r4:-form-item-description" aria-invalid="false" data-invalid="false"></textarea>
                      </div>

                    </div>

                    <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/90 hover:cursor-pointer w-full" type="submit">Enviar mensagem</button>

                  </form>
                </div>

              </div>

            </div>

          </section>

          <div className="shrink-0 h-[1px] w-full border-t border-dashed bg-[#DBF5FF]"></div>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
            <div className="container mx-auto px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Perguntas Frequentes</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tire suas dúvidas</h2>
                  <p className="max-w-3xl md:text-xl/relaxed">Respostas para as dúvidas mais comuns sobre o SD Monitora.</p>
              </div>

              <div className="mx-auto mt-12 max-w-screen-lg">
                <div className="w-full space-y-4">

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>

                  <div data-state="closed" className="rounded-lg border border-[#E4E7EB] px-4">

                    <h3 data-state="closed" className="flex">
                      <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r5:" className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&amp;[data-state=open]>svg]:rotate-180 text-left text-lg leading-tight hover:no-underline" data-radix-collection-item="">
                        1. Preciso instalar algo ou o sistema funciona no navegador?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                      </button>
                    </h3>

                    <div data-state="open" id="radix-:r6:" role="region" aria-labelledby="radix-:r5:" data-orientation="vertical" className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-4 pt-0">Não precisa instalar nada. O SD Monitora funciona 100% online, direto do navegador. É só acessar com seu login.</div>
                    </div>

                  </div>



                </div>
              </div>

            </div>
          </section>

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

