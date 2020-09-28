import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './../Img/quiz.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Cardroot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  marignAuto: {
      margin:"auto"
  },
  title: {
    flexGrow: 1,
  },
  category: {
      paddingLeft:"30px"
  },
  mode: {
      paddingRight:"50px",
      float:"right"
  },
  quizHomeBody: {
    margin:"20px"
  }
}));

export const QuizHome=({DifficultyCallBack, CategoryCallBack, quizCallback}:any)=> {
  const classes = useStyles();
  const navigate=useNavigate();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Quiz App
          </Typography>
        </Toolbar>
      </AppBar>
      
      <div className={classes.quizHomeBody}>
        <h3>Select Category:</h3>
          <Grid container>
            <Grid item xs={10} sm={8} md={3} className={classes.marignAuto}>
              <Card className={classes.Cardroot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="General Knowledge"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    General Knowledge
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{CategoryCallBack(19)}}>
                    Click here to select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={8} md={3} className={classes.marignAuto}>
              <Card className={classes.Cardroot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="Science &amp; Nature"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Science &amp; Nature
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{CategoryCallBack(17)}}>
                    Click here to select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={8} md={3} className={classes.marignAuto}>
              <Card className={classes.Cardroot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="History"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    History
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>{CategoryCallBack(23)}}>
                    Click here to select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
        <h3>Select Difficulty:</h3>
        <Grid container>
          <Grid item xs={10} sm={6} className={classes.marignAuto}>
            <Button variant="outlined" style={{width:"150px", margin:"5px 7px 20px 8px"}} color="primary" onClick={(e:React.FormEvent<EventTarget>)=>{DifficultyCallBack(e,"easy")}}>Easy</Button>
            <Button variant="outlined" style={{width:"150px", margin:"5px 7px 20px 8px"}} color="primary" onClick={(e:React.FormEvent<EventTarget>)=>{DifficultyCallBack(e,"medium")}}>Medium</Button>
            <Button variant="outlined" style={{width:"150px", margin:"5px 7px 20px 8px"}} color="primary" onClick={(e:React.FormEvent<EventTarget>)=>{DifficultyCallBack(e,"hard")}}>Hard</Button>
          </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6} sm={3} className={classes.marignAuto}>
                <Button variant="contained" color="primary" onClick={()=>{navigate("/quiz"); quizCallback()}}>Start Quiz</Button>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}
