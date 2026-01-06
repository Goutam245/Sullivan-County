import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'Why I\'m Running', href: '#why' },
    { label: 'Public Safety', href: '#safety' },
    { label: 'District 8', href: '#district' },
    { label: 'Contact Us', href: '#contact' },
  ],
  resources: [
    { label: '2026 Election Calendar', href: '#' },
    { label: 'Register to Vote', href: 'https://sos.tn.gov/elections' },
    { label: 'Know Your District', href: '#district' },
    { label: 'Volunteer', href: '#contact' },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Legal Disclaimer Box */}
      <div className="bg-background py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto p-6 bg-card border-2 border-border rounded-lg text-center">
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
              2026 Ward For Sullivan County Commision District 8. Paid for by Elect Ward For Sullivan County Commisoner 2026
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer id="contact" className="bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Branding Column */}
            <div>
              <a href="#home" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">W</span>
                </div>
                <div>
                  <p className="font-display font-bold text-lg">Ward</p>
                  <p className="text-xs text-navy-foreground/70">For Sullivan County</p>
                </div>
              </a>
              <p className="text-navy-foreground/80 mb-6 text-sm sm:text-base">
                Moving Sullivan County Forward. Starting in District 8.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-navy-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-navy-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <a href="mailto:info@wardforsullivan.com" className="text-navy-foreground/80 hover:text-accent transition-colors">
                    info@wardforsullivan.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-navy-foreground/80">(423) 555-0126</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-navy-foreground/80">
                    Sullivan County, TN<br />District 8
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-navy-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-navy-foreground/60 text-center md:text-left">
              © 2026 Ward for Sullivan County. All rights reserved. <a href="#" className="hover:text-accent">Privacy Policy</a>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:shadow-glow transition-shadow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
