
import { NextIntlClientProvider } from 'next-intl';
import requestConfig from '@/i18n/request';
import { Navbar } from '@/components/Navbar';
import { getUserLocale } from '@/services/locale';
import '@/app/globals.css';

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
//className="bg-zinc-950 text-white px-6 py-12 max-w-6xl mx-auto"