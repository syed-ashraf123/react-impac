import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, RefreshCw, Settings, Shield, Clock, HeadphonesIcon, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "New Installations",
    description: "Complete lift installation solutions for residential, commercial, and industrial buildings. From planning to commissioning, we handle it all.",
    features: ["Site Survey & Planning", "Custom Design Options", "Professional Installation", "Safety Compliance"],
  },
  {
    icon: RefreshCw,
    title: "Modernization",
    description: "Upgrade your existing elevators with the latest technology, improved efficiency, and enhanced safety features.",
    features: ["Control System Upgrade", "Energy Efficiency", "Safety Enhancement", "Aesthetic Renovation"],
  },
  {
    icon: Wrench,
    title: "Maintenance (AMC)",
    description: "Comprehensive annual maintenance contracts to ensure smooth, safe, and reliable lift operations throughout the year.",
    features: ["Preventive Maintenance", "Regular Inspections", "Performance Reports", "Priority Support"],
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency support for lift breakdowns and passenger rescue operations.",
    features: ["Rapid Response", "Passenger Rescue", "Emergency Repairs", "Technical Support"],
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Thorough safety audits and compliance inspections to ensure your lifts meet all regulatory standards.",
    features: ["Safety Audit", "Compliance Check", "Risk Assessment", "Certification Support"],
  },
  {
    icon: HeadphonesIcon,
    title: "Consultation",
    description: "Expert consultation services for architects, builders, and property managers on lift selection and planning.",
    features: ["Technical Advisory", "Cost Estimation", "Design Optimization", "Regulatory Guidance"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive lift solutions tailored to your needs. From installation to 
            maintenance, we ensure your vertical transportation runs smoothly and safely.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-elevated p-6 lg:p-8 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="btn-hero-primary inline-flex"
          >
            Request Service
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
