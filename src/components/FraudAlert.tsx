export function FraudAlert() {
  return (
    <section className="bg-brand-warning/10 border-l-4 border-brand-warning py-4">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-brand-warning" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-brand-warning">
                  Atenção: Proteja-se contra fraudes
                </h3>
                <div className="mt-2 text-sm text-neutral-700">
                  <p>
                    Nunca forneça dados pessoais ou bancários por telefone, WhatsApp ou redes sociais. 
                    A Imediato Seguros nunca solicita informações sensíveis por esses canais.
                  </p>
                  <p className="mt-2">
                    <strong>Denuncie fraudes:</strong> Se receber propostas suspeitas, entre em contato conosco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
