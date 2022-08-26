import React, { useState } from 'react';
import styled from 'styled-components';
import { BoxWrap, ButtonFill } from '../styles/DefaultStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateProfileAsync } from '../features/userSlice';

const Customization = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [themeMode, setThemeMode] = useState();

  useEffect(() => {
    if (user) {
      setThemeMode(user?.mode);
    }
  }, [user]);

  const onThemeChnage = (val) => {
    setThemeMode(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      mode: themeMode,
    };
    dispatch(updateProfileAsync(payload));
  };

  return (
    <BoxWrap>
      <form onSubmit={onSubmit}>
        <section>
          <h2>Appearance</h2>
          <ThemeSelect>
            <Theme htmlFor="light">
              <div className="theme-inner">
                <div className="sect1">
                  <input
                    type="radio"
                    id="light"
                    checked={themeMode === 'light'}
                    name="theme"
                    onChange={() => onThemeChnage('light')}
                  />
                </div>
                <div className="sect2">
                  <div className="theme-name">Light Theme</div>
                  <div className="theme-prev"></div>
                </div>
              </div>
            </Theme>
            <Theme htmlFor="dark">
              <div className="theme-inner">
                <div className="sect1">
                  <input
                    type="radio"
                    id="dark"
                    checked={themeMode === 'dark'}
                    name="theme"
                    onChange={() => onThemeChnage('dark')}
                  />
                </div>
                <div className="sect2">
                  <div className="theme-name">Dark Theme</div>
                  <div className="theme-prev"></div>
                </div>
              </div>
            </Theme>
          </ThemeSelect>
        </section>
        <section>
          <ButtonFill>
            <button type="submit">Save</button>
          </ButtonFill>
        </section>
      </form>
    </BoxWrap>
  );
};

const ThemeSelect = styled.div`
  display: flex;
  gap: 10px;
`;

const Theme = styled.label`
  border-radius: 8px;
  cursor: pointer;
  padding: 5px;
  transition: all 300ms;

  :hover {
    background-color: ${(props) => props.theme.secondary};
  }

  .theme-name {
    margin-bottom: 10px;
  }

  .theme-inner {
    width: 230px;
    display: flex;
    padding: 20px;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.borderColor};

    .sect2 {
      flex: 1;
    }

    .theme-prev {
      width: 100%;
      height: 80px;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.borderColor};
    }
  }
`;

export default Customization;
