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
            <Link href="/" className="brand">DoubleJay Assemblies</Link>
            <nav className="navLinks">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="siteFooter">
          <div className="container footerWrap">
            <div>
              <strong>DoubleJay Assemblies</strong>
              <p>Assembly & mounting services across Louisiana.</p>
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
