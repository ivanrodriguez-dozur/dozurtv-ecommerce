'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface CartItem {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  size: string
  color: string
  quantity: number
  slug: string
}

export default function CarritoPage() {
  // Mock cart items - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Nike Street Gato - Magos Edition',
      brand: 'Nike',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://placehold.co/400x400?text=Nike+Street+Gato+Purple+Magos+Edition',
      size: '42',
      color: 'Purple',
      quantity: 1,
      slug: 'nike-street-gato-magos'
    },
    {
      id: '5',
      name: 'Camiseta Dozurtv Pro',
      brand: 'Dozurtv',
      price: 39.99,
      originalPrice: 49.99,
      image: 'https://placehold.co/400x400?text=Dozurtv+Pro+Jersey+Blue+Athletic+Shirt',
      size: 'L',
      color: 'Blue',
      quantity: 2,
      slug: 'camiseta-dozurtv-pro'
    }
  ])

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
    toast.success('Producto eliminado del carrito')
  }

  const applyCoupon = () => {
    const validCoupons = {
      'MAGOS10': 10,
      'DOZURTV15': 15,
      'FUTSAL20': 20
    }

    const discount = validCoupons[couponCode.toUpperCase() as keyof typeof validCoupons]
    
    if (discount) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount })
      toast.success(`Cupón aplicado: ${discount}% de descuento`)
      setCouponCode('')
    } else {
      toast.error('Cupón no válido')
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    toast.success('Cupón eliminado')
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const couponDiscount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0
  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = (subtotal - couponDiscount) * 0.21 // 21% IVA
  const total = subtotal - couponDiscount + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="text-8xl">🛒</div>
            <h1 className="text-3xl font-black text-gray-900">
              Tu carrito está vacío
            </h1>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Descubre nuestra increíble colección de productos deportivos
            </p>
            <Link href="/tienda">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg px-8 py-4 rounded-full">
                Ir a la Tienda
              </Button>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black">
              CARRITO DE COMPRAS
            </h1>
            <p className="text-xl text-gray-300">
              Revisa tus productos antes de finalizar la compra
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Productos ({cartItems.length})
            </h2>
            
            {cartItems.map((item) => (
              <Card key={`${item.id}-${item.size}-${item.color}`} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Link href={`/producto/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="w-24 h-24 sm:w-30 sm:h-30 object-cover rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <Link href={`/producto/${item.slug}`}>
                          <h3 className="font-bold text-lg text-gray-900 hover:text-sky-600 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600">{item.brand}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <span>Talla: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">
                            €{item.price}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-lg text-gray-500 line-through">
                              €{item.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0"
                          >
                            -
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                            max="10"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            +
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-4"
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">
                          Subtotal: €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Resumen del Pedido
                </h2>
                
                {/* Coupon Code */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Código de Descuento</h3>
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <span className="text-green-700 font-medium">
                        {appliedCoupon.code} (-{appliedCoupon.discount}%)
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="text-red-600 hover:text-red-700"
                      >
                        Eliminar
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Código de cupón"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        onClick={applyCoupon}
                        variant="outline"
                        disabled={!couponCode.trim()}
                      >
                        Aplicar
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    Prueba: MAGOS10, DOZURTV15, FUTSAL20
                  </p>
                </div>
                
                <Separator />
                
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento ({appliedCoupon.discount}%)</span>
                      <span>-€{couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
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
                
                {shipping > 0 && (
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-sm text-amber-700">
                      💡 Añade €{(50 - subtotal).toFixed(2)} más para envío gratuito
                    </p>
                  </div>
                )}
                
                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-4 rounded-full">
                      Proceder al Checkout
                    </Button>
                  </Link>
                  
                  <Link href="/tienda">
                    <Button variant="outline" className="w-full font-semibold py-3 rounded-full">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
                
                {/* Security Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Pago 100% seguro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>↩️</span>
                    <span>Devoluciones gratuitas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🚚</span>
                    <span>Envío en 24-48h</span>
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
