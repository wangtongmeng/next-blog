import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navs } from './config';
import styles from './index.module.scss';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
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
    </div>
  );
};

export default Navbar;
