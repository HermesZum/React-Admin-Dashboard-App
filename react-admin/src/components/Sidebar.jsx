import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from '../data/dummy';
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const activeLink = 'sidebarLinkActive';
    const normalLink = 'sidebarLinkNormal';
    return (
        <div className={ 'ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto' } >
            { activeMenu && (
                <>
                    <div className="sidebarNav">
                        <Link to={ '/' } onClick={ () => setActiveMenu(false) } className={ 'sidebarLinks' } >
                            <SiShopware className={ 'sidebarIcon' } />
                                Shoppe
                        </Link>
                        <TooltipComponent content={'Menu'} position={'BottomCenter'} >
                            <button
                                type={'button'}
                                onClick={ () => setActiveMenu((prevActiveMenu) => !prevActiveMenu) }
                                className={'sidebarCloseButton'}
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className={'mt-10'}>
                        { links.map((item) => (
                            <div key={item.title}>
                                <p className={'m-3 mt-4 text-gray-400 uppercase'}>{ item.title }</p>
                                { item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={ () => {} }
                                        className={({ isActive }) => { return isActive ? activeLink : normalLink; }}
                                    >
                                        { link.icon }
                                        <span className={'capitalize'}>{ link.name }</span>
                                    </NavLink>
                                )) }
                            </div>
                        ))}

                    </div>
                </> )
            }
        </div>
    );
};

export default Sidebar;
