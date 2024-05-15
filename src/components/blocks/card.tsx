import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const DashboardCard = () => {
 return(
     <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
            <CardTitle>Your Materials </CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless
                Management and Insightful Analysis.
            </CardDescription>
        </CardHeader>
        <CardFooter>
            <Link href="/material">
                <Button>Study new material</Button>
            </Link>
        </CardFooter>
    </Card>
 )
}