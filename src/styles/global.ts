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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-container {
    user-select: none;
    position: relative;
    
    width: 100%;
    max-width: 800px;
    
    margin: 0 2rem;
    padding: 4rem 4rem;
    border-radius: 1rem;
    border: 1px solid var(--purple);
    
    background: var(--gray-900);
    box-shadow: 0px 0px 60px 5px rgba(113, 41, 204, 0.4);

    &:focus {
      outline: none;
    }
  }

  .react-modal-close-button {
    background: transparent;
    border: 0;

    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;