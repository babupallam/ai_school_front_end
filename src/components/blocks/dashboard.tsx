import React from 'react';
import {Input} from "@/components/ui/input";
import {Bell} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Progress} from "@/components/ui/progress";


const courses = [
    {
        title: "Evolutionary Computing",
        desc: " Lorem ipsum ",
        progress: 60
    },
    {
        title: "Deep Learning",
        desc: " Lorem ipsum ",
        progress: 60
    },
    {
        title: "Research and ethics",
        desc: " Lorem ipsum ",
        progress: 60
    }
]

export const Dashboard = () => {
    return (
        <div className="p-6 w-full">
            <div className="flex justify-between py-3">
                <div className="w-full">
                    <h2 className="text-2xl"> hello <span className="font-bold">Jonathan</span></h2>
                    <span> Learn something new today! </span>
                </div>
                <div className="w-2/3 flex items-center gap-3">
                    <Input type="search" placeholder="Search for courses" className="outline-0 focus:outline-none" />
                    <Bell className="h-6 w-6" />
                </div>
            </div>

            <div>
                <Card className="rounded-2xl mt-2.5">
                    <CardHeader className="pb-3">
                        <CardTitle>Learning the traditional way</CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                            Get the basics right,  choose from 40 digital degrees and learn by doing,
                            new degrees and modules added weekly,
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button>Go to class</Button>
                    </CardFooter>
                </Card>
            </div>

            <section className="flex justify-between my-6">
                <h3 className="text-xl">
                    MSc. Digital Marketing
                </h3>
                <Link href="#">
                    All Courses
                </Link>
            </section>

            <section className="flex w-full justify-between gap-4">
                {courses.map((item) => (
                    <div key={item.title} className="w-full">
                        <Card x-chunk="dashboard-05-chunk-1">
                            <CardHeader className="pb-2">
                                <CardDescription>{item.desc}</CardDescription>
                                <CardTitle className="text-4xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground">
                                    +25% from last week
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={item.progress} aria-label="25% increase" />
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </section>
        </div>
    )
}