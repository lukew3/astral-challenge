import { useEffect, useState } from 'react';
import { api } from '~/trpc/react';
import { Step } from './Step/step';

export default function SolveSteps({ imageSrc }: { imageSrc: string }) {
    const submitMutation = api.submitImage.useMutation();
    const [steps, setSteps] = useState<string[][]>([]);

    useEffect(() => {
        if (imageSrc === "") return;
        submitMutation.mutateAsync({ imageb64: imageSrc }).then(res => setSteps(res.steps));
    }, [imageSrc]);

    return steps.length === 0 ?
        <p style={{ color: 'white' }}>Loading, please wait around 10 seconds.</p> :
        <>
            {steps.map((step, index) => (
                <Step
                    step={step}
                    stepNumber={index}
                    key={index}
                />
            ))}
        </>
}
