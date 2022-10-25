import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const {dataPost} = require('../models/models.data')

function UpdatePost(){

    const [content, setContent] = useState()
    const location = useLocation()
    const nav = useNavigate()

    const updatePost=()=>{
        const index = location.state.index
        dataPost[index].content = content
        sessionStorage.setItem(index,JSON.stringify(dataPost[index]))
        nav('/')
    }

    return(
        <>
            <div className="a">
            <h1>Sửa bài viết</h1>
            </div>

            <input name="idPost" id="idPost" value="{data.id}" type="hidden"/>
            <textarea onChange={evt=>setContent(evt.target.value)} className="text" rows = "5" cols = "80" name="content" id="content" type="text" placeholder="Nhập nội dung cần sửa">{location.state.content}</textarea>
            <button className="button" onClick={updatePost}>Sửa bài viết</button>
        </>
    )
}

export default UpdatePost;