import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeSchema';

const WithTheme = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  const renderTheme = () => {
    if (user?.mode === 'light') {
      return lightTheme;
    }

    if (user?.mode === 'dark') {
      return darkTheme;
    }

    return lightTheme;
  };

  return <ThemeProvider theme={renderTheme()}>{children}</ThemeProvider>;
};

export default WithTheme;
