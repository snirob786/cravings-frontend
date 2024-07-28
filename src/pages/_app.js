import { persistedStore, store } from "@/redux/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#255b65",
              colorPrimaryHover: "#1F525B",
              colorPrimaryActive: "#1F525B",
            },
            Menu: {
              itemSelectedColor: "#255b65",
            },
            Tabs: {
              inkBarColor: "#255b65",
              itemSelectedColor: "#255b65",
              itemHoverColor: "#1F525B",
            },
          },
        }}
      >
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
