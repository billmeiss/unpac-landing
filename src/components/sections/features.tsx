import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brackets, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Simplified Data Upload",
    content: "Any file format, any location, drag & drop functionality.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Templates or custom parameters",
    content:
      "Use our library of existing reporting templates or specify your own.",
    image: "/dashboard.png",
    icon: <Brackets className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Centralised packaging data.",
    content:
      "Actionable data for reporting, marketing, compliance, and business intelligence.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "ERP Integration",
    content: "Dynamically update your data.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="Features"
      className="bg-primary/10"
      subtitle="Collate your packaging data into a single source of truth."
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
