'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface CartItem {
  id: string
  name: string
  brand: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export default function CheckoutPage() {
  // Mock cart items
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Nike Street Gato - Magos Edition',
      brand: 'Nike',
      price: 129.99,
      image: 'https://placehold.co/400x400?text=Nike+Street+Gato+Purple+Magos+Edition',
      size: '42',
      color: 'Purple',
      quantity: 1
    },
    {
      id: '5',
      name: 'Camiseta Dozurtv Pro',
      brand: 'Dozurtv',
      price: 39.99,
      image: 'https://placehold.co/400x400?text=Dozurtv+Pro+Jersey+Blue+Athletic+Shirt',
      size: 'L',
      color: 'Blue',
      quantity: 2
    }
  ]

  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'España',
    
    // Billing Info
    billingDifferent: false,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: 'España',
    
    // Payment
    paymentMethod: 'stripe',
    
    // Terms
    acceptTerms: false,
    subscribeNewsletter: false
  })

  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = subtotal * 0.21
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.acceptTerms) {
      toast.error('Debes aceptar los términos y condiciones')
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      toast.error('Por favor completa todos los campos obligatorios')
      return
    }

    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would integrate with actual payment providers
      switch (formData.paymentMethod) {
        case 'stripe':
          toast.success('Procesando pago con Stripe...')
          break
        case 'paypal':
          toast.success('Redirigiendo a PayPal...')
          break
        case 'mercadopago':
          toast.success('Procesando pago con Mercado Pago...')
          break
      }
      
      // Redirect to success page
      setTimeout(() => {
        window.location.href = '/checkout/success'
      }, 1500)
      
    } catch (error) {
      toast.error('Error al procesar el pago. Inténtalo de nuevo.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black">
              CHECKOUT
            </h1>
            <p className="text-lg text-gray-300">
              Finaliza tu compra de forma segura
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Información de Envío</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellidos *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Dirección *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ciudad *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Código Postal *</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">País</Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="España">España</SelectItem>
                          <SelectItem value="Portugal">Portugal</SelectItem>
                          <SelectItem value="Francia">Francia</SelectItem>
                          <SelectItem value="Italia">Italia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Información de Facturación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="billingDifferent"
                      checked={formData.billingDifferent}
                      onCheckedChange={(checked) => handleInputChange('billingDifferent', checked as boolean)}
                    />
                    <Label htmlFor="billingDifferent">
                      La dirección de facturación es diferente a la de envío
                    </Label>
                  </div>
                  
                  {formData.billingDifferent && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="billingFirstName">Nombre</Label>
                          <Input
                            id="billingFirstName"
                            value={formData.billingFirstName}
                            onChange={(e) => handleInputChange('billingFirstName', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingLastName">Apellidos</Label>
                          <Input
                            id="billingLastName"
                            value={formData.billingLastName}
                            onChange={(e) => handleInputChange('billingLastName', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="billingAddress">Dirección</Label>
                        <Input
                          id="billingAddress"
                          value={formData.billingAddress}
                          onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="billingCity">Ciudad</Label>
                          <Input
                            id="billingCity"
                            value={formData.billingCity}
                            onChange={(e) => handleInputChange('billingCity', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingPostalCode">Código Postal</Label>
                          <Input
                            id="billingPostalCode"
                            value={formData.billingPostalCode}
                            onChange={(e) => handleInputChange('billingPostalCode', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingCountry">País</Label>
                          <Select value={formData.billingCountry} onValueChange={(value) => handleInputChange('billingCountry', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="España">España</SelectItem>
                              <SelectItem value="Portugal">Portugal</SelectItem>
                              <SelectItem value="Francia">Francia</SelectItem>
                              <SelectItem value="Italia">Italia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Método de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="stripe">Tarjeta</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="mercadopago">Mercado Pago</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="stripe" className="space-y-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-xs text-white font-bold">VISA</span>
                          </div>
                          <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-xs text-white font-bold">MC</span>
                          </div>
                          <span className="text-sm text-gray-600">y más</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Pago seguro con tarjeta de crédito o débito procesado por Stripe
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal" className="space-y-4 mt-6">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-16 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-xs text-white font-bold">PayPal</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          Paga de forma segura con tu cuenta de PayPal
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="mercadopago" className="space-y-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-16 h-5 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-xs text-white font-bold">MP</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          Pago seguro con Mercado Pago - Disponible para Latinoamérica
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Terms and Newsletter */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                      required
                    />
                    <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                      Acepto los{' '}
                      <Link href="/politicas/terminos" className="text-sky-600 hover:underline">
                        términos y condiciones
                      </Link>{' '}
                      y la{' '}
                      <Link href="/politicas/privacidad" className="text-sky-600 hover:underline">
                        política de privacidad
                      </Link>
                      *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onCheckedChange={(checked) => handleInputChange('subscribeNewsletter', checked as boolean)}
                    />
                    <Label htmlFor="subscribeNewsletter" className="text-sm">
                      Quiero recibir ofertas exclusivas y novedades por email
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isProcessing || !formData.acceptTerms}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-4 rounded-full"
              >
                {isProcessing ? 'Procesando...' : `Finalizar Compra - €${total.toFixed(2)}`}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex space-x-4">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {item.size} • {item.color}
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Gratis' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">IVA (21%)</span>
                    <span className="font-medium">€{tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Security Info */}
                <div className="space-y-2 text-sm text-gray-600 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Pago 100% seguro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🚚</span>
                    <span>Envío en 24-48h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>↩️</span>
                    <span>Devoluciones gratuitas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
