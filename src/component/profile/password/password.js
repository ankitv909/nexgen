import React, { Component } from 'react'
import './password.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from "@material-ui/core/FormControl";
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  paddingTop: {
    paddingTop: '2rem'
  },
  margintop: {
    marginTop: theme.spacing.unit * 3
  },
  marginsocialLR: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4
  },
  colr:{
    color:'#39B2C4'
  },
  color:{
    color:'#707070'
  },
  Margin:{
    marginTop:theme.spacing.unit * 5,
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    width:'100%',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    borderBottom: '1px solid #ced4da',
    fontSize: 14,
    color:'#6B7678',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    outline:'none',
    '&:focus': {
      borderBottom: '2px solid #707070',
      /*boxShadow: '0px 2px 0px 0px #707070',*/
    },
  },
  saveButton:{
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
  discardButton:{
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
  submitmargin:{
    marginTop:theme.spacing.unit * 14,
    marginBottom: theme.spacing.unit * 2
  },
});

class Password extends Component {
  constructor (props) {
    super(props);
    document.title = 'Sec 1';
    this.state = {
      value: 'female',
      selectedValue: 'a',
    }
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render () {
    const { classes } = this.props;
    return (
      <div className='password' style={{width: '100%'}}>
        <Grid container direction='row' justify='center' alignItems='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={11} sm={11} md={11} lg={11} xl={11} className={classes.margintop}>
            <div style={{marginTop:'1rem'}}>
              <Grid container direction='row' justify='center' alignItems='center' item xs={12} sm={11} md={10} lg={7} xl={5}>
              <FormControl component="fieldset" className={classes.formControl}>
                <InputBase  placeholder="Enter Current Password" id="bootstrap-input"
                  classes={{
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  }}
                />
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <InputBase placeholder="Enter New Password" id="bootstrap-input"
                           classes={{
                             root: classes.bootstrapRoot,
                             input: classes.bootstrapInput,
                           }}
                />
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <InputBase placeholder="Confirm New Password" id="bootstrap-input"
                           classes={{
                             root: classes.bootstrapRoot,
                             input: classes.bootstrapInput,
                           }}
                />
              </FormControl>
              </Grid>
            </div>
          </Grid>
          <Grid container direction='row' justify='flex-end' alignItems='center' className={classes.submitmargin}>
            <Grid item lg={2} md={3} sm={4} xl={2}><Button className={classes.discardButton}>Discard</Button></Grid>
            <Grid ><Button className={classes.saveButton} >Confirm</Button></Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
Password.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Password)
