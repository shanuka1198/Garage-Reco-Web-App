import { motion } from 'motion/react';
import { Users, Award, Target, Heart } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { stats } from '../data/servicesData';

/**
 * About Page Component
 * Company story, mission, and statistics with animated counters
 */
export function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            About <span className="text-primary">Garage Reco</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Your trusted partner in automotive care since 2011
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2011, Garage Reco began with a simple mission: to provide honest, 
                reliable automotive services to our community. What started as a small family-owned 
                garage has grown into one of the most trusted automotive service centers in the region.
              </p>
              <p>
                Our founder, with over 20 years of experience in the automotive industry, built 
                Garage Reco on the principles of integrity, quality workmanship, and exceptional 
                customer service. These values continue to guide us today.
              </p>
              <p>
                We've invested in state-of-the-art diagnostic equipment and ongoing training for 
                our technicians to ensure we can handle any automotive challenge, from routine 
                maintenance to complex repairs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-2 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1698998882494-57c3e043f340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njc2NTQ3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Garage workshop"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
            Our <span className="text-primary">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={stats.yearsExperience} suffix="+" />
              <p className="text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.vehiclesServiced} suffix="+" />
              <p className="text-muted-foreground mt-2">Vehicles Serviced</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.satisfiedCustomers} suffix="+" />
              <p className="text-muted-foreground mt-2">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.certifiedTechnicians} />
              <p className="text-muted-foreground mt-2">Certified Technicians</p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "Honest pricing and transparent communication in every interaction"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality of service and workmanship"
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction and safety are our top priorities"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Continuously updating our skills and equipment to serve you better"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl text-white mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of ASE-certified technicians brings decades of combined experience 
            and a passion for automotive excellence. We're here to keep your vehicle 
            running smoothly and safely.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary/10 px-6 py-2 rounded-full text-primary">ASE Certified</div>
            <div className="bg-primary/10 px-6 py-2 rounded-full text-primary">Factory Trained</div>
            <div className="bg-primary/10 px-6 py-2 rounded-full text-primary">Continuous Education</div>
            <div className="bg-primary/10 px-6 py-2 rounded-full text-primary">Background Checked</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
