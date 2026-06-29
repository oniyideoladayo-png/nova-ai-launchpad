import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Cpu, 
  Layout,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { SkillBadge } from '@/components/portfolio/SkillBadge';
import { ContactForm } from '@/components/portfolio/ContactForm';

const projects = [
  {
    title: 'Nova Fintech Dashboard',
    description: 'A comprehensive financial tracking system with real-time data visualization, automated budgeting, and multi-currency support.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7efdbd4-8d13-4987-a408-4162c9671acb/project-fintech-764a9af0-1782657091146.webp',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Aura Creative Agency',
    description: 'A minimalist landing page for a high-end creative agency featuring complex animations, scroll-triggered effects, and a custom cursor.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7efdbd4-8d13-4987-a408-4162c9671acb/project-agency-974a8193-1782657090752.webp',
    tags: ['Next.js', 'Framer Motion', 'Three.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Vibe Mobile E-commerce',
    description: 'A mobile-first e-commerce experience designed for modern shoppers, including a lightning-fast search and seamless checkout flow.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7efdbd4-8d13-4987-a408-4162c9671acb/project-ecommerce-df8007a4-1782657094071.webp',
    tags: ['React Native', 'Shopify Storefront API', 'Zustand'],
    github: '#',
    demo: '#',
  },
];

const skills = [
  { name: 'React', icon: <Code2 className="w-4 h-4" /> },
  { name: 'TypeScript', icon: <Code2 className="w-4 h-4" /> },
  { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
  { name: 'Framer Motion', icon: <Layout className="w-4 h-4" /> },
  { name: 'Next.js', icon: <Globe className="w-4 h-4" /> },
  { name: 'Node.js', icon: <Cpu className="w-4 h-4" /> },
  { name: 'PostgreSQL', icon: <Code2 className="w-4 h-4" /> },
  { name: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
  { name: 'Responsive Design', icon: <Smartphone className="w-4 h-4" /> },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <PortfolioNavbar />
      
      <main>
        <PortfolioHero />

        {/* About Section */}
        <section id="about" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Passionate about crafting <span className="text-gradient">digital excellence</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 5 years of experience in the industry, I've had the pleasure of working with startups and established companies to bring their visions to life. I specialize in creating scalable frontend architectures that don't compromise on beauty.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  My approach is user-centric, ensuring every pixel serves a purpose and every interaction feels natural. When I'm not coding, you'll find me exploring new design trends or contributing to open-source projects.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-1">50+</h3>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-1">10+</h3>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden glass border-primary/20">
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">
                A selection of my recent work, ranging from fintech platforms to creative agency websites.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Toolkit</h2>
              <p className="text-muted-foreground">
                The technologies and tools I use to bring ideas to life.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's connect</h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Have a project in mind or just want to say hi? Feel free to reach out using the form or through my contact information below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-xl"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PORTFOLIO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
