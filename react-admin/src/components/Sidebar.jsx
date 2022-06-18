/* Importing the React library from the node_modules folder. */
import React from 'react';
/* Importing the Link and NavLink components from the react-router-dom library. */
import { Link, NavLink } from 'react-router-dom';
/* Importing the SiShopware icon from the react-icons/si library. */
import { SiShopware } from 'react-icons/si';
/* Importing the MdOutlineCancel icon from the react-icons/md library. */
import { MdOutlineCancel } from 'react-icons/md';
/* Importing the TooltipComponent from the Syncfusion library. */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
/* Importing the links array from the dummy.js file. */
import { links } from '../data/dummy';
/* Importing the useStateContext hook from the ContextProvider.js file. */
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
    /* Destructuring the activeMenu and setActiveMenu variables from the useStateContext hook. */
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    /**
     * If the activeMenu state is true and
     * the screenSize is less than or equal to 900,
     * then set the activeMenu state to false
     */
    const handleCloseSidebar = () => {
        if ( activeMenu && screenSize <= 900 ) {
            setActiveMenu( false );
        }
    }
    /* Defining a constant variable called activeLink and assigning it the value of 'sidebarLinkActive'. */
    const activeLink = 'sidebarLinkActive';
    /* Defining a constant variable called normalLink and assigning it the value of 'sidebarLinkNormal'. */
    const normalLink = 'sidebarLinkNormal';

    return (
        <div className={ 'ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto' }>
            { activeMenu && (
                <>
                    <div className="sidebarNav">
                        <Link to={ '/' } onClick={ handleCloseSidebar } className={ 'sidebarLinks' }>
                            <SiShopware className={ 'sidebarIcon' }/>
                            3Gear
                        </Link>
                        <TooltipComponent content={ 'Menu' } position={ 'BottomCenter' }>
                            <button
                                type={ 'button' }
                                onClick={ () => setActiveMenu( ( prevActiveMenu ) => !prevActiveMenu ) }
                                className={ 'sidebarCloseButton' }
                            >
                                <MdOutlineCancel/>
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className={ 'mt-10' }>
                        { links.map( ( item ) => (
                            <div key={ item.title }>
                                <p className={ 'm-3 mt-4 text-gray-400 uppercase' }>{ item.title }</p>
                                { item.links.map( ( link ) => (
                                    <NavLink
                                        to={ `/${ link.name }` }
                                        key={ link.name }
                                        onClick={ handleCloseSidebar }
                                        className={ ( { isActive } ) => ( isActive ? activeLink : normalLink ) }
                                    >
                                        { link.icon }
                                        <span className={ 'capitalize' }>{ link.name }</span>
                                    </NavLink>
                                ) ) }
                            </div>
                        ) ) }

                    </div>
                </> )
            }
        </div>
    );
};

export default Sidebar;
