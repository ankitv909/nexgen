import React, { Component } from "react";
import './signup.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button/Button";
import axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
/*import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';*/
import Avatar from "@material-ui/core/Avatar";
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
        margin: 0,
        backgroundColor: '#257CBF',
        borderRadius: 0,
        padding: '6px 24px',
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
        fontweight:'600'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    paddingLR :{
        paddingLeft:theme.spacing.unit * 4,
        paddingRight:theme.spacing.unit * 4,
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    formControl:{
    },
    gender: {
        color: 'rgb(255, 255, 255)',
        '&$checked': {
            color: '#39B2C4',
        },
    },
    checked: {},
    radioshadow:{
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        borderRadius:'30px',
        width:22,
        height:22
    },
    smAvatar1: {
        width: 'auto',
        height: 10,
    },
    genderAvatar: {
        width: 22,
        height: 22,
        backgroundColor:'transparent',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12)',
        borderRadius:'30px'
    },
    margint:{
        marginTop:0
    }
});

class Signup extends Component {
    constructor(props) {
        super(props);
        document.title = 'NEXGEN | Sign up';
        this.state = {
            formData: {
                user_name : {value: '', isValid: false, isUntouched: true},
                user_email : {value: '', isValid: false, isUntouched: true},
                user_password : {value: '', isValid: false, isUntouched: true},
                user_gender : {value: '', isValid: false, isUntouched: true},
                user_phone : {value: '', isValid: false, isUntouched: true}
            },
            single: '',
            popper: '',
            value: '',
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlegender = event => {
        this.setState({ value: event.target.value });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };
   /* handleGender = event => {
        this.setState({ selectedValue: event.target.value });
    };*/
 /*   handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };*/
    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };
   /* handleChangepassword = prop => event => {
        this.setState({ [prop]: event.target.value });
    };*/

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const isValid = Signup.handleValidation(target.name, value);
        let {formData} = this.state;
        formData[name] = {value, isValid};
        this.setState({
            formData
        });
    }
    handleSubmit = async event => {
        console.log(this.state);
        const { formData } = this.state;
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:4000/register',
            data: {
                user_name: formData.user_name.value,
                user_email: formData.user_email.value,
                user_phone: formData.user_phone.value,
                user_password: formData.user_password.value,
                user_gender: formData.user_gender.value,
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
                  // dispatch(formdata)
              }
          })
          .catch(err => console.log("Error: ", err))
          .then((result) => {
              this.setState({
                  isLoaded: true,
                 /* items: result.items*/
              });
          });
    }
    static handleValidation(type, value) {
        if (type === 'user_name' )
            return value.length > 3 && !!value.match(/^[a-zA-Z ]*$/);
        else if (type === 'user_email')
            return !!value.match(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,3}$/);
        else if (type === 'user_password')
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
        else if (type === 'user_phone')
            return (value.length <= 10 && !!value.match(/^[0-9]*$/));
        else if (type === 'user_gender')
            return true
    }
    render() {
        const { classes } = this.props;
        const { formData } = this.state;
        let isEnabled = false;
        const p = [];
        for (let key in formData) {
            p.push(formData[key].isValid);
        }
        if (p.filter((x) => x === false).length < 1) {
            isEnabled = true;
        }
        return (
            <div className="signup">
                <title>Signup</title>
                <form onSubmit={this.handleSubmit} method="Post">
                    <div className={classes.paddingLR}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <div className={classes.margin}>
                                <FormControl className={classes.formControl} error={!formData.user_name.isValid && !formData.user_name.isUntouched} aria-describedby="user-name-error-text" fullWidth>
                                    <Input id="user-name" name="user_name" onChange={this.handleInputChange} placeholder="Name" />
                                    <FormHelperText className={classes.margint} id="user-name-error-text" style={{visibility: formData.user_name.isValid || formData.user_name.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>

                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                >
                                    <Grid item lg={6} container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="center">
                                        <FormControl className={classes.formControl} error={!formData.user_email.isValid && !formData.user_email.isUntouched} aria-describedby="user-email-error-text" fullWidth>
                                            <Input id="user-email" name="user_email" onChange={this.handleInputChange} placeholder="Email" />
                                            <FormHelperText className={classes.margint} id="user-email-error-text" style={{visibility: formData.user_email.isValid || formData.user_email.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={1}/>
                                    <Grid item lg={5}>
                                        <FormControl className={classes.formControl} error={!formData.user_phone.isValid && !formData.user_phone.isUntouched} aria-describedby="user-phone-error-text" fullWidth>
                                            <Input id="user-phone" name="user_phone" onChange={this.handleInputChange} placeholder="Phone" type="phone"/>
                                            <FormHelperText className={classes.margint} id="user-phone-error-text" style={{visibility: formData.user_phone.isValid || formData.user_phone.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                </Grid>

                                <FormControl className={classes.formControl} error={!formData.user_password.isValid && !formData.user_password.isUntouched} aria-describedby="user-password-error-text" fullWidth>
                                    <Input type="password" id="password" name="user_password" onChange={this.handleInputChange} placeholder="Password" />
                                    <FormHelperText className={classes.margint} id="user-password-error-text" style={{visibility: formData.user_password.isValid || formData.user_password.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>

                                <FormControl component="fieldset" className={classes.formControl} error={!formData.user_gender.isValid && !formData.user_gender.isUntouched} aria-describedby="user-gender-error-text" fullWidth>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                    >
                                        <FormLabel component="legend" >Gender</FormLabel>
                                        <FormHelperText className={classes.margint} id="user-gender-error-text" style={{visibility: formData.user_gender.isValid || formData.user_gender.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                    </Grid>

                                        <RadioGroup
                                            id="user-gender" name="user_gender"
                                            aria-label="position"
                                            value={this.state.value}
                                            onChange={ (e) => { this.handlegender(e); this.handleInputChange(e) } }
                                            row
                                        >
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio
                                                                icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                                checkedIcon={ <Avatar className={classes.genderAvatar}>
                                                                    <img src="/assets/Ellipse 45.svg" alt="img" className={classes.smAvatar1}/>
                                                                </Avatar>}
                                                                classes={{
                                                                    root: classes.gender,
                                                                    checked: classes.checked,
                                                                }}/>}
                                                label="Male"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio
                                                    icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />}
                                                    checkedIcon={ <Avatar className={classes.genderAvatar}>
                                                        <img src="/assets/Ellipse 45.svg" alt="img" className={classes.smAvatar1}/>
                                                    </Avatar>}
                                                    classes={{
                                                        root: classes.gender,
                                                        checked: classes.checked,
                                                    }}/>}
                                                label="Female"
                                                labelPlacement="end"
                                            />
                                        </RadioGroup>
                                        </FormControl>
                            </div>
                        </Grid>
                    </div>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Grid  item xs={12} sm={12} md={12} lg={3} xl={3} >
                            <Button type="submit" variant="contained"  className={classes.button} disabled={!isEnabled}> {/*style={{visibility: isEnabled ? 'visible' : 'hidden'}}*/}
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </div>
        );
    }
}
Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Signup);
