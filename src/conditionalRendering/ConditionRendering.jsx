import React from 'react'

const ConditionRendering = () => {
    let food = {
        id: "food001",
        name: "Tôm hùm",
        img: "https://picsum.photos/id/237/200/300",
        price: 5000,
        status: true,
    }
    // C1
    let renderStatus = () => {
        if (food.status) {
            return <span class="badge text-bg-success">Còn</span>

        } else {
            return <span class="badge text-bg-danger">Hết</span>
        }
    }

    return (
        <>
            <div className='row'>
                <div className="col-3">
                    <div className="card">
                        <img src={food.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" >{food.name}{renderStatus()}</h5>
                            {/* C2 */}
                            <h5 className="card-title" >{food.name}{food.status ? <span class="badge 
                            text-bg-success">Còn</span> : <span class="badge text-bg-danger">Hết</span>}</h5>
                            <p className="card-text">{food.price}</p>

                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default ConditionRendering

/**
 * content = `
 *   <span>
 *          ${food.status ? Còn : Hết}
 *   </span>
 * `
 * 
 */