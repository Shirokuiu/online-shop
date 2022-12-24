import { Helmet, HelmetProvider } from 'react-helmet-async';

import CenterLayout from 'src/components/layouts/center-layout/center-layout';
import PageLayout from 'src/components/layouts/page-layout/page-layout';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout
        renderFooter={() => (
          <CenterLayout>
            <h2>Контент футера</h2>
          </CenterLayout>
        )}
      >
        <Helmet>
          <title>Руководство</title>
        </Helmet>
        <CenterLayout />
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
