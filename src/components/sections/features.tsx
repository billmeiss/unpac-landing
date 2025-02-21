import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import {
  BarChart3,
  Brackets,
  Brain,
  FileText,
  LineChart,
  Target,
} from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";

const data = [
  {
    id: 1,
    title: "Select Your Data Purpose",
    content:
      "Choose from existing reporting templates and customize parameters for your specific reporting needs",
    image: "/paramaters.gif",
    icon: <Target className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Simplified Data Upload",
    content:
      "Drag-and-drop files of any format into our secure portal, or connect via API",
    image: "/drag-drop.gif",
    icon: <IoDocument className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Unpac Unifies Your Data",
    content:
      "Our software automatically combines and validates your raw and scattered packaging information, flagging any gaps or conflicting data fields",
    image: "/ssot.gif",
    icon: <RiRobot2Line className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Gather Missing Data",
    content:
      "Leverage our dynamic tools to quickly and easily gather outstanding data from internal stakeholders and suppliers",
    image: "/missing-data.gif",
    icon: <FaMagnifyingGlass className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section className="bg-primary/10" subtitle="Using Unpac is simple">
      <Features collapseDelay={20000} linePosition="bottom" data={data} />
    </Section>
  );
}
