import React, { Component } from "react";
import './reading.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import  Part1 from "../reading/part1/part1";
import Part2 from "../reading/part2/part2";
import Part3 from "../reading/part3/part3";



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
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 0,
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
    margintop: {
        marginTop: theme.spacing.unit * 2
    },
    paddinglrauto:{
        paddingLeft:theme.spacing.unit ,
        paddingRight:theme.spacing.unit,
        marginTop: theme.spacing.unit * 2
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
        borderBottom: '1px solid #e8e8e8',
        width:'100%'
    },
    tabsIndicator: {
        background: 'linear-gradient(to right,#1838D6,#5C95E4)',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit ,
        '&:hover': {
            color: '#878787',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#878787',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#878787',
        },
    },
    tabSelected: {},
    appbar:{
        boxShadow:'none',
        backgroundColor:'#ffffff',
        borderRadius:'0',
        borderBottom: '1px solid #E5E6E8'
    },
    appbartab:{
        boxShadow:'none',
        backgroundColor:'#ffffff',
        borderRadius:'0',
    },
    startButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#257CBF',
        borderRadius: 0,
        padding: '6px 40px',
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
    badge: {
        border: '4px solid #E5E6E8',
        backgroundColor:'#ffffff',
        color:'#6B7678',
        position:'static',
        height:36,
        width:36
    },
    pad:{
        padding:'17px 0 3px 24px',
    }
});

class Reading extends Component {
    constructor(props) {
        super(props);
        document.title = 'Reading';
        this.state = {
            value: 0,
        };
        switch (this.props.location.pathname) {
            case '/test/reading/part1':
                this.state = {value: 0};
                break;
            case '/test/reading/part2':
                this.state = {value: 1};
                break;
            case '/test/reading/part3':
                this.state = {value: 2};
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
            <div className="reading">
                <div >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6} className={classes.Margin1}>
                                <Paper className={classes.paper2}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.margintop8}>
                                        <AppBar position="static" color="default" className={classes.appbar}>
                                            <Typography variant="subtitle1" className={classes.pad}>PASSAGE 1</Typography>
                                        </AppBar>
                                        <div>
                                        <Grid className={classes.paddinglrauto}><Typography gutterBottom>You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage One.</Typography></Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.margintop8}><Typography variant="button">MYTHS ABOUT PUBLIC SPEAKING</Typography></Grid>
                                        <Grid container justify="center" alignItems="center" className={classes.margintop8}><Typography variant="button">A</Typography></Grid>
                                        </div>
                                        </Grid>
                                </Paper>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6} className={classes.Margin1}>
                                <Paper className={classes.paper2}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.margintop8}>
                                        <AppBar position="static" color="default" className={classes.appbartab}>
                                            <Tabs
                                                value={value}
                                                onChange={this.handleChange}
                                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                            >
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PART I" component={Link} to="/readingtest/test/reading/part1" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PART II" component={Link} to="/readingtest/test/reading/part2" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="PART III" component={Link} to="/readingtest/test/reading/part3" />
                                            </Tabs>
                                        </AppBar>
                                        <Switch>
                                            <Route  path={`${this.props.match.path}/part1`} component={Part1} />
                                            <Route path={`${this.props.match.path}/part2`} component={Part2} />
                                            <Route path={`${this.props.match.path}/part3`} component={Part3} />
                                            <Redirect to='/readingtest/test/reading/part1' />
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
Reading.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Reading);
