import { UserCtx } from '@/contexts/UserContext';
import { useRouter } from 'next/router';

import { useContext, useEffect } from 'react';

let redirectMS = 2000;


// acts mainly as a redirect page
const LogoutPage: DefaultFC = () => {
  const router = useRouter()
  const { logOut } = useContext(UserCtx);

  useEffect(() => {
    let callBackUrl = router.query.callBackUrl as string | undefined;
    let redirectTimeout: NodeJS.Timeout;

    logOut()
      .then(() => {
        redirectTimeout = setTimeout(() => {
          router.replace(callBackUrl ?? '/');
        }, redirectMS);
      })
      .catch(() => { });

    return () => clearTimeout(redirectTimeout);
  }, [router, logOut]);

  return <>
    <h1>Logging out...</h1>
  </>;
}

export default LogoutPage;