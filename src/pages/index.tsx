import { Inter } from "next/font/google";
import {SideBar} from "@/components/blocks";
import {Dashboard} from "@/components/blocks/dashboard";
import {LearningBoard} from "@/components/blocks/learningboard";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
        <Dashboard />
        <LearningBoard />
    </div>
  );
}
