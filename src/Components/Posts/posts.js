import React from "react"
import Post from "./Post/post"
import { useSelector } from "react-redux";
import { Grid2, CircularProgress } from '@mui/material';

import useStyles from './post_style';

export default function Posts ({ setCurrentId }) {
    const classes = useStyles();
    const pots = useSelector((state) => state.posts);
    
    console.log(pots)
    return (
        ! pots.length ? <CircularProgress />:
        <Grid2 container className={`${classes.mainContainer} ${classes.actionDiv}`}>
            {pots.map((post) => (
                <Grid2 key={post._id} className={classes.smMargin} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid2>
            ))}   
        </Grid2>
    )
}