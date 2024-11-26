import { useEffect, useState } from 'react';
import { api } from '~/trpc/react';
import { Step } from './Step/step';

export default function SolveSteps({ imageSrc }: { imageSrc: string }) {
    const submitMutation = api.submitImage.useMutation();
    const [steps, setSteps] = useState<string[]>([]);

    useEffect(() => {
        submitMutation.mutateAsync({ imageb64: imageSrc }).then(res => setSteps(res.steps));
    }, [imageSrc]);

    return steps.length === 0 ?
        <p style={{ color: 'white' }}>No steps found</p> :
        <div>
            {steps.map((step, index) => (
                <Step step={step} stepNumber={index} />
            ))}
        </div>
}
