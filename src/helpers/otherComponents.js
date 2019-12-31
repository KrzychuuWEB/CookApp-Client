import React from "react";
import ScrollToTop from "react-router-scroll-top";
import GlobalInterceptorHandler from "./api/interceptors/requestAndResponseInterceptor";

const OtherComponents = ({ children }) => {
    return (
        <GlobalInterceptorHandler>
            <ScrollToTop>
                { children }
            </ScrollToTop>
        </GlobalInterceptorHandler>
    );
};

export default OtherComponents;