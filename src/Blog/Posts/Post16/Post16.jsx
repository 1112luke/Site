import { Link } from "react-router";
import "./Post16.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {
    atomOneDark,
    gradientDark,
    idea,
    monoBlue,
    solarizedDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Post16() {
    return (
        <>
            <img
                style={{ width: "80%" }}
                src="https://docs.deepwavedigital.com/Tutorials/img/docker_logo.png"
            ></img>
            <h3>Introduction</h3>
            <p>
                <Link to="https://www.ndrocketryteam.com/" target="_blank">
                    NDRT
                </Link>
                's new Experimental Propulsion team,{" "}
                <Link
                    to="https://www.ndrocketryteam.com/ndxp.html"
                    target="blank"
                >
                    NDXP
                </Link>
                , is set for a hotfire launch in may of this year of its first
                hybrid-liquid engine, <i>Alpha.</i> The team's main concern has
                always been the mechanical design of the engine, which is not
                exactly my domain. When I took a look at what the team was
                doing, I knew that electronics would be a major part of the
                complete system, and proposed a major rework of the Raspberry
                Pi/Breadboard solution which was, at the time, part of the plan.
                Together with Sebastian Brock, development began. A PCB was
                created with numerous features, as well as software for complete
                real-time monitoring and control of the engine via what is now
                known as the Alpha Peripheral Board.
            </p>
            <p>
                This was one of those projects that started as, "yeah we can do
                that in a week", and ended up requiring months of work across
                many different domains and disciplines. I wouldn't have it any
                other way, though, and the skills i've gained and lessons I've
                learned in this project have been invaluable.
            </p>
            <h1>Table Of Contents</h1>
            <ul>
                <li>
                    Development Process Overview
                    <ul>
                        <h5>
                            <li>Project Requirements</li>
                            <li>Feature List</li>
                            <li>
                                Design Considerations (future proof, modular)
                            </li>
                            <li>System Architecture</li>
                        </h5>
                    </ul>
                </li>
                <li>
                    Hardware
                    <ul>
                        <h5>
                            <li>Component Selection</li>
                            <li>I/O Consideration</li>
                            <li>PCB Design</li>
                            <li>PCB Assembly</li>
                            <li>Hardware Verification (oscilloscope!)</li>
                        </h5>
                    </ul>
                </li>
                <li>
                    Software
                    <ul>
                        <h5>
                            <li>
                                Web Application
                                <ul>
                                    <li>Overview</li>
                                    <li>Tech Stack</li>
                                    <li>Development</li>
                                </ul>
                            </li>
                            <li>
                                Alpha Board
                                <ul>
                                    <li>Development Environment</li>
                                    <li>Firmware Architecture</li>
                                    <li>Efficient Serial Communications</li>
                                </ul>
                            </li>
                            <li>
                                Raspberry PI
                                <ul>
                                    <li>Overview</li>
                                </ul>
                            </li>
                        </h5>
                    </ul>
                </li>
                <li>Conclulsion</li>
            </ul>
            {/*
            END TABLE OF CONTENTS
            ====================================================================
            ====================================================================
            */}
            <h3 style={{ textAlign: "center" }}>
                Development Process Overview
            </h3>
            <h4
                style={{
                    textAlign: "left",
                    fontSize: "1.5rem",
                }}
            >
                Project Requirements
            </h4>
            <p>
                If I could summarize the requirements for this project, I would
                use language like "ongoing", "never ending", and "unexpected." I
                believe one of the largest contributors to the success of any
                project -- no matter how large or small -- is a clear, well
                defined set of project requirements. The thing about this
                project, though, is that we as a team have never tackled
                anything of this sort before, and new requirements from the
                engine team were being requested up until the final stages of
                PDB design. While it was not ideal, it made for an incredibly
                dynamic and fun design challenge. In the end, all design
                requirements were sorted and our board was able to deliver on
                all of them. A summary is below:
            </p>
            <ul>
                <p>
                    The Alpha Peripheral Board and companion software should be
                    responsible for:
                </p>
                <li style={{ fontWeight: "200" }}>
                    Monitoring of the engine and plumbing system's nine pressure
                    sensors.
                </li>
                <li style={{ fontWeight: "200" }}>
                    Monitoring of engine temperature in four locations.
                </li>
                <li style={{ fontWeight: "200" }}>
                    Monitoring of the engine's thrust through the duration of
                    the burn
                </li>
                <li style={{ fontWeight: "200" }}>
                    Monitoring of the engine's vibration through the duraiton of
                    the burn
                </li>
                <li style={{ fontWeight: "200" }}>Ignition of the engine</li>
                <li style={{ fontWeight: "200" }}>
                    Managing a multi-layer safety system
                </li>
                <li style={{ fontWeight: "200" }}>
                    Connection to an external board for future expansion
                </li>
            </ul>
            <aside>
                At this point, I haven't yet mentioned the reason this is the
                Alpha{" "}
                <i>
                    <strong>Peripheral</strong>
                </i>{" "}
                Board and not just the Alpha Board. For the final launch
                vehicle, a flight computer will be developed which integrates
                sensors, compute, and radios to handle the necessities for any
                general launch vehicle -- liquid fueled or not. While this board
                is intended to fly on that vehicle, it is responsible only for
                management and monitoring of the engine, as a{" "}
                <i>
                    <strong>Peripheral</strong>
                </i>{" "}
                to the vehicle's main flight computer. For the purpose of ground
                testing, this board is sufficient and as such is being developed
                before the flight computer.
            </aside>
            &nbsp;
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Feature List
            </h4>
            <p>
                The finished board has the following features, in accordance
                with the project requirements:
            </p>
            <ul>
                <li></li>
            </ul>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Design Considerations
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                System Architecture
            </h4>
            <h3 style={{ textAlign: "center" }}>Hardware</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Component Selection
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                I/O Consideration
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                PCB Design
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                PCB Assembly
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Hardware Verification
            </h4>
            <h3 style={{ textAlign: "center" }}>Software</h3>
            <h3 style={{ fontSize: "1.8rem" }}>Web Application</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>Overview</h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Tech Stack
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Development
            </h4>
            <h3 style={{ fontSize: "1.8rem" }}>Alpha Board</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Development Environment
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Firmware Architecture
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Efficient Serial Communications
            </h4>
            <h3 style={{ fontSize: "1.8rem" }}>Raspberry Pi</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>Overview</h4>
        </>
    );
}
