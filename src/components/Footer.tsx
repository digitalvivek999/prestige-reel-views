import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <span className="text-2xl font-display font-semibold tracking-wider text-gold-gradient">
              LUXE ESTATES
            </span>
            <p className="mt-4 text-muted-foreground max-w-md">
              Curating extraordinary properties for discerning clients. 
              Where luxury meets legacy.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm tracking-widest uppercase text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a></li>
              <li><a href="#status" className="text-muted-foreground hover:text-foreground transition-colors">Property Status</a></li>
              <li><a href="#documents" className="text-muted-foreground hover:text-foreground transition-colors">Documents</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm tracking-widest uppercase text-primary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  1200 Park Avenue<br />New York, NY 10128
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+12125551234" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:private@luxeestates.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  private@luxeestates.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Luxe Estates. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Exclusive property listing. All inquiries are confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
