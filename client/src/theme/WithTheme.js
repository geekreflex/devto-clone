import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeSchema';

const WithTheme = ({ children }) => {
  const mode = 'dark';

  const renderTheme = () => {
    if (mode === 'light') {
      return lightTheme;
    }

    if (mode === 'dark') {
      return darkTheme;
    }
  };

  return <ThemeProvider theme={renderTheme()}>{children}</ThemeProvider>;
};

export default WithTheme;
