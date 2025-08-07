export default function Benefits(){

  return(

    <section id="benefits" className="relative w-full overflow-hidden bg-[#FFFFFF] py-12 md:py-24 lg:py-32">

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6">

              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Benefícios</div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl">Seu plano vale mais quando entrega mais. E o SD Monitora entrega isso com você.</h2>
                <p className="max-w-3xl text-black md:text-xl/relaxed">Engaje mais, automatize sua rotina, entregue valor todos os dias, sem perder tempo e sem aumentar sua carga de trabalho.</p>
              </div>

              <div className="grid gap-4 pt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 text-[#40CDFB]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Acompanhamento contínuo via WhatsApp</h3>
                  <p className="text-black">Lembretes e registros semanais são enviados automaticamente para o paciente. Você recebe tudo no seu painel, sem precisar cobrar ou lembrar.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-[#40CDFB]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Economia de tempo para acompanhar dezenas de pacientes</h3>
                  <p className="text-black">Monitore peso, hábitos e metas com poucos cliques. Mesmo com 30 pacientes ativos, sua rotina continua leve.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line h-6 w-6 text-[#40CDFB]"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Relatórios completos para decisões clínicas melhores</h3>
                  <p className="text-black">Visualize, em segundos, a evolução de cada paciente. Use dados reais para ajustar condutas e reforçar adesão.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-[#40CDFB]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Mais valor percebido, menos evasão</h3>
                  <p className="text-black">O paciente sente que está sendo acompanhado de verdade, mesmo fora do consultório. Isso fideliza e sustenta o valor mensal do seu plano.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Metas personalizadas e mensuráveis</h3>
                  <p className="text-black">Crie metas SMART adaptadas a cada paciente. O sistema coleta, organiza e entrega tudo para você acompanhar com precisão.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-[#40CDFB]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Seu diferencial no mercado de obesidade</h3>
                  <p className="text-black">Enquanto outros vendem consulta, você vende resultado contínuo. E entrega com tecnologia, sem perder o toque humano.</p>
                </div>

                <div data-slot="card" className="flex flex-col g-4 rounded-xl border bg-white text-card-foreground shadow-sm md:gap-6 md:py-6 !gap-0 p-6 transition-shadow hover:shadow-md lg:col-start-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF9FE]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-6 w-6 text-[#40CDFB]"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-black font-semibold">Mais receita com menos esforço</h3>
                  <p className="text-black">Ofereça um serviço escalável, com entrega contínua, sem precisar aumentar sua carga de atendimentos.</p>
                </div>

              </div>

              <a href="" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/50 mt-12">Começar teste gratuito</a>

            </div>



            <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
              <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
            </div>

          </section>

  );

}