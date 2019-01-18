import React, { Component } from "react";
import './profile.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Personal from '../profile/personal/personal'
import Password from '../profile/password/password'
import Contact from '../profile/contact/contact'
import Subscription from '../profile/subscription/subscription'
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
  },
  button: {
    margin: 0,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 24px',
    color:'#ffff',
    textTransform:'none',

  },
  paper:{
    paddingLeft: theme.spacing.unit * 0,
    paddingRight: theme.spacing.unit * 0,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit ,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#e5e6e878',
    borderTop:'2px solid #257CBF',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper1:{
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit ,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#E5E6E8',
    borderTop:'2px solid #257CBF',
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper2:{
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#ffffff',
    boxShadow: 'none',
    tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  paper3:{
    paddingTop: 0,
    paddingBottom: 0,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#ffffff',
    boxShadow: 'none',
    tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  paper4:{
    paddingTop: 0,
    paddingBottom: 0,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#F3F3F3',
    boxShadow: 'none',
    tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },

  paddinglr:{
    paddingLeft:theme.spacing.unit * 2,
    paddingRight:theme.spacing.unit * 2
  },
  colr:{
    color:'#257CBF'
  },
  color:{
    color:'#707070'
  },
  Margin:{
    marginTop:theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  Margin1:{
    marginTop:0,
    marginBottom: theme.spacing.unit * 2
  },
  Margin2:{
    marginTop:theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
  Margin3:{
    marginTop:theme.spacing.unit * 4,
    marginBottom: 0
  },
  imgresponsive:{
    width:'80%',
    height:'auto'
  },
  imgres:{
    width:'100%',
    height:'auto'
  },
  imgres1:{
    width:'100%',
    height:'auto',
    borderRadius:'100%',
    backgroundColor:'#ffffff'
  },
  imgres2:{
    width:'48%',
    height:'auto',
  },
  margin24:{
    marginTop:theme.spacing.unit * 3
  },
  margintop8:{
    marginTop:theme.spacing.unit
  },
  paddingleft24:{
    paddingLeft:theme.spacing.unit * 6
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    width:'100%'
  },
  tabsIndicator: {
    backgroundColor: '#257CBF',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit ,
    color: '#6B7678',
    '&:hover': {
      color: '#878787',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#6B7678',
      backgroundColor:'transparent',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#6B7678',
    },
  },
  tabSelected: {},
  appbar:{
    boxShadow:'none',
    backgroundColor:'#ffffff',
    borderRadius:'0'
  },
  startButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 25px',
    minHeight:'30px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#084472',
      borderColor: '#084472',
    },
  },
  marginbtm:{
    marginBottom:theme.spacing.unit,
  },
  marginlr:{
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  paddinglft:{paddingLeft:theme.spacing.unit * 2},
  bigAvatar: {
    margin: 2,
    width: '100%',
    height: 'auto',
    border:'3px solid #E8D7D7'
  },
  listpaddding:{
    paddingLeft:theme.spacing.unit * 4,
    paddingRight:theme.spacing.unit * 4,
  },
  divider:{backgroundColor:'rgba(166, 163, 163, 0.12)'},
  listborder:{backgroundColor:'#E5E6E8',borderLeft:'2px solid #37774B'}

});

class Profile extends Component {
  constructor(props) {
    super(props);
    document.title = 'Profile';
    this.state = {
      value: 0,
    };
    switch (this.props.location.pathname) {
      case '/profile/personal':
        this.state = {value: 0};
        break;
      case '/profile/contact':
        this.state = {value: 1};
        break;
      case '/profile/subscription':
        this.state = {value: 2};
        break;
      case '/profile/password':
        this.state = {value: 3};
        break;
      default:
        this.state = {value: 0};
        break;
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="profile">
        <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} spacing={16} className={classes.paddinglft} >
          <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
            <Paper className={classes.paper1}>
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <Typography  className={classes.color} gutterBottom>PROFILE</Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={9} md={8} sm={8} xl={8}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12}>
                <Grid container direction="row" justify="flex-start" alignItems="center" >
                  <Typography  className={classes.colr} gutterBottom>Profile</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <div >
          <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} spacing={16} className={classes.paddinglft}>
            <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3} className={classes.Margin1} style={{paddingTop:'0'}}>
              <Paper className={classes.paper3}>
                <Grid container direction="row"  justify="flex-start" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin2}>
                  <Grid container direction="row"  justify="flex-start" alignItems="center" item xs={2} lg={12} md={12} sm={12} xl={12}>
                    <Grid container justify="flex-start" alignItems="center" item xs={2} lg={4} md={4} sm={2} xl={3}>
                      <Avatar className={classes.bigAvatar}><img src="/assets/ankit verma.jpg" className={classes.imgres} alt="img"/></Avatar>
                    </Grid>
                    <Grid container direction="column" justify="flex-end" alignItems="flex-start" item xs={2} lg={7} md={8} sm={10} xl={7} className={classes.paddingleft24}>
                      <Typography variant="button"  className={classes.color} gutterBottom>Jesica Jocie</Typography>
                      <Typography  className={classes.color} gutterBottom>Starter</Typography>
                      <Button className={classes.startButton} component={Link} to="/plans">Upgrade</Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container direction="row"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin3}>
                  <Paper className={classes.paper4}>
                  <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.marginbtm} >
                    <List component="nav" style={{width:'100%',paddingTop:'0',paddingBottom:'0'}}>
                      <ListItem className={`${classes.listpaddding} ${classes.listborder}`} component={Link} to="/profile">
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}><img src="/assets/profile.svg" alt="svg" className={classes.imgres}/></Grid>
                        <ListItemText><Typography variant="caption" className={classes.color}>PROFILE</Typography></ListItemText>
                      </ListItem>
                      <Divider className={classes.divider}/>
                      <ListItem component={Link} to="/mytest" className={classes.listpaddding}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}><img src="/assets/profile.svg" alt="svg" className={classes.imgres}/></Grid>
                        <ListItemText><Typography variant="caption" className={classes.color}>MY TESTS</Typography></ListItemText>
                      </ListItem>
                      <Divider className={classes.divider}/>
                      <ListItem component={Link} to="/analytics" className={classes.listpaddding}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}><img src="/assets/profile.svg" alt="svg" className={classes.imgres}/></Grid>
                        <ListItemText><Typography variant="caption" className={classes.color}>ANALYTICS</Typography></ListItemText>
                      </ListItem>
                      <Divider className={classes.divider}/>
                      <Divider className={classes.divider} style={{marginTop:'44px'}}/>
                      <Divider className={classes.divider} style={{marginTop:'44px'}}/>
                      <Divider className={classes.divider} style={{marginTop:'44px'}}/>
                      <Divider className={classes.divider} style={{marginTop:'44px'}}/>
                      <Divider className={classes.divider} style={{marginTop:'44px'}}/>
                    </List>
                  </Grid>
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={9} md={8} sm={8} xl={8}>
              <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={12} sm={12} xl={12} className={classes.Margin1}>
                <Paper className={classes.paper2}>
                   <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                     <AppBar position="static" color="default" className={classes.appbar}>
                       <Tabs
                         value={value}
                         onChange={this.handleChange}
                         classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                       >
                         <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Personal" component={Link} to="/profile/personal" />
                         <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Contact" component={Link} to="/profile/contact" />
                         <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Subscription" component={Link} to="/profile/subscription" />
                         <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Password" component={Link} to="/profile/password" />
                       </Tabs>
                     </AppBar>
                     <Switch>
                       <Route  path={`${this.props.match.path}/personal`} component={Personal} />
                       <Route path={`${this.props.match.path}/contact`} component={Contact} />
                       <Route path={`${this.props.match.path}/subscription`} component={Subscription} />
                       <Route path={`${this.props.match.path}/password`} component={Password} />
                       <Redirect to='/profile/personal' />
                     </Switch>
                       </Grid>
                </Paper>
              </Grid>

            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Profile);
