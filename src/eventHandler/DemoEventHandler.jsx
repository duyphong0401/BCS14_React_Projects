import React from 'react'

const DemoEventHandler = () => {

    let clickLike = () => {
      console.log("Like")
    }
    let clickLikeMe = (name) => {
        console.log(`Click ${name}`)
      }

    let changeBackground = (e) => {
        // event - sự kiện có sẵn của thẻ HTML (JSX)
        // e, evt, event
        // Lấy thẻ đang được thao tác
        console.log(e.target) // toàn bộ thẻ đang được Click
        e.target.style.backgroundColor = "red"
    }  
  return (
    <>
    <h2>EventHandler</h2>
    <button onClick={clickLike} type="button" className="btn btn-info">Like</button>
    <button type="button" className="btn btn-info m-2" onClick={() =>{
        // sử dụng ẩn danh khi cần truyền tham số
        clickLikeMe("CyberSoft")
    }} >LikeName</button>
    <button onClick={changeBackground} type="button" className="btn btn-info">Change</button>


    </>
  )
}

export default DemoEventHandler

/**
 * Event Js
 * onclick
 * 
 * React
 * <button onClick = ""></button>
 * 
 */