import type { Color } from '@/theme/foundations/colors';
import { Box } from '@chakra-ui/react';
import type { FC, PropsWithChildren } from 'react';
import Header from '../common/Header';

interface LayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  backgroundColor?: Color;
  headerButton?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, title, description, backgroundColor = 'neutral1', headerButton }) => {
  return (
    <Box background={backgroundColor}>
      {/* <MetaTags title={title} description={description} /> */}
      <Header />
      <main>{children}</main>
      {/* <FooterWithLinks /> */}
    </Box>
  );
};

export default Layout;
