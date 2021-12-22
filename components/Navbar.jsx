import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/images/telephone.png" width={30} height={30} />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now</div>
                    <div className={styles.text}>0913-974307</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/Product/1">
                            <a>Product</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/logo.png" width={160} height={69} />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>
                        <Link href="/orders/1">
                            <a>Orders</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <a>
                            <Image src="/images/cart.png" width={30} height={30} />
                            <div className={styles.counter}>2</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
