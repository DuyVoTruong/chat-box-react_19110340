import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
let {idPost} = require('../models/models.data');
const {dataPost} = require('../models/models.data');

function AddPost(){

    const [content, setContent] = useState();
    const nav = useNavigate();

    const addPost =()=>{
        dataPost.push({"id":idPost,"content":content,"comment":[]})
        sessionStorage.setItem(dataPost.length-1, JSON.stringify({"id":idPost,"content":content,"comment":[]}))
        idPost = idPost+1;
        nav('/')
    }

    useEffect(()=>{
        if(sessionStorage.length==0){
            idPost=0
        }
        else{
            idPost=parseInt(JSON.parse(sessionStorage.getItem(sessionStorage.length-1)).id)+1
        }
    },[])

    return(
        <>
            <div className="a">
            <h1>Thêm bài viết</h1>
            </div>

            <textarea onChange={evt=>setContent(evt.target.value)} className="text" rows = "5" cols = "80" name="content" id="content" type="text" placeholder="Nhập nội dung bài viết"></textarea>
            <button className="button" onClick={addPost}>Thêm bài viết</button>
            
        </>
    )
}

export default AddPost;