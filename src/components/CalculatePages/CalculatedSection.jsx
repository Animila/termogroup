'use client'

import {useState} from "react";
import TwoPageCalculate from "../../components/CalculatePages/Steps/Two";
import ThreePageCalculate from "../../components/CalculatePages/Steps/Three";
import FourPageCalculate from "../../components/CalculatePages/Steps/Four";
import FivePageCalculate from "../../components/CalculatePages/Steps/Five";
import EndPageCalculate from "../../components/CalculatePages/Steps/End";
import OnePageCalculate from "../../components/CalculatePages/Steps/One";
import { useForm } from "react-hook-form"
import ProgressBar from "../../components/CalculatePages/ProgressBar";
import RightInfo from "../../components/CalculatePages/RightInfo";

export const CalculatedSection = () => {
  const [step, setStep] = useState(1)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
      setValue
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return <section
      className="flex min-h-[1000px] sm:px-[10px] md:px-[160px] sm:pt-[20px] md:pt-[50px] bg-gray_dark gap-[20px] justify-between relative">
    <div className="w-[890px]">
      <h2 className="sm:text-[20px] md:text-[53px] sm:leading-[23px] md:leading-[56px] text-white">
        Ответьте на 5 вопроса и получите
        <span className="text-main_one"> расчет + скидку 5%</span>
      </h2>
      <ProgressBar step={step}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SwitchSteps step={step} setStep={setStep} register={register} watch={watch} setValue={setValue}/>
      </form>
    </div>
    <div className="hidden lg:block w-[290px]">
      <RightInfo/>
    </div>
  </section>
}

const SwitchSteps = ({step, setStep, register, watch, setValue}) => {
  switch (step) {
    case 1:
      return <OnePageCalculate setStep={setStep} register={register} watch={watch}/>
    case 2:
      return <TwoPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue}/>
    case 3:
      return <ThreePageCalculate setStep={setStep} register={register} watch={watch}/>
    case 4:
      return <FourPageCalculate setStep={setStep} register={register} watch={watch}/>
    case 5:
      return <FivePageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue}/>
    case 6:
      return <EndPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue}/>

  }
}