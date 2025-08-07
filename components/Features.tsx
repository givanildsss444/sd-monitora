export default function Features() {

    return(

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
                    <h3 className="text-xl text-black font-semibold">Monitoramento contínuo, não episódico</h3>
                    <p className="text-black">Você não precisa esperar a próxima consulta para saber como o paciente está evoluindo. O acompanhamento acontece entre as consultas, de forma automática e estruturada.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Foco em dados objetivos e mensuráveis</h3>
                    <p className="text-black">Visualize rapidamente o que está funcionando e o que precisa de ajuste. Gráficos claros, metas cumpridas e registros de hábitos — tudo em um só lugar.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Fortalece a relação médico-paciente</h3>
                    <p className="text-black">Mesmo fora do consultório, você continua presente. O paciente sente que está sendo cuidado e responde com mais adesão e engajamento.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Você define. A tecnologia executa.</h3>
                    <p className="text-black">Você determina o plano, as metas e a estratégia. O sistema automatiza a operação e entrega tudo pronto para você apenas acompanhar e intervir quando necessário.</p>
                  </div>

                  <div className="space-y-4 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Escalabilidade com previsibilidade</h3>
                    <p className="text-black">Com o SD Monitora, você consegue acompanhar 30 pacientes como se fossem 3. Sem comprometer seu tempo e com receita mensal previsível.</p>
                  </div>

                  <div className="space-y-4 p-6 bg-[#EDF9FF] lg:col-start-2 lg:bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big size-7 text-[#40CDFB]"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    <h3 className="text-xl text-black font-semibold">Integração futura com smartwatches</h3>
                    <p className="text-black">Receba dados de sono, passos e atividade física direto do dispositivo do paciente. Mais precisão, menos achismo.</p>
                  </div>
                </div>


                <div className="pt-4">
                  <a href="/login" className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-xl px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/50 mt-12">Começar teste gratuito</a>
                </div>
              </div>
            </div>
          </section>

    );

}