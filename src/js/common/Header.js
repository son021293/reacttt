import React from "react";
import {css} from "emotion";

let header = css`
    height: 50px;
    background: black;
    color: #fff;
    line-height: 50px;
    position: relative;
    text-align: center;
    
    .left {
        position: absolute;
        left: 10px;
        cursor: pointer;
        
        .material-icons {
            position: relative;
            top: 3px;
            font-size: 18px;
        }
    }
`;

export class Header extends React.Component {
    render () {
        const {title, leftAction} = this.props;

        return (
            <div className={header}>
                {leftAction && (
                    <div className="left" onClick={() => leftAction()}>
                        <i className="material-icons">arrow_back_ios</i>
                        Back
                    </div>
                )}

                <div>
                    {title}
                </div>
            </div>
        )
    }
}
