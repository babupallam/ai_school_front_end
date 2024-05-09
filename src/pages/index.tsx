import Image from "next/image";
import { Inter } from "next/font/google";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
