import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import LoginForm from './components/LoginForm';
import InfoCard from './components/InfoCard';

export default function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {userInfo ? (
        <InfoCard user={userInfo} />
      ) : (
        <LoginForm onSubmit={setUserInfo} />
      )}
    </SafeAreaView>
  );
}
