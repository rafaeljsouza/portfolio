import { NextIntlClientProvider } from 'next-intl';
import requestConfig from '@/i18n/request';
import { Navbar } from '@/components/Navbar'
import "@/app/globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, messages } = await requestConfig({});
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
