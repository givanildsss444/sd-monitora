import Link from "next/link";

export default function Prices(){

    return(

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
                          <span>Suporte humano em horário comercial</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Monitoramento de peso: até 2x por semana</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Até 2 metas de ação por paciente</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2 h-5 w-5 flex-shrink-0 text-red-500"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        <div className="flex flex-col">
                          <span className="line-through">Relatório completo do paciente</span>
                        </div>
                      </li>
                    </ul>

                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <Link href="/login" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 border border-input bg-white hover:bg-accent hover:text-accent-foreground w-full"><span className="text-black">Assinar agora</span></Link>
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
                    <div className="rounded-lg  border border-[#40CDFB]/20 bg-[#40CDFB]/10 p-4 text-sm">
                      <p className="text-black">
                        {"Pacientes cadastrados nos primeiros 30 dias têm "}
                        <span className="underline">50% de desconto</span>
                        {" até o fim do acompanhamento: "}
                        <strong className="underline">R$ 49,90</strong>
                      </p>
                    </div>

                    <ul className="my-6 space-y-3 text-black">

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Desconto progressivo por escala de pacientes</span>
                          <ul className="list-disc pl-6">
                            <li>1 a 10 pacientes: R$ 110</li>
                            <li>11 a 30 pacientes: R$ 99</li>
                            <li>A partir de 31 pacientes: R$ 89</li>
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
                          <span>Suporte humano em horário comercial</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Monitoramento de peso flexível</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Metas de ação ilimitadas</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Relatório completo do paciente</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Monitoramento do próprio médico (grátis para sempre)</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Novas funcionalidades mensais</span>
                        </div>
                      </li>

                    </ul>

                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <Link href="/login" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#40CDFB] border border-transparent text-white hover:bg-primary/90 w-full">Assinar Agora</Link>
                  </div>

                </div>

                <div className="gap-4 rounded-xl  border bg-white py-4 text-card-foreground md:gap-6 md:py-6 flex h-full flex-col shadow-md transition-shadow hover:shadow-lg sm:max-w-none">

                  <div className="text-black has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4 md:[.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 md:px-6">
                    <div className="text-xl font-semibold">Plano Diamante</div>
                    <div className="text-4xl font-bold ">
                      R$ 220
                      <span className="text-base font-normal ">/ paciente / mês</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Ideal para clínicas de alta demanda e operação mais robusta.</div>
                  </div>

                  <div className="px-4 md:px-6 flex-1 ">
                    <div className="rounded-lg text-black bg-[#F3F4F6] p-4 text-sm">
                     Mínimo de
                     <strong> 25 pacientes ativos</strong>
                    </div>

                    <ul className="my-6 space-y-3 text-black">
                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Tudo do Premium</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>1h de videoconferência mensal com nosso time</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Customizações exclusivas (com contrato anual)</span>
                        </div>
                      </li>

                      <li className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mt-0.5 h-5 w-5 flex-shrink-0 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div className="flex flex-col">
                          <span>Acesso antecipado a novas funcionalidades</span>
                        </div>
                      </li>

                    </ul>
                  </div>
                  
                  <div className="[.border-t]:pt-4 md:[.border-t]:pt-6 flex items-center px-4 md:px-6">
                    <Link href="/login" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 border border-input bg-white hover:bg-accent hover:text-accent-foreground w-full"><span className="text-black">Assinar agora</span></Link>
                  </div>

                </div>
              </div>
            </div>

              <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform">
                <svg viewBox="0 0 959 454" className="w-[1000px] bg-[#DBF5FF] rotate-12 fill-[#DBF5F] blur-3xl"><path d="M893.499 20.6108C981.675 72.0768 976.157 235.045 897.35 323.727C818.543 412.41 665.883 425.5 546.664 438.892C428.199 451.737 342.484 464.813 234.275 438.76C126.066 412.708 -5.45475 348.692 0.802652 287.54C6.99684 227.005 150.279 169.262 246.36 136.65C342.379 104.656 391.26 97.1741 506.98 63.4508C622.701 29.7274 804.634 -30.9259 893.499 20.6108Z" fill="#DBF5FF"></path></svg>
              </div>

          </section>

    );

}