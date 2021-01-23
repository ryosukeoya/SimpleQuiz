import React from 'react';
import QuizStyle from '../style/QuizStyle';
// import computer from '../images/computer.jpg';
import ImageStyle from '../style/ImageStyle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <QuizStyle>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <ImageStyle src={computer} alt="computer"></ImageStyle> */}
          </Paper>
        </Grid>
      </div>
    </QuizStyle>
  );
}
