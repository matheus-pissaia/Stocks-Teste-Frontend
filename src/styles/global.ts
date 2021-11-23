import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #ff5b5b;
    --green: #00cf98;
    --purple: #7129cc;

    --gray-100: #f8f9fa;
    --gray-300: #dde2e5;
    --gray-500: #acb5bd;
    --gray-700: #495057;
    --gray-900: #212429;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--gray-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;