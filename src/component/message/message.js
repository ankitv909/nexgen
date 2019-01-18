import React, { Component } from "react";
import './message.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
  },
  paper:{
    paddingLeft: 0,
    paddingRight: 0,
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
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
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

  colr:{
    color:'#257CBF',
    textTransform:'none'
  },
  color:{
    color:'#707070',
    textTransform:'none'
  },
  Margin1:{
    marginTop:0,
    marginBottom: theme.spacing.unit * 2
  },
  Margin2:{
    marginTop:theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
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
  imgres:{width:'100%',height:'auto'},
  margintop8:{
    marginTop:theme.spacing.unit
  },
  paddingleft24:{
    paddingLeft:theme.spacing.unit * 6
  },
  appbar:{
    boxShadow:'none',
    backgroundColor:'#ffffff',
    borderRadius:'0'
  },
  deactivateButton:{
    margin:theme.spacing.unit,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 30px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#084472',
      borderColor: '#084472',
    },
  },
  cancelButton:{
    margin:theme.spacing.unit,
    backgroundColor: '#FFFFFF',
    border:'1px solid #4A88C6',
    borderRadius: 0,
    padding: '6px 40px',
    color:'#257CBF',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#257CBF',
      border:'1px solid #4A88C6',
      color:'#ffffff'
    },
  },
  submitmargin:{
    marginTop:theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
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
  margintop:{
    marginTop:theme.spacing.unit * 2
  },
  tabSelected: {},
  marginlft:{
    marginLeft: theme.spacing.unit * 13
  },
  check: {
    '&$checked': {
      color: '#257CBF',
    },
  },
  checked: {},
  listpaddding:{
    paddingLeft:theme.spacing.unit * 4,
    paddingRight:theme.spacing.unit * 4,
  },
  divider:{backgroundColor:'rgba(166, 163, 163, 0.12)'},
  listborder:{backgroundColor:'#E5E6E8',borderLeft:'2px solid #37774B'}

});

class Message extends Component {
  constructor(props) {
    super(props);
    document.title = 'Message';
    this.state = {
      checkedB: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className="message">
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
                  <Typography  className={classes.colr} gutterBottom>Message</Typography>
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
                    <Grid container direction="column" justify="flex-end" alignItems="flex-start" item xs={2} lg={7} md={8} sm={9} xl={7} className={classes.paddingleft24}>
                      <Typography variant="button"  className={classes.color} gutterBottom>Jesica Jocie</Typography>
                      <Typography  className={classes.color} gutterBottom>Starter</Typography>
                      <Button className={classes.startButton} component={Link} to="/plans">Upgrade</Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin3}>
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
            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={9} md={8} sm={8} xl={8} className={classes.margintop}>
              <Grid container direction="row" justify="flex-start" alignItems="center" item xs={8} lg={11} md={11} sm={11} xl={11} className={classes.Margin1}>
                <Typography variant="subtitle1"  className={classes.color}>Deactivate My Accounts</Typography>
              </Grid>
              <Grid container direction="row" justify="flex-start" alignItems="center" item xs={8} lg={10} md={10} sm={10} xl={10} className={classes.Margin1}>
                <Typography variant="body1"  className={classes.color}>Conditions</Typography>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="flex-start" item xs={8} lg={12} md={12} sm={12} xl={12} className={`${classes.Margin1} ${classes.marginlft}`}>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account I agree to deactivate my account. I agree to deactivate my account. I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account.</Typography>
                <Typography variant="body1"  className={`${classes.color} ${classes.Margin1}`}>I agree to deactivate my account.</Typography>
              </Grid>
              <Grid container direction="row" justify="flex-start" alignItems="center" item xs={8} lg={11} md={11} sm={10} xl={12} className={classes.Margin1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChecked('checkedB')}
                      value="checkedB"
                      icon={<CheckBoxOutlineBlankIcon style={{fontSize:'40px',color:'#81818147',width:'54px'}} />}
                      checkedIcon={<CheckBoxIcon style={{fontSize:'40px',width:'54px'}} />}
                      classes={{
                        root: classes.check,
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={<Typography variant="body1" className={classes.color} >I agree to deactivate my account.</Typography>}
                />
              </Grid>
              </Grid>
            <Grid container direction='row' justify='flex-end' alignItems='center' className={classes.submitmargin}>
              <Grid><Button className={classes.cancelButton} >Cancel</Button></Grid>
              <Grid ><Button className={classes.deactivateButton} disabled={!this.state.checkedB}>Deactivate</Button></Grid>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}
Message.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Message);
