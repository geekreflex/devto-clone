import React from 'react';
import { useSelector } from 'react-redux';
import LoginToContinue from './components/widgets/LoginToContinue';

const GlobalComp = () => {
  const { loginConModal } = useSelector((state) => state.action);
  return <>{loginConModal && <LoginToContinue />}</>;
};

export default GlobalComp;
