import { ArrowLeft } from "lucide-react";
import Button from "../components/button";

export default function Experience() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-blue-600 p-4">
            <main className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="p-6">
                    <Button href="/">
                        <ArrowLeft className="mr-2 size-4" /> Back to Home{" "}
                    </Button>

                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        Experience
                    </h1>

                    <div className="space-y-6">
                        <ExperienceItem
                            title="Partner, Business Development"
                            company="CSM Family Ventures"
                            date="November 2024 – Present"
                        />
                        <ExperienceItem
                            title="Office of the President"
                            company="Kerna Health"
                            date="December 2022 – Present"
                        />
                        <ExperienceItem
                            title="Administrative Assistant"
                            company="Besa Sharrah for Senate"
                            date="February 2024 – November 2024"
                        />
                    </div>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
                        Education
                    </h2>
                    <div className="space-y-6">
                        <ExperienceItem
                            title="MBA, Business Analytics"
                            company="Fisher College of Business, The Ohio State University"
                            date="August 2024"
                        />
                        <ExperienceItem
                            title="BA, Criminal Justice & Criminology"
                            company="The Ohio State University"
                            date="May 2023"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

function ExperienceItem({
    title,
    company,
    date,
}: {
    title: string;
    company: string;
    date: string;
}) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
    );
}
