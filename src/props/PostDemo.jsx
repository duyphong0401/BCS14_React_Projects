import React from 'react'

const PostDemo = (props) => {

  // Destructuring (bốc tách thuốc tính đói tượng)
  // let contentObject = props.contentObject
  let {contentObject} = props

  // Optional Chaining: toán tử ? dành cho Object (kiểm tra có thuộc tính của Object hay không, nếu có thì load data, không có thì bỏ qua)

  return (
    <div className="card" >
    <div className="card-body">
        <h5 className="card-title">{contentObject?.title}</h5>
        <p className="card-text">{contentObject?.desc} <br></br>{contentObject?.view}</p>
       
    </div>
</div>
  )
}

export default PostDemo
