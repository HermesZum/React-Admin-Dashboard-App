/* Importing the React library. */
import React from 'react';
/* Importing the SparklineComponent, Inject, and SparklineTooltip from the ej2-react-charts package. */
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";
/**
 * It returns a SparklineComponent with a tooltip
 * @returns A SparklineComponent
 */
const SparkLine = ( { id, height, width, color, data, type, currentColor } ) => {
    return (
        <div>
            <SparklineComponent
                id={ id }
                height={ height }
                width={ width }
                lineWidth={ 1 }
                valueType={ 'Numeric' }
                fill={ color }
                border={ { color : currentColor, width : 2 } }
                dataSource={ data }
                xName={ 'xval' }
                yName={ 'yval' }
                type={ type }
                tooltipSettings={ {
                    visible : true,
                    format : '${xval}: data ${yval}',
                    trackLineSettings : { visible : true }
                } }
            >
                <Inject services={ [ SparklineTooltip ] }/>
            </SparklineComponent>
        </div>
    );
};
/* Exporting the SparkLine component. */
export default SparkLine;
