import { Helmet, HelmetProvider } from 'react-helmet-async';

import './main-page.scss';

function MainPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Руководство</title>
      </Helmet>
      <span className="test">test</span>
    </HelmetProvider>
  );
}

export default MainPage;
