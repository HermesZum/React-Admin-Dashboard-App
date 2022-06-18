/* It's importing the `useEffect` hook from the `react` library. */
import React, { useEffect } from 'react';
/* It's importing the `AiOutlineMenu` component from the `react-icons/ai` library. */
import { AiOutlineMenu } from "react-icons/ai";
/* It's importing the `FiShoppingCart` component from the `react-icons/fi` library. */
import { FiShoppingCart } from "react-icons/fi";
/* It's importing the `BsChatLeft` component from the `react-icons/bs` library. */
import { BsChatLeft } from "react-icons/bs";
/* It's importing the `RiNotification3Line` component from the `react-icons/ri` library. */
import { RiNotification3Line } from "react-icons/ri";
/* It's importing the `MdKeyboardArrowDown` component from the `react-icons/md` library. */
import { MdKeyboardArrowDown } from "react-icons/md";
/* It's importing the `TooltipComponent` component from the `@syncfusion/ej2-react-popups` library. */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
/* It's importing the avatar image from the `data` folder. */
import avatar from '../data/avatar.jpg';
/* It's importing the `Cart`, `Chat`, `Notification`, and `UserProfile` components from the `./index.js` file. */
import { Cart, Chat, Notification, UserProfile } from '.';
/* It's importing the `useStateContext` hook from the `../context/ContextProvider` file. */
import { useStateContext } from '../context/ContextProvider';

/**
 * It's a button that has a tooltip, and when you click it, it runs a function
 */
const NavButton = ( { title, customFunc, icon, color, dotColor } ) => (
    <TooltipComponent content={ title } position={ 'BottomCenter' }>
        <button
            type={ 'button' }
            onClick={ customFunc } style={ { color } }
            className={ 'relative text-xl rounded-full p-3 hover:bg-light-gray' }
        >
            <span
                style={ { background : dotColor } }
                className={ 'absolute inline-flex rounded-full h-2 w-2 right-2 top-2' }
            >
                { icon }
            </span>
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    /* Destructuring the state and functions from the context provider. */
    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
    } = useStateContext();
    /* A hook that is used to detect the screen size. */
    useEffect( () => {
        const handleResize = () => setScreenSize( window.innerWidth );
        window.addEventListener( 'resize', handleResize );
        handleResize();
        return () => window.removeEventListener( 'resize', handleResize );
    }, [] );
    /* It's a hook that is used to detect the screen size. */
    useEffect( () => {
        if ( screenSize <= 900 ) {
            setActiveMenu( false );
        }
        else {
            setActiveMenu( true );
        }
    }, [ screenSize ] );


    return (
        <div className={ 'relative flex justify-between p-2 md:mx-6' }>
            <NavButton
                title={ 'Menu' }
                customFunc={ () => setActiveMenu( ( prevActiveMenu ) => !prevActiveMenu ) }
                color={ 'blue' }
                icon={ <AiOutlineMenu/> }
            />
            <div className={ 'flex' }>
                <NavButton
                    title={ 'Cart' }
                    customFunc={ () => handleClick( 'cart' ) }
                    color={ 'blue' }
                    icon={ <FiShoppingCart/> }
                />
                <NavButton
                    title={ 'Chat' }
                    dotColor={ '#03C9D7' }
                    customFunc={ () => handleClick( 'chat' ) }
                    color={ 'blue' }
                    icon={ <BsChatLeft/> }
                />
                <NavButton
                    title={ 'Notifications' }
                    dotColor={ '#03C9D7' }
                    customFunc={ () => handleClick( 'notification' ) }
                    color={ 'blue' }
                    icon={ <RiNotification3Line/> }
                />
                <TooltipComponent
                    content={ 'Profile' }
                    position={ 'BottomCenter' }
                >
                    <div
                        className={ 'flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-light-gray' }
                        onClick={ () => handleClick( 'userProfile' ) }
                    >
                        <img src={ avatar } alt={ 'avatar' } className={ 'rounded-full h-8 w-8' }/>
                        <p>
                            <span className={ 'text-gray-400 text-14' }>
                                Hi,
                            </span>
                            { ' ' }
                            <span className={ 'text-gray-400 font-bold ml-1 text-14' }>
                                John Doe
                            </span>
                        </p>
                        <MdKeyboardArrowDown className={ 'text-gray-400 text-14' }/>
                    </div>
                </TooltipComponent>
                { isClicked.cart && <Cart/> }
                { isClicked.chat && <Chat/> }
                { isClicked.notification && <Notification/> }
                { isClicked.user && <userProfile/> }
            </div>
        </div>
    );
};

export default Navbar;
