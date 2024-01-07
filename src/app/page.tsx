import LoginPage from '@/app/(beforeAuth)/_component/LoginPage';
import MainPage from '@/app/(afterAuth)/_component/MainPage';
import { loginState } from './layout';

export default function RootPage() {
  // 로그인 여부에 따라 로그인 화면 or 메인 화면

  return (
    <>
      {!loginState && <LoginPage />}
      {loginState && <MainPage />}
    </>
  );
}
