import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { StoreProvider } from 'store';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider initialValue={{ user: {} }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
