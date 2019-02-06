import React, { Component } from "react";
import './resetpassword.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import FormControl from "@material-ui/core/FormControl/FormControl";
import axios from 'axios';
import {applyMiddleware as dispatch} from "redux";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";


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
        marginTop: theme.spacing.unit * 5,
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
        width:'74%'
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
    margintopreset:{
        marginTop:theme.spacing.unit * 2
    },
    marginsocialLR:{
        marginLeft:theme.spacing.unit * 4,
        marginRight:theme.spacing.unit * 4
    }
});

class Resetpassword extends Component {
    constructor(props) {
        super(props);
        document.title = 'NEXGEN | Resetpassword';
        this.state = {
            value: 0,
            formData: {
                user_newpassword : {value: '', isValid: false, isUntouched: true},
                user_confirmpassword : {value: '', isValid: false, isUntouched: true},
            }
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
        const isValid = Resetpassword.handleValidation(target.name, value);
        let {formData} = this.state;
        formData[name] = {value, isValid};
        this.setState({
            formData
        });
    }
    handleSubmit = async event => {
        console.log(this.state);
        const { formData } = this.state;
        /* const data = {
             user_newpassword: formData.user_newpassword.value,
             company_password: formData.company_password.value,
         };*/
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://ci.monetrewards.com:4282/resetpassword',
            data: {
                user_newpassword: formData.user_newpassword.value,
                user_confirmpassword: formData.user_confirmpassword.value,
            },
            auth: {
                tokens: { }
            }
        })
            .then(res => res.json.then(user => ({ formData, res }))
            ).then(({ formdata, res }) =>  {
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
        }).catch(err => console.log("Error: ", err))()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {}

    static handleValidation(type, value) {
        if (type === 'user_newpassword' )
            return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
        else if (type === 'user_confirmpassword')
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
    }
    render() {
        const { classes } = this.props;
        const { formData } = this.state;
        let isEnabled = false;
        for (let key in formData) {
            isEnabled = formData[key].isValid;
        }
        return (
            <div className="forgetpassword" style={{width:'100%'}}>
                <title>ResetPassword</title>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
                        <Typography variant="caption"  className={classes.textTransform} >
                            <Grid container justify="center" alignItems="center" >
                                <Typography variant="subtitle2"  className={classes.textTransform}>RESET PASSWORD
                                    <Grid container
                                          direction="row"
                                          justify="center"
                                          alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Divider className={classes.divide}/>
                                    </Grid>
                                </Typography>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.paddingLR}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <div className={classes.margin}>
                                <FormControl className={classes.formControl} error={!formData.user_newpassword.isValid && !formData.user_newpassword.isUntouched} aria-describedby="company-newpassword-error-text" fullWidth>
                                    <TextField
                                        fullWidth
                                        className={classes.textField}
                                        id="company-newpassword-error-text"
                                        placeholder="New password"
                                        margin="none"
                                        autoComplete="newPassword"
                                        name="user_newpassword"
                                        onChange={this.handleInputChange}
                                    />
                                    <FormHelperText id="company-newpassword-error-text" style={{visibility: formData.user_newpassword.isValid || formData.user_newpassword.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl} error={!formData.user_confirmpassword.isValid && !formData.user_confirmpassword.isUntouched} aria-describedby="company-confirmpassword-error-text" fullWidth>
                                    <TextField
                                        fullWidth
                                        className={classes.textField}
                                        id="company-confirmpassword-error-text"
                                        placeholder="Confirm password"
                                        margin="none"
                                        autoComplete="confirmPassword"
                                        name="user_confirmpassword"
                                        onChange={this.handleInputChange}
                                    />
                                    <FormHelperText id="company-confirmpassword-error-text" style={{visibility: formData.user_confirmpassword.isValid || formData.user_confirmpassword.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintopreset}>
                                <Button type="submit" variant="contained" component={Link} to="/login"  className={classes.button} disabled={!isEnabled}> {/*style={{visibility: isEnabled ? 'visible' : 'hidden'}}*/}
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="flex-end"
                            item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
                                <Typography variant="caption" component={Link} to="/login"  className={classes.textTransform} >
                                    Login
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>
        );
    }
}
Resetpassword.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Resetpassword);
