import './globals.css';

export const metadata = {
  title: 'DoubleJay Assemblies | Fast, Professional Assembly in Louisiana',
  description:
    'Furniture assembly, TV mounting, gym equipment setup, sheds, pergolas, and more across Baton Rouge, New Orleans, Lafayette, and surrounding Louisiana areas.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
