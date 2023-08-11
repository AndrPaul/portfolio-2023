import React, { useState } from "react";
import "./home.scss";
import CV from '../../assets/docs/Paul-Andrica-CV.pdf'
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";
import StackImgs from "../../components/stack-list/StackImgs";
import { animate, motion } from "framer-motion";

function Home() {
    const jobTitles = ["Front-end developer", "Web integrator", "Web publisher"];
    return (
        <motion.div
            className="homepage page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="section">
                <header>
                    <div className="heading">
                        <h1>Paul Andrica</h1>
                    </div>
                    <h2 className="subtitle">
                        <span className="job-titles-wrapper">
                            {jobTitles.map((title, index) => (
                                <span className="job-titles" key={index}>
                                    {title}
                                </span>
                            ))}
                        </span>
                    </h2>
                </header>
                <div className="description-hp">
                    <p>
                        Hey there! If you've landed on this page, you're in for a
                        treat – my latest lineup of <strong>web development</strong>{" "}
                        projects. I&nbsp;specialize in
                        creating stunning, user-friendly websites using the latest
                        technologies and techniques, I'm also a pretty savvy <strong>web
                            publisher</strong> – having 3+ years of experience working in many <strong>content mangement systems</strong>, personalization based on the costumer & <strong>A/B
                                testing</strong>.
                    </p>
                </div>
                <div className="cta-container">
                    <PrimaryBtn path={"/portfolio"} color="green" text={"Portoflio"} />
                    <PrimaryBtn path={CV} color="orange" text={"Open CV"} newTab={true}/>
                </div>
                <div className="tech-stack-logos">
                    <StackImgs />
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
