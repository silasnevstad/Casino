import React from 'react';

function Controls({ gameStage, hasPair, handleDealClick, handleHitClick, handleStandClick, handleDoubleClick, handleSplitClick, handleResetClick }) {
    return (
        <div className="controls">
        {gameStage === 'ready' && (
            <button className="btn btn-primary" onClick={handleDealClick}>
                Deal
            </button>
        )}
        {gameStage === 'inProgress' && (
            <>
                <button className="btn btn-primary btn-hit" onClick={handleHitClick}>
                    Hit
                </button>
                <button className="btn btn-primary btn-stand" onClick={handleStandClick}>
                    Stand
                </button>
                <button className="btn btn-primary btn-double" onClick={handleDoubleClick}>
                    Double
                </button>
            </>
        )}
        {gameStage === 'inProgress' && hasPair && (
            <button className="btn btn-primary btn-split" onClick={handleSplitClick}>
                Split
            </button>
        )}
        {gameStage === 'result' && (
            <>
                <button className="btn btn-secondary" onClick={handleResetClick}>
                    <span class="text">Reset</span>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                    </span>
                </button>


            </>
        )}
        </div>
    );
}

export default Controls;
