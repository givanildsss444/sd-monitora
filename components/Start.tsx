export default function Start(){
    return(

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


    );

}