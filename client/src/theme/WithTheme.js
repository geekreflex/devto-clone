import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeSchema';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect } from 'react';

const WithTheme = ({ children }) => {
  const authUser = useSelector((state) => state.user.user);
  const [user, setUser] = useLocalStorage('auth-user', authUser);

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

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
