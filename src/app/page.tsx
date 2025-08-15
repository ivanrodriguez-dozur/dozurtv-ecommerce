'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import productsData from '@/data/products.json'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredProducts = productsData.products.filter(product => product.featured)
  
  const heroSlides = [
    {
      title: "LOS REYES DEL FÚTBOL SALA",
      subtitle: "MAGOS",
      description: "NIKE STREET GATO",
      brand: "DOZURTV",
      image: "1.jpg",
      bgColor: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600"
    },
    {
      title: "LOS REYES DEL FÚTBOL SALA", 
      subtitle: "MAGOS",
      description: "NIKE STREET GATO",
      brand: "DOZURTV",
      image: "https://placehold.co/800x600?text=Nike+Street+Gato+Black+Edition+Hero+Shot",
      bgColor: "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
    },
    {
      title: "LOS REYES DEL FÚTBOL SALA",
      subtitle: "MAGOS", 
      description: "NIKE STREET GATO",
      brand: "DOZURTV",
      image: "https://placehold.co/800x600?text=Nike+Street+Gato+Red+Edition+Hero+Shot",
      bgColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-700"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="text-center lg:text-left space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                      {slide.title}
                    </h1>
                    <div className="text-6xl sm:text-7xl lg:text-9xl font-black text-amber-400 transform -rotate-2">
                      {slide.subtitle}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      {slide.description}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <span className="text-lg font-bold text-white bg-white/20 px-4 py-2 rounded-full">
                        {slide.brand}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                      size="lg" 
                      className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200"
                    >
                      <Link href="/tienda">
                        Explorar Tienda
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200"
                    >
                      <Link href="/nosotros">
                        Conocer Más
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-150"></div>
                    <Image
                      src={slide.image}
                      alt={`${slide.description} - ${slide.subtitle}`}
                      width={600}
                      height={600}
                      className="relative z-10 transform hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-0 text-6xl font-black text-white/5 transform -rotate-90 origin-left">
                DISEÑO CREADO POR DOZURTV
              </div>
              <div className="absolute bottom-1/4 right-0 text-6xl font-black text-white/5 transform rotate-90 origin-right">
                DISEÑO CREADO POR DOZURTV
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              PRODUCTOS DESTACADOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de productos premium para los verdaderos magos del fútbol sala
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.onSale && (
                      <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                        OFERTA
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-sky-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {product.brand}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          €{product.price}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            €{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Link href={`/producto/${product.slug}`}>
                      <Button className="w-full bg-gray-900 hover:bg-sky-600 text-white font-semibold py-3 rounded-full transform group-hover:scale-105 transition-all duration-200">
                        Ver Producto
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tienda">
              <Button size="lg" variant="outline" className="font-bold text-lg px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-200">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              CATEGORÍAS
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra exactamente lo que necesitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.categories.map((category) => (
              <Link key={category.id} href={`/tienda/${category.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-sky-500 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-300">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                    <Button variant="ghost" className="font-semibold text-sky-600 hover:text-sky-700">
                      Explorar →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              ¿LISTO PARA SER UN MAGO?
            </h2>
            <p className="text-xl text-sky-100">
              Únete a la comunidad Dozurtv y descubre por qué somos los reyes del fútbol sala
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tienda">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200">
                  Comprar Ahora
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200">
                  Nuestra Historia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
