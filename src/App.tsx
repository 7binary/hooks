import React from 'react';
import { Container } from '@material-ui/core';

import { UserProvider } from './context/user-context';
// import UseCallbackWidget from './components/UseCallbackWidget';
// import UseMemoWidget from './components/UseMemoWidget';
// import UserWidget from './components/UserWidget';
import UseInputWidget from './components/UseInputWidget';
// import UseStateWidget from './components/UseStateWidget';
// import UseEffectWidget from './components/UseEffectWidget';
// import TestStateWidget from './components/TestStateWidget';
// import UseRefWidget from './components/UseRefWidget';

function App() {
  return (
    <UserProvider>
      <Container maxWidth="sm">
        <UseInputWidget/>
        {/*<UseCallbackWidget/>*/}
        {/*<UseMemoWidget/>*/}
        {/*<UseRefWidget/>*/}
        {/*<UseEffectWidget/>*/}
        {/*<UseStateWidget/>*/}
        {/*<TestStateWidget/>*/}
        {/*<UserWidget/>*/}
      </Container>
    </UserProvider>
  );
}

export default App;
