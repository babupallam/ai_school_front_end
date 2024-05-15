import { Html, Head, Main, NextScript } from "next/document";
import {SideBar} from "@/components/blocks";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body>
            <div className="flex">
                <SideBar/>
                <div className="w-full h-full">
                    <Main/>
                </div>
            </div>
            <NextScript/>
        </body>
    </Html>
);
}
