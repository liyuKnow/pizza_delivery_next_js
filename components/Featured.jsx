import React, { useState } from "react";
import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/images/featured3.png",
        "/images/featured3.png",
        "/images/featured3.png",
    ]

    const handleSlideArrow = (direction) => {
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : 2)
        } else {
            // images.length + 1
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    console.log(index)
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleSlideArrow('1eft')}>
                <Image src={'/images/arrowl.png'} alt="Featured" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw` }}>
                {images.map((image, index) => (
                    <div className={styles.imgContainer} key={index}>
                        <Image
                            src={image}
                            alt="Featured"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleSlideArrow('right')}>
                <Image src={'/images/arrowr.png'} alt="Featured" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Featured
