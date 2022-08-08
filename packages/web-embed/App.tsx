/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';

// import { Provider } from '@onekeyhq/kit';

import BigNumber from 'bignumber.js';
import {
  HashRouter, // HashRouter BrowserRouter
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { Box, Provider } from '@onekeyhq/components';
import { wait } from '@onekeyhq/kit/src/utils/helper';
import { ONBOARDING_WEBVIEW_METHODS } from '@onekeyhq/kit/src/views/Onboarding/screens/CreateWallet/BehindTheScene/consts';
import ProcessAutoTyping, {
  IProcessAutoTypingRef,
} from '@onekeyhq/kit/src/views/Onboarding/screens/CreateWallet/BehindTheScene/ProcessAutoTyping';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
// css should be imported at last
import '@onekeyhq/shared/src/web/index.css';

import type { IJsonRpcRequest } from '@onekeyfe/cross-inpage-provider-types';

function useRouteQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RootLayout(props: any) {
  return <div {...props} />;
}

function Home() {
  return (
    <div>
      Hello world,
      <ul>
        <li>
          <Link to="/abc">to ABC</Link>
        </li>
        <li>
          <Link to="/onboarding/auto_typing">to Auto-typing</Link>
        </li>
      </ul>
    </div>
  );
}

function HomeAbc() {
  return (
    <div>
      ABC
      <div>
        <Link to="/">Back home</Link>
      </div>
    </div>
  );
}

function OnboardingAutoTyping() {
  const query = useRouteQuery();
  const typingRef = useRef<IProcessAutoTypingRef | null>(null);
  if (platformEnv.isDev) {
    // @ts-ignore
    window.$onboardingAutoTypingRef = typingRef;
  }
  useEffect(() => {
    if (!window.$onekey) {
      return;
    }
    const handler = (payload: IJsonRpcRequest) => {
      if (
        payload &&
        payload.method === ONBOARDING_WEBVIEW_METHODS.onboardingWalletCreated
      ) {
        typingRef.current?.handleWalletCreated();
      }
    };
    window.$onekey.$private.on('message_low_level', handler);
    return () => {
      window.$onekey.$private.off('message_low_level', handler);
    };
  }, []);
  const onPressFinished = useCallback(async () => {
    try {
      await window.$onekey.$private.request({
        method: ONBOARDING_WEBVIEW_METHODS.onboardingPressFinishButton,
      });
      await wait(3000);
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
    return Promise.resolve();
  }, []);
  const pausedProcessIndex = useMemo(() => {
    const index = query.get('pausedProcessIndex');
    const indexBN = new BigNumber(index ?? '');
    if (indexBN.isNaN()) {
      return 1;
    }
    return indexBN.toNumber();
  }, [query]);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={() => {
        if (platformEnv.isDev) {
          typingRef.current?.handleWalletCreated();
        }
      }}
      id="WebOnboardingAutoTypingContainer"
      style={{ overflow: 'auto' }}
    >
      <Box minH="100vh" justifyContent="center">
        <ProcessAutoTyping
          ref={typingRef}
          minHeight={0}
          pausedProcessIndex={pausedProcessIndex}
          onPressFinished={onPressFinished}
        />
      </Box>
    </div>
  );
}

// @ts-ignore
const appSettings = window.WEB_EMBED_ONEKEY_APP_SETTINGS || {
  themeVariant: 'light',
  localeVariant: 'en-US',
  enableHaptics: true,
};

const App: FC = function () {
  return (
    <Provider
      themeVariant={appSettings.themeVariant}
      locale={appSettings.localeVariant}
      hapticsEnabled={appSettings.enableHaptics}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<HomeAbc />} />
          <Route
            path="/onboarding/auto_typing"
            element={<OnboardingAutoTyping />}
          />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default App;
