import  { lazy,  } from 'react';

// Lazy-loaded components
const   Header = lazy(() => import('../components/Header/Header'));
const   Footer = lazy(() => import('../components/Footer/Footer'));
const   About = lazy(() => import('./About/About'));
const   Intro = lazy(() => import('./Intro/Intro'));
const   Models = lazy(() => import('./Models/Models'));
const    Service = lazy(() => import('./Service/Service'));


const Layout = () => {
  return (
    <>
      <Header />
      <Intro />
      <Models />
      <About />
      <Service />
      <Footer />
    </>
  );
};

export default Layout;
