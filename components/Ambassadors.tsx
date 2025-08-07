import Image from "next/image";

export default function Ambassadors(){

    return(

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

    );

}