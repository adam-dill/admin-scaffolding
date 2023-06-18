import React from 'react'
import { ProductDto } from '../../dtos'
import styles from './ProductListItem.module.css';

interface IProps {
    product: ProductDto;
    onClick: ()=> void;
}

export default function ProductListItem({product, onClick}:IProps) {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.name}>{product.name}</p>
                <p>{product.has} of {product.wants} purchased.</p>
            </div>
            <div className={styles.flexCenter}>
                <button className="button bg-grey" onClick={onClick}>Edit</button>
            </div>
        </div>
    )
}
