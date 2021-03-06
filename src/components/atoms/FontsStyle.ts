import { createGlobalStyle } from 'styled-components';

interface FontsStyleProps {
  getURL: (path: string) => string;
}

export default createGlobalStyle<FontsStyleProps>`
  /* lato-100normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 100;
    src:
      local('Lato Thin '),
      local('Lato-Thin'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-100.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-100.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-100italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 100;
    src:
      local('Lato Thin italic'),
      local('Lato-Thinitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-100italic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-100italic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-300normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src:
      local('Lato Light '),
      local('Lato-Light'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-300.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-300.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-300italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 300;
    src:
      local('Lato Light italic'),
      local('Lato-Lightitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-300italic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-300italic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-400normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Lato Regular '),
      local('Lato-Regular'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-400.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-400.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-400italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 400;
    src:
      local('Lato Regular italic'),
      local('Lato-Regularitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-400italic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-400italic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-500normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src:
      local('Lato Medium '),
      local('Lato-Medium'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Medium.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Medium.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-500italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 500;
    src:
      local('Lato Medium italic'),
      local('Lato-Mediumitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Mediumitalic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Mediumitalic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-600normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src:
      local('Lato Semi-bold '),
      local('Lato-Semi-bold'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Semibold.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Semibold.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-600italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 600;
    src:
      local('Lato Semi-bold italic'),
      local('Lato-Semiboldtalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Semibolditalic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Semibolditalic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-700normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src:
      local('Lato Bold '),
      local('Lato-Bold'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-700.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-700.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-700italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 700;
    src:
      local('Lato Bold italic'),
      local('Lato-Bolditalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-700italic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-700italic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-800normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 800;
    src:
      local('Lato Heavy '),
      local('Lato-Heavy'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Heavy.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-Heavy.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-700italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 800;
    src:
      local('Lato Heavy italic'),
      local('Lato-Heavyitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-HeavyItalic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/LatoLatin-HeavyItalic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-900normal - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src:
      local('Lato Black '),
      local('Lato-Black'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-900.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-900.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* lato-900italic - latin */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 900;
    src:
      local('Lato Black italic'),
      local('Lato-Blackitalic'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-900italic.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/lato-latin-900italic.woff'
        )}') format('woff'); /* Modern Browsers */
  }
  
  /* sedgwick-ave-400normal - latin */
  @font-face {
    font-family: 'Sedgwick Ave';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Sedgwick Ave Regular '),
      local('Sedgwick Ave-Regular'),
      url('${({ getURL }) =>
        getURL(
          '/fonts/sedgwick-ave-latin-400.woff2'
        )}') format('woff2'), /* Super Modern Browsers */
      url('${({ getURL }) =>
        getURL(
          '/fonts/sedgwick-ave-latin-400.woff'
        )}') format('woff'); /* Modern Browsers */
  }
`;
