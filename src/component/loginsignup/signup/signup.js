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
        document.title = 'Monet | Sign up';
        this.state = {
            formData: {
                company_name : {value: '', isValid: false, isUntouched: true},
                company_email : {value: '', isValid: false, isUntouched: true},
                company_password : {value: '', isValid: false, isUntouched: true},
                company_gender : {value: '', isValid: false, isUntouched: true},
                company_phone : {value: '', isValid: false, isUntouched: true}
            },
            single: '',
            popper: '',
            suggestions: [],
            password: '',
            showPassword: false,
            value: 'female',
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
    handleGender = event => {
        this.setState({ selectedValue: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };
    handleChangepassword = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

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
    handleSubmit(event) {
        console.log(this.state);
        const { formData } = this.state;
        /* const data = {
             company_email: formData.company_email.value,
             company_password: formData.company_password.value,
         };*/
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://ci.monetrewards.com:4282/auth/register',
            data: {
                company_name: formData.company_name.value,
                company_email: formData.company_email.value,
                company_phone: formData.company_phone.value,
                company_password: formData.company_password.value,
                company_gender: formData.company_gender.value,
            },

        })
            .then(res => res.json())
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
    static handleValidation(type, value) {
        if (type === 'company_name' )
            return value.length > 3 && !!value.match(/^[a-zA-Z ]*$/);
        else if (type === 'company_email')
            return !!value.match(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,3}$/);
        else if (type === 'company_password')
            return !!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'])[^ ]{8,}$/);
        else if (type === 'company_phone')
            return (value.length <= 10 && !!value.match(/^[0-9]*$/));
    }
    render() {
        const { classes } = this.props;
        const { formData } = this.state;
        let isEnabled = false;
        for (let key in formData) {
            isEnabled = formData[key].isValid;
        }
        return (
            <div className="signup">
                <title>Signup</title>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.paddingLR}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <div className={classes.margin}>
                                <FormControl className={classes.formControl} error={!formData.company_name.isValid && !formData.company_name.isUntouched} aria-describedby="company-name-error-text" fullWidth>
                                    <Input id="company-name" name="company_name" onChange={this.handleInputChange} placeholder="Name" />
                                    <FormHelperText className={classes.margint} id="company-name-error-text" style={{visibility: formData.company_name.isValid || formData.company_name.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
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
                                        <FormControl className={classes.formControl} error={!formData.company_email.isValid && !formData.company_email.isUntouched} aria-describedby="company-email-error-text" fullWidth>
                                            <Input id="company-email" name="company_email" onChange={this.handleInputChange} placeholder="Email" />
                                            <FormHelperText className={classes.margint} id="company-email-error-text" style={{visibility: formData.company_email.isValid || formData.company_email.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={1}/>
                                    <Grid item lg={5}>
                                        <FormControl className={classes.formControl} error={!formData.company_phone.isValid && !formData.company_phone.isUntouched} aria-describedby="company-phone-error-text" fullWidth>
                                            <Input id="company-phone" name="company_phone" onChange={this.handleInputChange} placeholder="Phone" />
                                            <FormHelperText className={classes.margint} id="company-phone-error-text" style={{visibility: formData.company_phone.isValid || formData.company_phone.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                </Grid>

                                <FormControl className={classes.formControl} error={!formData.company_password.isValid && !formData.company_password.isUntouched} aria-describedby="company-password-error-text" fullWidth>
                                    <Input type="password" id="company-password" name="company_password" onChange={this.handleInputChange} placeholder="Password" />
                                    <FormHelperText className={classes.margint} id="company-password-error-text" style={{visibility: formData.company_password.isValid || formData.company_password.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                </FormControl>

                                <FormControl component="fieldset" className={classes.formControl} error={!formData.company_gender.isValid && !formData.company_gender.isUntouched} aria-describedby="company-gender-error-text" fullWidth>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                    >
                                        <FormLabel component="legend" onChange={this.handleInputChange} id="company-gender" name="company_gender">Gender</FormLabel>
                                        <FormHelperText className={classes.margint} id="company-gender-error-text" style={{visibility: formData.company_gender.isValid || formData.company_gender.isUntouched ? 'hidden' : 'visible'}}>Error</FormHelperText>
                                    </Grid>

                                        <RadioGroup
                                            aria-label="position"
                                            name="position"
                                            value={this.state.value}
                                            onChange={this.handlegender}
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
                </form>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Grid  item xs={12} sm={12} md={12} lg={3} xl={12} >
                        <Button type="submit" variant="contained"  className={classes.button} style={{visibility: isEnabled ? 'visible' : 'hidden'}}>
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Signup);
