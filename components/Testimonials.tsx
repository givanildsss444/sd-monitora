import Image from "next/image";

export default function Testimonials(){

    return(

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

    );

}