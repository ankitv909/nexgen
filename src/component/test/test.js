import React, { Component } from "react";
import './test.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
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
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ffffff',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
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
    startButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#C46477',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#d94a66',
            borderColor: '#d94a66',
        },
    },
    listenButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#39B2C4',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#039ab0',
            borderColor: '#039ab0',
        },
    },
    writeButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#37774B',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#206034',
            borderColor: '#206034',
        },
    },
    readButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#F8A662',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#ee8732',
            borderColor: '#ee8732',
        },
    },
    margin24:{
        marginTop:theme.spacing.unit * 3
    },
    margintop8:{
        marginTop:theme.spacing.unit
    },
    paddingleft24:{
        paddingLeft:theme.spacing.unit * 3
    },
    check: {
        '&$checked': {
            color: '#257CBF',
        },
    },
    checked: {},

});

class Test extends Component {
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
            <div className="test">
                <Grid container direction="row" justify="space-evenly" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.colr}>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                        </Paper>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                        <Paper className={classes.paper1}>
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                <Typography  className={classes.color} style={{position:'relative',left:'18px'}}>TIPS FOR BETTER EXAM</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={12} sm={12} xl={12} className={classes.Margin}>
                                <Paper className={classes.paper4}>
                                    <Typography className={classes.colr} gutterBottom >TEST 1</Typography>
                                </Paper>
                                <Paper className={classes.paper2}>
                                    <Grid container direction="row" justify="center"  item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.margintop8}>
                                        <Grid container direction="column" justify="flex-start" alignItems="center"  item xs={1} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/speak.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Speaking</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" component={Link} to="/speakinginstructions"  className={classes.startButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/listen.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Listening</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary"  component={Link} to="/listeninginstructions" className={classes.listenButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/writing.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Writing</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" component={Link} to="/writinginstructions" className={classes.writeButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/reading.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Reading</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" component={Link} to="/readinginstructions" className={classes.readButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin}>
                                <Paper className={classes.paper4}>
                                    <Typography className={classes.colr} gutterBottom >TEST 2</Typography>
                                </Paper>
                                <Paper className={classes.paper2}>
                                    <Grid container direction="row" justify="center"  item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.margintop8}>
                                        <Grid container direction="column" justify="flex-start" alignItems="center"  item xs={1} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/speak.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Speaking</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" className={classes.startButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/listen.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Listening</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" className={classes.listenButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/writing.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Writing</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" className={classes.writeButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid container direction="column" justify="flex-start" alignItems="center" item xs={8} lg={3} md={3} sm={5} xl={3}>
                                            <Grid item xs={1} lg={4} md={3} sm={4} xl={3}>
                                                <img src="/assets/reading.svg" className={classes.imgres} alt="speak"/>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="subtitle1"  className={classes.color} gutterBottom>Reading</Typography>
                                            </Grid>
                                            <Grid >
                                                <Button variant="contained" color="primary" className={classes.readButton}>
                                                    Start
                                                </Button>
                                            </Grid>
                                            <Grid >
                                                <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3} className={classes.Margin}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={8} lg={3} md={3} sm={4} xl={3}>
                                        <img src="/assets/amlogo.svg" alt="thumb" className={classes.imgres}/>
                                    </Grid>
                                    <Grid container direction="row" justify="space-around" alignItems="flex-start" item xs={8} lg={9} md={9} sm={8} xl={6}>
                                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                                        <div style={{paddingLeft:'8px'}}>
                                            <Typography className={classes.color} style={{marginTop: '0.35em'}} gutterBottom>How to get good Score in IELTS?</Typography>
                                        </div>
                                        </Grid>
                                        <Grid item  container direction="column" lg={12} justify="flex-start" alignItems="flex-start">
                                            <div style={{paddingLeft:'8px',paddingRight:'40px'}}>
                                                <Typography variant="caption" className={classes.color} gutterBottom>
                                                    Some description of the tips will be there.
                                                </Typography>
                                            </div>
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
Test.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Test);
