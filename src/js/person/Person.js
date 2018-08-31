import React from "react";
import {usersApi} from "../api/users-api";
import {css} from "emotion";
import {Layout} from "../common/Layout";

let personCss = css`
    display: flex;
    align-items: center;
    
    .avatar {
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    
    .info {
        margin-left: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
        flex: 1;
        
        .name {
            font-size: 18px;
        }
            
        .location {
            font-size: 13px;
            color: #ccc;
            padding: 5px 0;
        }
    }
`;

export class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        };
    }

    componentDidMount() {
        usersApi.getDetail(this.props.match.params.username).then(person => this.setState({person}));
    }

    render () {
        const {person} = this.state;
        const {history} = this.props;

        if(person == null) return <div/>;

        return (
            <Layout title="Person" leftAction={() => history.push(`/`)}>
                <div className={`page-padding ${personCss}`}>
                    <div className="avatar">
                        <img src={person.avatar_url}/>
                    </div>

                    <div className="info">
                        <div className="name">
                            {person.name}
                        </div>
                        <div className="location">
                            {person.location}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
