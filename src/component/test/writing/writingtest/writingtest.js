import React, { Component } from "react";
import './writingtest.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Instruction from "../instruction/instruction";
import Writing from "../writing"
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';

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
        paddingLeft: theme.spacing.unit * 0,
        paddingRight: theme.spacing.unit * 0,
        paddingTop: theme.spacing.unit * 0,
        paddingBottom: theme.spacing.unit * 0,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#e5e6e878',
        borderTop:'2px solid #257CBF',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    paper1:{
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit ,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#E5E6E8',
        borderTop:'2px solid #257CBF',
        boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    paper2:{
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ffffff',
        boxShadow: 'none',
        tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },
    paper3:{
        paddingTop: 0,
        paddingBottom: 0,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#ecececc7',
        boxShadow: '0px 0px 0px rgb(243, 243, 244), 0 2px 0px rgb(243, 243, 244)',
        tratrnsition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },

    paddinglr:{
        paddingLeft:theme.spacing.unit * 2,
        paddingRight:theme.spacing.unit * 2
    },
    colr:{
        color:'#39B2C4'
    },
    color:{
        color:'#707070'
    },
    colraddmore:{
      color:'#6B7678'
    },
    Margin:{
        marginTop:theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
    },
    Margin1:{
        marginTop:0,
        marginBottom: theme.spacing.unit * 2
    },
    Margin2:{
        marginTop:theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 2
    },
    Margin3:{
        marginTop:theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 2
    },
    submitmargin:{
            marginTop:theme.spacing.unit * 14,
            marginBottom: theme.spacing.unit * 2
    },
    margintop:{
      marginTop:theme.spacing.unit * 3
    },
    marginuploadimgtop:{
        marginTop:theme.spacing.unit
    },
    marginbottom:{
        marginBottom:theme.spacing.unit * 3
    },
    imgresponsive:{
        width:'80%',
        height:'auto'
    },
    imgres:{
        width:'100%',
        height:'auto'
    },
    imgres1:{
        width:'100%',
        height:'auto',
        borderRadius:'100%',
        backgroundColor:'#ffffff'
    },
    imgres2:{
        width:'48%',
        height:'auto',
    },
    margin24:{
        marginTop:theme.spacing.unit * 3
    },
    margintop8:{
        marginTop:theme.spacing.unit
    },
    paddingleft24:{
        paddingLeft:theme.spacing.unit * 3
    },
    tabsRoot: {
        borderTop: '1px solid #e8e8e8',
        width:'100%'
    },
    tabsIndicator: {
        background: 'transparent',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit ,
        color: '#257CBF',
        '&:hover': {
            color: '#878787',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#ffffff',
            backgroundColor:'#257CBF',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#ffffff',
        },
    },
    tabSelected: {},
    appbar:{
        boxShadow:'none',
        backgroundColor:'#ffffff',
        borderRadius:'0'
    },
    startButton:{
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
    privewButton:{
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
    browserButton:{
        marginBottom: theme.spacing.unit,
        backgroundColor: '#F8A662',
        borderRadius: 0,
        padding: '6px 40px',
        color:'#ffff',
        textTransform:'none',
        '&:hover': {
            backgroundColor: '#F8A662',
            borderColor: '#F8A662',
        },
    },
    marginbtm:{
        marginBottom:theme.spacing.unit,
        border: '2px solid #B7B6B6',
        borderStyle:'dashed',
        padding:theme.spacing.unit * 2,
        backgroundColor:'#E5E6E8'
    },
    badge: {
        border: '4px solid #E5E6E8',
        backgroundColor:'#ffffff',
        color:'#6B7678',
        position:'static',
        height:36,
        width:36
    },
    marginlr:{
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    marginlrtb:{
        marginLeft: theme.spacing.unit ,
        marginRight: theme.spacing.unit ,
        marginTop:theme.spacing.unit ,
        marginBottom:theme.spacing.unit ,
    },
    textcolor:{
        color:'#000000',
        textTransform:'none',
        textAlign: 'center'
    },
    input: {
        display: 'none',
    },
    center:{textAlign: 'center'},
    imageupload:{
       /* height:'4rem',
        width:'2rem',*/
       minWidth:'4rem',
        backgroundColor:'#FFFFFF'
    },
    bigAvatar: {
        width: '100%',
        height: 'auto',
        borderRadius:0,
        backgroundImage:'public/assets/upload.svg'
    },
});

class Writingtest extends Component {
    constructor(props) {
        super(props);
        document.title = 'writing';
        this.state = {
            value: 0,
             file: '',
            shown: true,
            imagePreviewUrl: '',
            fileName: '',
        };
        switch (this.props.location.pathname) {
            case '/writingtest/question/writing':
                this.state = {value: 0};
                break;
            case '/writingtest/instruction/writing':
                this.state = {value: 1};
                break;
            default:
                this.state = {value: 0};
                break;
        }
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    toggle() {
        this.setState({
            shown: !this.state.shown
        });
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
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
        if(e.target.files.length > 0) {
            // Accessed .name from file
            this.setState({ fileName: e.target.files[0].name });
        }

        reader.readAsDataURL(file)
        console.log(file);
    }

    render() {
      const { classes } = this.props;
        const { value } = this.state;
        const shown = {
            display: this.state.shown ? "block" : "none"
        };

        const hidden = {
            display: this.state.shown ? "none" : "block"
        }
        const { fileName } = this.state;
        let file = null;

        file = fileName
            ? ( <Typography variant="caption" className={classes.colraddmore} gutterBottom>{fileName}</Typography>)
            : ( <Typography variant="caption" className={classes.colraddmore} gutterBottom>Answer</Typography> );
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = ( <Grid container direction="row" justify="flex-start" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.center}  >
                    <Grid container direction="column" justify="center" alignItems="center" item xs={2} lg={4} md={4} sm={6} xl={3} className={`${classes.imageupload} ${classes.marginlrtb}`} >
                        <Grid item xs={2} lg={7} md={4} sm={2} xl={9}  className={classes.marginuploadimgtop}><Avatar alt="Remy Sharp" src={imagePreviewUrl} className={classes.bigAvatar} /> </Grid>
                        {file}
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" item xs={2} lg={4} md={4} sm={6} xl={3} className={`${classes.imageupload} ${classes.marginlrtb}`}>
                        <label htmlFor="contained-button-file" style={{width:'100%'}}>
                            <Grid item xs={2} lg={5} md={4} sm={5} xl={6} className={classes.marginuploadimgtop} style={{display:'inline-block'}}><img src="/assets/upload.svg" alt="" className={classes.imgres} /></Grid>
                            <Typography variant="caption" className={classes.colraddmore} gutterBottom>Add More</Typography>
                        </label>
                    </Grid>
                </Grid>)
        }
        return (
            <div className="writingtest">
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                    <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Grid container direction="row" justify="flex-start" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6}>
                                    <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <Tabs
                                            value={value}
                                            onChange={this.handleChange}
                                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                        >
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Questions" component={Link} to="/writingtest/test/writing" />
                                            <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Instructions" component={Link} to="/writingtest/instruction/writing" />
                                        </Tabs>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justify="flex-end" alignItems="center" item xs={6} lg={6} md={6} sm={6} xl={6}>
                                    <Grid item xs={1} lg={1} md={1} sm={1} xl={1}>
                                        <img src="/assets/save.svg" alt="download" className={classes.imgres2}/>
                                    </Grid>
                                    <Grid item xs={1} lg={1} md={1} sm={1} xl={1}>
                                        <img src="/assets/download.svg" alt="download" className={classes.imgres2}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3}>
                        <Paper className={classes.paper1}>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Typography  className={classes.color} gutterBottom>Question palette</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" item xs={12} lg={12} md={12} sm={12} xl={12} >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={8} md={8} sm={8} xl={8}>
                            <Grid container direction="row" justify="center" alignItems="center" item xs={8} lg={12} md={12} sm={12} xl={12} className={classes.Margin1}>
                                <Paper className={classes.paper2}>
                                    <Switch>
                                        <Route  path={`${this.props.match.path}/test/writing`} component={Writing} />
                                        <Route  path={`${this.props.match.path}/instruction/writing`} component={Instruction} />
                                        <Redirect to='/writingtest/test/writing' />
                                    </Switch>
                                    {/* <Grid container direction="row" justify="flex-start" alignItems="center"  item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <AppBar position="static" color="default" className={classes.appbar}>
                                            <Tabs
                                                value={value}
                                                onChange={this.handleChange}
                                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                                            >
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 1" component={Link} to="/writingtest/instruction" />
                                                <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="SEC 2" component={Link} to="/writingtest/instruction" />
                                            </Tabs>
                                        </AppBar>
                                        <Switch>
                                            <Route  path={`${this.props.match.path}/instruction`} component={Instruction} />
                                            <Route path={`${this.props.match.path}/instruction`} component={Instruction} />
                                            <Redirect to='/writingtest/instruction' />
                                        </Switch>
                                    </Grid>*/}
                                </Paper>
                            </Grid>

                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" item xs={3} lg={3} md={3} sm={3} xl={3} className={classes.Margin1}>
                            <Paper className={classes.paper3}>
                                <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin2}>
                                    <Grid container direction="row"  justify="center" alignItems="center" item xs={2} lg={8} md={12} sm={12} xl={7} spacing={16}>
                                        <Grid container justify="center" alignItems="center" item xs={2} lg={3} md={2} sm={3} xl={3}>
                                            <img src="/assets/timer.svg" alt="thumb" className={classes.imgres}/>
                                        </Grid>
                                        <Grid container justify="flex-start" alignItems="center" item xs={2} lg={4} md={3} sm={4} xl={3}>
                                            <Typography variant="subtitle1"  className={classes.colr}>30:00 </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container direction="column"  justify="center" alignItems="center" item xs={12} lg={12} md={12} sm={12} xl={12} className={classes.Margin3}>
                                    <Grid container direction="row"  justify="center" alignItems="center" item xs={2} lg={10} md={10} sm={10} xl={8} className={classes.marginbtm}>
                                        <Grid container justify="center" alignItems="center" item xs={2} lg={6} md={8} sm={6} xl={6} className={classes.margintop} style={hidden}>
                                            <img src="/assets/Mask Group 1.svg" alt="uploadimg" className={classes.imgres}/>
                                        </Grid>
                                        <Grid container direction="column" justify="center" alignItems="center" item xs={12} lg={10} md={12} sm={12} xl={12} style={hidden}>
                                            <Typography variant="subtitle2" className={classes.textcolor} gutterBottom>Drag & Drop Files to Upload</Typography>
                                            <Typography variant="caption" className={classes.textcolor} gutterBottom>or</Typography>
                                        </Grid>
                                        <Grid style={shown}>
                                            {$imagePreview}
                                        </Grid>
                                        {/*<div>
                                            <form onSubmit={this._handleSubmit}>
                                                <input type="file" onChange={this._handleImageChange} />
                                                <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                                            </form>
                                            {$imagePreview}
                                        </div>*/}

                                        <div style={ hidden }>
                                        <Grid container  justify="center" alignItems="center" className={classes.marginbottom} >
                                            <input
                                              accept="text/csv"
                                              className={classes.input}
                                              id="contained-button-file"
                                              multiple
                                              type="file"
                                              onChange={this._handleImageChange}
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button  component="span" className={classes.browserButton}   onClick={this.toggle.bind(this)}>
                                                    Upload
                                                </Button>
                                            </label>
                                        </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row"  justify="space-evenly" alignItems="center" className={classes.submitmargin} >
                                    <Button className={classes.privewButton}>Preview</Button>
                                    <Button className={classes.startButton} component={Link} to="/writingresult">Submit</Button>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}
Writingtest.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Writingtest);
