import './globals.css';

export const metadata = {
  title: 'Karunesh | Full-Stack Developer & Software Engineer Portfolio',
  description: 'Portfolio of Karunesh, showcasing full-stack web applications, modern frontends, performant backends, and cloud architectures.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'JavaScript', 'Portfolio', 'Vercel'],
  authors: [{ name: 'Karunesh' }],
  openGraph: {
    title: 'Karunesh | Full-Stack Developer Portfolio',
    description: 'Explore web applications, projects, and tech stack of Karunesh.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
