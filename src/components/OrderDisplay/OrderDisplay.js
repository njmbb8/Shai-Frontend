import React from "react";
import { Offcanvas, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderItem from "../OrderItem/OrderItem";

function OrderDisplay({showOrder, setShowOrder}){
    const order = useSelector(state => state.order.orderItems)
    const arts = useSelector(state => state.arts)
    const orderItems = order.map((item) => {
        return arts.filter((arts) => {
            return arts.id === item.arts_id
        })
    })

    const itemRows = orderItems[0].map((item) => <OrderItem key={item.id} orderItem={item} />)

    return(
        <>
            <Offcanvas show={showOrder} onHide={() => setShowOrder(!showOrder)} placement="end">
                <ListGroup>
                    {itemRows}
                </ListGroup>
            </Offcanvas>
        </>
    )
}

export default OrderDisplay