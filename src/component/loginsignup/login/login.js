import React, { Component } from "react";
import './login.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import FormControl from "@material-ui/core/FormControl/FormControl";
import axios from 'axios';
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { applyMiddleware as dispatch } from 'redux'


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
    card: {
        maxWidth:'100%',
        justifyContent:'center',
        boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.16)'
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    bigAvatar1: {
        width: 20,
        height: 20,
        borderRadius: '20%'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
    },
    margin: {
        margin: theme.spacing.unit,
        width:"100%",
    },
    positionAbsolute:{
        position:'absolute',
        display: 'flex',
        justifyContent: 'center',
    },
    paddingTop:{
        paddingTop: '2rem',
    },
    button: {
       /* margin: theme.spacing.unit,*/
        backgroundColor: '#257CBF',
        borderRadius: 0,
        minHeight:32,
        padding: '8px 30px',
        color:'#ffff',
        textTransform:'none',
  '&:hover': {
    backgroundColor: '#105489',
      border:'1px solid #4A88C6',
      color:'#ffffff'
},
    },
    textTransform :{
        textTransform: "none",
        color:'rgba(0, 0, 0, 0.54)',
        fontweight:'600',
        textDecoration:'none'
    },
    textField: {
        /* marginLeft: theme.spacing.unit ,
         marginRight: theme.spacing.unit,*/
        color:'#878787'
    },
    boxShadow:{
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(50, 19, 19, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
    },
    loginpadding:{
        paddingTop: '0rem',
        paddingBottom:'2rem'
    },
    paddingLR :{
        paddingLeft:theme.spacing.unit * 4,
        paddingRight:theme.spacing.unit * 4,
    },
    inputbase:{
        font: 'bolder',
        color: 'currentColor',
        width: '100%',
        border: '0',
        margin: 0,
        padding: '6px 0 7px',
        display: 'block',
        minWidth: '0',
        boxSizing: 'content-box',
        background: 'none',
    },
    divide:{
        height: 1,
        margin: 0,
        border: 'none',
        flexShrink:0,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
   avatarOR: {
        margin: 0,
       height:24,
       width:24,
       fontSize:10,
       backgroundColor:'#FFFFFF',
       color:'#6B7678',
       boxShadow:'0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
    },
    socialimg:{
        height:14,
        width:14
    },
    avatarsocial: {
        margin: 10,
        height:24,
        width:24,
        backgroundColor:'#FFFFFF',
        color:'#6B7678',
        boxShadow:'0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
    },
    margintop:{
        marginTop:theme.spacing.unit * 3
    },
    marginsocialLR:{
        marginLeft:theme.spacing.unit * 4,
        marginRight:theme.spacing.unit * 4
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        document.title = 'NEXGEN | Login';
        this.state = {
            value: 0,
            formData: {
                user_email : {value: '', isValid: false, isUntouched: true},
                user_password : {value: '', isValid: false, isUntouched: true},
            },
            error: null,
            isLoaded: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const isValid = Login.handleValidation(target.name, value);
        let {formData} = this.state;
        formData[name] = {value, isValid};
        this.setState({
            formData
        });
    }
    handleSubmit = async event => {
        console.log(this.state);
        const { formData } = this.state;
         /*const data = {
             user_email: formData.user_email.value,
             user_password: formData.user_password.value,
         };*/
        event.preventDefault();
      axios({
        method: 'post',
        url: 'http://localhost:4000/login',
        data: {
          user_email: formData.user_email.value,
          user_password: formData.user_password.value,
        }
      })
        .then(res => res.json().then(user => ({ formData, res })))
        .then(({ formdata, res }) =>  {
          if (!res.ok) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(Error(formdata.message))
            return Promise.reject(formdata)
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('id_token', formdata.id_token)
            localStorage.setItem('id_token', formdata.access_token)
            // Dispatch the success action
             dispatch(formdata)
          }
        })
        .catch(err => console.log("Error: ", err))
        .then((result) => {
          this.setState({
            isLoaded: true,
              error:''
          });
        });
    }

    componentDidMount() {}

    static handleValidation(type, value) {
        if (type === 'user_email')
            return !!value.match(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,3}$/);
        else if (type === 'user_password')
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
    }
    render() {
        const { classes } = this.props;
        const { formData,} = this.state;
        let isEnabled = false;
        for (let key in formData) {
            isEnabled = formData[key].isValid;
        }
        return (
            <div className="login">
                <title>Login</title>
                <form onSubmit={this.handleSubmit} method="Post">
                    <div className={classes.paddingLR}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <div className={classes.margin}>
                                <FormControl className={classes.formControl} error={!formData.user_email.isValid && !formData.user_email.isUntouched} aria-describedby="user-email-error-text" fullWidth>
                                    <TextField
                                        fullWidth
                                        className={classes.textField}
                                        id="user-email-error-text"
                                        placeholder="username"
                                        margin="none"
                                        autoComplete="email"
                                        name="user_email"
                                        onChange={this.handleInputChange}
                                    />
                                    <FormHelperText id="user-email-error-text" style={{visibility: formData.user_email.isValid || formData.user_email.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>

                                <FormControl className={classes.formControl} error={!formData.user_password.isValid && !formData.user_password.isUntouched} aria-describedby="user-password-error-text" fullWidth>
                                    <TextField
                                        placeholder="password"
                                        fullWidth
                                        className={classes.textField}
                                        id="password"
                                        type="password"
                                        margin="none"
                                        name="user_password"
                                        onChange={this.handleInputChange}
                                    />
                                    <FormHelperText id="user-password-error-text" style={{visibility: formData.user_password.isValid || formData.user_password.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Grid item xs={5} sm={5} md={4} lg={4} xl={4} >
                                <Typography variant="caption" component={Link} to="/forgetpassword" className={classes.textTransform}>
                                    Forget password?
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                <Button type="submit" variant="contained"  className={classes.button} disabled={!isEnabled}> {/*style={{visibility: isEnabled ? 'visible' : 'hidden'}}*/}
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} className={classes.margintop}>
                                <Typography variant="caption"  className={classes.textTransform} >
                                  <Divider className={classes.divide}/>
                                    <Grid container justify="center" alignItems="center">
                                        <Avatar className={classes.avatarOR} style={{position:'absolute'}}>OR</Avatar>
                                    </Grid>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            item xs={10} sm={10} md={10} lg={10} xl={10} >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
                                <Typography variant="caption"  className={classes.textTransform} >
                                    <Grid container justify="center" alignItems="center" >
                                        <Typography variant="caption"  className={classes.textTransform} style={{position:'relative',right:'16px'}}>Login With</Typography>
                                        <Avatar className={classes.avatarsocial}>
                                            <img src="/assets/facebook.svg" className={classes.socialimg} alt="fb" />
                                        </Avatar>
                                        <Avatar className={classes.avatarsocial}>
                                            <img src="/assets/google-plus.svg" className={classes.socialimg} alt="G+" />
                                        </Avatar>
                                        <Avatar className={classes.avatarsocial}>
                                            <img src="/assets/twitter.svg" className={classes.socialimg} alt="twiter" />
                                        </Avatar>
                                    </Grid>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);
