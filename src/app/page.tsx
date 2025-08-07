import Image from "next/image";

import Header from "../../components/Header";
import Start from "../../components/Start";
import Benefits from "../../components/Benefits";
import Features from "../../components/Features";

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

          <section id="how-it-works" className="w-full bg-[#D2F2FE] from-[#E3F7FF] to-white bg-gradient-to-bl py-12 md:py-24 lg:py-32">

            <div className="container mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Como Funciona</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Uma jornada completa para o sucesso do seu paciente com obesidade</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">O SD Monitora se integra ao seu plano de acompanhamento para manter o paciente engajado, focado e em evolução todos os dias, mesmo longe do consultório.</p>
              </div>

              <div className="mx-auto pt-12">

                <div className="grid grid-cols-[auto,1fr] gap-x-1 md:grid-cols-[1fr,auto,1fr] md:gap-x-4">
                  <div className="hidden flex-1 md:block"></div>

                  <div className="relative after:absolute after:bottom-0 after:start-7 after:top-14 after:-translate-x-[0.5px] after:border-l-2 after:border-dashed after:border-primary/50 last:after:hidden md:after:start-8 md:after:top-16">
                    <div className="relative z-10 flex size-14 items-center justify-center md:size-16">
                      <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#40CDFB] text-lg font-semibold text-white md:size-10 md:text-xl">1</div>
                    </div>
                    ::after
                  </div>

                  <div className="mb-6 flex-1 space-y-3 rounded-lg bg-[#EBF9FE] bg-gradient-to-r from-[#EBF9FE] to-transparent p-4 text-left">
                    <h3 className="text-xl text-black font-semibold">Primeira Consulta: Defina o plano e ative o monitoramento</h3>
                    <p className="text-black">Você cadastra o paciente na plataforma e configura o plano: metas de peso, hábitos a serem monitorados e frequência dos registros.</p>
                    <p className="italic text-black">Exemplo: “Perder 4kg em 8 semanas”, “Caminhar 3x por semana”, “Evitar açúcar à noite”.</p>
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-x-1 md:grid-cols-[1fr,auto,1fr] md:gap-x-4">
                  <div className="order-3 mb-6 flex-1 space-y-3 rounded-lg bg-[#EBF9FE] bg-gradient-to-r from-[#EBF9FE] to-transparent p-4 md:order-1 md:bg-gradient-to-l md:text-right">
                    <h3 className="text-xl text-black font-semibold">Monitoramento automático via WhatsApp</h3>
                    <p className="text-black">O paciente recebe uma mensagem no WhatsApp para registrar o peso e responder às metas. Tudo com linguagem simples e frequência definida por você.</p>
                    <p className="italic text-black">Você acompanha sem precisar cobrar ou enviar mensagens manuais.</p>
                  </div>

                  <div className="relative order-2 after:absolute after:bottom-0 after:start-7 after:top-14 after:-translate-x-[0.5px] after:border-l-2 after:border-dashed after:border-primary/50 last:after:hidden md:after:start-8 md:after:top-16">
                    <div className="relative z-10 flex size-14 items-center justify-center md:size-16">
                      <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#40CDFB] text-lg font-semibold text-white md:size-10 md:text-xl">2</div>
                    </div>
                    ::after
                  </div>
                  <div className="hidden flex-1 md:order-3 md:block"></div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-x-1 md:grid-cols-[1fr,auto,1fr] md:gap-x-4">
                  <div className="hidden flex-1 md:block"></div>

                  <div className="relative after:absolute after:bottom-0 after:start-7 after:top-14 after:-translate-x-[0.5px] after:border-l-2 after:border-dashed after:border-primary/50 last:after:hidden md:after:start-8 md:after:top-16">
                    <div className="relative z-10 flex size-14 items-center justify-center md:size-16">
                      <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#40CDFB] text-lg font-semibold text-white md:size-10 md:text-xl">1</div>
                    </div>
                    ::after
                  </div>

                  <div className="mb-6 flex-1 space-y-3 rounded-lg bg-[#EBF9FE] bg-gradient-to-r from-[#EBF9FE] to-transparent p-4 text-left">
                    <h3 className="text-xl text-black font-semibold">Primeira Consulta: Defina o plano e ative o monitoramento</h3>
                    <p className="text-black">Você cadastra o paciente na plataforma e configura o plano: metas de peso, hábitos a serem monitorados e frequência dos registros.</p>
                    <p className="italic text-black">Exemplo: “Perder 4kg em 8 semanas”, “Caminhar 3x por semana”, “Evitar açúcar à noite”.</p>
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-x-1 md:grid-cols-[1fr,auto,1fr] md:gap-x-4">
                  <div className="order-3 mb-6 flex-1 space-y-3 rounded-lg bg-[#EBF9FE] bg-gradient-to-r from-[#EBF9FE] to-transparent p-4 md:order-1 md:bg-gradient-to-l md:text-right">
                    <h3 className="text-xl text-black font-semibold">Monitoramento automático via WhatsApp</h3>
                    <p className="text-black">O paciente recebe uma mensagem no WhatsApp para registrar o peso e responder às metas. Tudo com linguagem simples e frequência definida por você.</p>
                    <p className="italic text-black">Você acompanha sem precisar cobrar ou enviar mensagens manuais.</p>
                  </div>

                  <div className="relative order-2 after:absolute after:bottom-0 after:start-7 after:top-14 after:-translate-x-[0.5px] after:border-l-2 after:border-dashed after:border-primary/50 last:after:hidden md:after:start-8 md:after:top-16">
                    <div className="relative z-10 flex size-14 items-center justify-center md:size-16">
                      <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#40CDFB] text-lg font-semibold text-white md:size-10 md:text-xl">2</div>
                    </div>
                    ::after
                  </div>
                  <div className="hidden flex-1 md:order-3 md:block"></div>
                </div>



              </div>


              <a href=""></a>

            </div>


          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


          <section className="w-full bg-[#D2F2FE] py-12 md:py-24 lg:py-32">
            {/*"w-full bg-[#D2F2FE] from-[#D2F2FE] to-white bg-gradient-to-bl py-12 md:py-24 lg:py-32" */}
            <div className="container mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Depoimentos</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Veja o que dizem os médicos que já monitoram obesidade fora do consultório.</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">Resultados mais consistentes, pacientes mais presentes e planos mais valorizados: esses profissionais mostram que é possível ir além do básico.</p>
              </div>

              <div className="grid gap-4  pt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

                <div className="g-4 rounded-xl border bg-white text-white-foreground md:gap-6 md:py-6 flex flex-col !gap-0 space-y-6 border-none p-6 shadow-md transition-shadow hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 text-[#40CDFB] opacity-50"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                  <p className="flex-1 text-black">O SD Monitora transformou minha prática médica. Agora consigo acompanhar meus pacientes de perto e os resultados são impressionantes.</p>
                  <div className="flex items-center gap-4">
                    <span className="relative inline-flex shrink-0 items-center justify-center overflow-hidden align-middle text-black data-[group-item]:border-2 border-background h-10 w-10 text-lg rounded-full">
                      <Image src="/osmar-archiotto-avatar.png" alt="Avatar" height={200} width={200} className="h-full w-full object-cover" />
                    </span>
                    <div className="flex flex-1 flex-col">
                      <span className="font-semibold text-black leading-tight">Dr. Osmar Marchiotto Júnior</span>
                      <span className="text-sm leading-tight text-black">Cardiologista</span>
                    </div>
                  </div>
                </div>

                <div className="g-4 rounded-xl border bg-white text-white-foreground md:gap-6 md:py-6 flex flex-col !gap-0 space-y-6 border-none p-6 shadow-md transition-shadow hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 text-[#40CDFB] opacity-50"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                  <p className="flex-1 text-black">Meus pacientes estão mais engajados e os resultados são muito mais consistentes. Além disso, criei uma nova fonte de receita para minha clínica.</p>
                  <div className="flex items-center gap-4">
                    <span className="relative inline-flex shrink-0 items-center justify-center overflow-hidden align-middle text-black data-[group-item]:border-2 border-background h-10 w-10 text-lg rounded-full">
                      <Image src="/osmar-archiotto-avatar.png" alt="Avatar" height={200} width={200} className="h-full w-full object-cover" />
                    </span>
                    <div className="flex flex-1 flex-col">
                      <span className="font-semibold text-black leading-tight">Dr. Osmar Marchiotto Júnior</span>
                      <span className="text-sm leading-tight text-black">Cardiologista</span>
                    </div>
                  </div>
                </div>

                <div className="g-4 rounded-xl border bg-white text-white-foreground md:gap-6 md:py-6 flex flex-col !gap-0 space-y-6 border-none p-6 shadow-md transition-shadow hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 text-[#40CDFB] opacity-50"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                  <p className="flex-1 text-black">Cuidado que gera valor. Com a SD Monitora, sua consulta passa a valer mais aos olhos do paciente. Consequentemente ele está disposto a pagar mais.</p>
                  <div className="flex items-center gap-4">
                    <span className="relative inline-flex shrink-0 items-center justify-center overflow-hidden align-middle text-black data-[group-item]:border-2 border-background h-10 w-10 text-lg rounded-full">
                      <Image src="/lorenzo-tome-avatar.png" alt="Avatar" height={200} width={200} className="h-full w-full object-cover" />
                    </span>
                    <div className="flex flex-1 flex-col">
                      <span className="font-semibold text-black leading-tight">Dr. Lorenzo Tomé</span>
                      <span className="text-sm leading-tight text-black">Radiologista</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section className="relative w-full overflow-hidden bg-[#FFFFFF] py-12 md:py-24 lg:py-32">

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Embaixadores</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Os médicos que são referência escolhem o SD Monitora</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">Entre eles, dois dos principais nomes da endocrinologia e da cardiologia no Brasil reconhecem na plataforma uma solução eficiente para ampliar o cuidado além do consultório, com acompanhamento inteligente e centrado no paciente.</p>
              </div>

              <div className="mx-auto grid gap-8 pt-12 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-3">

                <div className="gap-4 rounded-xl border bg-white py-4 text-card-foreground md:gap-6 md:py-6 mx-auto flex w-full max-w-xs flex-col items-center overflow-hidden border-none !p-0 text-center shadow-md transition-shadow hover:shadow-lg">
                  <Image src="/pedro-schwartzmann.png" alt="" height={200} width={200} className="w-full" />
                  <div className="flex flex-1 flex-col items-center space-y-4 px-6 pb-6">
                    <h3 className="text-xl text-black font-semibold">Dr. Pedro Schwartzmann</h3>
                    <p className="text-sm text-black">CRM-SP 121092 | Cardiologista RQE 35692 | Founder CardioEasy | Doutor em Ciências Medicas pela USP | Coordenador da Unidade de Tratamento Cardiovascular Avançado - Hospital Unimed | Coordenador e pesquisador do CAPED-Centro de Pesquisa (RP)</p>
                    <div className="shrink-0 h-1 w-10 rounded-full bg-[#40CDFB]"></div>
                  </div>
                </div>

                <div className="gap-4 rounded-xl border bg-white py-4 text-card-foreground md:gap-6 md:py-6 mx-auto flex w-full max-w-xs flex-col items-center overflow-hidden border-none !p-0 text-center shadow-md transition-shadow hover:shadow-lg">
                  <Image src="/bruno-halpern.png" alt="" height={200} width={200} className="w-full" />
                  <div className="flex flex-1 flex-col items-center space-y-4 px-6 pb-6">
                    <h3 className="text-xl text-black font-semibold">Dr. Bruno Halpern</h3>
                    <p className="text-sm text-black">CRM-SP 124905 | Endocrinologista RQE 55372 | Doutor em Medicina (USP) | Presidente eleito World Obesity Federation 2026-28 | Vice-Presidente ABESO</p>
                    <div className="shrink-0 h-1 w-10 rounded-full bg-[#40CDFB]"></div>
                  </div>
                </div>

                <div className="gap-4 rounded-xl border bg-white py-4 text-card-foreground md:gap-6 md:py-6 mx-auto flex w-full max-w-xs flex-col items-center overflow-hidden border-none !p-0 text-center shadow-md transition-shadow hover:shadow-lg">
                  <Image src="/osmar-archiotto.png" alt="" height={200} width={200} className="w-full" />
                  <div className="flex flex-1 flex-col items-center space-y-4 px-6 pb-6">
                    <h3 className="text-xl text-black font-semibold">Dr. Osmar Marchiotto Junior</h3>
                    <p className="text-sm text-black">CRM-SP 108181 | Cardiologista RQE 28680 | Founder do MarchFit | Pós-graduado em Nutrologia (USP - RP)</p>
                    <div className="shrink-0 h-1 w-10 rounded-full bg-[#40CDFB]"></div>
                  </div>
                </div>

              </div>

              <p className="mx-auto mt-12 max-w-[700px] text-center text-black md:text-xl/relaxed">Porque a boa medicina não termina na consulta. Ela continua: com consistência, estratégia e presença.</p>

              <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/50 mt-12">Quero usar a solução que eles confiam!</a>

            </div>



            <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
              <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
            </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section id="prices" className="relative w-full overflow-hidden bg-[#FFFFFF] py-12 md:py-24 lg:py-32">

            <div className="container relative z-10 mx-auto px-4 md:px-6">
        

              <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6">

                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Preços</div>
                  <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Modelo simples, comece gratuitamente!</h2>
                  <p className="max-w-3xl text-black md:text-xl/relaxed">Você só paga conforme o número de pacientes ativos. O paciente contrata você. Nós entregamos a tecnologia.</p>
                </div>

              </div>

              <div className="mx-auto grid gap-8 pt-12 md:gap-8 lg:mt-6 lg:grid-cols-3">

                <div className="gap-4 rounded-xl  border bg-white py-4 text-card-foreground md:gap-6 md:py-6 flex h-full flex-col shadow-md transition-shadow hover:shadow-lg sm:max-w-none">

                  <div className="text-black has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 md:[.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 md:px-6">
                    <div className="text-xl font-semibold">Plano Básico</div>
                    <div className="text-4xl font-bold ">
                      R$ 59
                      <span className="text-base font-normal ">/ paciente / mês</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Ideal para quem está começando a estruturar planos.</div>
                  </div>

                  <div className="px-4 md:px-6 flex-1 ">
                    <div className="rounded-lg text-black bg-[#F3F4F6] p-4 text-sm">
                      Pacientes cadastrados nos primeiros 30 dias têm
                      <span className="font-bold"> 40% de desconto</span>
                      até o fim do acompanhamento:
                      <span className="font-bold"> R$ 35,90</span>
                    </div>

                    <ul className="my-6 space-y-3 text-black">
                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2 h-5 w-5 flex-shrink-0 text-red-500"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        <div className="flex flex-col">
                          <span className="line-through">30 dias gratuitos</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 border border-input bg-white hover:bg-accent hover:text-accent-foreground w-full"><span className="text-black">Assinar agora</span></a>
                  </div>

                </div>

                <div className="gap-4 rounded-xl bg-white py-4 text-card-foreground md:gap-6 md:py-6 flex h-full flex-col shadow-md transition-shadow hover:shadow-lg sm:max-w-none relative border-2 border-[#40CDFB]  lg:scale-105">
                  <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-[#40CDFB]  px-4 py-1 text-base font-semibold text-white">Mais escolhido</div>
                  <div className="text-black has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 md:[.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 md:px-6">
                    <div className="text-xl font-semibold">Plano Premium</div>
                    <div className="text-4xl font-bold">R$ 110
                      <span className="text-base font-normal">/ paciente / mês</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Ideal para quem já vende planos e quer escalar com estrutura.</div>
                  </div>
                  <div className="px-4 md:px-6 flex-1">
                    <div className="rounded-lg  border border-primary/20 bg-[#F3F4F6] p-4 text-sm">
                      <p className="text-black">
                        {"Pacientes cadastrados nos primeiros 30 dias têm "}
                        <span className="underline">50% de desconto</span>
                        {" até o fim do acompanhamento:"}
                      </p>
                    </div>

                    <ul className="my-6 space-y-3 text-black">

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Desconto progressivo por escala de pacientes</span>
                          <ul className="list-disc pl-6">
                            <li>• 1 a 10 pacientes: R$ 110</li>
                            <li>• 11 a 30 pacientes: R$ 99</li>
                            <li>• A partir de 31 pacientes: R$ 89</li>
                          </ul>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                    </ul>

                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#40CDFB] border border-transparent text-white hover:bg-primary/90 w-full">Assinar Agora</a>
                  </div>

                </div>

                <div className="gap-4 rounded-xl  border bg-white py-4 text-card-foreground md:gap-6 md:py-6 flex h-full flex-col shadow-md transition-shadow hover:shadow-lg sm:max-w-none">

                  <div className="text-black has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 md:[.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 md:px-6">
                    <div className="text-xl font-semibold">Plano Básico</div>
                    <div className="text-4xl font-bold ">
                      R$ 59
                      <span className="text-base font-normal ">/ paciente / mês</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Ideal para quem está começando a estruturar planos.</div>
                  </div>

                  <div className="px-4 md:px-6 flex-1 ">
                    <div className="rounded-lg text-black bg-[#F3F4F6] p-4 text-sm">
                      Pacientes cadastrados nos primeiros 30 dias têm
                      <span className="font-bold"> 40% de desconto</span>
                      até o fim do acompanhamento:
                      <span className="font-bold"> R$ 35,90</span>
                    </div>

                    <ul className="my-6 space-y-3 text-black">
                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>30 dias gratuitos</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2 h-5 w-5 flex-shrink-0 text-red-500"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        <div className="flex flex-col">
                          <span className="line-through">30 dias gratuitos</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 border border-input bg-white hover:bg-accent hover:text-accent-foreground w-full"><span className="text-black">Assinar agora</span></a>
                  </div>

                </div>
              </div>
            </div>

              <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
                <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
              </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <div className="shrink-0 h-[1px] w-full border-t border-dashed bg-[#DBF5FF]"></div>

          <section id="simulator" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 bg-white">
            <div className="container relative z-10 mx-auto px-4 md:px-6">

              <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center text-black">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Simulador</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Descubra seu preço ideal</h2>
                <p className="max-w-3xl  md:text-xl/relaxed">Use nosso simulador para calcular o custo mensal com base no número de pacientes e aproveite descontos exclusivos.</p>
              </div>

              <div className="mx-auto max-w-6xl space-y-6">

                <div className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-3">

                    <div className="flex flex-col gap-4 border py-4 shadow-sm md:gap-6 md:py-6 relative cursor-pointer rounded-lg transition-all hover:shadow-md hover:border-[#40CDFB] " role="button" aria-pressed="false">
                      <div className="px-4 md:px-6 text-black">
                        <h3 className="text-lg font-medium">Básico</h3>
                        <div className="mt-1 text-xl font-bold lg:text-2xl">
                          R$ 59,00
                          <span className="text-sm font-normal text-muted-foreground">/ paciente</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 border bg-card py-4 text-card-foreground shadow-sm md:gap-6 md:py-6 relative cursor-pointer rounded-lg transition-all hover:shadow-md border-[#40CDFB] hover:border-[#40CDFB] bg-[#40CDFB]/5" role="button" aria-pressed="false">
                      <div className="px-4 md:px-6 text-black">
                        <div className="inline-flex items-center justify-center rounded-xl border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-auto border-transparent text-white [a&]:hover:bg-[#40CDFB]/90 absolute -top-3 left-4 bg-[#40CDFB]">Mais escolhido</div>
                        <h3 className="text-lg font-medium">Premium</h3>
                        <div className="mt-1 text-xl font-bold lg:text-2xl">
                          R$ 110,00
                          <span className="text-sm font-normal text-muted-foreground">/ paciente</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 border py-4 text-card-foreground shadow-sm md:gap-6 md:py-6 relative cursor-pointer rounded-lg transition-all hover:shadow-md hover:border-[#40CDFB] " role="button" aria-pressed="false">
                      <div className="px-4 md:px-6 text-black">
                        <h3 className="text-lg font-medium">Básico</h3>
                        <div className="mt-1 text-xl font-bold lg:text-2xl">
                          R$ 59,00
                          <span className="text-sm font-normal text-muted-foreground">/ paciente</span>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border bg-card py-4 text-card-foreground shadow-sm md:gap-6 md:py-6">
                  <div className="px-4 md:px-6">
                    <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] text-black">

                      <div className="flex flex-col justify-between gap-4 ">
                        <div className="flex items-center justify-between gap-4">
                          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium">
                            Pacientes que serão cadastrados nos primeiros 30 dias
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info ml-2 inline-block size-4 text-muted-foreground" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                          </label>
                          <input type="number" className="flex h-10 rounded-md border border-[#F3F4F6] bg-white px-4 py-2 ring-offset-[#F3F4F6] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-24 flex-shrink-0 font-semibold" min="0" max="1000" value="0" data-listener-added_73a69609="true"></input>
                        </div>

                        <span className="relative flex touch-none select-none items-center w-full">
                          <span className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#40CDFB]">
                            <span className="absolute h-full bg-[#40CDFB]"></span>
                          </span>

                          <span>
                            <span className="block h-5 w-5 rounded-full border-2 border-[#40CDFB] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></span>
                          </span>
                        </span>
                      </div>

                      <div className="shrink-0 bg-border h-full w-[1px]" data-orietation="vertical"></div>

                      <div className="flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between gap-4">
                          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium">Novos pacientes após 30 dias</label>
                          <input type="number" className="flex h-10 rounded-md border border-[#F3F4F6] bg-white px-4 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-24 flex-shrink-0 font-semibold" min="0" max="1000" value="0" data-listener-added_73a69609="true"></input>
                        </div>

                        <span className="relative flex touch-none select-none items-center w-full">
                          <span className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#40CDFB]">
                            <span className="absolute h-full bg-[#40CDFB]"></span>
                          </span>

                          <span>
                            <span className="block h-5 w-5 rounded-full border-2 border-[#40CDFB] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></span>
                          </span>
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-3 dark:border-green-200 dark:from-[#F1FDF4] dark:to-[#EFF6FE] md:p-4">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <h4 className="font-semibold text-[#166434]">Benefício Incluído</h4>
                    <div className="space-y-1 text-sm text-green-700">
                      <p>• 84 pacientes com 40% de desconto no primeiro mês</p>
                    </div>
                  </div>
                </div>


                <div className="grid gap-6 md:grid-cols-3">

                  <div data-slot="card" className="flex flex-col gap-4 rounded-xl border border-[#E4E7EB] bg-card py-4 text-black shadow-sm md:gap-6 md:py-6">
                    <div data-slot="card-content" className="px-4 md:px-6">
                      <div className="flex items-center gap-2 text-sm md:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dollar-sign size-4"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        Preço Original
                      </div>
                      <div className="mt-2 text-xlfont-bold md:text-2xl">R$&nbsp;177,00</div>
                      <p className="text-xs text-muted-foreground">R$&nbsp;59,00 por paciente</p>
                    </div>
                  </div>

                  <div data-slot="card" className="flex flex-col gap-4 rounded-xl border border-[#E4E7EB] bg-card py-4 text-black shadow-sm md:gap-6 md:py-6">
                    <div data-slot="card-content" className="px-4 md:px-6">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-percent h-4 w-4"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
                        Desconto
                      </div>
                      <div className="mt-2 text-xl font-bold text-green-600 md:text-2xl">-R$&nbsp;0,00</div>
                      <p className="text-xs text-muted-foreground">0% de economia</p>
                    </div>
                  </div>

                  <div data-slot="card" className="flex flex-col gap-4 rounded-xl border border-[#E4E7EB] bg-card py-4 text-black shadow-sm md:gap-6 md:py-6">
                    <div data-slot="card-content" className="px-4 md:px-6">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calculator h-4 w-4"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                        Preço Final
                      </div>
                      <div className="mt-2 text-xl font-bold text-green-600 md:text-2xl">R$&nbsp;177,00</div>
                      <p className="text-xs text-green-600">R$&nbsp;59,00 por paciente/mês</p>
                    </div>
                  </div>

                </div>

                <div className="space-y-4 text-black">

                  <div>
                    <h2 className="text-lg font-medium">Faixas de Desconto por Volume</h2>
                    <p className="text-sm text-muted-foreground">Quanto mais pacientes você tiver, maior será o desconto aplicado</p>
                  </div>

                  <ul className="space-y-2">

                    <li className="grid grid-cols-[1fr_auto] gap-x-4 rounded-md border p-4 md:grid-cols-[1fr_auto_auto] md:pl-5 border-green-500">
                      <span className="flex-1 font-medium">1 a 10 pacientes</span>
                      <span className="order-2 text-muted-foreground md:order-none">R$ 110,00 / paciente</span>
                      <div className="row-span-2 flex items-center justify-center gap-2">
                        <span className="font-semibold text-green-600">0% OFF</span>
                        <div className="inline-flex items-center justify-center rounded-sm border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-auto [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border-green-500 bg-green-500 text-xs text-white dark:border-green-600 dark:bg-green-600">
                          Ativo
                        </div>
                      </div>
                    </li>

                    <li className="grid grid-cols-[1fr_auto] gap-x-4 rounded-md border p-4 md:grid-cols-[1fr_auto_auto] md:pl-5 border-[#E4E7EB]">
                      <span className="flex-1 font-medium">11 a 30 pacientes</span>
                      <span className="order-2 text-muted-foreground md:order-none">R$ 99,00 / paciente</span>
                      <div className="row-span-2 flex items-center justify-center gap-2">
                        <span className="font-semibold text-green-600">0% OFF</span>
                      </div>
                    </li>

                    <li className="grid grid-cols-[1fr_auto] gap-x-4 rounded-md border p-4 md:grid-cols-[1fr_auto_auto] md:pl-5 border-[#E4E7EB]">
                      <span className="flex-1 font-medium">31 a ∞ pacientes</span>
                      <span className="order-2 text-muted-foreground md:order-none">R$ 89,00 / paciente</span>
                      <div className="row-span-2 flex items-center justify-center gap-2">
                        <span className="font-semibold text-green-600">0% OFF</span>
                      </div>
                    </li>

                  </ul>

                </div>              

              </div>
            </div>
          </section>
          
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

