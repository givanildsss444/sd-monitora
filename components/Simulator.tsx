export default function Simulator(){

    return(

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

    );

}