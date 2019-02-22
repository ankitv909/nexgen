import React, { Component } from "react";
import './testdescptions.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Rating from "../rating/rating";


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
        marginBottom: 2
    },
    paper4:{
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 1,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#E5E6E8',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    paper5:{
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ffffff',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
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
    imgresponsive:{
        width:'80%',
        height:'auto'
    },
    imgres:{
        width:'100%',
        height:'auto'
    },
    agreeButton:{
        margin: 0,
        backgroundColor: '#257CBF',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
    },
    margin24:{
        marginTop:theme.spacing.unit * 3
    },
    margin2:{
        marginTop:theme.spacing.unit * 3,
        paddingLeft : theme.spacing.unit *2
    },
    margintop8:{
        marginTop:theme.spacing.unit
    },
    paddingleft24:{
        paddingLeft:theme.spacing.unit * 3
    },
    paddingright48:{
        paddingRight:theme.spacing.unit * 6
    },
    marginleft24:{
      marginLeft:theme.spacing.unit * 6,
        paddingTop:theme.spacing.unit * 2,
        paddingBottom:theme.spacing.unit * 2
    },
    check: {
        '&$checked': {
            color: '#257CBF',
        },
    },
    checked: {},

});

class Testdescptions extends Component {
    constructor(props) {
        super(props);
        document.title = 'Test-Descptions';
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
            <div className="testlist">
                <Grid container direction="row" justify="space-evenly" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.colr}>TEST DESCPTIONS</Typography>
                        </Paper>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                        <Paper className={classes.paper1}>
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                <img src="/assets/date.svg" alt="book" height="auto" width="18px"/>
                                <Typography  className={classes.color} style={{position:'relative',left:'18px'}}>Popular Test Series</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div className={classes.Margin}>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                            <Paper className={classes.paper2}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={1} lg={4} md={3} sm={4} xl={3}>
                                        <img src="/assets/thumb.svg" alt="thumb" className={classes.imgresponsive}/>
                                    </Grid>
                                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" item xs={8} lg={8} md={9} sm={8} xl={6}>
                                        <div>
                                            <Typography variant="h5" gutterBottom  className={`${classes.color} ${classes.margin24}`}>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                                            <Typography className={`${classes.color} ${classes.margin24}`} gutterBottom>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Typography>
                                            <div className={classes.margin24}>
                                                <Typography  className={classes.color} gutterBottom>Duration: 30 Minutes</Typography>
                                                <Typography  className={classes.color} gutterBottom>Total Questions: 30</Typography>
                                                <Typography  className={classes.color} gutterBottom>Marks: 1 Mark each.</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Grid container direction="column" justify="flex-end" alignItems="flex-end" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.paddingright48}>
                                <Grid container direction="column" justify="flex-end" alignItems="flex-end" item xs={8} lg={8} md={9} sm={8} xl={9} >
                                <Paper className={classes.paper4}>
                                    <Typography className={`${classes.color} ${classes.paddingleft24}`} gutterBottom >INSTRUCTIONS</Typography>
                                </Paper>
                                    <Paper className={classes.paper5}>
                                        <ul>
                                            <li className={`${classes.color} ${classes.margin2}`}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur </li>
                                            <li className={`${classes.color} ${classes.margin2}`}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur </li>
                                            <li className={`${classes.color} ${classes.margin2}`}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur </li>
                                            <li className={`${classes.color} ${classes.margin2}`}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur </li>
                                            <li className={`${classes.color} ${classes.margin2}`}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur </li>
                                            <li className={`${classes.color} ${classes.margin2}`}> invidunt ut labore et dolore.Lorem ipsum dolor sit amet, consetetur  </li>
                                        </ul>
                                        <Grid container direction="row" justify="flex-start" alignItems="center" item sm={10} md={12}  className={classes.marginleft24}>
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
                                            label={<Typography variant="subtitle1" className={classes.color} >I read and understood all the terms and conditions.</Typography>}
                                        />
                                        </Grid>
                                        <Grid container direction="row" justify="center" alignItems="center">
                                        <Button  component={Link} to="/test" disabled={!this.state.checkedB} variant="contained" color="primary" className={classes.agreeButton} >
                                            Agree
                                        </Button>
                                        </Grid>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={8} lg={3} md={3} sm={4} xl={3}>
                                        <img src="/assets/amlogo.svg" alt="thumb" className={classes.imgres}/>
                                    </Grid>
                                    <Grid container direction="row" justify="space-around" alignItems="flex-start" item xs={8} lg={9} md={9} sm={8} xl={9}>
                                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                            <div style={{paddingLeft:'8px'}}>
                                                <Typography className={classes.colr} style={{marginTop: '0.35em',}} gutterBottom>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                                            </div>
                                        </Grid>
                                        <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                                            <Grid item lg={6} xl={6} sm={12} xs={6} md={6} container direction="column" justify="flex-start" alignItems="flex-start">
                                                <div style={{paddingLeft:'8px'}}>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>Time: 30 Minutes</Typography>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>Marks: 30</Typography>
                                                    <div >
                                                        <Typography variant="caption" className={classes.color} gutterBottom>Test Taken: 20198</Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid container item lg={6} xl={6} sm={10} xs={6} md={6} direction="column" justify="flex-end" alignItems="flex-end">
                                                <div style={{paddingRight:'8px'}}>
                                                    <Typography variant="caption" className={classes.color} gutterBottom style={{display:'inline-flex'}}>4.2 </Typography>
                                                    <Rating/>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>(320 Votes)</Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className={classes.paper3}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={8} lg={3} md={3} sm={4} xl={3}>
                                        <img src="/assets/amlogo.svg" alt="thumb" className={classes.imgres}/>
                                    </Grid>
                                    <Grid container direction="row" justify="space-around" alignItems="flex-start" item xs={8} lg={9} md={9} sm={8} xl={9}>
                                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                            <div style={{paddingLeft:'8px'}}>
                                                <Typography className={classes.colr} style={{marginTop: '0.35em',}} gutterBottom>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                                            </div>
                                        </Grid>
                                        <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                                            <Grid item lg={6} xl={6} sm={12} xs={6} md={6} container direction="column" justify="flex-start" alignItems="flex-start">
                                                <div style={{paddingLeft:'8px'}}>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>Time: 30 Minutes</Typography>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>Marks: 30</Typography>
                                                    <div >
                                                        <Typography variant="caption" className={classes.color} gutterBottom>Test Taken: 20198</Typography>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid container item lg={6} xl={6} sm={10} xs={6} md={6} direction="column" justify="flex-end" alignItems="flex-end">
                                                <div style={{paddingRight:'8px'}}>
                                                    <Typography variant="caption" className={classes.color} gutterBottom style={{display:'inline-flex'}}>4.2 </Typography>
                                                    <Rating/>
                                                    <Typography variant="caption" className={classes.color} gutterBottom>(320 Votes)</Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}
Testdescptions.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Testdescptions);
