import { PropsWithChildren } from 'react';

import './center-layout.scss';

function CenterLayout({ children }: PropsWithChildren<Record<string, unknown>>) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
