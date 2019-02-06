import React, { Component } from "react";
import './otpverify.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import FormControl from "@material-ui/core/FormControl/FormControl";
import axios from 'axios';
import {applyMiddleware as dispatch} from "redux";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import OtpInput from 'react-otp-input';


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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)',
  },
  margin: {
    margin: theme.spacing.unit,
    width:"100%",
  },
  paddingTop:{
    paddingTop: '2rem',
  },
  button: {
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
  paddingLR :{
    paddingLeft:theme.spacing.unit * 4,
    paddingRight:theme.spacing.unit * 4,
  },
  divide:{
    height: 1,
    margin: 0,
    border: 'none',
    flexShrink:0,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    width:'74%'
  },
  margintop:{
    marginTop:theme.spacing.unit * 3
  },
  colorg:{
    color:'#37774B'
  },
  colr:{
    color:'#257CBF'
  },
  sendmsg:{
    minHeight: 0,
    minWidth: 0,
    textTransform:'none',
    backgroundColor:'transparent',
    color:'#257CBF',
    fontSize:'0.75rem',
    fontWeight:400,
    padding:'0px 0px 2px 2px',
    textDecoration:'underline',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  }
});

class Otpverify extends Component {
  constructor(props) {
    super(props);
    document.title = 'NEXGEN | OTP Verfication';
    this.state = {
      value: 0,
      formData: {
        company_otp : {value: '', isValid: false, isUntouched: true},
      },
      otp: '',
      numInputs: 4,
      separator: '-',
      isDisabled: false,
      hasErrored: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleOtpChange = otp => {
    this.setState({ otp });
  };

  handleotpChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };

  handleotpSubmit = e => {
    e.preventDefault();
    alert(this.state.otp);

  };
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const isValid = Otpverify.handleValidation(target.name, value);
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
      url: 'http://ci.monetrewards.com:4282/auth/sign_in',
      data: {
        company_otp: formData.company_otp.value,
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
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { otp, numInputs, isDisabled, hasErrored } = this.state;
    const { classes } = this.props;
    const { formData } = this.state;
    return (
      <div className="forgetpassword" style={{width:'100%'}}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
            <Typography variant="caption"  className={classes.textTransform} >
              <Grid container justify="center" alignItems="center" >
                <Typography variant="subtitle2"  className={classes.textTransform}>FORGET PASSWORD
                  <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Divider className={classes.divide}/>
                  </Grid>
                </Typography>
              </Grid>
            </Typography>
            </Grid>
          <Grid container direction="column" justify="center" alignItems="flex-end" item lg={12} xl={11} md={12} sm={12} xs={12} className={classes.margintop}>
            <Grid container direction="row" justify="flex-start" alignItems="center" item xs={11} sm={11} md={10} lg={10} xl={10}>
              <Typography variant="caption" className={classes.colorg}>Verification mail, has been sent successfully.</Typography>
            </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="center" item xs={11} sm={11} md={10} lg={10} xl={10}>
              <Typography variant="caption" className={classes.colorg}>Kindly check your mail to reset your password. <Button className={classes.sendmsg}>Send again</Button></Typography>
            </Grid>
          </Grid>
        </Grid>
        <form onSubmit={this.handleotpSubmit}>
          <div >
            <Grid container direction="row" justify="center" alignItems="center" item lg={12} xl={12} md={12} sm={12} xs={12}>
              <div className={classes.margintop}>
                <FormControl className={classes.formControl} error={!formData.company_otp.isValid && !formData.company_otp.isUntouched} aria-describedby="company-email-error-text" fullWidth>
                    <Grid direction="row" container justify="center" alignItems="center">
                      <Typography variant="subtitle2" className={classes.colr}>OTP</Typography>
                      <OtpInput
                        inputStyle={{
                          width: '40px',
                          height: '40px',
                          margin: '0 1rem',
                          fontSize: '1rem',
                          borderRadius: 1,
                          border: 'none',
                          boxShadow:'0px 0px 6px 0px rgba(112,112,112,1)'
                        }}
                        numInputs={numInputs}
                        isDisabled={isDisabled}
                        hasErrored={hasErrored}
                        errorStyle="error"
                        onChange={this.handleOtpChange}
                        separator={<span></span>}
                        shouldautofocus={false}
                      />
                    </Grid>
                </FormControl>
              </div>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <Button type="submit" variant="contained" component={Link} to="/resetpassword" className={classes.button} disabled={otp.length < numInputs}> {/*style={{visibility:  isDisabled ? 'visible' : 'hidden'}}*/}
                  Proceed
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="flex-end" item xs={12} sm={12} md={12} lg={12} xl={12} >
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
Otpverify.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Otpverify);
