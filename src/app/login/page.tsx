import Image from "next/image";

export default function Login(){

    return(

        <div id="root">

            <div className="flex min-h-[100dvh] w-full bg-white">
               
                <Image src="/bip.png" alt="bg" height={200} width={625} className="hidden lg:block"/>
                
                <div className="flex w-full flex-col items-center justify-center p-4 md:p-16 lg:w-1/2">
                    <div className="flex w-full max-w-[364px] flex-col items-center gap-6 text-center lg:items-start lg:text-left">

                        <a href="/#home" className="mr-auto flex items-center gap-2">
                            <Image src='/logo.png' alt="logo" width={200} height={200} className="" />
                        </a>

                        <div className="flex flex-col gap-1 text-black">
                            <strong className="text-xl font-medium">Entre na sua conta</strong>
                            <p className="text-black/60">Insira seu número de telefone (WhatsApp) abaixo para fazer login em sua conta</p>
                        </div>

                        <form className="flex w-full flex-col gap-6 text-left">
                            <div className="space-y-2">
                                <input type="tel" className="flex h-10 w-full rounded-md border border-black-20 bg-white px-4 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:data-[invalid=true]:border-input" placeholder="(00) 0 0000-0000" name="phone" id=":r1b:-form-item" aria-describedby=":r1b:-form-item-description" aria-invalid="false" data-invalid="false"></input>
                            </div>

                            <button data-loading="false" className="cursor-pointer relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#40CDFB] border border-transparent text-white hover:bg-[#40CDFB]/90 w-full" type="submit">Entrar</button>
                        </form>

                        <div className="text-black/60">
                            Precisa de ajuda?
                            <a href="/" className="text-[#40CDFB] ml-1 hover:border-b border-[#40CDFB]">Fale Conosco</a>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );

}