import React, { Component } from "react";
import './testlist.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


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
        ...theme.mixins.gutters(),
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
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#E5E6E8',
        borderTop:'2px solid #257CBF',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    paper2:{
        paddingTop: 0,
        paddingBottom:0,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },
    paper3:{
        paddingTop: 0,
        paddingBottom: 0,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ffffff',
        boxShadow: '0px 0px 0px rgb(243, 243, 244), 0 2px 0px rgb(243, 243, 244)',
        tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },
    paddinglr:{
        paddingLeft:theme.spacing.unit * 2,
        paddingRight:theme.spacing.unit * 2
    },
    colr:{
        color:'#257CBF'
    },
    color:{
      color:'#707070'
    },
    Margin:{
        marginTop:theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    imgresponsive:{
        width:'auto',
        height:'auto'
    },
    imgres:{
        width:'100%',
        height:'auto'
    },
    viewButton:{
        margin: 0,
        backgroundColor: '#257CBF',
        borderRadius: 0,
        padding: '6px 34px',
        color:'#ffff',
        textTransform:'none',
    }
});

class Testlist extends Component {
    constructor(props) {
        super(props);
        document.title = 'Test-List';
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="testlist">
                <Grid container direction="row" justify="space-evenly" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                       <Paper className={classes.paper}>
                           <Typography className={classes.colr}>TEST SERIES</Typography>
                       </Paper>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                        <Paper className={classes.paper1}>
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                <img src="/assets/date.svg" alt="book" height="auto" width="18px"/>
                                <Typography  className={classes.color} style={{position:'relative',left:'18px'}}>Popular Test Series</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div className={classes.Margin}>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                            <Paper className={classes.paper2}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={8} lg={2} md={3} sm={4} xl={3}>
                                       <img src="/assets/thumb.svg" alt="thumb" className={classes.imgresponsive}/>
                                    </Grid>
                                    <Grid container direction="column" justify="space-around" alignItems="flex-start" item xs={8} lg={6} md={6} sm={5} xl={6}>
                                        <div>
                                        <Typography className={classes.colr}>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                                        <Typography className={classes.color}>4.2 (320 Votes)</Typography>
                                        </div>
                                        <div >
                                        <Typography variant="caption" className={classes.color}>Test Taken: 20198</Typography>
                                        </div>
                                    </Grid>
                                    <Grid container direction="column" justify="space-around" alignItems="flex-end" item xs={8} lg={4} md={3} sm={3} xl={3}>
                                        <div style={{paddingRight:'8px'}}>
                                            <Typography className={classes.colr}>Published: 20 July, 2018</Typography>
                                        </div>
                                        <div style={{paddingRight:'8px'}}>
                                            <Button  variant="contained" color="primary" component={Link} to="/testdescptions" className={classes.viewButton}>
                                               View
                                            </Button>
                                        </div>
                                    </Grid>
                                    </Grid>
                            </Paper>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="row"  item xs={12} lg={12} md={12} sm={12} xl={12} >
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"  item xs={8} lg={3} md={3} sm={4} xl={3}>
                                        <img src="/assets/amlogo.svg" alt="thumb" className={classes.imgres}/>
                                    </Grid>
                                    <Grid container direction="column" justify="space-around" alignItems="flex-start" item xs={8} lg={9} md={9} sm={8} xl={9}>
                                        <div style={{paddingLeft:'8px'}}>
                                            <Typography className={classes.colr} style={{marginTop: '0.35em'}}>IELTS Recent Actual Test With Answers (Vol 4)</Typography>
                                        </div>
                                        <Grid container direction="row" justify="flex-end" alignItems="center">
                                            <div style={{paddingRight:'8px'}}>
                                                <Typography variant="caption" className={classes.color} >4.2 </Typography>
                                                <Typography variant="caption" className={classes.color}>4.2 (320 Votes)</Typography>
                                            </div>
                                        </Grid>

                                        <div >
                                            <Typography style={{paddingLeft:'8px'}} variant="caption" className={classes.color} gutterBottom>Test Taken: 20198</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}
Testlist.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Testlist);
