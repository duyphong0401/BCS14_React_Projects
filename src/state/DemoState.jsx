import React, { useState } from 'react'

const DemoState = () => {

    // Sử dụng state để khi data thay đổi UI tự render lại (useState)
    // Hooks: các hàm giúp xử lý nghiệp vụ của functional component
    // useState: B1: xác định dữ liệu lưu vào state (thay đổi người dùng thao tác)
    // B2: Tạo hàm giúp đổi giá trị của state (setIsLogin -setState)
    // B3: Xác định nơi/ thời điểm gọi hàm

    // let isLogin = false

    //TODO B1: xác định dữ liệu lưu vào state (thay đổi người dùng thao tác)
    // useState trả về array, chứa 2 phần tử [biến cần đổi, hàm giúp đổi giá trị]
    // Destructuring (JS): bóc tách phần tử
    let [isLogin, setLogin] = useState(false)
    let [fs, setFontSize] = useState(20)
    console.log(isLogin)

    let login = () => {
        if (isLogin) {
            return <span className="badge text-bg-info">Hello User</span>

        }
        return <button type="button" className="btn btn-primary" onClick = {handleLogin}>Login</button>



    }

    // Khi click vào button login => chuyển giá trị biến isLogin thành true => 
        //UI sẽ tự render lại để hiển thị nội dung sau đăng nhập
    let handleLogin = () => {
        // isLogin = true
        // console.log(isLogin)
        // login() Hiển thị lại lên UI (JS)

        //TODO: Sử dụng setLogin để đổi giá trị và render lại UI => render toàn bộ web
        setLogin(true)

    }

    // Render UI => chỉ chạy 1 lần khi load web
    // style inline của react nhận vào object (độ ưu tiên code cao, ít thuộc tính css, giá trị thuộc tính cần thay đổi)
let styleObject ={
    fontSize: '20px',
    color: 'blue'
}

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div>
                            {login()}
                        </div>
                    </div>
                </div>
            </nav>
            <p style={styleObject}>Test</p>
            <p style={{ fontSize: `${fs}px`, color: 'red' }}>Test</p>
            <button className='btn btn-success' onClick={() => {
                setFontSize(fs + 1)
            }}>+</button>
            <button className='btn btn-danger'onClick={() => {
                setFontSize(fs - 1)
            }}> -</button>
        </>
    )
}

export default DemoState


