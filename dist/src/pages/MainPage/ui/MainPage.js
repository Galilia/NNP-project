import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
var MainPage = function () {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [_jsx(BugButton, {}, void 0), t('main_page')] }, void 0));
};
export default MainPage;
