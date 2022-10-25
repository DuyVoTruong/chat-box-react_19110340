import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
const {dataPost} = require("../models/models.data");
let {idPost} = require("../models/models.data");

function Home(){
    const [data,setData] = useState([]);
    const nav = useNavigate();

    const addPost =()=>{
        nav('/addPost');
    }

    const deletePost =(index)=>{
        if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?") == true){
            const tempData = [... data];
            tempData.splice(index,1)
            dataPost.splice(index,1)
            sessionStorage.clear()
            for(let i=0;i<tempData.length;i++){
                sessionStorage.setItem(i,JSON.stringify(tempData[i]))
            }
            setData(tempData)
        }
    }

    const addComment =(index)=>{
        nav('/addComment', {state:{index:index}})
    }

    const updatePost =(index)=>{
       nav('/updatePost', {state:{index:index, content:dataPost[index].content}})
    }

    useEffect(()=>{
        if(dataPost.length==0){
            const tempData=[]
            for(let i=0;i<sessionStorage.length;i++){
                tempData.push(JSON.parse(sessionStorage.getItem(i)))
                dataPost.push(JSON.parse(sessionStorage.getItem(i)))
            }
            setData(tempData);
        }
        else{
            setData(dataPost)
        }
        
    }, [])

    return (
        <>
            <div className="a">
            <h1>Danh sách các bài viết</h1>
            </div>

            <div className="bottom">
            <label>Thêm bài viết mới:</label>
            </div>
            <div>
            <input className="buttonAdd" value="Thêm" type="button" onClick={addPost}/>
            </div>

            {data.map((d,index) =>{
                return(
                    <div className="borderContent">
                        <p className="content">{d.content}</p>

                        <div className="borderComment">
                            <label>Bình luận</label>
                            {d.comment.map(comment=>{
                                return (<p className="comment">{comment}</p>)
                            })}
                        </div>

                        <div className="button">
                            <input className="marginButton" value="Xóa bài viết" type="button" onClick={()=>deletePost(index)}/>
                            <input className="marginButton" value="Sửa bài viết" type="button" onClick={()=>updatePost(index)}/>
                            <input className="marginButton" value="Thêm bình luận" type="button" onClick={()=>addComment(index)}/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Home;