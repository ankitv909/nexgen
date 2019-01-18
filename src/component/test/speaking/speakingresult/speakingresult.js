import React, { Component } from 'react'
import './speakigresult.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
/*import Tabs from '../writingtest/writingtest'
import { Link } from 'react-router-dom'*/
/* import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"; */

function TabContainer ({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -3px rgba(0, 0, 0, 0.12)'
  },
  button: {
    margin: 0,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 24px',
    color: '#ffff',
    textTransform: 'none'

  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#e5e6e878',
    borderTop: '2px solid #257CBF',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper1: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#E5E6E8',
    borderTop: '2px solid #257CBF',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper4:{
    backgroundColor:'#E5E6E8',
    paddingTop: theme.spacing.unit ,
    paddingBottom: theme.spacing.unit ,
    boxShadow:'none',
    width: '100%',
    borderRadius: 0,
  },
  paper5:{
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1,
    width:'100%',
    borderRadius: 0,
    backgroundColor:'#E5E6E8',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
  },
  paper2: {
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
  },
  paper3: {
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    height: '60rem',
    borderRadius: 0,
    backgroundColor: '#EEF0F5',
    boxShadow: '0px 0px 0px rgb(243, 243, 244), 0 2px 0px rgb(243, 243, 244)',
    tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
  },
  paddinglr: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  colr: {
    color: '#257CBF'
  },
  color: {
    color: '#707070'
  },
  Margin: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1
  },
  Marginleaderboard: {
    marginTop: 0,
    marginBottom: 0
  },
  Margin1: {
    marginTop: theme.spacing.unit * 7,
  },
  imgresponsive: {
    width: 'auto',
    height: 'auto'
  },
  imgres: {
    width: '100%',
    height: 'auto'
  },
  startButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#C46477',
    borderRadius: 0,
    padding: '6px 45px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#d94a66',
      borderColor: '#d94a66',
    },
  },
  listenButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#39B2C4',
    borderRadius: 0,
    padding: '6px 45px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#039ab0',
      borderColor: '#039ab0',
    },
  },
  writeButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#37774B',
    borderRadius: 0,
    padding: '6px 45px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#206034',
      borderColor: '#206034',
    },
  },
  readButton:{
    marginBottom: theme.spacing.unit,
    backgroundColor: '#F8A662',
    borderRadius: 0,
    padding: '6px 45px',
    color:'#ffff',
    textTransform:'none',
    '&:hover': {
      backgroundColor: '#ee8732',
      borderColor: '#ee8732',
    },
  },
  viewButton: {
    margin: 0,
    backgroundColor: '#257CBF',
    borderRadius: 0,
    padding: '6px 34px',
    color: '#ffff',
    textTransform: 'none'
  },
  colorg:{
    color:'#37774B'
  },
  colorb:{
    color:'#000000',
    textAlign:'center'
  },
  autoMargin:{
    marginTop: theme.spacing.unit * 4
  },
  leaderboard:{
    paddingTop: theme.spacing.unit,
    backgroundColor: '#E5E6E8',
    paddingBottom: theme.spacing.unit,
  }
})

