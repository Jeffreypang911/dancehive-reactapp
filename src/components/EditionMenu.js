import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NaviLink from './NaviLink';

class EditionMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Editions
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><NaviLink to="/editions/music">Music Videos</NaviLink></MenuItem>
          <MenuItem onClick={this.handleClose}><NaviLink to="/editions/web-series">Web Series</NaviLink></MenuItem>
          <MenuItem onClick={this.handleClose}><NaviLink to="/editions/shorts">Digital Shorts</NaviLink></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default EditionMenu;