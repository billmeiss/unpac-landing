import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brackets, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Upload any type of packaging data",
    content: "Easy to use, share unlimited files for data conversion.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Choose custom parameters",
    content:
      "Make use of our templates, or add custom fields that you need to know.",
    image: "/dashboard.png",
    icon: <Brackets className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Receive accurate data in one place.",
    content:
      "Get accurate actionable intelligence by knowing what is missing in your data.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Coming Soon: ERP Integration",
    content: "Integrate seamless into your existing workflow",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="Features"
      subtitle="Finding, collecting and organising brand data into one place."
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
