import { useFormSteps } from "./hooks/useFormSteps";

function App() {
  const {
    steps,
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    nextStep,
    previousStep,
    goToStep,
  } = useFormSteps([<div>Step 1</div>, <div>Step 2</div>]);

  return (
    <section>
      <form>
        <div>
          <p>
            {currentStepIndex + 1}/{steps.length}
          </p>
        </div>
        <div>{step}</div>
        <div>
          {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              Back
            </button>
          )}

          <button type="button" onClick={nextStep}>
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
