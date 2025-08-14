'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import productsData from '@/data/products.json'

export default function TiendaPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const brands = [...new Set(productsData.products.map(p => p.brand))]
  const maxPrice = Math.max(...productsData.products.map(p => p.price))

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = productsData.products.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return categoryMatch && brandMatch && priceMatch
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [selectedCategories, selectedBrands, priceRange, sortBy])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, maxPrice])
    setSortBy('featured')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black">
              TIENDA DOZURTV
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre toda nuestra colección de productos para los reyes del fútbol sala
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="w-full"
                >
                  {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
                    <Button
                      onClick={clearFilters}
                      variant="ghost"
                      size="sm"
                      className="text-sky-600 hover:text-sky-700"
                    >
                      Limpiar
                    </Button>
                  </div>

                  {/* Categories */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Categorías</h4>
                    {productsData.categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category.id, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Brands */}
                  <div className="space-y-4 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900">Marcas</h4>
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => 
                            handleBrandChange(brand, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={brand}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="space-y-4 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900">Precio</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={maxPrice}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>€{priceRange[0]}</span>
                        <span>€{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-gray-600">
                Mostrando {filteredAndSortedProducts.length} productos
              </p>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
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
                        {product.featured && (
                          <Badge className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600">
                            DESTACADO
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
                        
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                        
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
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar los filtros para encontrar lo que buscas
                </p>
                <Button onClick={clearFilters} className="bg-sky-500 hover:bg-sky-600">
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
