import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import profile from './images/profile.jpeg';
import Posts from './Components/Posts/posts';
import Form from './Components/Forms/forms';

import useStyles from './appstyles';
import './index.css';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img src={profile} alt='memories' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid2 container className={classes.mainContainer} justifyContent={'space-around'} alignItems={'stretch'} spacing={3}>
            <Grid2 item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
