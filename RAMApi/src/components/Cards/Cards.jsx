import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss'


function Cards({ results, page }) {

    let display;
    console.log(results);

    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x


            return (
                <Link
                    style={{ textDecoration: "none" }}
                    to={`${page}${id}`}
                    key={id} className="col-4 mb-4 position-relative text-dark">
                    {/* {name} */}
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img}  img-thumbnail`} />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4"> {name}</div>
                            <div className="">
                                <div className="fs-6">Last Lcocation</div>
                                <div className="fs-5">{location.name}  </div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge}  position-absolute badge text-bg-danger`} > {status} </div>
                            )
                        } else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge}  position-absolute badge text-bg-success`} > {status} </div>
                            )
                        } else if (status === "unknown") {
                            return (
                                <div className={`${styles.badge}  position-absolute badge text-bg-secondary`} > {status} </div>
                            )
                        } else {
                            return (
                                <div className={`${styles.badge}  position-absolute badge text-bg-dark`} > --- </div>
                            )
                        }
                    })()}
                    {/* <div className={`${styles.badge}  position-absolute badge text-bg-danger`} > {status} </div> */}
                </Link >
            );
        });
    }
    else { display = "No Character Found:/" }

    return (< >{display}</>)
}

export default Cards