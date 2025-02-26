"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Accurate data ensures compliance",
    description:
      "Our unmatched accuracy enables precise compliance reporting and mitigation of business risk. Unpac future-proofs your packaging operations and ensures you're always audit-ready.",
    className: "hover:bg-primary/10 transition-all duration-500 ease-out",
  },
  {
    title: "Leverage technology to save time and money",
    description:
      "Whether you have 50 or 50,000 SKUs, our software is 150x faster than manual collection - saving your team hundreds of hours and cutting up to 85% of associated costs.",
    className:
      "order-3 xl:order-none hover:bg-primary/10 transition-all duration-500 ease-out",
  },
  {
    title: "Designed for packaging, easy to use",
    description:
      "Built by packaging experts, our software is fit for purpose. It is intuitive and simple so that anyone across the business, whatever their role, can use it with confidence.",
    className:
      "order-3 xl:order-none hover:bg-primary/10 transition-all duration-500 ease-out",
  },
];

export default function Component() {
  return (
    <Section subtitle="Why Unpac?" className="">
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 text-gray-500 md:grid-cols-3 xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-10 rounded-2xl",
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
              <h3 className="font-semibold mb-2 text-xl text-primary">
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
