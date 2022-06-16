/* Importing the `useEffect` hook from the `react` package. */
import React, { useEffect } from 'react';
/* Importing the `BrowserRouter`, `Routes`, and `Route` components from the `react-router-dom` package. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Importing the `FiSettings` icon from the `react-icons/fi` package. */
import { FiSettings } from 'react-icons/fi';
/* Importing the Tooltip and TooltipComponent from the @syncfusion/ej2-react-popups package. */
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";
/* Importing the CSS file. */
import './App.css';

/**
 * App Component is the main component in React which acts as a container for all other components.
 * @returns A React component
 */
const App = () => {
    /* A variable that is used to determine whether the sidebar is active or not. */
    const activeMenu = false;
    return (
        <div>
            <BrowserRouter>
                <div className={ 'appContainer' }>
                    <div className={ 'tooltipContainer' } style={ { zIndex: '1000' } }>
                        <TooltipComponent content={ 'Settings' } position={ 'Top' }>
                            <button
                                type={ 'button' }
                                className={ 'settingsButton' }
                                style={ { background: 'blue', borderRadius: '50%' } }
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
                                Sidebar
                            </div>
                        )
                        :
                        (
                            <div className={ 'sidebarContainerDisabled' }>
                                Sidebar
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
                            Navbar
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */ }
                            <Route path="/" element={ <div>ECommerce</div> }/>
                            <Route path="/ecommerce" element={ <div>ECommerce</div> }/>

                            {/* Pages */ }
                            <Route path="/orders" element={ <div>Orders</div> }/>
                            <Route path="/employees" element={ <div>Employees</div> }/>
                            <Route path="/customers" element={ <div>Customers</div> }/>

                            {/* Apps */ }
                            <Route path="/calendar" element={ <div>Calendar</div> }/>
                            <Route path="/kanban" element={ <div>Kanban</div> }/>
                            <Route path="/editor" element={ <div>Editor</div> }/>
                            <Route path="/color-picker" element={ <div>Color-Picker</div> }/>

                            {/* Charts */ }
                            <Route path="/line" element={ <div>Line</div> }/>
                            <Route path="/area" element={ <div>Area</div> }/>
                            <Route path="/bar" element={ <div>Bar</div> }/>
                            <Route path="/pie" element={ <div>Pie</div> }/>
                            <Route path="/financial" element={ <div>Financial</div> }/>
                            <Route path="/color-mapping" element={ <div>Color-Mapping</div> }/>
                            <Route path="/pyramid" element={ <div>Pyramid</div> }/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
