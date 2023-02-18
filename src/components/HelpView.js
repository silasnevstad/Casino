import React, { useState } from 'react';

function HelpView({ handleHelpButton }) {
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };



    return (
        // <div className="help-button-container">
        //     <button className="help-button" onClick={handleHelpButton}>?</button>
        // </div>
        <div className="help-button-container">
            {/* {!showTable && (
                <button className="help-button" onClick={toggleTable}>
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                </button>)} */}
            <button className={showTable ? "help-button right" : "help-button"} onClick={toggleTable}>
                <span class={showTable ? "circleRight" : "circle"} aria-hidden="true">
                    <span class={showTable ? "icon arrowRight" : "icon arrow"}></span>
                </span>
                <span class={showTable ? "button-text-right" : "button-text"}> {!showTable ? "Learn more" : "Close"} </span>
            </button>
            {showTable && (
                <table>
                    <thead>
                        <tr>
                            <th></th> <th>2</th> <th>3</th> <th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>9</th> <th>10</th> <th>A</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="td-info">17+</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td>
                        </tr>
                        <tr>
                            <td id="td-info">16</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">15</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">14</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">13</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">12</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">11</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">10</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">9</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">8</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-double">D</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">5-7</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A8-A10</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 7</td>  <td id="td-stand">S</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-stand">S</td>  <td id="td-stand">S</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 6</td>  <td id="td-stand">S</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 5</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 4</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 3</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">A, 2</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-double">D</td>  <td id="td-double">D</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>  <td id="td-hit">H</td>
                        </tr>

                        <tr>
                            <td id="td-info">A-A</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td>
                        </tr>
                        <tr>
                            <td id="td-info">10-10</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td> <td id="td-stand">S</td>
                        </tr>
                        <tr>
                            <td id="td-info">9-9</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-stand">S</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-stand">S</td> <td id="td-stand">S</td>
                        </tr>
                        <tr>
                            <td id="td-info">8-8</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td>
                        </tr>
                        <tr>
                            <td id="td-info">7-7</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">6-6</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">5-5</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-double">D</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">4-4</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">3-3</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                        <tr>
                            <td id="td-info">2-2</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-split">P</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td> <td id="td-hit">H</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>

    );
}

{/* 
              
            )}
        </div>

    );
} */}

export default HelpView;