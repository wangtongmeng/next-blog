import '../styles/globals.css';
import Layout from 'components/layout';
import { StoreProvider } from 'store';
import { NextPage } from 'next';

interface IProps {
  initialValue: Record<any, any>;
  Component: NextPage;
  pageProps: any;
}
function App({ initialValue, Component, pageProps }: IProps) {
  return (
    <StoreProvider initialValue={initialValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

App.getInitialProps = async ({ ctx }: { ctx: any }) => {
  const { userId, nickname, avatar } = ctx?.req?.cookies || {};
  // 获取cookie，并存入store
  return {
    initialValue: {
      user: {
        userInfo: {
          userId,
          nickname,
          avatar,
        },
      },
    },
  };
};

export default App;
