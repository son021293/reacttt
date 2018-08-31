import React, {Fragment} from "react";
import {Header} from "./Header";

export class Layout extends React.Component {
    render () {
        const {title, leftAction, children} = this.props;

        return (
            <Fragment>
                <Header {...{title, leftAction}}/>
                {children}
            </Fragment>
        )
    }
}
