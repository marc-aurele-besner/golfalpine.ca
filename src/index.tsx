import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Accueil from './Pages/Accueil';
import './styles.css';

const Page404 = lazy(() => import('./Pages/Page404'));

const App = () => {
  return (
    <div>
      <HelmetProvider>
        {/* <Navigation /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/parcours" element={<Accueil />} />
            <Route path="/tarifs" element={<Accueil />} />
            <Route path="/passeDeSaison" element={<Accueil />} />
            <Route path="/services" element={<Accueil />} />
            <Route path="/nousContacter" element={<Accueil />} />

            {/* Support previous website link (wp) */}
            <Route path="/index.php" element={<Accueil />} />
            <Route path="/index.php/parcours/" element={<Accueil />} />
            <Route path="/index.php/tarifs/" element={<Accueil />} />
            <Route path="/index.php/membres/" element={<Accueil />} />
            <Route path="/index.php/services/" element={<Accueil />} />
            <Route path="/index.php/nous-contacter/" element={<Accueil />} />

            {/* Not found */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>

      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
