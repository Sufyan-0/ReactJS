import { useState } from "react";
import { SlOptions } from "react-icons/sl";

export default function Post (props){
    // console.log(props)
    let [like , setLike] = useState(0)
    let [commit , setCommit] = useState(0)
    let [share , setShare] = useState(0)
    return(<>
            <div className="post">
                <div className="header">
                    <div className="user">
                    <img className="postImg" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" alt="" />
                   <div>

                   <h3 className="name">{props.name} </h3>
                   <p className="time">20mint ago</p>
                   </div>
                    </div>
                 
                   
                    <i  style={{cursor : "pointer"}} className="icon"><SlOptions /></i>
                </div>
                    <div style={{cursor : "alias"}} className="caption">Israel and Iran conflict</div>
                <div className="body">
                    <img src="https://www.frstrategie.org/sites/default/files/styles/image_par_defaut/public/images/publications/notes/2023/202321.jpg?h=bb221038&itok=06i5xq-0" alt="" />

                </div>
                <div  className="footer">
                    <h3 style={{textDecoration : "none"}} onClick={()=>{setLike(like+1)}} className="like">Like {like}</h3>
                    <h3 style={{textDecoration : "none"}} onClick={()=>{setCommit(commit+1)}}  className="commit">Commit {commit}</h3>
                    <h3 style={{textDecoration : "none"}} onClick={()=>{setShare(share+1)}} className="share">Share {share}</h3>
                </div>

            </div>
        
        </>)
}