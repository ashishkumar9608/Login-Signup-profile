import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/login-auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../core/button/button';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          toast.success(error);
        }
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message || 'Logout failed');
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div
        className="min-h-[100vh] p-4 flex items-center justify-center text-white"
        style={{
          background:
            'linear-gradient(90deg,rgba(54, 77, 92, 1) 0%, rgba(32, 212, 212, 1) 100%)',
        }}
      >
        <div className="w-[500px] flex flex-col items-center gap-5 p-8 rounded-md shadow backdrop-blur-md bg-white/10">
          <p className="text-xl font-[700]">Welcome</p>
          {userData ? (
            <>
              <p>First Name: {userData.firstName}</p>
              <p>Last Name: {userData.lastName}</p>
              <p>Email: {userData.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}

          <Button
            onClick={handleLogout}
            text="Logout"
          />

        </div>
      </div>
    </div>
  );
};

export default Profile;
