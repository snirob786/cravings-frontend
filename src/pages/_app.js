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
            },
            Menu: {
              itemSelectedColor: "#255b65",
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
