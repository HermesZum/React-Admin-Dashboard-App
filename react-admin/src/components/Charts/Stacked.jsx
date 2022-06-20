/* Importing the React library from the node_modules folder. */
import React from 'react';
/* Importing the ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category,
 StackingColumnSeries, and Tooltip from the @syncfusion/ej2-react-charts package. */
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    StackingColumnSeries,
    Tooltip
} from "@syncfusion/ej2-react-charts";
/* Importing the data from the dummy.js file. */
import {
    stackedCustomSeries,
    stackedPrimaryXAxis,
    stackedPrimaryYAxis
} from "../../data/dummy";

const Stacked = ( { width, height } ) => {
    return (
        <ChartComponent
            width={ width }
            height={ height }
            id={ 'charts' }
            primaryXAxis={ stackedPrimaryXAxis }
            primaryYAxis={ stackedPrimaryYAxis }
            chartArea={ { border : { width : 0 } } }
            tooltip={ { enable : true } }
            legendSettings={ { background: 'white' } }
        >
            <Inject services={ [
                StackingColumnSeries,
                Category,
                Tooltip,
                Legend
            ] }/>
            <SeriesCollectionDirective>
                { stackedCustomSeries.map( ( item, index ) =>
                   <SeriesDirective
                       key={ index }
                       { ...item }
                   />
                ) }
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};
/* Exporting the Stacked component so that it can be imported into other files. */
export default Stacked;
