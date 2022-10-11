import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Accueil from './Pages/Accueil';
import './styles.css';

const Parcours = lazy(() => import('./Pages/Parcours'));
const Tarifs = lazy(() => import('./Pages/Tarifs'));
const PasseDeSaison = lazy(() => import('./Pages/PasseDeSaison'));
const Services = lazy(() => import('./Pages/Services'));
const NousContacter = lazy(() => import('./Pages/NousContacter'));
const Covid = lazy(() => import('./Pages/Covid'));
const Page404 = lazy(() => import('./Pages/Page404'));

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <Navigation />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/passeDeSaison" element={<PasseDeSaison />} />
            <Route path="/services" element={<Services />} />
            <Route path="/nousContacter" element={<NousContacter />} />

            {/* Support previous website link (wp) */}
            <Route path="/index.php" element={<Accueil />} />
            <Route path="/index.php/parcours/" element={<Parcours />} />
            <Route path="/index.php/tarifs/" element={<Tarifs />} />
            <Route path="/index.php/membres/" element={<PasseDeSaison />} />
            <Route path="/index.php/services/" element={<Services />} />
            <Route path="/index.php/nous-contacter/" element={<NousContacter />} />

            {/* Covid-19 */}
            <Route path="/covid" element={<Covid />} />

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
