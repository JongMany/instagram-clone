import { auth } from '@/auth';
import MainOrLoginPage from './_component/MainOrLoginPage';

export default async function RootPage() {
  const session = await auth();

  return <MainOrLoginPage isLogin={!!session?.user?.email} />;
}
