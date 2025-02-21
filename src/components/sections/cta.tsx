import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NumberTicker } from "../magicui/ticker";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      subtitle="Its time to act"
      className="bg-primary/10 text-black text-center rounded-xl py-16"
    >
      <br />

      <span className="text-black text-center mb-10 text-3xl font-extrabold">
        <NumberTicker
          value={(() => {
            const now = new Date();
            let deadline = new Date(now.getFullYear(), 2, 31); // March 31st
            if (now > deadline) {
              deadline = new Date(now.getFullYear() + 1, 2, 31);
            }
            return Math.ceil(
              (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
            );
          })()}
        />{" "}
        days until Oregon Packaging EPR reporting deadline.
      </span>
      <br />
      <br />

      <span className="text-black mt-15 text-center text-2xl font-semibold">
        Establish your packaging database baseline now to futureproof your
        business.
      </span>
      <div className="flex flex-col mt-14 w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          href="https://calendly.com/leelubner/unpac-packaging-epr-data-collection-trial"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full sm:w-auto text-background text-lg flex gap-2"
          )}
        >
          Try for free
        </Link>
      </div>
    </Section>
  );
}
