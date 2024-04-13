import HomePageLanding from '@/components/HomePage';
import Layout from '@/components/layout';
import { NextPageWithLayout } from '@/types/layout';
import type { ReactElement } from 'react';

const HomePage: NextPageWithLayout = props => {
  const Component = HomePageLanding;

  return Component && <Component {...props} />;
};

HomePage.getLayout = (page: ReactElement) => {
  const LayoutComponent = Layout;

  return <LayoutComponent>{page}</LayoutComponent>;
};

export default HomePage;
