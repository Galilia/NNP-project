import { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import { Counter } from "./components/Counter";
import { useTheme } from "./theme/useTheme";
import { cls } from "./helpers/classNames/classNames";
import './styles/index.scss';
import './index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cls('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>         
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />}/>
                        <Route path={'/'} element={<MainPageAsync />}/>
                    </Routes>
                </Suspense>
            <Counter />
        </div>
    );
}

export default App;