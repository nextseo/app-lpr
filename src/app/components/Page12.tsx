import React from "react";

interface pageProps {
  setPage: (test: number) => void;
}
const Page12: React.FC<pageProps> = () => {
  return (
    <div>
      <h2 className="text-3xl">Criteria For Terminating a Session</h2>

      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <section className="w-full">
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Patient request to stop
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Physical or verbal manifestations of severe fatigue
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Shortness of breath, wheezing, leg cramps, or claudication
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Moderate to severe angina or, frequently used Angina and Dyspnea Rating Scales = grade 3 -4
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Dislocated of Endotracheal tube
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Patient-ventilator asynchrony
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Signs of poor perfusion
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Patient sedation or coma (RASS ≤ -3) or agitation requiring addition or escalation of sedative medication (RASS {`>`} 2)
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Heart rate {`>`} 70% age predicted maximum heart rate
          </span>
        </section>

        <section className="w-full">

        <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> {`>`} 20% decrease in resting heart rat
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Systolic blood pressure = {`>`} 180 mmHg
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Systolic blood pressure = {`>`} 180 mmHg
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> MAP {`<`} 65 mmHg; {`>`}110 mmHg
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Oxygen saturation = {`<`} 90%
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" />  New onset dysrhythmia, MI or arrhythmia 
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> ST elevation ( {`>`} 1.0 mm) in leads without Q waves
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Sustained ventricular tachycardia
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Development of bundle branch block that cannot be distinguished from ventricular tachycardia
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" /> Central nervous system symptoms
          </span>
        </section>
      </div>
    </div>
  );
};

export default Page12;
