import React, { Component } from "react";
import './plans.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    maxWidth:'100%',
    justifyContent:'center',
    boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.16)'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
  },
  colorb:{
    color:'#257CBF',
  },
  colr:{
    color:'#F8A662',
  },
  colorgray:{
    color:'#707070'
  },
  colorg:{
    color:'#37774B',
  },
  colorw:{
    color:'#ffffff'
  },
  paper1:{
    marginTop:theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
    width:'100%',
    overflowX:'hidden',
    textAlign: 'center',
    boxShadow:'none',
    paddingLeft:theme.spacing.unit * 2,
    paddingRight:theme.spacing.unit * 2
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:0,
  },
  divider:{
    height:1,
    width: 70,
    border:'none',
    display: 'block',
    marginBlockStart: '0.2em',
    marginBlockEnd: '0.2em',
    marginInlineStart: 'auto',
    marginInlineEnd: 'auto',
    overflow: 'hidden',
  },
  backgroundgray: {
    backgroundColor: '#E5E6E8',
    width: '100%',
    padding:theme.spacing.unit,
    boxShadow:'none',
    borderRadius:'0'
  },
  backgroundpink: {
    backgroundColor: '#F2E7DF',
    width: '100%',
    padding:theme.spacing.unit,
    boxShadow:'none',
    borderRadius:'0'
  },
  backgroundpink1: {
    backgroundColor: '#F8A662',
    width: '40%',
    padding:12,
    boxShadow:'none',
    borderRadius:'0'
  },
  backgroundgreen: {
    backgroundColor: '#CBDED1',
    width: '100%',
    padding:theme.spacing.unit,
    boxShadow:'none',
    borderRadius:'0'
  },
  backgroundblue: {
    backgroundColor: '#CADBE8',
    width: '100%',
    padding:theme.spacing.unit,
    boxShadow:'none',
    borderRadius:'0'
  },
  MarginTop:{
    marginTop:theme.spacing.unit * 4
  },
  MarginTB:{
    marginTop:theme.spacing.unit * 4,
    marginBottom:theme.spacing.unit * 4
  },
  starterbutton:{
    backgroundColor:'#6B7678',
    color:'#fffffff',
    padding:'16px 40px',
    borderRadius: 0,
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#585f60',
      borderColor: '#6B7678',
    },
  },
  Teambutton:{
    backgroundColor:'#F8A662',
    color:'#fffffff',
    padding:'16px 40px',
    borderRadius: 0,
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#f8811f',
      borderColor: '#F8A662',
    },
  },
  Premiumbutton:{
    backgroundColor:'#37774B',
    color:'#fffffff',
    padding:'16px 40px',
    borderRadius: 0,
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#306841',
      borderColor: '#37774B',
    },
  },
  Corporatebutton:{
    backgroundColor:'#257CBF',
    color:'#fffffff',
    padding:'16px 40px',
    borderRadius: 0,
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#1d6399',
      borderColor: '#257CBF',
    },
  },
  padding5:{
    padding:5
  }
});

