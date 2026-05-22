import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Audience from "@/components/Audience";
import Method from "@/components/Method";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <Navbar />
      <Hero />
      <Philosophy />
      <Products />
      <Audience />
      <Method />
      <Contact />
      <Footer />
    </main>
  );
}