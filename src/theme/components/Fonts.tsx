import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Anton';
        font-weight: 400;
        font-style: normal;
        src: url('/assets/fonts/anton/Anton-Regular.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 400;
        font-style: normal;
        src: url('/assets/fonts/titillium/TitilliumWeb-Regular.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 400;
        font-style: italic;
        src: url('/assets/fonts/titillium/TitilliumWeb-Italic.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 600;
        font-style: normal;
        src: url('/assets/fonts/titillium/TitilliumWeb-SemiBold.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 600;
        font-style: italic;
        src: url('/assets/fonts/titillium/TitilliumWeb-SemiBoldItalic.ttf') format('truetype');
        font-display: swap;
      }
      @font-face {
        font-family: 'Titillium';
        font-weight: 700;
        font-style: normal;
        src: url('/assets/fonts/titillium/TitilliumWeb-Bold.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 700;
        font-style: italic;
        src: url('/assets/fonts/titillium/TitilliumWeb-BoldItalic.ttf') format('truetype');
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Titillium';
        font-weight: 800;
        font-style: normal;
        src: url('/assets/fonts/titillium/TitilliumWeb-Black.ttf') format('truetype');
        font-display: swap;
      }
    `}
  />
);

export default Fonts;
