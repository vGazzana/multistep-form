import React from "react";

export function useFormSteps(steps: React.ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  function nextStep() {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  }

  function previousStep() {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }
  return {
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    previousStep,
    goToStep,
  };
}
