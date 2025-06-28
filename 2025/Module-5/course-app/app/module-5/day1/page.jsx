'use client'
import { useEffect, useState } from "react"
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";




export default function Day1() {


    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        Prism.highlightAll();
    }, []);


    return (
        <div className="bg-purple-100 h-auto pb-20 text-black">
            <h1 className="text-center text-2xl pt-24 font-bolds">Module 5: Day 1</h1>
            <div className="card w-1/2 card-lg m-auto mt-25 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Next.js</h2>
                    <p>
                        Next.js is a React framework that simplifies building fullstack applications. Some of the main features include:
                    </p>
                    <ul className="list-disc ml-24">
                        <li>
                            server side rendering
                        </li>
                        <li>
                            static site generation
                        </li>
                        <li>
                            file based routing
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">App Router vs Page Router </h2>
                    <p>
                        Next.js comes with two (2) routing systems: the <strong>App Router</strong> and the <strong>Page Router</strong>.
                    </p>
                    <ul className="list-disc ml-24">
                        <li>
                            <strong>App Router:</strong> Uses the {" "} <code className="language-jsx">app/</code> directory and support React Server Components, layouts, and nested routing.
                        </li>
                        <li>
                            <strong>Page Router:</strong> The traditional routing system that uses the <code className="language-jsx">pages/</code> directory. It is simpler but lacks some of the advanced features of the App Router.
                        </li>
                        <li>
                            <strong>Which One Do We Use?:</strong> Next.js recommends the newer App Router because of it flexibility and feature offerings. Page router is still supported and Next.js has mentioned that they do not plan on deprecating it anytime soon.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Portfolio Project</h2>
                    <p>
                        A portfolio is essential for showcasing your skills and projects to potential employers or clients. It is a good way to:
                    </p>
                    <ul className="list-disc ml-24">
                        <li>
                            Showcase your work
                        </li>
                        <li>
                            Stand out
                        </li>
                        <li>
                            Practice
                        </li>
                    </ul>
                    <p>
                        We are going to use this module to create a portfolio that showcases your development style and skills.
                    </p>
                </div>
            </div>

            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Goal of Autonomy</h2>
                    <p>
                        For this module we are going to exercise our autonomy for our portfolio project. Remember this is your portfolio and it is supposed to showcase who you are as a developer and what you have to offer. While you will be given instruction and guidance on assignments, you will be expected to take your project in a direction of your choose.
                    </p>
                    <br /><br />
                    <p>This will also include throughout some of the step-by-step instructions. Sometimes we will present instructions and that may not be completely thorough and you will be expected to complete task based on that. This is to give you that feel of getting real life instructions / assignments and being expected to be able to produce based on that.</p>
                    <br /><br />
                    <p><strong>OF COURSE WE ARE ALWAYS HERE FOR SUPPORT</strong></p>

                </div>
            </div>
            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Project Kick Off</h2>
                    <ul className="list-disc ml-24">
                        <li>
                            Initialize your project with <code className="language-jsx">{`npx create-next-app@latest <project name>`}</code>
                        </li>
                        <li>
                            Select the following prompts:
                            <ul className="ml-4 list-disc">
                                <strong>
                                    <li>
                                        TypeScript - NO
                                    </li>
                                    <li>
                                        ESLint - YES
                                    </li>
                                    <li>
                                        TailwindCSS - YES
                                    </li>
                                    <li>
                                        Code Inside a 'src' Directory - YOUR CHOICE
                                    </li>
                                    <li>
                                        App Router - YES
                                    </li>
                                    <li>
                                        Turbopack - NO
                                    </li>
                                    <li>
                                        Customize import alias - NO
                                    </li>
                                </strong>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
                <div className="card-body">
                    <h2 className="card-title">Creating Layouts & Pages</h2>
                    <p>
                        Next.js uses file based routing. Meaning that your routes are created by using folders and nested folders to create your URL segment.
                    </p>
                    <p>
                        Next.js uses the <code className="language-jsx">page.jsx</code> file inside of a folder to export a React component. This makes your route accessible. You can also next folders inside of each other.
                    </p>
                    <div className="border-l-2">
                        <p>
                            -folder1
                        </p>
                        <div className="ml-3 border-l-2">
                            <p>-Layout.jsx</p>
                            <p>-page.jsx</p>
                            <p>-folder2</p>
                            <div className="ml-3 border-l-2">
                                <p>-page.jsx</p>
                                <p>-folder3</p>
                                <div className="ml-3 border-l-2">
                                    <p>-folder4</p>
                                    <div className="ml-3 border-l-2">
                                    <p>-layout.jsx</p>
                                        <p>-page.jsx</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div onClick={() => setIsHidden(!isHidden)}>
                        {isHidden && "Show"}
                        <code className={`${isHidden ? "hidden" : "language-jsx"}`}>localhost:3000/folder1/folder2/folder3/folder4</code>
                    </div>
                </div>
            </div>
        </div>
    )
}