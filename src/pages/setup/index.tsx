import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { Currency } from '@/components/steppers/currency';
import Balance from '@/components/steppers/balance';

const steps = ['Currency', 'Balance', 'Finish'];

export default function SetUp() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    return (
        <div className='setup-container'>
            <div>
                <Box>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '92px' }}>
                        {steps.map((label, index) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            if (isStepOptional(index)) {
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps} sx={{ minWidth: '400px' }}>{label}</StepLabel>
                                    {activeStep === 0 && label === 'Currency' && <Currency onNext={handleNext} />}
                                    {activeStep === 1 && label === 'Currency' && <Balance onNext={handleNext} />}
                                    {activeStep === 2 && label === 'Currency' && <div>hello1112341234311</div>}
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </div>
        </div>
    )
}