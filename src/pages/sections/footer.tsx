export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Gabriel Oliveira Pimentel. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
