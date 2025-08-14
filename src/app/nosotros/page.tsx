import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NosotrosPage() {
  const teamMembers = [
    {
      name: "Carlos 'El Mago' Rodríguez",
      role: "Fundador & CEO",
      description: "Campeón nacional de fútbol sala con más de 15 años de experiencia profesional.",
      image: "https://placehold.co/400x400?text=Carlos+Rodriguez+CEO+Dozurtv+Futsal+Champion"
    },
    {
      name: "Ana Martínez",
      role: "Directora de Diseño",
      description: "Especialista en diseño deportivo con experiencia en marcas internacionales.",
      image: "https://placehold.co/400x400?text=Ana+Martinez+Design+Director+Dozurtv+Sports"
    },
    {
      name: "Miguel Santos",
      role: "Director Técnico",
      description: "Ex-jugador profesional y entrenador certificado por la Real Federación Española.",
      image: "https://placehold.co/400x400?text=Miguel+Santos+Technical+Director+Dozurtv+Coach"
    }
  ]

  const values = [
    {
      title: "Pasión",
      description: "Vivimos y respiramos fútbol sala. Cada producto refleja nuestra pasión por este deporte.",
      icon: "❤️"
    },
    {
      title: "Calidad",
      description: "Solo trabajamos con los mejores materiales y tecnologías para garantizar el máximo rendimiento.",
      icon: "⭐"
    },
    {
      title: "Innovación",
      description: "Constantemente buscamos nuevas formas de mejorar la experiencia de los jugadores.",
      icon: "🚀"
    },
    {
      title: "Comunidad",
      description: "Creemos en el poder del deporte para unir personas y crear vínculos duraderos.",
      icon: "🤝"
    }
  ]

  const milestones = [
    {
      year: "2018",
      title: "Fundación de Dozurtv",
      description: "Nace la idea de crear una marca que represente la esencia del fútbol sala español."
    },
    {
      year: "2019",
      title: "Primer Producto",
      description: "Lanzamos nuestra primera línea de zapatillas diseñadas específicamente para fútbol sala."
    },
    {
      year: "2020",
      title: "Expansión Digital",
      description: "Creamos nuestra plataforma online y comenzamos a llegar a jugadores de toda España."
    },
    {
      year: "2021",
      title: "Colaboraciones Pro",
      description: "Iniciamos colaboraciones con jugadores profesionales y equipos de élite."
    },
    {
      year: "2022",
      title: "Línea Completa",
      description: "Expandimos nuestro catálogo con ropa deportiva y accesorios técnicos."
    },
    {
      year: "2023",
      title: "Reconocimiento Nacional",
      description: "Dozurtv se convierte en una de las marcas de referencia en fútbol sala español."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl font-black mb-6">
                  SOMOS LOS
                  <span className="block text-amber-400 transform -rotate-2">
                    MAGOS
                  </span>
                </h1>
                <p className="text-xl text-sky-100 leading-relaxed">
                  Dozurtv nació de la pasión por el fútbol sala y el deseo de crear productos que reflejen 
                  la magia, técnica y arte de este deporte único.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tienda">
                  <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg px-8 py-4 rounded-full">
                    Descubre Nuestros Productos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 font-bold text-lg px-8 py-4 rounded-full">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <Image
                src="https://placehold.co/600x600?text=Dozurtv+Team+Futsal+Champions+Group+Photo"
                alt="Equipo Dozurtv - Los Reyes del Fútbol Sala"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 text-8xl font-black text-white/5 transform -rotate-45">
            DOZURTV
          </div>
          <div className="absolute bottom-1/4 -right-20 text-8xl font-black text-white/5 transform rotate-45">
            MAGOS
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                NUESTRA HISTORIA
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Todo comenzó en las canchas de fútbol sala de Madrid, donde un grupo de amigos 
                compartía la misma pasión: ser los mejores en cada jugada, cada regate, cada gol.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong>Dozurtv</strong> nació en 2018 de la visión de Carlos "El Mago" Rodríguez, 
                un jugador profesional de fútbol sala que soñaba con crear una marca que representara 
                la esencia pura de este deporte: la técnica, la creatividad y la magia que solo los 
                verdaderos artistas del balón pueden entender.
              </p>
              
              <p>
                Después de años compitiendo al más alto nivel y experimentar con diferentes equipamientos, 
                Carlos se dio cuenta de que faltaba algo en el mercado: productos diseñados específicamente 
                por y para jugadores de fútbol sala, que entendieran las necesidades reales de quienes 
                viven este deporte con intensidad.
              </p>
              
              <p>
                Junto a un equipo de diseñadores, ingenieros y otros jugadores profesionales, comenzamos 
                a desarrollar productos que no solo cumplieran con los más altos estándares de calidad, 
                sino que también capturaran el espíritu único del fútbol sala español.
              </p>
              
              <p>
                Hoy, <strong>Dozurtv</strong> es más que una marca: es una comunidad de magos del balón 
                que comparten la misma pasión y el mismo compromiso con la excelencia. Cada producto que 
                creamos lleva consigo años de experiencia, investigación y, sobre todo, amor por el fútbol sala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              NUESTROS VALORES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada producto que creamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              NUESTRO EQUIPO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los magos detrás de cada producto Dozurtv
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-sky-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              NUESTRO CAMINO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los hitos más importantes en la historia de Dozurtv
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-2xl font-black text-sky-600">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black">
              ¿LISTO PARA SER UN MAGO?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Únete a la comunidad Dozurtv y descubre por qué miles de jugadores confían en nosotros 
              para llevar su juego al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tienda">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg px-8 py-4 rounded-full">
                  Explorar Productos
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-8 py-4 rounded-full">
                  Contáctanos
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
