import React from "react";
import { SearchResultDto } from "../../dtos";
import styles from './RegistryListItem.module.css';

interface IProps {
    registry: SearchResultDto;
    onClick: (grid:string) => void;
}

export default function RegistryListItem({registry, onClick}:IProps) {
    return (
        <div key={registry.grid} className={styles.container}>
            <div>
                <p className={styles.name}>{registry.firstName} {registry.lastName}</p>
                <p><span className={styles.label}>Event:</span> {registry.eventType}</p>
            </div>
            <div>
                <p><span className={styles.label}>Number of Products:</span> {registry.itemCount}</p>
                <p><span className={styles.label}>ID:</span> {registry.grid}</p>
            </div>
            <div className={styles.flexCenter}>
                <button className="button bg-grey" onClick={() => onClick(registry.grid)}>Edit</button>
            </div>
        </div>
    );
}
