# Dozurtv - E-commerce de Ropa Deportiva

Una tienda online moderna y responsive para ropa deportiva especializada en fútbol sala, construida con Next.js 15, React, TypeScript y Tailwind CSS.

## 🚀 Características

### 🛍️ E-commerce Completo
- **Catálogo de productos** con filtros avanzados y ordenamiento
- **Páginas de producto** con variantes (tallas, colores) y gestión de stock
- **Carrito persistente** con gestión de cantidades
- **Sistema de cupones** de descuento
- **Checkout completo** con múltiples métodos de pago
- **Cálculo automático** de envíos e impuestos

### 🎨 Diseño y UX
- **Diseño responsive** optimizado para móviles, tablets y desktop
- **Interfaz moderna** inspirada en las mejores tiendas online
- **Paleta de colores orientada a ventas** (Primario: #0EA5E9, Secundario: #111827, Acento: #F59E0B)
- **Tipografías modernas** con Google Fonts (Inter, Poppins)
- **Micro-interacciones** y animaciones suaves
- **Accesibilidad AA** cumpliendo estándares web

### 💳 Métodos de Pago
- **Stripe** - Tarjetas de crédito/débito
- **PayPal** - Pago con cuenta PayPal
- **Mercado Pago** - Para mercado latinoamericano

### 📱 Páginas Implementadas
- **Home** - Hero dinámico con productos destacados
- **Tienda** - Catálogo completo con filtros
- **Producto** - Página detallada con variantes
- **Carrito** - Gestión de productos y cupones
- **Checkout** - Proceso de compra completo
- **Nosotros** - Historia y equipo de la marca
- **Contacto** - Formulario y información de contacto

### ⚡ Performance y SEO
- **Next.js 15** con App Router y Turbopack
- **Imágenes optimizadas** con lazy loading
- **Meta tags** y Open Graph configurados
- **JSON-LD** para productos (Schema.org)
- **Sitemap** y robots.txt automáticos
- **Lighthouse Score ≥90** objetivo

## 🛠️ Tecnologías

- **Framework**: Next.js 15 con TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Componentes**: Radix UI primitives
- **Formularios**: React Hook Form
- **Notificaciones**: Sonner
- **Iconos**: Sin dependencias externas (diseño limpio)
- **Fuentes**: Google Fonts (Inter, Poppins)

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd dozurtv-ecommerce
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus claves de API:

```env
# Payment Gateway Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=your_mercadopago_public_key
MERCADOPAGO_ACCESS_TOKEN=your_mercadopago_access_token

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Dozurtv
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar con Vercel**
```bash
npm i -g vercel
vercel
```

2. **Configurar variables de entorno en Vercel**
- Ve a tu proyecto en Vercel Dashboard
- Settings → Environment Variables
- Añade todas las variables de `.env.example`

3. **Deploy automático**
- Cada push a `main` desplegará automáticamente
- Preview deployments para otras ramas

### Hostinger

1. **Build del proyecto**
```bash
npm run build
npm run export  # Si usas static export
```

2. **Subir archivos**
- Sube la carpeta `out/` (static) o configura Node.js
- Configura las variables de entorno en el panel

3. **Configurar dominio**
- Apunta tu dominio a los servidores de Hostinger
- Configura SSL/HTTPS

### Otras plataformas

El proyecto es compatible con:
- **Netlify** (con adaptador)
- **Railway** 
- **DigitalOcean App Platform**
- **AWS Amplify**
- **Heroku**

## 🧪 Testing

```bash
# Ejecutar tests (cuando se implementen)
npm run test

# Tests de componentes
npm run test:components

# Tests E2E
npm run test:e2e
```

## 📊 Datos de Demostración

El proyecto incluye un dataset completo de productos de demostración en `src/data/products.json`:

- **8 productos** de ejemplo (zapatillas, ropa, accesorios)
- **3 categorías** (Fútbol Sala, Ropa Deportiva, Accesorios)
- **Variantes completas** (tallas, colores, stock)
- **Imágenes placeholder** descriptivas
- **Precios realistas** con ofertas

### Cupones de prueba:
- `MAGOS10` - 10% descuento
- `DOZURTV15` - 15% descuento  
- `FUTSAL20` - 20% descuento

## 🎨 Personalización

### Colores de marca
```css
/* Tailwind config personalizado */
primary: '#0EA5E9',      /* Sky-500 */
secondary: '#111827',    /* Gray-900 */
accent: '#F59E0B',       /* Amber-500 */
```

### Tipografías
- **Headings**: Poppins (Black, Bold)
- **Body**: Inter (Regular, Medium)
- **UI**: Sistema por defecto

### Componentes
Todos los componentes UI están en `src/components/ui/` y son personalizables:
- Botones, Cards, Forms
- Navigation, Modals
- Layout components

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── page.tsx           # Homepage
│   ├── tienda/            # Store pages
│   ├── producto/          # Product pages
│   ├── carrito/           # Cart
│   ├── checkout/          # Checkout process
│   ├── nosotros/          # About page
│   └── contacto/          # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header
│   └── Footer.tsx        # Site footer
├── data/                 # Static data
│   └── products.json     # Product catalog
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
└── hooks/                # Custom hooks
    └── use-mobile.ts     # Mobile detection
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

- **Email**: hola@dozurtv.com
- **Documentación**: [docs.dozurtv.com](https://docs.dozurtv.com)
- **Issues**: [GitHub Issues](https://github.com/dozurtv/ecommerce/issues)

## 🎯 Roadmap

### Próximas características:
- [ ] Sistema de reseñas y valoraciones
- [ ] Wishlist/Lista de deseos
- [ ] Comparador de productos
- [ ] Chat en vivo
- [ ] Programa de fidelización
- [ ] Multi-idioma (ES/EN)
- [ ] PWA (Progressive Web App)
- [ ] Integración con CMS (Contentful/Sanity)

---

**Dozurtv** - Los Reyes del Fútbol Sala 👑⚽

Hecho con ❤️ para la comunidad del fútbol sala
