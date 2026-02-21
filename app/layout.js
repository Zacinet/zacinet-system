export const metadata = {
  title: "Zacinet ERP",
  description: "Sistema ERP Zacinet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
