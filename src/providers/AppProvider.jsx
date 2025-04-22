import { HeadProvider } from "react-head";
import { Provider } from "react-redux";
import store from "../redux/store";
import CollapseProvider from "./CollapseProvider";
import { ThemeProvider } from "@material-tailwind/react";
import customTheme from "../theme/customTheme";
import { Suspense } from "react";

const AppProvider = ({
    children
}) => {
    return <>
        <Provider store={store}>
            <CollapseProvider>
                <HeadProvider>
                    <ThemeProvider value={customTheme}>
                        <Suspense fallback={<h2>Loading...</h2>}>
                            {children}
                        </Suspense>
                    </ThemeProvider>
                </HeadProvider>
            </CollapseProvider>
        </Provider>
    </>
}

export default AppProvider;