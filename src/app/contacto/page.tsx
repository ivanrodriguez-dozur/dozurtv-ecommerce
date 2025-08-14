'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos obligatorios')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Mensaje enviado correctamente. Te responderemos pronto.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      title: "Teléfono",
      value: "+34 900 123 456",
      description: "Lunes a Viernes: 9:00 - 18:00",
      icon: "📞"
    },
    {
      title: "Email",
      value: "hola@dozurtv.com",
      description: "Respuesta en menos de 24h",
      icon: "✉️"
    },
    {
      title: "Dirección",
      value: "Calle del Fútbol Sala, 123",
      description: "28001 Madrid, España",
      icon: "📍"
    },
    {
      title: "Redes Sociales",
      value: "@dozurtv",
      description: "Síguenos en todas las plataformas",
      icon: "📱"
    }
  ]

  const faqs = [
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "Realizamos envíos en 24-48h para pedidos realizados antes de las 14:00h. Los envíos son gratuitos para pedidos superiores a €50."
    },
    {
      question: "¿Puedo devolver un producto?",
      answer: "Sí, tienes 30 días para devolver cualquier producto en perfecto estado. Las devoluciones son gratuitas y el reembolso se procesa en 3-5 días laborables."
    },
    {
      question: "¿Cómo puedo conocer mi talla?",
      answer: "En cada producto encontrarás una guía de tallas específica. También puedes contactarnos para asesoramiento personalizado sobre el tallaje."
    },
    {
      question: "¿Ofrecen descuentos para equipos?",
      answer: "Sí, ofrecemos descuentos especiales para equipos y clubes. Contacta con nosotros para conocer nuestras condiciones especiales."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-black">
              CONTACTA CON NOSOTROS
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes alguna pregunta? ¿Necesitas ayuda con tu pedido? ¿Quieres colaborar con nosotros? 
              Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envíanos un Mensaje
                </CardTitle>
                <p className="text-gray-600">
                  Completa el formulario y te responderemos lo antes posible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Asunto</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pedido">Consulta sobre pedido</SelectItem>
                          <SelectItem value="producto">Información de producto</SelectItem>
                          <SelectItem value="devolucion">Devolución/Cambio</SelectItem>
                          <SelectItem value="colaboracion">Colaboración</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-4 rounded-full"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-sky-600 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Horario de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium text-red-600">Cerrado</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    💡 Para consultas urgentes fuera del horario, escríbenos por email
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Síguenos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">🐦</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">📘</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">📺</span>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Mantente al día con las últimas novedades, consejos y contenido exclusivo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ¿No encuentras lo que buscas?
            </p>
            <a
              href="#contact-form"
              className="text-sky-600 hover:text-sky-700 font-semibold"
            >
              Contáctanos directamente →
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              NUESTRA UBICACIÓN
            </h2>
            <p className="text-xl text-gray-600">
              Visítanos en nuestras oficinas en el corazón de Madrid
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🗺️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mapa Interactivo
                    </h3>
                    <p className="text-gray-600">
                      Calle del Fútbol Sala, 123<br />
                      28001 Madrid, España
                    </p>
                  </div>
                  <Button className="bg-sky-500 hover:bg-sky-600">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
