import React from "react"
import {DashboardCard} from "@/components/blocks/card";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";


export const LearningBoard = () => {
    return (
        <div className="min-h-dvh border-l-2 p-2">
            <Card className="sm:col-span-2 border-0" x-chunk="dashboard-05-chunk-0">
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
        </div>
    )
}