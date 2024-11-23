import 'katex/dist/katex.min.css';
import styles from "../index.module.css";
import SolveSteps from './solveSteps';

export default function SolveContents({ imageSrc, steps }: { imageSrc: string, steps: { desc: string, code: string }[] }) {
    // build a map of variables to values by running all steps;
    const variableMap = {};
    return (
        <>
            <img src={imageSrc} alt="Captured" width="400px" />
            <div className={styles.steps}>
                <p>Steps:</p>
                <SolveSteps steps={steps} />
            </div>
        </>
    );
}
