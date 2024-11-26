import 'katex/dist/katex.min.css';
import styles from "./solveContents.module.css";
import SolveSteps from './SolveSteps/solveSteps';

export default function SolveContents({ imageSrc, setImageSrc }: { imageSrc: string, setImageSrc: Function }) {
    return (
        <>
            <img src={imageSrc} className={styles.image} alt="Captured" />
            <div className={styles.steps}>
                <p>Steps:</p>
                <SolveSteps imageSrc={imageSrc} />
            </div>
            <button onClick={() => {
                setImageSrc("");
            }} className={styles.button}>New Problem</button>
        </>
    );
}
