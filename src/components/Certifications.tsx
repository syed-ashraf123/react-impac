import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, FileCheck, Download, ExternalLink } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "International quality management system certification ensuring consistent quality in all our processes.",
    document: "/documents/impac_lift_iso-9001-2015.pdf",
  },
  {
    icon: FileCheck,
    title: "MSME Registered",
    description: "Registered with the Ministry of Micro, Small & Medium Enterprises, Government of India.",
    document: null,
  },
  {
    icon: Award,
    title: "Udyam Registration",
    description: "Official MSME registration (UDYAM-UP-50-0021019) validating our enterprise status.",
    document: null,
  },
];

const trustedBy = [
  "Residential Complexes",
  "Commercial Buildings",
  "Hospitals & Healthcare",
  "Educational Institutions",
  "Industrial Facilities",
  "Government Buildings",
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20H0zm20 0L40 0v20H20zm0 0v20l20-20H20zm0 0H0l20 20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="h-1 w-16 rounded-full bg-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Certifications & Trust
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our commitment to quality and safety is backed by recognized certifications 
            and industry standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/50 transition-colors group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <cert.icon className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {cert.title}
              </h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Download Link */}
              {cert.document && (
                <a
                  href={cert.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-semibold text-primary-foreground/60 mb-8">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBy.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-primary-foreground/5 rounded-full border border-primary-foreground/10"
              >
                <span className="text-primary-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
