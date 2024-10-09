import React from 'react'

const DataBinding = () => {
    // Data Bingding: giá trị của biến, function (return string, number, boolean hoặc jsx)
    let headingTitle = "Hello CyberSoft"
    let urlImg = "https://i.pravatar.cc/"

    let student = {
        id: "SV001",
        name: "Nguyễn Văn A",
        avatar: "https://i.pravatar.cc/"
    }
    // anfn: để tạo arrow function ẩn danh
    let renderCard = () => {
      return <div className="col-4">
      {/* card-bs */}
      <div className="card" style={{ width: '18rem' }}>
          <img src={student.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{student.name}</h5>
              
          </div>
      </div>


  
  </div>
    }
    


    return (
        <>
        <h2 id='heading1'>
            {headingTitle}  
        </h2>
        <img className='w-25' src={"https://i.pravatar.cc/"} alt="" />
        <img className='w-25' src={urlImg} alt="" />
        <div className='row'>
            {renderCard()}
            {renderCard()}
        </div>
       
        </>
    )
}

export default DataBinding

/**
 * JS: DOM
 * React: Interpolation {headingTitle}
 * Function
 * let myFunction = function (params) {
 * }
 * 
 * Load trang:
 * myFunction() // dấu ngoặc tròn chạy ngay khi load giao điện
 * 
 * Khi click:
 * onclick = myFunction
 */
