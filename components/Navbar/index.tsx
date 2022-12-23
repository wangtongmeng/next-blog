import { Button } from 'antd';
import Login from 'components/Login';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navs } from './config';
import styles from './index.module.scss';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleGotoEditorPage = () => {};
  const handleLogin = () => {
    setIsShowLogin(true);
  };
  const handleClose = () => {
    setIsShowLogin(false);
  };
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>Blog</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => {
          return (
            <Link
              className={pathname === nav?.value ? styles.active : ''}
              key={nav?.label}
              href={nav?.value}
            >
              {nav?.label}
            </Link>
          );
        })}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
