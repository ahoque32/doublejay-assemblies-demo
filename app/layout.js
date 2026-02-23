import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'DoubleJay Assemblies | Fast, Professional Assembly in Louisiana',
  description:
    'Furniture assembly, TV mounting, gym equipment setup, sheds, pergolas, and more across Baton Rouge, New Orleans, Lafayette, and surrounding Louisiana areas.'
};

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Get Quote' }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="container navWrap">
            <div className="topNav">
              <Link href="/" className="brand" aria-label="DoubleJay Assemblies home">
                <span className="brandMark" aria-hidden="true">DJ</span>
                <span className="brandMeta">
                  <strong>DoubleJay Assemblies</strong>
                  <span>Professional assembly & mounting</span>
                </span>
              </Link>
              <nav className="navLinks" aria-label="Primary navigation">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>{item.label}</Link>
                ))}
              </nav>
            </div>
            <div className="navActions">
              <a href="tel:2255236604" className="headerPhone">(225) 523-6604</a>
              <Link href="/contact" className="btn btnPrimary btnSmall headerCta">
                Request Quote
              </Link>
            </div>
          </div>
        </header>
        <div className="pageShell">{children}</div>
        <footer className="siteFooter">
          <div className="container footerWrap">
            <div>
              <strong>DoubleJay Assemblies</strong>
              <p>Premium assembly and mounting support for busy homes and businesses in Louisiana.</p>
            </div>
            <div className="footerLinks">
              <a href="tel:2255236604">(225) 523-6604</a>
              <a href="mailto:jermaldillon@doublejayassemblies.net">jermaldillon@doublejayassemblies.net</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
