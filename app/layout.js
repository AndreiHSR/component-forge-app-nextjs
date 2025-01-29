// import { Inter } from 'next/font/google';
// import { ClerkProvider } from '@clerk/nextjs';
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Component-Forge',
//   description: 'Website for playing with components',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <script src="https://cdn.tailwindcss.com"></script>
//         <link
//           href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
//           rel="stylesheet"
//         ></link>
//       </head>
//       <body className={inter.className}>
//         <ClerkProvider>
//           <Navbar />
//           {children}
//           <SpeedInsights />
//           <section id="FooterSection">
//             <Footer />
//           </section>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }

import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Component-Forge',
  description: 'Website for playing with components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          {children}
          <SpeedInsights />
          <section id="FooterSection">
            <Footer />
          </section>
        </ClerkProvider>
      </body>
    </html>
  );
}