import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/authStore';
import useStorage from './useStorage';

const useGoogleAuth = () => {
  const GOOGLE_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

  const GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;

  const router = useRouter();

  const [accessToken, setAccessToken, deleteAccessToken] = useAuthStore(
    (state) => [
      state.accessToken,
      state.setAccessToken,
      state.deleteAccessToken,
    ],
  );

  const { setItem, removeItem, getItem } = useStorage();

  const isLogin = accessToken;

  const handleOAuthLoginButtonClick = () => {
    if (isLogin) {
      deleteAccessToken();
      removeItem('accessToken', 'session');
      return;
    }
    const url = window.location.pathname;
    setItem('beforeUrl', url, 'session');
    window.location.assign(GoogleURL);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const { hash } = url;
    if (hash && hash.includes('access_token')) {
      const beforeLoginUrl = getItem('beforeUrl', 'session');
      const token = hash.split('=')[1].split('&')[0];

      setItem('accessToken', token, 'session');
      setAccessToken(token);
      router.replace(beforeLoginUrl);
    }
  }, []);

  return {
    handleOAuthLoginButtonClick,
  };
};

export default useGoogleAuth;
