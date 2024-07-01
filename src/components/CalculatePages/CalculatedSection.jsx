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
import { useInView } from "@/hooks/useInView";

export const CalculatedSection = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const [ref, isInView] = useInView({ threshold: 0.1 });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            console.log('23456 ', data )
            const response = await fetch('https://amoconnect.ru/amo-kazfibrapfz/api/slug/calculation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "url": "https://termogroup.kz",
                    "phone": data.phone,
                    "name": data.name,
                    "lead_name": "заявка с сайта",
                    "lead_fields": {
                        "66749": ['алматы', 'астана', 'семей', 'атырау', 'павлодар', 'караганда', 'усть-каменогорск', 'актобе', 'уральск', 'тараз', 'кызылорда', 'талдыкорган'].includes(data.city.toLowerCase().trim()) ? data.city : undefined,
                        "353873": data.size,
                        "836825": data.width
                    },
                    "contact_tags": {
                        "836831": data.social
                    },
                    "contact_fields": {
                        "836831": data.social,
                        "66503": true
                    },
                    "lead_comment": `Город: ${data.city}`
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.section
                ref={ref}
                className="flex sm:pb-[50px] md:min-h-[800px] sm:px-[10px] md:px-[15vw] sm:pt-[20px] md:pt-[50px] bg-white gap-[20px] justify-between relative"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
            >
                <div className="sm:w-full md:w-[890px]">
                    <h2 className="sm:text-[20px] md:text-[53px] sm:leading-[23px] md:leading-[56px] text-black">
                        Спасибо за ваши ответы! Ваша заявка уже обрабатывается!
                    </h2>
                </div>
            </motion.section>
        );
    }

  return (
      <motion.section
          ref={ref}
          className="flex sm:pb-[50px] md:min-h-[800px] sm:px-[10px] lg:px-[5vw] 2xl:px-[15vw] sm:pt-[20px] md:pt-[50px] bg-white gap-[20px] justify-between relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
      >
        <div className="sm:w-full md:w-[890px]">
          <h2 className="sm:text-[24px] md:text-[53px] font-bold sm:text-center sm:leading-[100%] md:leading-[56px] text-black">
              Ответьте на 3 вопроса и получите
              <span className="text-main_one"> расчет + скидку 5%</span>
          </h2>
          <ProgressBar step={step} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <SwitchSteps step={step} setStep={setStep} register={register} watch={watch} setValue={setValue} isLoading={isLoading} />
          </form>
        </div>
        <div className="hidden lg:block w-[290px]">
          <RightInfo />
        </div>
      </motion.section>
  );
};

const SwitchSteps = ({ step, setStep, register, watch, setValue, isLoading }) => {
  switch (step) {
    case 1:
      return <OnePageCalculate setStep={setStep} register={register} watch={watch} />;
    case 2:
      return <TwoPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue} />;
    case 3:
      return <ThreePageCalculate setStep={setStep} register={register} watch={watch} />;
    case 4:
      return <EndPageCalculate setStep={setStep} register={register} watch={watch} setValue={setValue} isLoading={isLoading} />;
    default:
      return null;
  }
};