class Plans extends Component {
  constructor(props) {
    super(props);
    document.title = 'NEXGEN | PLANS';
    this.state = {
      value: 0,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="plans" >
        <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
          <Grid container direction="row" justify="center" alignItems="center" style={{display:'flex'}}>
            <Typography variant="h5" className={classes.colorb} style={{padding:'5px'}}>OUR</Typography>
            <Typography variant="h5" className={classes.colr} style={{padding:'5px'}}>PLANS</Typography>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" item xl={9} lg={12} md={12} sm={12} xs={10} >
          <Paper className={classes.paper1}>
            <Grid container spacing={24} >
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <Paper className={classes.paper} style={{borderTop:'2px solid #E5E6E8'}}>
                <Grid container direction="column" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <Grid  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Typography variant="h5" className={classes.colorgray}>Starter</Typography>
                    <hr  className={classes.divider} style={{backgroundColor:'#707070'}}/>
                  </Grid>
                  <Grid container justify="center" alignItems="center"  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Paper className={classes.backgroundgray}>
                      <Typography variant="h5" className={classes.colorgray}>$ 30/mo</Typography>
                    </Paper>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}> <Typography variant="h5" className={classes.padding5}>10</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>test Series</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}>
                      <Typography variant="h5"  className={classes.padding5}>21</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Solution Manuals</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}><Typography variant="h5" className={classes.padding5} >30</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Days</Typography></Grid>
                  </Grid>
                  <Grid container justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTB}>
                    <Button variant="contained" color="primary" className={classes.starterbutton}>
                      Choose Plan
                    </Button>
                  </Grid>
                  </Grid>
              </Paper>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <Paper className={classes.paper} style={{borderTop:'2px solid #F8A662',boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
                <Grid container direction="column" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <Grid container justify="center" alignItems="center"  item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Paper className={classes.backgroundpink1}>
                      <Typography variant="caption" className={classes.colorw}>Recommended</Typography>
                    </Paper>
                  </Grid>
                  <Grid  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Typography variant="h5" className={classes.colr}>Team</Typography>
                    <hr  className={classes.divider} style={{backgroundColor:'#F8A662'}}/>
                  </Grid>
                  <Grid container justify="center" alignItems="center"  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Paper className={classes.backgroundpink}>
                      <Typography variant="h5" className={classes.colr}>$ 30/mo</Typography>
                    </Paper>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}> <Typography variant="h5" className={classes.padding5}>10</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>test Series</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}>
                      <Typography variant="h5"  className={classes.padding5}>21</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Solution Manuals</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}><Typography variant="h5" className={classes.padding5} >30</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Days</Typography></Grid>
                  </Grid>
                  <Grid container justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTB}>
                    <Button variant="contained" color="primary" className={classes.Teambutton}>
                      Choose Plan
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <Paper className={classes.paper} style={{borderTop:'2px solid #37774B'}}>
                <Grid container direction="column" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <Grid  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Typography variant="h5" className={classes.colorg}>Premium</Typography>
                    <hr  className={classes.divider} style={{backgroundColor:'#37774B'}}/>
                  </Grid>
                  <Grid container justify="center" alignItems="center"  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Paper className={classes.backgroundgreen}>
                      <Typography variant="h5" className={classes.colorg}>$ 30/mo</Typography>
                    </Paper>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}> <Typography variant="h5" className={classes.padding5}>10</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>test Series</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}>
                      <Typography variant="h5"  className={classes.padding5}>21</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Solution Manuals</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}><Typography variant="h5" className={classes.padding5} >90</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Days</Typography></Grid>
                  </Grid>
                  <Grid container justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTB}>
                    <Button variant="contained" color="primary" className={classes.Premiumbutton}>
                      Choose Plan
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <Paper className={classes.paper} style={{borderTop:'2px solid #257CBF'}}>
                <Grid container direction="column" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <Grid  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Typography variant="h5" className={classes.colorb}>Corporate</Typography>
                    <hr  className={classes.divider} style={{backgroundColor:'#257CBF'}}/>
                  </Grid>
                  <Grid container justify="center" alignItems="center"  item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                    <Paper className={classes.backgroundblue}>
                      <Typography variant="h5" className={classes.colorb}>$ 30/mo</Typography>
                    </Paper>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTop}>
                   <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}> <Typography variant="h5" className={classes.padding5}>10</Typography>
                     <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>test Series</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}>
                      <Typography variant="h5"  className={classes.padding5}>21</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Solution Manuals</Typography></Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Grid container direction="row" justify="flex-start" alignItems="center" item xl={6} lg={6} md={8} sm={11} xs={6}><Typography variant="h5" className={classes.padding5} >95</Typography>
                      <Typography variant="caption" className={`${classes.colorgray} ${classes.padding5}`}>Days</Typography></Grid>
                  </Grid>
                  <Grid container justify="center" alignItems="center" item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.MarginTB}>
                    <Button variant="contained" color="primary" className={classes.Corporatebutton}>
                      Choose Plan
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            </Grid>
          </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Plans.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Plans);
