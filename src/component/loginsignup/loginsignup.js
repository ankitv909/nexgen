import React, { Component } from "react";
import './loginsignup.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";   /*, Redirect*/
import Login from "../loginsignup/login/login";
import Signup from "../loginsignup/signup/signup";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography/Typography";
import Forgetpassword from "../loginsignup/forgetpassword/forgetpassword";
import Otpverify from "../loginsignup/otpverify/otpverify"

const styles = theme => ({
    card: {
        minWidth: 275,
        minHeight:'21rem',
        borderRadius:'0',
        backgroundColor:'#257CBF',
    },
    cardloginsignup: {
        minWidth: 275,
        borderRadius:'0',
        minHeight:'20rem',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 20px',
        transform: 'scale(0.8)',
        borderRadius: 24,
        boxShadow:'0px 0px 0px 2px #FFFFFF',
        backgroundColor:'#FFFFFF',
        marginLeft:theme.spacing.unit * 7,

    },
    title: {
        fontSize: 24,
        color:'#FFFFFF',
        marginTop:theme.spacing.unit,
    },
    pos: {
        marginBottom: 12,
    },
    avatar:{
        width:10,
        height:'auto',
        padding:6
    },
    textjoin:{
        textTransform:'none',
        color: '#FFFFFF',
        textAlign:'left',
        padding:2,
    },
    joinbutton:{
        backgroundColor: '#F8A662',
        color:'#FFFFFF',
        textTransform: 'none',
        minWidth: 120,
        borderRadius:'0',
        position:'relative',
        right:'6rem'
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
    paddingLR :{
        paddingLeft:theme.spacing.unit * 4,
        paddingRight:theme.spacing.unit * 4,
        width:'100%'
    },
    margintop:{
       marginTop: '2rem',
    }
});

class Loginsignup extends Component {
    constructor(props) {
        super(props);
        document.title = 'nexgen | Login';
        this.state = {
            value: 0,
        };
        switch (this.props.location.pathname) {
            case '/login':
                this.state = {value: 0};
                break;
            case '/signup':
                this.state = {value: 1};
                break;
            default:
                this.state = {value: 0};
                break;
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const bull = <span className={classes.bullet}><Avatar className={classes.avatar} src="/assets/Ellipse 37.svg"/></span>;

        return (

                <div className="loginsignup">
                    {/*<div style={{backgroundImage:'url(/assets/loginbg.svg)',height:'100%',width:'100%', marginTop:'0px',position:'absolute'}}>*/}
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={12} sm={6} md={5} lg={4} xl={4} >
                        <Card className={classes.card} >
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    SIGN UP TO GET THE BENEFIT
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption" component="h2" style={{marginTop:'2rem'}}>
                                    {bull}
                                    Something points
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption" component="h2" style={{marginTop:'0.5rem'}}>
                                    {bull}
                                    Something points
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption" component="h2" style={{marginTop:'0.5rem'}}>
                                    {bull}
                                    Something points
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Grid container
                                      direction="row"
                                      justify="flex-end"
                                      alignItems="center">
                                    <Button className={classes.joinbutton}  size="small">Join Now</Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={4} xl={4} >
                        <Card className={classes.cardloginsignup} >
                            <CardContent>
                                <Grid container
                                      direction="row"
                                      justify="center"
                                      alignItems="center">
                                    <Grid container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="center"
                                          item xs={12} sm={12} md={12} lg={12} xl={12} >
                                                <div className={classes.paddingLR}>
                                                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} >
                                                        <Tabs
                                                            value={value}
                                                            onChange={this.handleChange}
                                                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                                        >
                                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="LOGIN" component={Link} to="/login" />
                                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SIGN UP" component={Link} to="/signup" />
                                                        </Tabs>
                                                    </Grid>
                                                </div>
                                            </Grid>
                                            <Switch>
                                                <Route  path={`${this.props.match.path}login`} component={Login} />
                                                <Route path={`${this.props.match.path}signup`} component={Signup} />
                                                <Route path={`${this.props.match.path}forgetpassword`} component={Forgetpassword} />
                                                <Route path={`${this.props.match.path}otp`} component={Otpverify} />
                                                <Redirect to='/login' />
                                            </Switch>
                                                </Grid>
                                                </CardContent>
                                            </Card>
                                                </Grid>
                                    </Grid>
                    {/* </div>*/}
                                </div>
        );
    }
}
Loginsignup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Loginsignup);