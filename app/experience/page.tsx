import { ArrowLeft } from "lucide-react";
import Button from "../components/button";

export default function Experience() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-400 p-4">
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
                            title="Associate, Learning Management"
                            company="SAP"
                            date="August 2022 - Present"
                        />
                        <ExperienceItem
                            title="Lecturer, Guest"
                            company="The Ohio State University"
                            date="July 2024 - Present"
                        />
                        <ExperienceItem
                            title="Intern, Learning & Development"
                            company="Vertiv"
                            date="May 2022 - August 2022"
                        />
                        <ExperienceItem
                            title="Intern, Learning Design"
                            company="Fisher College of Business"
                            date="August 2020 - May 2022"
                        />
                        <ExperienceItem
                            title="Intern, Learning Design"
                            company="Hyland Software"
                            date="May 2021 - December 2021"
                        />
                    </div>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
                        Education
                    </h2>
                    <div className="space-y-6">
                        <ExperienceItem
                            title="MBA, Marketing"
                            company="Kelley School of Business, Indiana University"
                            date="May 2027 (Expected)"
                        />
                        <ExperienceItem
                            title="MS, Learning Technologies"
                            company="The Ohio State University"
                            date="August 2024"
                        />
                        <ExperienceItem
                            title="BS, Technical Education and Training"
                            company="The Ohio State University"
                            date="August 2022"
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
