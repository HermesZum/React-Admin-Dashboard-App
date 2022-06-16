/* Importing the `useEffect` hook from the `react` package. */
import React, { useEffect } from 'react';
/* Importing the `BrowserRouter`, `Routes`, and `Route` components from the `react-router-dom` package. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Importing the `FiSettings` icon from the `react-icons/fi` package. */
import { FiSettings } from 'react-icons/fi';
/* Importing the Tooltip and TooltipComponent from the @syncfusion/ej2-react-popups package. */
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";
/* Importing the `Navbar`, `Footer`, `Sidebar`, and `ThemeSettings` components from the `./components` directory. */
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
/* Importing the components from the `pages` directory. */
import {
    Ecommerce,
    Orders,
    Employees,
    Customers,
    Kanban,
    Editor,
    Calendar,
    ColorPicker,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorMapping,
    Pyramid,
    Stacked
} from "./pages";
/* Importing the `useStateContext` hook from the `ContextProvider` component. */
import { useStateContext} from "./context/ContextProvider";
/* Importing the CSS file. */
import './App.css';

/**
 * App Component is the main component in React which acts as a container for all other components.
 * @returns A React component
 */
const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className={ 'appContainer' }>
                    <div className={ 'tooltipContainer' } style={ { zIndex : '1000' } }>
                        <TooltipComponent content={ 'Settings' } position={ 'Top' }>
                            <button
                                type={ 'button' }
                                className={ 'settingsButton' }
                                style={ { background : 'blue', borderRadius : '50%' } }
                            >
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* A ternary operator. */ }
                    { activeMenu
                      ?
                      (
                          <div className={ 'sidebar sidebarContainer' }>
                              <Sidebar/>
                          </div>
                      )
                      :
                      (
                          <div className={ 'sidebarContainerDisabled' }>
                              <Sidebar/>
                          </div>
                      )
                    }
                    <div className={
                        `bg-main-bg min-h-screen w-full dark:bg-main-dark-bg
                            ${ activeMenu
                               ? 'md:ml-72'
                               : 'flex-2'
                        }`
                    }
                    >
                        <div className={ 'navbar navbarContainer' }>
                            <Navbar/>
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */ }
                            <Route path="/" element={ <Ecommerce/> }/>
                            <Route path="/ecommerce" element={ <Ecommerce/> }/>

                            {/* Pages */ }
                            <Route path="/orders" element={ <Orders/> }/>
                            <Route path="/employees" element={ <Employees/> }/>
                            <Route path="/customers" element={ <Customers/> }/>

                            {/* Apps */ }
                            <Route path="/calendar" element={ <Calendar/> }/>
                            <Route path="/kanban" element={ <Kanban/> }/>
                            <Route path="/editor" element={ <Editor/> }/>
                            <Route path="/color-picker" element={ <ColorPicker/> }/>

                            {/* Charts */ }
                            <Route path="/line" element={ <Line/> }/>
                            <Route path="/area" element={ <Area/> }/>
                            <Route path="/bar" element={ <Bar/> }/>
                            <Route path="/pie" element={ <Pie/> }/>
                            <Route path="/financial" element={ <Financial/> }/>
                            <Route path="/color-mapping" element={ <ColorMapping/> }/>
                            <Route path="/pyramid" element={ <Pyramid/> }/>
                            <Route path="/pyramid" element={ <Stacked/> }/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
