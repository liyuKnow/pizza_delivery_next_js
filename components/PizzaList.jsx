import React from 'react'
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel tempore nihil id praesentium quae, ipsum reiciendis incidunt quasi. Deserunt totam velit consequuntur eveniet exercitationem architecto sequi, explicabo minus eligendi.
                Amet dolorem magni molestias minima odit ut explicabo laborum eos. Sint quaerat corrupti expedita reiciendis. Animi laudantium quam minima illum ex molestias, ad illo asperiores expedita, rerum pariatur nostrum similique.</p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList
