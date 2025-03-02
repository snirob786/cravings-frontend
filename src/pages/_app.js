import { persistedStore, store } from "@/redux/store";
import "@/styles/globals.css";
import "@/assets/css/style.css";
import "@/assets/css/icons.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Themeing } from "../theme";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   // Initialize the ThemeCustomizer when the component mounts
  //   new ThemeCustomizer().init();
  // }, []);
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
