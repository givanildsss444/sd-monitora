import Image from "next/image";
import NavBar from "../../components/NavBar";
import Start from "../../components/Start";

export default function Home() {

  return (
    <div id="root">
      <div className="flex min-h-screen flex-col bg-background">


        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-end gap-4 px-4">
            <a href="/#home" className="mr-auto flex items-center gap-2">
              <img src='../public/logo.png' alt="logo" className="block dark:hidden h-6 lg:h-7" />
            </a>
            <nav className="hidden gap-4 text-sm md:flex lg:gap-6 lg:text-base">
              <a href="/#benefits" className="text-muted-foreground transition-colors hover:text-foreground"> Beneficios</a>
              <a href="/#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">Como Funciona</a>
              <a href="/#prices" className="text-muted-foreground transition-colors hover:text-foreground">Preços</a>
              <a href="/#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contato</a>
            </nav>
            <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-primary border border-transparent text-primary-foreground hover:bg-primary/90">
              Entrar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in size-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
            </a>
          </div>
        </header>

        

        <div className="flex-1">

          <section id="home" className="relative w-full bg-gradient-to-br from-primary/20 to-background py-12 md:py-24 lg:py-32">
          
            <div className="absolute right-0 top-0 size-full overflow-hidden">
              <div className="absolute right-0 top-0 size-[600px] -translate-y-2/4 translate-x-2/4 rounded-full bg-primary/20"></div>
              <div className="absolute right-0 top-0 size-[1200px] -translate-y-2/4 translate-x-2/4 rounded-full bg-primary/10"></div>
              <div className="absolute right-0 top-0 size-[2000px] -translate-y-2/4 translate-x-2/4 rounded-full bg-primary/5"></div>
            </div>

            <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:px-6 lg:gap-12">
              <div className="flex max-w-screen-lg flex-col items-center space-y-8 text-center">
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">O tratamento não termina na consulta. E o seu acompanhamento também não.</h1>
                  <p className="text-xl text-foreground/80">Transforme seu plano de obesidade em uma jornada contínua, com metas, registros e mensagens automáticas no WhatsApp.</p>
                  <p className="text-xl text-foreground/80">O paciente continua engajado, e você, no controle.</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <span className="text-xl font-semibold text-foreground/80">Teste grátis por 30 dias e veja o impacto no engajamento dos seus pacientes.</span>
                  <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 text-lg border border-transparent text-primary-foreground bg-blue-500 hover:bg-blue-600">
                    Começar teste gratuito
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </a>
                  <a href="/#simulator" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md text-lg text-primary underline-offset-4 h-auto py-0 px-0 hover:underline">Simular valor com base no número de pacientes</a>
                </div>
              </div>
            </div>
    
          </section>

          //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

          <section id="benefits" className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Benefícios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Seu plano vale mais quando entrega mais. E o SD Monitora entrega isso com você.</h2>
                <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">Engaje mais, automatize sua rotina, entregue valor todos os dias, sem perder tempo e sem aumentar sua carga de trabalho.</p>
              </div>

              <div className="grid gap-4 pt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-card text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md lg:col-start-2"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-primary"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></div><h3 className="mb-2 text-xl font-semibold">Acompanhamento contínuo via WhatsApp</h3><p className="text-foreground/80">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p></div>
              </div>

              <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 text-lg bg-primary border border-transparent text-primary-foreground hover:bg-primary/90 mt-12"> Começar teste gratuito</a>
            </div>



            <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
              <svg viewBox="0 0 959 454" className="w-[1000px] rotate-12 fill-primary/20 blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z"></path></svg>
            </div>
          </section>

          //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Diferenciais</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Por que o SD Monitora é a escolha de quem leva a obesidade a sério.</h2>
                <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">Mais do que uma plataforma de lembretes, o SD Monitora entrega acompanhamento contínuo, dados objetivos e engajamento real, com tecnologia feita por médicos para médicos.</p>
              </div>

              <div className="mt-12 flex flex-col items-center space-y-12">
                <div className="grid lg:grid-cols-3">
                  <div className="space-y-4 p-6 bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-primary/10 lg:col-start-2 lg:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-primary"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl font-semibold">Integração real com WhatsApp</h3>
                    <p className="text-foreground/80">Seus pacientes não precisam baixar app, criar login ou aprender a usar um sistema novo. O acompanhamento acontece diretamente no canal que eles mais usam.</p>
                  </div>
                </div>


                <div className="pt-4">
                  <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 text-lg bg-primary border border-transparent text-primary-foreground hover:bg-primary/90">Começar teste gratuito</a>
                </div>
              </div>
            </div>
          </section>

          //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

          <section></section>


        </div>
        <footer></footer>
      </div>
    </div>
  );

}

