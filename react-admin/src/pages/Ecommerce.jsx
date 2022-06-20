/* Importing the React library. */
import React from 'react';
/* Importing the BsCurrencyDollar icon from the react-icons/bs library. */
import { BsCurrencyDollar } from 'react-icons/bs';
/* Importing the GoPrimitiveDot icon from the react-icons/go library. */
import { GoPrimitiveDot } from 'react-icons/go';
/* Importing the IoIosMore icon from the react-icons/io library. */
import { IoIosMore } from 'react-icons/io';
/* Importing the DropDownListComponent from the @syncfusion/ej2-react-dropdowns library. */
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
/* Importing the components from the components' folder. */
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
/* Importing the data from the dummy.js file. */
import {
    earningData,
    medicalproBranding,
    recentTransactions,
    weeklyStats,
    dropdownData,
    SparklineAreaData,
    ecomPieChartData
} from '../data/dummy';
/* Importing the useStateContext hook from the ContextProvider.js file. */
import { useStateContext } from '../context/ContextProvider';
/* Importing the product9.jpg image from the data folder. */
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
    return (
        <div className={ 'ecommercePage' }>
            <section className={ 'ecommerceContainer' }>
                <div className={ 'ecommerceContent ' }>
                    <div className={ 'ecommerceLeftInfo' }>
                        <div>
                            <p className={ 'ecommerceInfoTitle' }>Earnings</p>
                            <p className={ 'ecommerceInfoSubtitle' }>€68,448.78</p>
                        </div>
                    </div>
                    <div className={ 'ecommerceInfoButton' }>
                        <Button
                            color={ 'white' }
                            bgColor={ 'blue' }
                            text={ 'Download' }
                            borderRadius={ '10px' }
                            size={ 'md' }
                        />
                    </div>
                </div>
                <div className={ 'ecommerceCards' }>
                    { earningData.map( ( item ) => (
                        <div
                            key={ item.title }
                            className={ 'ecommerceCard' }
                        >
                            <button
                                type={ 'button' }
                                style={ { color : item.iconColor, backgroundColor : item.iconBg } }
                                className={ 'ecommerceCardIcon' }
                            >
                                { item.icon }
                            </button>
                            <p>
                                <span className={ 'ecommerceCardAmount' }>
                                    { item.amount }
                                </span>
                                {/* TODO: Fix text-${ item.pcColor } not change color to green and red. */ }
                                <span className={ `ecommerceCardPercentage text-${ item.pcColor }` }>
                                    { item.percentage }
                                </span>
                            </p>
                            <p className={ 'ecommerceCardTitle' }>
                                { item.title }
                            </p>
                        </div>
                    ) ) }
                </div>
            </section>
            <section className={ 'ecommerceGraphContainer' }>
                <div className={ 'ecommerceGraphCard' }>
                    <div className={ 'ecommerceGraphTitle' }>
                        <h2>
                            Revenue Updates
                        </h2>
                    </div>
                    <div className={ 'ecommerceGraphItems' }>
                        <div className={ 'ecommerceGraphInfo' }>
                            <div>
                                <p>
                                    <span className={ 'ecommerceGraphAmount' }>
                                        €64,677
                                    </span>
                                    <span className={ 'ecommerceGraphPercentage' }>
                                        26%
                                    </span>
                                </p>
                                <p className={ 'ecommerceGraphSubtitle text-[#2ab2a4]' }>
                                    Budget
                                </p>
                                <p className={ 'ecommerceGraphTopMargin' }>
                                    <span className={ 'ecommerceGraphAmount' }>
                                        €36,890
                                    </span>
                                </p>
                                <p className={ 'ecommerceGraphSubtitle text-[#7f7e7e]' }>
                                    Expense
                                </p>
                            </div>
                            <div className={ 'ecommerceGraphTopMargin' }>
                                <SparkLine
                                    currentColor={ 'blue' }
                                    id={ 'line-sparkline' }
                                    type={ 'Line' }
                                    height={ '80px' }
                                    width={ '250px' }
                                    data={ SparklineAreaData }
                                    color={ 'blue' }
                                />
                            </div>
                            <div className={ 'ecommerceGraphTopMargin' }>
                                <Button
                                    color={ 'white' }
                                    bgColor={ 'blue' }
                                    text={ 'Download Report' }
                                    borderRadius={ '10px' }
                                />
                            </div>
                        </div>
                        <div className={ 'ecommerceGraphInfo' }>
                            <div className={ 'ecommerceGraphStackedSubtitle' }>
                                <p className={ 'text-[#7f7e7e]' }>
                                <span>
                                    <GoPrimitiveDot/>
                                </span>
                                    <span>
                                    Expense
                                </span>
                                </p>
                                <p className={ 'text-[#2ab2a4]' }>
                                <span>
                                    <GoPrimitiveDot/>
                                </span>
                                    <span>
                                    Budget
                                </span>
                                </p>
                            </div>
                            <div>
                                <Stacked
                                    width={ '320px' }
                                    height={ '360px' }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
/* Exporting the Ecommerce component. */
export default Ecommerce;
