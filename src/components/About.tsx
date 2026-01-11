import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Users, Building2, Wrench } from "lucide-react";

const features = [
  "ISO 9001:2015 Certified",
  "MSME Registered Enterprise",
  "Experienced Engineering Team",
  "Pan-India Service Network",
  "24/7 Emergency Support",
  "Genuine Spare Parts",
];

const stats = [
  { icon: Building2, value: "500+", label: "Installations" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Wrench, value: "50+", label: "Active AMC" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102a43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Engineering Excellence <br />
              <span className="text-accent">Since 2019</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              IMPAC LIFT is a trusted name in vertical transportation solutions, 
              headquartered in Lucknow, Uttar Pradesh. We specialize in the installation, 
              modernization, and maintenance of passenger and goods lifts across 
              residential, commercial, and industrial sectors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, precision engineering, and customer satisfaction 
              has made us the preferred choice for architects, builders, and property 
              managers across India.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary to-navy-800 rounded-2xl p-8 lg:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
              
              {/* Elevator Shaft Illustration */}
              <div className="relative flex justify-center">
                <div className="w-32 h-64 border-2 border-primary-foreground/20 rounded-lg relative overflow-hidden">
                  {/* Elevator Lines */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-foreground/10" style={{ left: "25%" }} />
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-foreground/10" style={{ left: "75%" }} />
                  
                  {/* Animated Elevator Car */}
                  <motion.div
                    animate={{ y: [0, 180, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-2 right-2 h-16 bg-accent/80 rounded-md top-4"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
                    {/* Door */}
                    <div className="absolute inset-2 flex gap-px">
                      <div className="flex-1 bg-primary-foreground/20 rounded-sm" />
                      <div className="flex-1 bg-primary-foreground/20 rounded-sm" />
                    </div>
                  </motion.div>
                  
                  {/* Floor Indicators */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute right-2 text-xs font-mono text-primary-foreground/40"
                      style={{ top: `${20 + i * 18}%` }}
                    >
                      {5 - i}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 text-center">
                <p className="text-primary-foreground/90 text-lg font-medium italic">
                  "Your safety is our priority, your satisfaction is our goal."
                </p>
                <p className="text-accent mt-3 font-semibold">— IMPAC LIFT Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
