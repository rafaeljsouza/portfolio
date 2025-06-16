
import { NextIntlClientProvider } from 'next-intl';
import requestConfig from '@/i18n/request';
import { Navbar } from '@/components/Navbar';
import { getUserLocale } from '@/services/locale';
import '@/app/globals.css';

// Base layout that loads translations and renders the navigation bar.

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, messages } = await requestConfig({ requestLocale: getUserLocale() });

  return (
    <html lang={locale} className="dark">
      <body className="bg-zinc-950 text-foreground font-sans"> 
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
