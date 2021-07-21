import React, { Component } from "react";
import muiThemeable from "material-ui/styles/muiThemeable";

import { Paper, Avatar } from "material-ui";

import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class HomeUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState(...this.props.Store.user[0]);
    }

    render() {
        return (
            <Paper zDepth={1} className="sidebar-component">
                <div
                    className="profile-info-banner"
                    style={{
                        backgroundColor:
                            this.props.muiTheme.palette.primary1Color,
                    }}
                ></div>
                <Avatar className="profile-avatar" size={72} />
                <div className="profile-content">
                    <center>
                        <h2 className="profile-name">
                            <b>{this.state.name}</b>
                        </h2>
                    </center>
                    <div className="profile-action">
                        <center className="profile-followers">
                            <span>Folowers</span>
                            <br />
                            <span className="profile-count">{}</span>
                        </center>
                        <center className="profile-followers">
                            <span>Following</span>
                            <br />
                            <span className="profile-count">{}</span>
                        </center>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default muiThemeable()(HomeUserProfile);
