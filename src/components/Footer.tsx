import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-black">
              D<span className="text-sky-400">O</span>ZUR
              <span className="text-xs bg-white text-gray-900 px-1 ml-1 rounded">TV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Los reyes del fútbol sala. Diseño creado por Dozurtv para los verdaderos magos del balón.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Tienda */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tienda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tienda" className="text-gray-400 hover:text-white transition-colors">
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link href="/tienda/futbol-sala" className="text-gray-400 hover:text-white transition-colors">
                  Fútbol Sala
                </Link>
              </li>
              <li>
                <Link href="/tienda/ropa" className="text-gray-400 hover:text-white transition-colors">
                  Ropa Deportiva
                </Link>
              </li>
              <li>
                <Link href="/tienda/accesorios" className="text-gray-400 hover:text-white transition-colors">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-gray-400 hover:text-white transition-colors">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/tallas" className="text-gray-400 hover:text-white transition-colors">
                  Guía de Tallas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politicas/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politicas/terminos" className="text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politicas/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/politicas/devolucion" className="text-gray-400 hover:text-white transition-colors">
                  Política de Devolución
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Suscríbete a nuestro newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recibe las últimas novedades, ofertas exclusivas y noticias del mundo del fútbol sala.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-md transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dozurtv. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-gray-400 text-sm">Métodos de pago:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">VISA</span>
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">MC</span>
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">PP</span>
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">MP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
