import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: '#312E38';

    --color-headerBackground: '#28262E';
    --color-headerPrimaryText: '#27AE60';
    --color-headerSecondaryText: '999591';
    --color-headerElement: '#27AE60';

    --color-inputBackground: '#232129';
    --color-inputText: '#F4EDE8';
    --color-inputPlaceholder: '#666360';
    --color-inputIcon: '#666360';
    --color-inputFocused: '#27ae60';
    --color-inputError: '#c53030';

    --color-cardBackground: '#3E3B47';
    --color-cardTitle: '#F4EDE8';
    --color-cardText: '#999591';
    --color-cardElement: '#27ae60';

    --color-primaryText: '#F4EDE8';
    --color-secondaryText: '#27ae60';
    --color-tertiaryText: '#666360';

    --color-buttonBackground: '#27ae60';
    --color-buttonText: '#312E38';
    --color-buttonIcon: '#312E38';

    --color-calendarPrimary: '#3E3B47';
    --color-calendarSecondary: '#28262E';
    --color-calendarSelected: '#27ae60';
    --color-calendarTextPrimary: '#F4EDE8';
    --color-calendarTextSecondary: '#666360';
    --color-calendarTextSelected: '#28262E';
  }

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-primaryText);
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, button {
    font-family: 'Poppins';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button: {
    cursor: pointer;
  }
`;
