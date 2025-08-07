export default function Penultimate(){

    return(

        <section className="relative w-full bg-[#eafaff] from-[#40CDFB]/20 to-[#40CDFB] py-20">
        
            <div className="absolute right-0 top-0 size-full overflow-hidden">
                <div className="absolute right-0 top-0 size-[2000px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#ebf9fe]"></div>
                <div className="absolute right-0 top-0 size-[1200px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#cff2fc]"></div>
                <div className="absolute right-0 top-0 size-[600px] -translate-y-2/4 translate-x-2/4 rounded-full bg-[#b4eafb]"></div>
            </div>

            <div className="container relative mx-auto max-w-6xl space-y-6 px-4 text-black">

                <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Seu plano já entrega cuidado. Com o SD Monitora, ele entrega presença, dados e resultado.</h2>
                <p className="text-lg text-black/80">Você já decidiu tratar obesidade com seriedade. Agora é hora de escalar, automatizar e mostrar esse valor todos os dias.</p>
                <p className="text-lg font-medium text-black/80">Só continua no plano quem sente que está sendo acompanhado. Com o SD Monitora, você garante isso — sem comprometer seu tempo.</p>                
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 text-lg bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/90">
                    <a href="/login" data-discover="true">Quero testar grátis por 30 dias</a>
                </button>
                <p className="text-sm italic text-black/80">Sem cartão. Sem compromisso. Apenas valor real para você e seus pacientes.</p>
                </div>

            </div>

        </section>

    );

}