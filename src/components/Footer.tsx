export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>
          Hecho con{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
            React
          </a>
          ,{' '}
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
            Vite
          </a>
          {' '}&{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  )
}
