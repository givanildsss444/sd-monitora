"use client"
import * as Accordion from "@radix-ui/react-accordion"

export default function Questions() {

  return (

    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="inline-block rounded-lg bg-[#EBF9FE] px-3 py-1 text-sm font-semibold text-[#40CDFB]">Perguntas Frequentes</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tire suas dúvidas</h2>
          <p className="max-w-3xl md:text-xl/relaxed">Respostas para as dúvidas mais comuns sobre o SD Monitora.</p>
        </div>

        <div className="mx-auto mt-12 max-w-screen-lg">
          <Accordion.Root type="multiple" className="space-y-4">

            <Accordion.Item value="item-1" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  1. Preciso instalar algo ou o sistema funciona no navegador?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Não precisa instalar nada. O SD Monitora funciona 100% online,
                direto do navegador. É só acessar com seu login.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-2" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  2. Meus pacientes vão precisar baixar aplicativo?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Não. O acompanhamento acontece via WhatsApp, no mesmo canal que eles já usam diariamente. Isso facilita a adesão e reduz abandono.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-3" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  3. E se meu paciente não responder os lembretes?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Você visualiza no painel quem está engajado e quem precisa de atenção. Isso te ajuda a intervir com precisão e evitar evasão.
              </Accordion.Content>

            </Accordion.Item>

             <Accordion.Item value="item-4" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  4. Quanto tempo eu preciso por semana para usar o sistema?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                A maioria dos médicos acompanha seus pacientes com menos de 15 minutos por semana. O sistema automatiza a maior parte das interações.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-5" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  5. Posso usar com os pacientes que já estão em acompanhamento?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Sim. E durante os 30 dias gratuitos, os pacientes cadastrados recebem desconto vitalício. Isso facilita a transição e reduz o custo de entrada.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-6" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  6. Posso testar antes de contratar?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Claro! Você tem 30 dias gratuitos com acesso completo à plataforma — sem precisar inserir cartão de crédito.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-7" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  7. O valor do plano é cobrado do paciente ou do médico?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                O valor é pago pelo médico, mas você pode (e deve) embutir no seu plano de acompanhamento. Muitos profissionais já fazem isso com facilidade.
              </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value="item-8" className="rounded-lg border border-[#E4E7EB] px-4">
              <Accordion.Header>

                <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-medium text-left text-lg leading-tight transition-all cursor-pointer">
                  8. E se eu quiser parar de usar?
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6" /></svg>
                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0 transition-all duration-300">
                Sem contratos longos. Basta não renovar. Você pode exportar os dados e encerrar quando quiser.
              </Accordion.Content>

            </Accordion.Item>

          </Accordion.Root>
        </div>
      </div>

    </section>

  );

}
