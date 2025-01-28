import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import useStyles from './formstyle';
//import Filebase from 'react-file-base64';
import { createPost, updatePost } from "../../actions/posts";
import { useDispatch, useSelector  } from "react-redux";

export default function Form ( { currentId, setCurrentId } ) {
    const [postData, setPostData] = useState({
        creator : '', title : '', message:'', tags:'', selectedFile:''
    });
    const pots = useSelector((state) => state.posts.find((p) => p.id === currentId));

    useEffect(() => {
        if (pots) setPostData(pots);
    }, [pots])
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
    }

    

    const clear = () => {
        setPostData(null)
        setPostData({ creator : '', title : '', message:'', tags:'' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate 
            className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">Memory {currentId ? 'Editor':'Maker'}</Typography>
                <TextField  name="creator" variant="outlined" label="Creator" 
                fullWidth value={postData.creator} 
                onChange={(e) => setPostData({...postData, creator:e.target.value})}></TextField>
                <TextField  name="title" variant="outlined" label="Title" 
                fullWidth value={postData.title}  
                onChange={(e) => setPostData({...postData, title:e.target.value})}></TextField>
                <TextField  name="message" variant="outlined" label="Message" 
                fullWidth value={postData.message}  
                onChange={(e) => setPostData({...postData, message:e.target.value})}></TextField>
                <TextField  name="tags" variant="outlined" label="Tags" 
                fullWidth value={postData.tags}  
                onChange={(e) => setPostData({...postData, tags:e.target.value.split(',')})}></TextField>
                <div className={classes.fileInput}>
                    <input type='file' 
                    onChange={(e) => {setPostData({...postData, selectedFile:e})}}></input>
                </div>               
                <Button className={classes.buttonSubmit} 
                variant="contained" size='large' color="primary" type='submit' fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} 
                variant="contained" size='small' color="red" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

//<Filebase type='file' multiple="false" 
// onDone={(base64) => setPostData({...postData, selectedFile:base64})}/>