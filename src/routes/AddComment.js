import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const {dataPost} = require('../models/models.data')

function AddComment(){

    const [comment, setComment]=useState();
    const location = useLocation();
    const index = location.state.index;
    const nav = useNavigate();

    const addComment =()=>{
        dataPost[index].comment.push(comment)
        sessionStorage.setItem(index,JSON.stringify(dataPost[index]))
        nav('/')
    }

    return(
        <>
            <div className="a">
            <h1>Thêm bình luận</h1>
            </div>

            <textarea onChange={evt=>setComment(evt.target.value)} className="text" rows = "5" cols = "80" name="comment" id="comment" type="text" placeholder="Nhập nội dung bình luận"></textarea>
            <button onClick={addComment} className="button">Thêm bình luận</button>
        </>
    )
}

export default AddComment;