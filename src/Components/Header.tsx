'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useGoogleAuth from '@/hooks/useGoogleAuth';
import useAuthStore from '@/store/authStore';

function Header() {
  const router = useRouter();
  const { handleOAuthLoginButtonClick } = useGoogleAuth();

  const [accessToken] = useAuthStore((s) => [
    s.accessToken,
    s.deleteAccessToken,
    s.setAccessToken,
  ]);
  const handleBannerClick = () => {
    router.push('/');
  };

  const isLogin = accessToken?.length !== 0;

  console.log(accessToken);
  console.log(isLogin);
  return (
    <header className="flex justify-between">
      <button type="button" onClick={handleBannerClick}>
        Logo
      </button>
      <div className="flex gap-2">
        <Link href="/myPage">My Page</Link>
        <button type="button" onClick={handleOAuthLoginButtonClick}>
          {isLogin ? 'LogOut' : 'Login'}
        </button>
      </div>
    </header>
  );
}

export default Header;
