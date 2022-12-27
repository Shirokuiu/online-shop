import { Helmet, HelmetProvider } from 'react-helmet-async';

import './main-page.scss';

import MainFilter from 'src/components/containers/main-filter/main-filter';

function MainPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <main>
        <section className="main-page">
          <h1 className="visually-hidden">Главная</h1>
          <div className="main-page__blueline" />
          <div className="main-page__wrapper">
            <section className="main-page__filter">
              <MainFilter />
            </section>
            <section className="main-page__results" />
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
}

export default MainPage;
