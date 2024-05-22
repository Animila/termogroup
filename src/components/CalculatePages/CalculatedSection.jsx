import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import OnePageCalculate from "@/components/CalculatePages/Steps/One";
import { RightInfo } from "@/components/CalculatePages/RightInfo";
import { ProgressBar } from "@/components/CalculatePages/ProgressBar";
import { TwoPageCalculate } from "@/components/CalculatePages/Steps/Two";
import { ThreePageCalculate } from "@/components/CalculatePages/Steps/Three";
import { FourPageCalculate } from "@/components/CalculatePages/Steps/Four";
import { FivePageCalculate } from "@/components/CalculatePages/Steps/Five";
import { EndPageCalculate } from "@/components/CalculatePages/Steps/End";
import {useInView} from "@/hooks/useInView";

export const CalculatedSection = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
      <motion.section
          ref={ref}
          className="flex sm:pb-[50px] md:min-h-[800px] sm:px-[10px] md:px-[160px] sm:pt-[20px] md:pt-[50px] bg-gray_dark gap-[20px] justify-between relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
      >
        <div className="sm:w-full md:w-[890px]">
          <h2 className="sm:text-[20px] md:text-[53px] sm:leading-[23px] md:leading-[56px] text-white">
            Ответьте на 5 вопроса и получите
            <span className="text-main_one"> расчет + скидку 5%</span>
          </h2>
          <ProgressBar step={step} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <SwitchSteps step={step} setStep={setStep} register={register} watch={watch} setValue={setValue} />
          </form>
        </div>
        <div className="hidden lg:block w-[290px]">
          <RightInfo />
        </div>
      </motion.section>
  );
};

const SwitchSteps = ({ step, setStep, register, watch, setValue }) => {
  switch (step) {
    case 1:
      return <OnePageCalculate setStep={setStep} register={register} watch={watch} />;
    case 2:
      return <TwoPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue} />;
    case 3:
      return <ThreePageCalculate setStep={setStep} register={register} watch={watch} />;
    case 4:
      return <FourPageCalculate setStep={setStep} register={register} watch={watch} />;
    case 5:
      return <FivePageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue} />;
    case 6:
      return <EndPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue} />;
  }
};
