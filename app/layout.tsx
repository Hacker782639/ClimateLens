import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ClimateLens Africa — Explore. Understand. Innovate. Impact.', description: 'Climate knowledge, environmental innovation and community action for Nigeria and Africa.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
