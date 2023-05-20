'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const handleBannerClick = () => {
    router.push('/');
  };

  return (
    <header className="flex justify-between">
      <button type="button" onClick={handleBannerClick}>
        Logo
      </button>
      <div className="flex gap-2">
        <Link href="/myPage">My Page</Link>
        <button type="button">Login</button>
      </div>
    </header>
  );
}

export default Header;
