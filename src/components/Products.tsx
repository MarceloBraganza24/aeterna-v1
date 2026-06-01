import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section
      id="guias"
      className="aeterna-bg relative overflow-hidden px-5 py-28 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-white/65">
            Tres productos, un sistema
          </p>

          <h2 className="text-6xl font-medium leading-[0.78] tracking-[-0.08em] md:text-8xl">
            Guías{" "}
            <span className="serif block font-normal italic">Prácticas</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-white/70">
            Cada guía representa un nivel de avance: claridad, profesionalización
            y estructura para construir autonomía.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}