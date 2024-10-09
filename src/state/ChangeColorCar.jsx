import React, { useState } from 'react'

const ChangeColorCar = () => {
  let [urlImg, setImg] = useState("../../public/img/black-car.jpg")

  // let handleColor = () => {
  //   setImg("../../public/img/red-car.jpg")
  // }
  // let handleColor1 = () => {
  //   setImg("../../public/img/silver-car.jpg")
  // }
  // let handleColor2 = () => {
  //   setImg("../../public/img/black-car.jpg")
  // }

  // let changeCar = (color) => {
  //   if (color === "red") {
  //     setImg("../../public/img/red-car.jpg")
  //   } else if (color === "silver") {
  //     setImg("../../public/img/silver-car.jpg")
  //   } else if (color === "black") {
  //     setImg("../../public/img/black-car.jpg")
  //   }
  // }

  let changeCar = (color) => {
    let newURL = `../../public/img/${color}-car.jpg`
    setImg(newURL)
  }
  


  return (
    <>
      <h2>Change Car Color</h2>
      <div className='row'>
        <div className="col-6">
          {/* <img className='w-100' src="../../src/assets/img/black-car.jpg" alt="" /> */}
          {/* <img className='w-100' src="../../public/img/black-car.jpg" alt="" /> */}
          <img style={{ width: '100%' }} src={urlImg} alt="" />

        </div>
        <div className="col-6">
          <div>
            <button onClick={() => changeCar("red")} type="button" className="btn btn-danger me-3">Red Color</button>
            <button onClick={() => changeCar("silver")} type="button" className="btn btn-secondary me-3">Silver Color</button>
            <button onClick={() => changeCar("black")} type="button" className="btn btn-dark">Black Color</button>
          </div>




        </div>

      </div></>
  )
}

export default ChangeColorCar
