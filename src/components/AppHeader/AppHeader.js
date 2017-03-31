import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="app-header">
        <AppBar
          title="Magic"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={280}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title=""
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Link to="/" onTouchTap={this.handleClose}><MenuItem>Home</MenuItem></Link>
          <Link to="/about" onTouchTap={this.handleClose}><MenuItem>About</MenuItem></Link>
        </Drawer>
      </div>
    );

  }
}

export default AppHeader;
