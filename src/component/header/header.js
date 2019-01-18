import React, { Component } from "react";
import './header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'

const styles = theme => ( {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        margin: 10,
        width: '8rem',
        height: 'auto',
        borderRadius:'0',
    },
    textlogin: {
        textTransform: 'none',
        color:'#707070',
    },
    bigAvatar: {
        margin: 10,
        width: 40,
        height: 40,
        border:'4px solid #ffffff'
    },
    bigAvatar1: {
        margin: 10,
        width: 15,
        height: 5,
        borderRadius: '0',
        cursor:'pointer'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    imgres:{
        width:'100%',
        height:'auto'
    },
    margin:{margin:10},
    color:{
        color:'#707070',
    }
});

class Header extends Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl, } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const ITEM_HEIGHT = 60;

        const renderMenu = (
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 250,
                    borderTop:'2px solid blue',
                    borderRadius:0,
                    marginTop:52
                },
            }}
          >
              <MenuItem component={Link} to="/testlist"  onClick={this.handleMenuClose}><Grid container justify="flex-start" alignItems="center" item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.margin}><img src="/assets/add.svg" alt="test"  className={classes.imgres}/></Grid><Typography variant="caption" className={classes.color}>New Test</Typography></MenuItem>
              <MenuItem component={Link} to="/profile" onClick={this.handleMenuClose}><Grid container justify="flex-start" alignItems="center" item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.margin}><img src="/assets/profile.svg" alt="test"  className={classes.imgres}/></Grid><Typography variant="caption" className={classes.color}>My Profile</Typography></MenuItem>
              <MenuItem component={Link} to="/message" onClick={this.handleMenuClose}><Grid container justify="flex-start" alignItems="center" item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.margin}><img src="/assets/msg.svg" alt="test"  className={classes.imgres}/></Grid><Typography variant="caption" className={classes.color}>Messages</Typography></MenuItem>
              <MenuItem component={Link} to="/setting" onClick={this.handleMenuClose}><Grid container justify="flex-start" alignItems="center" item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.margin}><img src="/assets/setting.svg" alt="test"  className={classes.imgres}/></Grid><Typography variant="caption" className={classes.color}>Settings</Typography></MenuItem>
              <MenuItem component={Link} to="/login" onClick={this.handleMenuClose}><Grid container justify="flex-start" alignItems="center" item xl={1} lg={1} md={1} sm={1} xs={1} className={classes.margin}><img src="/assets/logout.svg" alt="test"  className={classes.imgres}/></Grid><Typography variant="caption" className={classes.color}>Logout</Typography></MenuItem>
          </Menu>
        );

        return (
          <div className={classes.root}>
              <AppBar position="static" color="default">
                  <Toolbar>
                      {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>*/}
                      <Typography variant="h6" color="default" className={classes.grow}>
                          <Grid container justify="flex-start" alignItems="center">
                              <Avatar alt="LOGO" src="/assets/logo.svg" className={classes.avatar} />
                          </Grid>
                      </Typography>
                      <Grid container justify="flex-end" alignItems="center">
                          <Avatar alt="lrpfileimg" src="/assets/ankit verma.jpg" className={classes.bigAvatar} />
                          <Typography variant="button" className={classes.textlogin}>Ankit Verma</Typography>
                          <Avatar alt="profileimg" src="/assets/dropdown.svg" className={classes.bigAvatar1} onClick={this.handleProfileMenuOpen} />
                      </Grid>
                  </Toolbar>
              </AppBar>
              {renderMenu}
          </div>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);