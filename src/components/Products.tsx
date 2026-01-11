import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import residentialLift from "@/assets/residential-lift.jpg";
import commercialLift from "@/assets/commercial-lift.jpg";
import hospitalLift from "@/assets/hospital-lift.jpg";

const products = [
  {
    title: "Residential Lifts",
    description: "Elegant home elevators designed for comfort and convenience. Space-efficient solutions that blend seamlessly with your interior.",
    image: residentialLift,
    features: ["Machine Room-Less (MRL)", "Glass & Stainless Steel Options", "Energy Efficient", "Low Noise Operation"],
  },
  {
    title: "Commercial Lifts",
    description: "High-capacity passenger elevators for offices, malls, and commercial buildings. Built for heavy traffic and reliability.",
    image: commercialLift,
    features: ["High Traffic Capacity", "Advanced Control Systems", "Destination Dispatch", "Premium Finishes"],
  },
  {
    title: "Hospital Lifts",
    description: "Specialized stretcher and bed elevators for healthcare facilities. Designed for critical medical transport requirements.",
    image: hospitalLift,
    features: ["Stretcher Compatible", "Emergency Power Backup", "Hygienic Interiors", "Priority Call System"],
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium lift solutions for every vertical transportation need. 
            From compact home elevators to heavy-duty industrial lifts.
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  
                  {/* Floating Label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      Premium Quality
                    </span>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className={`absolute -z-10 ${index % 2 === 1 ? "-left-4" : "-right-4"} -bottom-4 w-full h-full rounded-2xl bg-accent/10`} />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Brochure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-primary text-primary-foreground">
            <h3 className="text-2xl font-display font-bold mb-3">
              Want to See More?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Download our complete product catalog with specifications and pricing.
            </p>
            <a
              href="/documents/IMPAC_BROCHURE_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary inline-flex"
            >
              Download Brochure (PDF)
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
