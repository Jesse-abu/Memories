import React from "react";
import useStyles from './poststyle';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Delete } from '@mui/icons-material';
import { ThumbUpAlt } from '@mui/icons-material';
import { MoreHoriz } from "@mui/icons-material";
import moment from 'moment';
import profile from '../../../images/profile.jpeg'
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

export default function Post ({ post, setCurrentId }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <Card className={`${classes.card} ${classes.border}`}>
            <CardMedia className={classes.media} title={post.title} image={profile}/>
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.Creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:"white"}} size="small" onClick={() => {setCurrentId(post._id)}}>
                        <MoreHoriz fontSize="small"></MoreHoriz>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6">{post.tags.map((tags) => `#${tags}`)}</Typography>
                </div>
                <Typography variant="h6" className={classes.title}>{post.title}</Typography>
            <CardContent>
                <Typography variant="h6" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAlt fontSize='small' />
                    &nbsp; Like &nbsp; {post.likeCount}
                </Button>
                <Button onClick={() => dispatch(deletePost(post.id))}>
                    <Delete fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}