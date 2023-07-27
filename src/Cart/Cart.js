import React, { Fragment } from "react";
import style from "./Cart.module.css";
import { CartFill } from 'react-bootstrap-icons';
const Cart = ({ list ,RemoveCart }) => {
    return (<>
        <div className={style.iconname}>
            <div className={style.iconcontainer}>
                <CartFill className={style.Carticon} />
                <p>{list.length}</p>
            </div>

            <main>
                <div className={style.maincart}>
                    {
                        list.map(({image,name,oldPrice,offer},idx) => (
                            <Fragment key={idx}>
                                <div>
                                    <div className={style.image} style={{ backgroundImage: `url(${image})` }}>

                                    </div>

                                    <div className={style.details}>
                                        <h3>{name}</h3>
                                        <div className={style.cartfooter}>
                                            <div className={style.price}>
                                                <span>
                                                    <sub>EGP</sub>
                                                    <p>{(oldPrice*(offer/100)).toFixed(2)}</p>
                                                </span>
                                                <span>
                                                <del>{oldPrice }</del>
                                    <p> {offer}% off</p>
                                                </span>

                                            </div>
                                            <button onClick={(e)=>RemoveCart (e,idx)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.hr}></div>

                            </Fragment>

                        )
                        )
                    }
</div>
            </main>
        </div>
    </>);
}
export default Cart;