'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import productsData from '@/data/products.json'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  category: string
  brand: string
  images: string[]
  variants: { size: string; stock: number }[]
  colors: string[]
  featured: boolean
  onSale: boolean
  tags: string[]
}

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    const foundProduct = productsData.products.find(p => p.slug === slug)
    if (foundProduct) {
      setProduct(foundProduct as Product)
      setSelectedColor(foundProduct.colors[0])
      
      // Find related products
      const related = productsData.products
        .filter(p => p.slug !== slug && (p.category === foundProduct.category || p.brand === foundProduct.brand))
        .slice(0, 4)
      setRelatedProducts(related as Product[])
    }
  }, [slug])

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla')
      return
    }

    const selectedVariant = product?.variants.find(v => v.size === selectedSize)
    if (!selectedVariant || selectedVariant.stock < quantity) {
      toast.error('No hay suficiente stock disponible')
      return
    }

    // Here you would typically add to cart context/state
    toast.success(`${product?.name} añadido al carrito`)
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla')
      return
    }
    
    // Here you would typically redirect to checkout
    toast.success('Redirigiendo al checkout...')
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/tienda">
            <Button>Volver a la tienda</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const selectedVariant = product.variants.find(v => v.size === selectedSize)
  const isInStock = selectedVariant && selectedVariant.stock > 0
  const maxQuantity = selectedVariant ? Math.min(selectedVariant.stock, 10) : 1

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:text-gray-900">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage === index ? 'border-sky-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Vista ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.featured && (
                  <Badge className="bg-amber-500 hover:bg-amber-600">DESTACADO</Badge>
                )}
                {product.onSale && (
                  <Badge className="bg-red-500 hover:bg-red-600">OFERTA</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-black text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-4">
                {product.brand}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  €{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-2xl text-gray-500 line-through">
                    €{product.originalPrice}
                  </span>
                )}
                {product.onSale && (
                  <Badge variant="destructive" className="text-sm">
                    -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Talla</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una talla" />
                </SelectTrigger>
                <SelectContent>
                  {product.variants.map((variant) => (
                    <SelectItem
                      key={variant.size}
                      value={variant.size}
                      disabled={variant.stock === 0}
                    >
                      {variant.size} {variant.stock === 0 ? '(Agotado)' : `(${variant.stock} disponibles)`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            {selectedSize && isInStock && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Cantidad</h3>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Stock Status */}
            {selectedSize && (
              <div className="text-sm">
                {isInStock ? (
                  <span className="text-green-600 font-medium">
                    ✓ En stock ({selectedVariant?.stock} disponibles)
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">
                    ✗ Agotado
                  </span>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize || !isInStock}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 text-lg rounded-full"
              >
                Añadir al Carrito
              </Button>
              
              <Button
                onClick={handleBuyNow}
                disabled={!selectedSize || !isInStock}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 text-lg rounded-full"
              >
                Comprar Ahora
              </Button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>🚚</span>
                <span>Envío gratis en pedidos superiores a €50</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>↩️</span>
                <span>Devoluciones gratuitas en 30 días</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Pago seguro garantizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Características principales:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tecnología avanzada para máximo rendimiento</li>
                  <li>Materiales de alta calidad y durabilidad</li>
                  <li>Diseño ergonómico para mayor comodidad</li>
                  <li>Perfecto para entrenamientos y competiciones</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Detalles del Producto</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Marca:</dt>
                      <dd className="font-medium">{product.brand}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Categoría:</dt>
                      <dd className="font-medium">{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Colores disponibles:</dt>
                      <dd className="font-medium">{product.colors.join(', ')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Tallas disponibles:</dt>
                      <dd className="font-medium">{product.variants.map(v => v.size).join(', ')}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Cuidado y Mantenimiento</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Limpiar con un paño húmedo</li>
                    <li>• No usar productos químicos agresivos</li>
                    <li>• Secar al aire libre, evitar calor directo</li>
                    <li>• Guardar en lugar seco y ventilado</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Próximamente
                </h3>
                <p className="text-gray-600">
                  Las reseñas de productos estarán disponibles pronto
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              PRODUCTOS RELACIONADOS
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {relatedProduct.onSale && (
                        <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                          OFERTA
                        </Badge>
                      )}
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">
                          €{relatedProduct.price}
                        </span>
                        {relatedProduct.originalPrice && relatedProduct.originalPrice > relatedProduct.price && (
                          <span className="text-sm text-gray-500 line-through">
                            €{relatedProduct.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Link href={`/producto/${relatedProduct.slug}`}>
                        <Button size="sm" className="w-full bg-gray-900 hover:bg-sky-600 text-white font-semibold rounded-full">
                          Ver Producto
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
