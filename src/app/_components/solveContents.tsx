import 'katex/dist/katex.min.css';
import styles from "../index.module.css";
import SolveSteps from './solveSteps';

export default function SolveContents({ imageSrc, setImageSrc, steps, setSteps }: { imageSrc: string, setImageSrc: Function, steps: { desc: string, code: string }[], setSteps: Function }) {
    return (
        <>
            <img src={imageSrc} className={styles.image} alt="Captured" />
            <div className={styles.steps}>
                <p>Steps:</p>
                { steps.length != 0 ?
                    <SolveSteps steps={steps} /> :
                    <p style={{ color: 'white' }}>Calculating, please wait...</p>
                }
            </div>
            <button onClick={() => {
                setImageSrc("");
                setSteps([]);
            }} className={styles.button}>New Problem</button>
        </>
    );
}
