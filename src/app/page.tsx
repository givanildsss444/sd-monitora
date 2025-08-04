import Image from "next/image";
import NavBar from "../../components/NavBar";
import Start from "../../components/Start";

export default function Home() {

  return (
    <div id="root">
      <div className="flex min-h-screen flex-col bg-background">


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
            <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#08C6FA] border border-transparent text-white hover:bg-primary/90">
              Entrar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in size-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
            </a>
          </div>
        </header>



        <div className="flex-1">

          <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 bg-[#eafaff]" >

            <div className="absolute right-0 top-0 size-full overflow-hidden">
              <div className="absolute right-0 top-0 size-[2000px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#ebf9fe]"></div>
              <div className="absolute right-0 top-0 size-[1200px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#cff2fc]"></div>
              <div className="absolute right-0 top-0 size-[600px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#b4eafb]"></div>
            </div>

            <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:px-6 lg:gap-12">
              <div className="flex max-w-screen-lg flex-col items-center space-y-8 text-center">
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-3xl text-black font-bold tracking-tight sm:text-5xl">O tratamento não termina na consulta. E o seu acompanhamento também não.</h1>
                  <p className="text-xl text-black ">Transforme seu plano de obesidade em uma jornada contínua, com metas, registros e mensagens automáticas no WhatsApp.</p>
                  <p className="text-xl  text-black ">O paciente continua engajado, e você, no controle.</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <span className="text-xl font-semibold text-black">Teste grátis por 30 dias e veja o impacto no engajamento dos seus pacientes.</span>
                  <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg border border-transparent text-primary-foreground bg-blue-500 hover:bg-blue-600">
                    Começar teste gratuito
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </a>
                  <a href="/#simulator" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md text-lg text-primary underline-offset-4 h-auto text-[#47c7fa] py-0 px-0 hover:underline">Simular valor com base no número de pacientes</a>
                </div>
              </div>
            </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section id="benefits" className="relative w-full overflow-hidden bg-[#FFFFFF] py-12 md:py-24 lg:py-32">

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Benefícios</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Seu plano vale mais quando entrega mais. E o SD Monitora entrega isso com você.</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">Engaje mais, automatize sua rotina, entregue valor todos os dias, sem perder tempo e sem aumentar sua carga de trabalho.</p>
              </div>

              <div className="grid gap-4 pt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md lg:col-start-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

              </div>

              <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/50 mt-12">Começar teste gratuito</a>

            </div>



            <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
              <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
            </div>

          </section>

          {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 ">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Diferenciais</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Por que o SD Monitora é a escolha de quem leva a obesidade a sério.</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">Mais do que uma plataforma de lembretes, o SD Monitora entrega acompanhamento contínuo, dados objetivos e engajamento real, com tecnologia feita por médicos para médicos.</p>
              </div>

              <div className="mt-12 flex flex-col items-center space-y-12">
                <div className="grid lg:grid-cols-3">
                  <div className="space-y-4 p-6 bg-[#EDF9FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF] lg:col-start-2 lg:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-black">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>
                </div>


                <div className="pt-4">
                  <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/50 mt-12">Começar teste gratuito</a>
                </div>
              </div>
            </div>
          </section>

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

          <section className="relative w-full overflow-hidden bg-[#FFFFFF] py-12 md:py-24 lg:py-32">

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

          <section id="simulator"></section>
          

        </div>
        <footer></footer>
      </div>
    </div>
  );

}

