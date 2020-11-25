import React from 'react';
import styles from './styles';

export default function Paragraph (props) {
    return (
        <div dir="ltr" style={styles.ltr}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize} data-testid = "paragraphChildrenTest">
                    {props.children}
                </span>
            </span>
        </div>
    );
}
