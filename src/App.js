import Routes from '@components/Routes';
import { ContextProvider } from '@components/Context';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Routes />
      </ContextProvider>
    </>
  );
}