class Speakingresult extends Component {
  constructor (props) {
    super(props)
    document.title = 'RESULT'
    this.state = {

    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className='speakingresult'>
        <Grid container direction='row' justify='space-evenly' alignItems='center' item xs={12} lg={12} md={12} sm={12} xl={12} >
          <Grid container direction='row' justify='center' alignItems='center' item xs={12} lg={8} md={8} sm={8} xl={8}>
            <Paper className={classes.paper}>
              <Typography className={classes.colr}>Result</Typography>
            </Paper>
          </Grid>
          <Grid container direction='row' justify='center' alignItems='center' item xs={12} lg={3} md={3} sm={3} xl={3}>
            <Paper className={classes.paper1}>
              <Grid container direction='row' justify='flex-start' alignItems='center'>
                <img src='/assets/trophy.svg' alt='trophy' height='auto' width='18px' />
                <Typography className={classes.color} style={{ position: 'relative', left: '18px' }}>Leaderboard</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <div >
          <Grid container direction='row' justify='space-evenly' alignItems='flex-start' item xs={12} lg={12} md={12} sm={12} xl={12} >
            <Grid container direction='row' justify='center' alignItems='center' item xs={12} lg={8} md={8} sm={8} xl={8} className={classes.Margin}>
              <Paper className={classes.paper2}>
                <Grid container direction='row' item xs={12} lg={12} md={12} sm={12} xl={12} >
                  <Grid container direction='row' justify='flex-start' alignItems='flex-start' item xs={8} lg={2} md={3} sm={4} xl={3}>
                    <img src='/assets/thumb.svg' alt='thumb' className={classes.imgresponsive} />
                  </Grid>
                  <Grid container direction='column' justify='space-around' alignItems='flex-start' item xs={12} lg={6} md={6} sm={5} xl={6}>
                    <div>
                      <Typography className={classes.colr}>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                      {/*<Typography className={classes.color}>4.2 (320 Votes)</Typography>*/}
                    </div>
                    <div >
                      <Typography variant='caption' className={classes.color}>Time: 30 Minutes</Typography>
                      <Typography variant='caption' className={classes.color}>Marks: 30</Typography>
                      <Typography variant='caption' className={classes.color}>Test Taken: 20198</Typography>
                    </div>
                  </Grid>
                  <Grid container direction='column' justify='space-around' alignItems='flex-end' item xs={12} lg={4} md={3} sm={3} xl={3}>
                    <div style={{ paddingRight: '8px' }}>
                      <Typography variant="caption" className={classes.colr}>Published: 20 July, 2018</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <Grid container direction='column' justify='center' alignItems='center' item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.autoMargin}>
                <div >
                  <Typography variant="subheading"  className={classes.colorb} gutterBottom>Jesica Jocie</Typography>
                  <Typography variant="headline" className={classes.colr} gutterBottom>Your Score is</Typography>
                </div>

                <Grid container direction='row' justify='center' alignItems='center' item xs={12} lg={10} md={9} sm={9} xl={9}>
                  <Grid container direction='column' justify='center' alignItems='center' item xs={12} lg={4} md={3} sm={4} xl={3}>
                    <Grid item lg={2} xl={2}  md={3} sm={3} xs={2}>
                      <img src="/assets/trophy1.svg" alt="img" className={classes.imgres}/>
                    </Grid>
                    <Typography className={classes.colorg}>Score</Typography>
                    <Typography variant="h3" className={classes.colorg}>29</Typography>
                  </Grid>
                  <Grid container direction='column' justify='center' alignItems='center' item xs={12} lg={4} md={3} sm={4} xl={3}>
                    <Grid item lg={2} xl={2} md={3} sm={3} xs={2}>
                      <img src="/assets/timetaken.svg" alt="img" className={classes.imgres}/>
                    </Grid>
                    <Typography variant="caption"  className={classes.colorb} gutterBottom>Time Taken</Typography>
                    <Typography  className={classes.colorb} variant="h5">16:09</Typography>
                  </Grid>
                  <Grid container direction='column' justify='center' alignItems='center' item xs={12} lg={4} md={3} sm={4} xl={3}>
                    <Grid item lg={2} xl={2} md={3} sm={3} xs={2}>
                      <img src="/assets/correctans.svg" alt="img" className={classes.imgres}/>
                    </Grid>
                    <Typography  variant="caption" className={classes.colorb} gutterBottom>Correct Answer</Typography>
                    <Typography variant="h5"  className={classes.colorb}>29/30</Typography>
                  </Grid>
                  <Grid container justify="center" alignContent="center"  item lg={12} className={classes.Margin1}>
                    <Typography variant="headline" className={classes.colr} gutterBottom>Share your score with friends</Typography>
                  </Grid>
                  <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={8} lg={4} md={6} sm={8} xl={3} >
                    <Paper className={classes.paper4}>
                      <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                          <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <Typography variant="caption" className={classes.colorb} gutterBottom >https://www.something.com/urlscore</Typography>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" justify="flex-end" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                          <Grid item xs={3} lg={3} md={3} sm={3} xl={3}>
                            <img src="/assets/baseline-file_copy-24px (1).svg" alt="download" className={classes.imgres}/>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                    <Grid container direction="row" justify="center" alignItems="center" item xs={9} lg={12} md={6} sm={6} xl={6} className={classes.Margin}>
                      <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={4} sm={4} xl={4}>
                        <Grid item xs={2} lg={2} md={4} sm={3} xl={4}>
                          <img src="/assets/facebook.svg" alt="download" className={classes.imgres}/>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={4} sm={4} xl={4}>
                        <Grid item xs={3} lg={4} md={6} sm={5} xl={5}>
                          <img src="/assets/twitter.svg" alt="download" className={classes.imgres}/>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={4} sm={4} xl={4}>
                        <Grid item xs={3} lg={4} md={6} sm={5} xl={5}>
                          <img src="/assets/google-plus.svg" alt="download" className={classes.imgres}/>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin}>
                  <Paper className={classes.paper5}>
                    <Typography className={classes.colr} gutterBottom >TEST 2</Typography>
                  </Paper>
                  <Paper className={classes.paper2}>
                    <Grid container direction="row" justify="center"  item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin}>
                      <Grid container direction="column" justify="flex-start" alignItems="center"  item xs={5} lg={3} md={3} sm={5} xl={3}>
                        <Grid item xs={3} lg={4} md={3} sm={4} xl={3}>
                          <img src="/assets/speak.svg" className={classes.imgres} alt="speak"/>
                        </Grid>
                        <Grid >
                          <Typography variant="subtitle1"  className={classes.color} gutterBottom>Speaking</Typography>
                        </Grid>
                        <Grid >
                          <Button variant="contained" color="primary" component={Link} to="/speaking"  className={classes.startButton}>
                            Start
                          </Button>
                        </Grid>
                        <Grid >
                          <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                        </Grid>

                      </Grid>
                      <Grid container direction="column" justify="flex-start" alignItems="center" item xs={5} lg={3} md={3} sm={5} xl={3}>
                        <Grid item xs={3} lg={4} md={3} sm={4} xl={3}>
                          <img src="/assets/listen.svg" className={classes.imgres} alt="speak"/>
                        </Grid>
                        <Grid >
                          <Typography variant="subtitle1"  className={classes.color} gutterBottom>Listening</Typography>
                        </Grid>
                        <Grid >
                          <Button variant="contained" color="primary"  component={Link} to="/listening" className={classes.listenButton}>
                            Start
                          </Button>
                        </Grid>
                        <Grid >
                          <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                        </Grid>

                      </Grid>
                      <Grid container direction="column" justify="flex-start" alignItems="center" item xs={5} lg={3} md={3} sm={5} xl={3}>
                        <Grid item xs={3} lg={4} md={3} sm={4} xl={3}>
                          <img src="/assets/writing.svg" className={classes.imgres} alt="speak"/>
                        </Grid>
                        <Grid >
                          <Typography variant="subtitle1"  className={classes.color} gutterBottom>Writing</Typography>
                        </Grid>
                        <Grid >
                          <Button variant="contained" color="primary" component={Link} to="/writing" className={classes.writeButton}>
                            Start
                          </Button>
                        </Grid>
                        <Grid >
                          <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                        </Grid>

                      </Grid>
                      <Grid container direction="column" justify="flex-start" alignItems="center" item xs={5} lg={3} md={3} sm={5} xl={3}>
                        <Grid item xs={3} lg={4} md={3} sm={4} xl={3}>
                          <img src="/assets/reading.svg" className={classes.imgres} alt="speak"/>
                        </Grid>
                        <Grid >
                          <Typography variant="subtitle1"  className={classes.color} gutterBottom>Reading</Typography>
                        </Grid>
                        <Grid >
                          <Button variant="contained" color="primary" component={Link} to="/reading" className={classes.readButton}>
                            Start
                          </Button>
                        </Grid>
                        <Grid >
                          <Typography variant="caption"  className={classes.colr} gutterBottom>View Solution</Typography>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction='row' justify='center' alignItems='center' item xs={12} lg={3} md={3} sm={3} xl={3}>
              <Paper className={classes.paper3}>
                <div className={classes.Margin}>
                  <Grid container direction='row' item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                      <Typography variant="subtitle2"  >Rank</Typography>
                    </Grid>
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                      <Typography variant="subtitle2" >User</Typography>
                    </Grid>
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={4} lg={4} md={4} sm={1} xl={4}>
                      <Typography variant="subtitle2" ></Typography>
                    </Grid>
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={2} xl={2}>
                      <Typography variant="subtitle2" >Score</Typography>
                    </Grid>
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                      <Typography variant="subtitle2" >Time</Typography>
                    </Grid>
                  </Grid>
                </div>

                <Grid container direction='row' item xs={12} lg={12} md={12} sm={12} xl={12} className={`${classes.Marginleaderboard} ${classes.leaderboard}`}>
                  <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                    <Grid container direction='row' justify='center' alignItems='flex-start' item xs={3} lg={4} md={5} sm={5} xl={3}>
                      <img src='/assets/trophy.svg' alt='thumb' className={classes.imgres} />
                    </Grid>
                  </Grid>
                  <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                    <Typography variant="subtitle2" >John</Typography>
                  </Grid>
                  <Grid container direction='row' justify='center' alignItems='flex-start' item xs={4} lg={4} md={4} sm={1} xl={4}>
                    <Typography variant="subtitle2" ></Typography>
                  </Grid>
                  <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={2} xl={2}>
                    <Typography variant="subtitle2" >30</Typography>
                  </Grid>
                  <Grid container direction='row' justify='center' alignItems='flex-start' item xs={2} lg={2} md={2} sm={3} xl={2}>
                    <Typography variant="subtitle2" >09:10</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>

      </div>
    )
  }
}
Speakingresult.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Speakingresult)
