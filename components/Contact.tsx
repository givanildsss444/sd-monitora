export default function Contact(){
 
    return(

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


    );

}