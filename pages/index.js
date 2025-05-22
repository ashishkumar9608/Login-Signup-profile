import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/login-auth'; // Adjust path if needed

function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/profile');
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return null; 
}

export default Home;

