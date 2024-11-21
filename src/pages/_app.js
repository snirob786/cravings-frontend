import { persistedStore, store } from "@/redux/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Themeing } from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ConfigProvider theme={Themeing}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default App;
