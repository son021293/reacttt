import React from "react";
import {css} from "emotion";
import {Layout} from "../common/Layout";

let home = css`
    .header {
        font-size: 40px;
        padding: 10px 0;        
    }
    
    .desc {
        font-size: 13px;
        margin: 10px 0;
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;
      
        .item {
            cursor: pointer;
            background-color: #337ab7;
            padding: 10px;
            color: #fff;
            border-radius: 3px;
            margin-bottom: 5px;
            
            &:not(:last-child) {
                margin-right: 5px;
            }
        } 
    }
`;

export class Home extends React.Component {
    render () {
        const {history} = this.props;
        return (
            <Layout title="Home">
                <div className={`page-padding ${home}`}>
                    <div className="header">
                        Top 5 GitHub Users
                    </div>
                    <div className="desc">
                        Tap the username to see more information
                    </div>

                    <div className="list">
                        { ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"].map((item, i) => (
                            <div key={i} className="item" onClick={() => history.push(`/person/${item}`)}>
                                {item}
                            </div>
                        ))}
                    </div>

                </div>
            </Layout>
        )
    }
}
