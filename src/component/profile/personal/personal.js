import React, { Component } from 'react'
import './personal.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Avatar from '@material-ui/core/Avatar'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
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
  avatar:{
    width:12,
    height:'auto',
    padding:6
  },
  textjoin:{
    textTransform:'none',
    color: '#6B7678',
    textAlign:'left',
  },
  paper:{
    color: '#ffffff',
    paddingLeft: theme.spacing.unit * 10 ,
    paddingRight: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1 ,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#257CBF',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  bigAvatar: {
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor:'#ffffff'
  },
  imgavatar: {
    width: 180,
    height: 180,
  },
  imgres:{
    width:'40%',
    height:'auto'
  },
  imgresponsive:{
    width:'100%',
    height:'auto'
  },
  Margin:{
    marginTop:theme.spacing.unit * 5,
  },
  ans: {
    color: '#707070',
    '&$checked': {
      color: '#39B2C4',
    },
  },
  formControl: {
    marginLeft: theme.spacing.unit * 5,
    width:'100%'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    marginLeft:theme.spacing.unit * 5
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#6B7678',
    },
  },
  cssFocused: {},
  cssUnderline: {
    width:'100%',
    '&:after': {
      borderBottomColor: '#707070',
    },
  },
  cssOutlinedInput: {
      borderColor: '#707070',
  },
  gender: {
    color: 'rgb(255, 255, 255)',
    '&$checked': {
      color: '#39B2C4',
    },
  },
  checked: {},
  radioshadow:{
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px rgba(0, 0, 0, 0.14), 1px 1px 0px 1px rgba(0, 0, 0, 0.12)',
    borderRadius:'30px',
    width:16,
    height:16
  },
  smAvatar1: {
    width: 'auto',
    height: 10,
  },
  genderAvatar: {
    width: 16,
    height: 16,
    backgroundColor:'transparent',
    boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px rgba(0, 0, 0, 0.14), 1px 1px 0px 1px rgba(0, 0, 0, 0.12)',
    borderRadius:'30px'
  },
  startButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#F8A662',
    borderRadius: 0,
    padding: '6px 40px',
    color:'#ffff',
    textTransform:'none',
    boxShadow:'none',
    '&:hover': {
      backgroundColor: '#F8A662',
      borderColor: '#F8A662',
    },
  },
  input: {
    display: 'none',
  },
  margintb:{
    marginTop:theme.spacing.unit,
    marginBottom:theme.spacing.unit
  },
  saveButton:{
    margin: theme.spacing.unit,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 50px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#084472',
      borderColor: '#084472',
    },
  },
  discardButton:{
    margin: theme.spacing.unit,
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

class Personal extends Component {
  constructor (props) {
    super(props);
    document.title = 'personal';
    this.state = {
      file: '',imagePreviewUrl: ''
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  onClose() {
    this.setState({preview: null})
  }

  onCrop(preview) {
    this.setState({preview})
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


  render () {
    const { classes } = this.props;
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img className={classes.imgresponsive} src={imagePreviewUrl} alt="img"/>);
    } else {
      imagePreview = (<div className="previewText">Select<br/>Image</div>);
    }
    return (
      <div className='personal' style={{width: '100%'}}>
        <Grid container direction='row' justify='center' alignItems='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={9} sm={8} md={9} lg={9} xl={9} className={classes.margintop}>
            <div style={{marginTop:'1rem'}}>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" item lg={10} xl={12} sm={12} md={12} xs={12}>
                  <Grid item xl={2} sm={4} xs={2} md={4} lg={3}><Typography variant="subtitle1" className={classes.color}>Name</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} >
                    <InputLabel htmlFor="custom-css-standard-input" classes={{ root: classes.cssLabel, focused: classes.cssFocused}}></InputLabel>
                    <Input type="name" defaultValue="ankit verma" id="name" classes={{ underline: classes.cssUnderline, }} /></Grid>
                </Grid>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" item  lg={10} xl={12} sm={12} md={12} xs={12}>
                  <Grid item xl={2} lg={3} sm={4} xs={2} md={4}><Typography variant="subtitle1" className={classes.color}>Email</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} >  <InputLabel htmlFor="custom-css-standard-input" classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}></InputLabel>
                    <Input type="email" defaultValue="something@something.com" id="name" classes={{ underline: classes.cssUnderline, }}/></Grid>
                </Grid>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" item  lg={10} xl={12} sm={12} md={12} xs={12}>
                  <Grid item xl={2} lg={3} sm={4} xs={2} md={4}><Typography variant="subtitle1" className={classes.color}>Phone</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} >  <InputLabel htmlFor="custom-css-standard-input" classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}></InputLabel>
                    <Input type="number" defaultValue="8009952489" id="name" classes={{ underline: classes.cssUnderline, }}/></Grid>
                </Grid>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="center" item  lg={10} xl={12} sm={12} md={12} xs={12} style={{paddingTop:'8px'}}>
                  <Grid item xl={2} lg={3} sm={4} xs={2} md={4}><Typography variant="subtitle1" className={classes.color}>Gender</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} > <RadioGroup aria-label="position" name="position" value={this.state.value} onChange={this.handlegender} row>
                    <FormControlLabel value="male" control={<Radio icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />} checkedIcon={ <Avatar className={classes.genderAvatar}><img src="/assets/Ellipse 45.svg" alt="img" className={classes.smAvatar1}/></Avatar>} classes={{ root: classes.gender, checked: classes.checked, }}/>} label="Male" labelPlacement="end"/>
                    <FormControlLabel value="female" control={<Radio icon={<RadioButtonUncheckedIcon fontSize="inherit" className={classes.radioshadow}  />} checkedIcon={ <Avatar className={classes.genderAvatar}><img src="/assets/Ellipse 45.svg" alt="img" className={classes.smAvatar1}/></Avatar>} classes={{ root: classes.gender, checked: classes.checked, }}/>} label="Female" labelPlacement="end"/></RadioGroup></Grid>
                </Grid>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" item  lg={10} xl={12} sm={12} md={12} xs={12}>
                  <Grid item xl={2} lg={3} sm={4} xs={2} md={4}><Typography variant="subtitle1" className={classes.color}>Date of Birth</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} >  <InputLabel  htmlFor="custom-css-standard-input" classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}></InputLabel>
                    <Input type="date"  id="name" classes={{ underline: classes.cssUnderline, }}/></Grid>
                </Grid>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" item  lg={10} xl={12} sm={12} md={12} xs={12}>
                  <Grid item xl={2} lg={3} sm={4} xs={2} md={4}><Typography variant="subtitle1" className={classes.color}>Facebook profile</Typography></Grid>
                  <Grid item xl={5} lg={8} sm={6} xs={5} md={6} >  <InputLabel htmlFor="custom-css-standard-input" classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}></InputLabel>
                    <Input type="url" defaultValue="https://www.facebook.com/something.something" id="name" classes={{ underline: classes.cssUnderline, }}/></Grid>
                </Grid>
              </FormControl>
            </div>
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center" item xs={12} sm={4} md={3} lg={3} xl={3} className={classes.margintop} >
            <Typography variant="caption" className={classes.color}>Profile Picture</Typography>
            <Grid item lg={12} sm={12} className={classes.margintb}> <Avatar className={classes.imgavatar}>{imagePreview}</Avatar></Grid>
            <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} >
              <form onSubmit={(e)=>this._handleSubmit(e)}>
                {/*<button className="submitButton"
                        type="submit"
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
                <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" onChange={(e)=>this._handleImageChange(e)}/>
                <label htmlFor="contained-button-file"><Button variant="contained" component="span"  className={classes.startButton}>change</Button></label>
              </form>
            </Grid>
            </Grid>
          <Grid container direction='row' justify='flex-end' alignItems='center' className={classes.submitmargin}>
            <Grid><Button className={classes.discardButton}>Discard</Button></Grid>
            <Grid ><Button className={classes.saveButton} >Save</Button></Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
Personal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Personal)
