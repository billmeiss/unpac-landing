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
      "Our platform provides a purpose-built solution for packaging data collection, enabling brands to collect, manage, and analyze data in one place.",
    className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
  },
  {
    title: "Multi-stakeholder from Day 1",
    description:
      "The packaging industry is inherently multi-stakeholder, and thus requires engaging not only brands but also suppliers and other key stakeholders who hold critical, often missing, data.",
    className:
      "order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
  },
  {
    title: "Accurate Data",
    description:
      "Without accurate data brands can’t make actionable decisions. It’s the holy grail, the primary ingredient for any understanding, choices, or action to take place.",
    className:
      "md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
  },
  {
    title: "Save time & money",
    description:
      "Use your time to do work technology can’t do, and let technology do the work you shouldn’t be doing.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
  },
];

export default function Component() {
  return (
    <Section
      title="Solution"
      subtitle="Built to solve a multi-stakeholder problem in collecting data, by packaging experts."
      description="The packaging industry struggles with siloed data, poor collaboration, and a lack of purpose-built technology for data collection. Solving the data collection problem is inherently multi-stakeholder, and thus requires engaging not only brands but also suppliers and other key stakeholders who hold critical, often missing, data."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
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
