import { InlineMath } from 'react-katex';
import styles from './step.module.css';

export function Step({ step, stepNumber }: { step: string, stepNumber: number }) {
    return (
        <div key={stepNumber} className={styles.step}>
            <span>{stepNumber + 1})</span>
            <span style={{ flexGrow: 2 }}>
                {step.split('$$').map((part, index) => {
                    if (index % 2 === 0) {
                        return <span key={index}>{part}</span>;
                    } else {
                        return <InlineMath key={index}>{part}</InlineMath >;
                    }
                })}
            </span>
        </div>
    );
}