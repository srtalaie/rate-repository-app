import { useApolloClient } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-native";

import AuthStorageContext from '../contexts/AuthStorageContext';

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const navigate = useNavigate();
  const apolloClient = useApolloClient()

  const logout = async () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate('/signin')
  }

  useEffect(() => {
    logout()
  }, [])

  return (
    <></>
  )
}

export default SignOut