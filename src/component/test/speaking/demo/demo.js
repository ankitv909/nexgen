import React, { Component } from "react";
import './demo.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Section1 from "../demo/section1/section1";
import Section2 from "../demo/section2/section2";
import Section3 from "../demo/section3/section3";
/*import Button from "@material-ui/core/es/Button/Button";*/

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
        paddingRight: 0,
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
        paddingTop: 18,
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
        borderRadius:'0'
    },
    startButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#F8A662',
        borderRadius: 0,
        padding: '6px 80px',
        color:'#ffff',
        textTransform:'none',
        minHeight:'65px',
        '&:hover': {
            backgroundColor: '#db7622',
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
});

class Demo extends Component {
    constructor(props) {
        super(props);
        document.title = 'demo';
        this.state = {
            value: 0,
        };
        switch (this.props.location.pathname) {
            case '/question/demo/section1':
                this.state = {value: 0};
                break;
            case '/question/demo/section2':
                this.state = {value: 1};
                break;
            case '/question/section3':
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
            <div className="demo">
                <div >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={8} sm={8} xl={8}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={12} sm={12} xl={12} className={classes.Margin1}>
                                <Paper className={classes.paper2}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <AppBar position="static" color="default" className={classes.appbar}>
                                            <Tabs
                                                value={value}
                                                onChange={this.handleChange}
                                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                            >
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 1" component={Link} to="/demoquestion/question/demo/section1" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 2" component={Link} to="/demoquestion/question/demo/section2" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 3" component={Link} to="/demoquestion/question/demo/section3" />
                                            </Tabs>
                                        </AppBar>
                                        <Switch>
                                            <Route  path={`${this.props.match.path}/section1`} component={Section1} />
                                            <Route path={`${this.props.match.path}/section2`} component={Section2} />
                                            <Route path={`${this.props.match.path}/section3`} component={Section3} />
                                            <Redirect to='/demoquestion/question/demo/section1' />
                                        </Switch>
                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>
                        {/*<Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3} className={classes.Margin1}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="row"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin2}>
                                    <Grid item xs={12} lg={10} md={12} sm={12} xl={12}>
                                    <Typography variant="subtitle1"  className={classes.colr} style={{textAlign:'center',lineHeight:'1.3',marginTop:'5rem'}}>We recommend you to take a view of the demo before appearing the final exam. </Typography>
                                    </Grid>
                                    </Grid>
                                <Grid container direction="row"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin2}>
                                    <Button className={classes.startButton} component={Link} to="/speaking/part1">Start Exam</Button>
                                </Grid>
                            </Paper>
                        </Grid>*/}
                    </Grid>
                </div>

            </div>
        );
    }
}
Demo.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Demo);
