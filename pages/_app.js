import React, { useEffect } from 'react';
import { GTMPageView } from '../lib/gtm';
import '../src/css/tailwind.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
