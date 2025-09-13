import MainContainer from './MainContainer';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-alt py-12 mt-16">
      <MainContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PropertyPulse</h3>
            <p className="text-text-muted mb-4">
              Your trusted partner in finding your dream property in Mumbai.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">LI</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-text-muted hover:text-primary">Home</Link></li>
              <li><Link href="/properties" className="text-text-muted hover:text-primary">Properties</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li><Link href="/properties?type=apartment" className="text-text-muted hover:text-primary">Apartments</Link></li>
              <li><Link href="/properties?type=villa" className="text-text-muted hover:text-primary">Villas</Link></li>
              <li><Link href="/properties?type=penthouse" className="text-text-muted hover:text-primary">Penthouses</Link></li>
              <li><Link href="/properties?type=plot" className="text-text-muted hover:text-primary">Plots</Link></li>
              <li><Link href="/properties?type=commercial" className="text-text-muted hover:text-primary">Commercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <address className="not-italic text-text-muted">
              <p>123 Real Estate Avenue</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="mt-2">info@propertypulse.com</p>
              <p>+91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link href="/privacy" className="text-text-muted hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-text-muted hover:text-primary">Terms of Service</Link>
            <Link href="/sitemap" className="text-text-muted hover:text-primary">Sitemap</Link>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
}
