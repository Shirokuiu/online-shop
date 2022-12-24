import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import PageLayout from 'src/components/layouts/page-layout/page-layout';
import SvgSpriteIcon from 'src/components/shared/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from 'src/components/shared/svg-sprite-icon/types';

function SvgIconsExample() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Пример svg иконок</title>
      </Helmet>

      <PageLayout>
        <ul>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.Telegram} />
          </li>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.PhoneCall} />
          </li>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.ShoppingCart} />
          </li>
          <li>
            <Link to="/">Go home</Link>
          </li>
        </ul>
      </PageLayout>
    </HelmetProvider>
  );
}

export default SvgIconsExample;
