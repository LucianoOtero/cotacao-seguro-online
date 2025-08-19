export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white py-8">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Imediato Soluções em Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
