import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import classes from './Layout.module.css';

const Layout = () => (
  <div className={classes.layout}>
    <Header />
    <main className={classes.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
