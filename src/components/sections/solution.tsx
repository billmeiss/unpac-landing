"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Purpose Built for packaging data",
    description:
      "Our platform is designed around packaging compliance and sustainability criteria. ",
    className: "hover:bg-primary/10 transition-all duration-500 ease-out",
  },
  {
    title: "Multi-stakeholder Approach",
    description:
      "Our platform is collaborative. Designed to streamline engagement and the sharing of data between producers, suppliers and other key stakeholders.",
    className:
      "order-3 xl:order-none hover:bg-primary/10 transition-all duration-500 ease-out",
  },
  {
    title: "Data Accuracy ",
    description: "Drive actionable outcomes from a reliable platform.",
    className:
      "md:row-span-2 hover:bg-primary/10 transition-all duration-500 ease-out",
  },
  {
    title: "Saving you time & money",
    description:
      "Deploy your team to do high value work, while we handle the grunt work.",
    className:
      "md:row-span-2 hover:bg-primary/10 transition-all duration-500 ease-out",
  },
];

export default function Component() {
  return (
    <Section
      title="Why Unpac?"
      subtitle="Built to solve a multi-stakeholder problem, by packaging experts."
      description="We recognize that the packaging industry struggles with siloed data, poor collaboration, and a lack of purpose-built technology for data collection."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 text-gray-500 md:grid-cols-4 xl:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-32 w-full from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
