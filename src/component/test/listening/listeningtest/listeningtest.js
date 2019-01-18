import React, { Component } from "react";
import './listeningtest.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Instruction from "../instruction/instruction";
import Listening from "../listening"
import Button from "@material-ui/core/Button";
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
        paddingTop: theme.spacing.unit * 0,
        paddingBottom: theme.spacing.unit * 0,
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
        backgroundColor:'#ecececc7',
        boxShadow: '0px 0px 0px rgb(243, 243, 244), 0 2px 0px rgb(243, 243, 244)',
        tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },

    paddinglr:{
        paddingLeft:theme.spacing.unit * 2,
        paddingRight:theme.spacing.unit * 2
    },
    colr:{
        color:'#39B2C4'
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
        marginTop:theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 2
    },
    Margin3:{
        marginTop:theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 2
    },
    Margin4:{
        marginTop:theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: 0 ,
        marginRight: 0 ,
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
        paddingLeft:theme.spacing.unit * 3
    },
    tabsRoot: {
        borderTop: '1px solid #e8e8e8',
        width:'100%'
    },
    tabsIndicator: {
        background: 'transparent',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit ,
        color: '#257CBF',
        '&:hover': {
            color: '#878787',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#ffffff',
            backgroundColor:'#257CBF',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#ffffff',
        },
    },
    tabSelected: {},
    appbar:{
        boxShadow:'none',
        backgroundColor:'#ffffff',
        borderRadius:'0'
    },
    privewButton:{
        marginBottom: theme.spacing.unit,
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
    startButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#257CBF',
        borderRadius: 0,
        padding: '6px 40px',
        marginLeft: theme.spacing.unit ,
        marginRight: theme.spacing.unit ,
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#084472',
            borderColor: '#084472',
        },
    },
    notvisited:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        border:'1px solid #7070704f',
        height:36,
        width:36,
        minHeight:30,
        minWidth: 30,
        color:'#ffff',
        textTransform:'none',
    },
    ans:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#37774B',
        borderRadius: 0,
        border:'1px solid #7070704f',
        height:36,
        width:36,
        minHeight:30,
        minWidth: 30,
        color:'#ffff',
        textTransform:'none',
    },
    notans:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#C46477',
        border:'1px solid #7070704f',
        borderRadius: 0,
        height:36,
        width:36,
        minHeight:30,
        minWidth: 30,
        color:'#ffff',
        textTransform:'none',
    },
    marked:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#F8A662',
        border:'1px solid #7070704f',
        borderRadius: 0,
        height:36,
        width:36,
        minHeight:30,
        minWidth: 30,
        color:'#ffff',
        textTransform:'none',
    },
    marginbtm:{
        marginBottom:theme.spacing.unit,
    },
    marginlr:{
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    marginleft:{
        marginLeft:theme.spacing.unit,
       /* marginRight:theme.spacing.unit*/
    },
    select:{
        backgroundColor: '#37774B',
        borderRadius: 0,
        border:'1px solid #7070704f',
        height:36,
        width:36,
        minHeight:30,
        minWidth: 30,
        color:'#ffff',
        margin:theme.spacing.unit
    }
});

