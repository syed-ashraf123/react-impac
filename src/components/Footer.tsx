import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, FileText } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "New Installations",
  "Modernization",
  "Maintenance (AMC)",
  "Emergency Repairs",
  "Safety Inspections",
  "Consultation",
];

const documents = [
  { name: "Product Brochure", href: "/documents/IMPAC_BROCHURE_2024.pdf" },
  { name: "ISO Certificate", href: "/documents/impac_lift_iso-9001-2015.pdf" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold hover:shadow-lg transition-shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold font-display">IMPAC</span>
              <span className="block text-xs tracking-[0.3em] uppercase text-accent">LIFT</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Premium lift solutions for residential, commercial, and industrial spaces. 
              Engineering excellence meets safety.
            </p>
            <div className="space-y-3">
              <a href="tel:+919889439597" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +91 98894 39597
              </a>
              <a href="mailto:impaclift@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                impaclift@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Downloads</h4>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc.name}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Office Address</h4>
              <div className="flex gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Shop No.8, B.K. Plaza, Lower Ground Floor, Kukrail Road, Lucknow - 226024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} IMPAC LIFT. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>UDYAM-UP-50-0021019</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
