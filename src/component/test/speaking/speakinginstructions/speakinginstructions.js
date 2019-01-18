import React, { Component } from "react";
import './speakinginstructions.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


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
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#e5e6e878',
    borderTop:'2px solid #257CBF',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper1:{
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#E5E6E8',
    borderTop:'2px solid #257CBF',
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper2:{
    paddingTop: 0,
    paddingBottom:0,
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
    boxShadow: '0px 0px 0px rgb(243, 243, 244), 0 2px 0px rgb(243, 243, 244)',
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
  margin24:{
    marginTop:theme.spacing.unit * 5
  },
  Margin:{
    marginTop:theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  imgresponsive:{
    width:'auto',
    height:'auto'
  },
  imgres:{
    width:'100%',
    height:'auto'
  },
  viewButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '8px 40px',
    marginLeft: theme.spacing.unit ,
    marginRight: theme.spacing.unit ,
    marginTop:theme.spacing.unit * 2,
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#084472',
      borderColor: '#084472',
    },
  },
  paddingleft24:{
    paddingLeft:theme.spacing.unit * 3
  },
  marginLeft:{
    marginLeft:theme.spacing.unit
  },
  check: {
    '&$checked': {
      color: '#257CBF',
    },
  },
  checked: {},
});

class Speakinginstructions extends Component {
  constructor(props) {
    super(props);
    document.title = 'Test-List';
    this.state = {
      checkedB: false,
    };
  }
  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="speakinginstructions">
        <Grid container direction="row" justify="space-evenly" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} >
          <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={11} md={8} sm={8} xl={8}>
            <Paper className={classes.paper}>
              <Typography className={classes.colr}>Instructions</Typography>
            </Paper>
          </Grid>
        </Grid>
        <div >
          <Grid container direction="row" justify="center" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={7} md={8} sm={8} xl={8}>
              <Paper className={classes.paper2}>
                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                  <ul>
                    <li className={`${classes.color} ${classes.margin24}`}> <Typography variant="subtitle1" className={`${classes.color} ${classes.paddingleft24}`}><Typography variant="subtitle1" style={{display:'inline-block'}} className={classes.color} component={Link} to="/demo">View Demo</Typography> Before entering in exam</Typography></li>
                    <li className={`${classes.color} ${classes.margin24}`}> <Typography variant="subtitle1" className={`${classes.color} ${classes.paddingleft24}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur</Typography> </li>
                    <li className={`${classes.color} ${classes.margin24}`}> <Typography variant="subtitle1" className={`${classes.color} ${classes.paddingleft24}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur</Typography> </li>
                    <li className={`${classes.color} ${classes.margin24}`}> <Typography variant="subtitle1" className={`${classes.color} ${classes.paddingleft24}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur</Typography> </li>
                  </ul>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="center" className={`${classes.paddingleft24} ${classes.margin24}`}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedB}
                        onChange={this.handleChecked('checkedB')}
                        value="checkedB"
                        classes={{
                          root: classes.check,
                          checked: classes.checked,
                        }}
                      />
                    }
                    label={<Typography variant="subtitle1" className={`${classes.color} ${classes.marginLeft}`}>I read and understood all the terms and conditions.</Typography>}
                  />
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Button size="large" component={Link} to="/speaking" disabled={!this.state.checkedB} variant="contained" color="primary" className={classes.viewButton} >
                    Start Exam
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}
Speakinginstructions.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Speakinginstructions);