class Listeningtest extends Component {
    constructor(props) {
        super(props);
        document.title = 'Listening';
        this.state = {
            value: 0,
            maximumTime: 30 * 60
        };
        switch (this.props.location.pathname) {
            case '/listeningtest/question/listening':
                this.state = {value: 0};
                break;
            case '/listeningtest/instruction/listening':
                this.state = {value: 1};
                break;
            default:
                this.state = {value: 0, maximumTime: localStorage.getItem('remTime') ? +localStorage.getItem('remTime') : 30 * 60};
                break;
        }
        this.handleChange = this.handleChange.bind(this);
        this.secToMinutes = this.secToMinutes.bind(this);
        this.intervalId = null;
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    timer() {
        if(this.state.maximumTime < 1) {
            clearInterval(this.intervalId);
        }
        this.setState({
            maximumTime: this.state.maximumTime - 1 })
        localStorage.setItem('remTime', this.state.maximumTime)
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1800);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    secToMinutes(value: number): string {
        if (value > 3600) {
            const hours   = Math.floor(value / 3600);
            const minutes = Math.floor((value - (hours * 3600)) / 60);
            const seconds = value - (hours * 3600) - (minutes * 60);
            return Math.floor(hours) < 10 ? '0' + Math.floor(hours) + ':' + (Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + ( seconds < 10 ? '0' + seconds : seconds) : Math.floor(minutes) + ':' + ( seconds < 10 ? '0' + seconds : seconds)) : Math.floor(hours) + ':' + (Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + ( seconds < 10 ? '0' + seconds : seconds) : Math.floor(minutes) + ':' + ( seconds < 10 ? '0' + seconds : seconds));
        } else {
            const minutes: number = Math.floor(value / 60);
            return Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + ( Math.floor(value - minutes * 60) < 10 ? '0' + Math.floor(value - minutes * 60) : Math.floor(value - minutes * 60)) : Math.floor(minutes) + ':' + ( Math.floor(value - minutes * 60) < 10 ? '0' + Math.floor(value - minutes * 60) : Math.floor(value - minutes * 60));
        }
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className="listeningtest">
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Grid container direction="row" justify="flex-start" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <Tabs
                                            value={value}
                                            onChange={this.handleChange}
                                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                        >
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Questions" component={Link} to="/listeningtest/test/listening" />
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Instructions" component={Link} to="/listeningtest/instruction/listening" />
                                        </Tabs>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justify="flex-end" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6}>
                                    <Grid item xs={1} lg={1} md={1} sm={1} xl={1}>
                                        <img src="/assets/save.svg" alt="download" className={classes.imgres2}/>
                                    </Grid>
                                    <Grid item xs={1} lg={1} md={1} sm={1} xl={1}>
                                        <img src="/assets/download.svg" alt="download" className={classes.imgres2}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                        <Paper className={classes.paper1}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Typography  className={classes.color} gutterBottom>Question palette</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={12} sm={12} xl={12} className={classes.Margin1}>
                                <Paper className={classes.paper2}>
                                    <Switch>
                                        <Route  path={`${this.props.match.path}/test/listening`} component={Listening} />
                                        <Route  path={`${this.props.match.path}/instruction/listening`} component={Instruction} />
                                        <Redirect to='/listeningtest/test/listening' />
                                    </Switch>
                                    {/* <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <AppBar position="static" color="default" className={classes.appbar}>
                                            <Tabs
                                                value={value}
                                                onChange={this.handleChange}
                                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                            >
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 1" component={Link} to="/listeningtest/instruction" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 2" component={Link} to="/listeningtest/instruction" />
                                            </Tabs>
                                        </AppBar>
                                        <Switch>
                                            <Route  path={`${this.props.match.path}/instruction`} component={Instruction} />
                                            <Route path={`${this.props.match.path}/instruction`} component={Instruction} />
                                            <Redirect to='/listeningtest/instruction' />
                                        </Switch>
                                    </Grid>*/}
                                </Paper>
                            </Grid>

                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3} className={classes.Margin1}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin2}>
                                    <Grid container direction="row"  justify="center" alignItems="center" item xs={2} lg={8} md={12} sm={12} xl={7} spacing={16}>
                                        <Grid container justify="center" alignItems="center" item xs={2} lg={3} md={2} sm={3} xl={3}>
                                            <img src="/assets/timer.svg" alt="thumb" className={classes.imgres}/>
                                        </Grid>
                                        <Grid container justify="flex-start" alignItems="center" item xs={2} lg={4} md={3} sm={4} xl={3}>
                                            <Typography variant="subtitle1"  className={classes.colr}>{this.secToMinutes(this.state.maximumTime)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin3}>
                                    <Grid container direction="row"  justify="flex-start" alignItems="center" item xs={2} lg={10} md={12} sm={12} xl={8} className={classes.marginbtm}>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            1
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            2
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            3
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            4
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            5
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            6
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            7
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            8
                                        </Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.select}>
                                            9
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justify="flex-end" alignItems="center" >
                                    <Grid container direction="row" justify="flex-start" alignItems="center" item lg={5} xs={12} md={8} sm={9} xl={5}> <div className={classes.notvisited}/><Typography variant="caption" className={classes.marginleft} > Not visited</Typography></Grid>
                                    <Grid container direction="row" justify="flex-start" alignItems="center" item lg={5} xs={12} md={8} sm={9} xl={5}> <div className={classes.ans}/><Typography variant="caption" className={classes.marginleft}> Answered</Typography></Grid>
                                    <Grid container direction="row" justify="flex-start" alignItems="center" item lg={10} xs={12} md={8} sm={9} xl={10}> <div className={classes.notans}/><Typography variant="caption" className={classes.marginleft}> Not Answered</Typography></Grid>
                                    {/*<Grid container direction="row" justify="flex-start" alignItems="center" item lg={5} xs={12} md={8} sm={9} xl={5}> <div className={classes.marked}/><Typography variant="caption" className={classes.marginleft}> Marked</Typography></Grid>*/}
                                </Grid>
                                <Grid container direction="row"  justify="space-evenly" alignItems="center" className={classes.Margin} >
                                    <Button className={classes.privewButton}>Preview</Button>
                                    <Button className={classes.startButton} component={Link} to="/readingresult">Submit</Button>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}
Listeningtest.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Listeningtest);
