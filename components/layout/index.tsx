import type { NextPage } from 'next';
import { ReactNode } from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

interface IProps {
  children: ReactNode;
}

const Layout: NextPage<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
