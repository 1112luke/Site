import { useState } from "react";
import Pidemo from "../../../Codes/PID/Pidemo";
import Latex from "react-latex";

export default function Post8() {
    return (
        <>
            <iframe
                src="/codes/pidemo"
                style={{
                    width: "100%",
                    height: "50vh",
                    border: "1px solid var(--yellow)",
                }}
            ></iframe>
            <h3>Pid Control Simulation</h3>
            <p>
                The above is a simulation of a{" "}
                <a
                    href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller"
                    target="_blank"
                >
                    PID controller
                </a>
                . The controller is used in everything from drones to home
                heating systems, and I have been fascinated by it since I became
                aware of its existence. For a while, I have been intimidated by
                the subject, but have wanted to take a deep dive. When I looked
                up material online, I was surprised by the lack of good
                explanations of programmatic implementation as well as good
                interacive demos.
            </p>
            <p>
                I built this article after not finding good resources online
                with the motivation that it could be "the article I wish I came
                across when I was learning PID controls." This article contains
                an interactive demo, mathematical explanation, and an
                explanation of programmatic implementation.
                <ul></ul>
            </p>
            <h3>The Math</h3>
            <p>The outputs P, I, and D are given by:</p>
            <div>
                <Latex>{"$\\Huge Proportional = e(t)$"}</Latex>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Latex>{"$\\Huge Integral = \\int{e(t)}\\;dt$"}</Latex>
            </div>

            <div style={{ marginTop: "30px" }}>
                {" "}
                <Latex>{"$\\Huge Derivative = \\frac{de(t)}{dt}$"}</Latex>
            </div>

            <p>
                {" "}
                where <Latex>{"$e(t)$"}</Latex> is the error at time{" "}
                <Latex>{"$t$"}</Latex> calculated by the difference between the
                position of the two circles
            </p>

            <p>
                With this and constants <Latex>{"$Kp$, $Ki$, and $Kd$"}</Latex>,
                we can calculate the response from our PID controller as:
            </p>
            <div>
                <Latex>
                    {
                        "$\\Huge u(t) = Kp*e(t) + Ki*\\int{e(t)}\\;dt + Kd * \\frac{de(t)}{dt}$"
                    }
                </Latex>
            </div>

            <p>
                By applying this output on each frame to the velocity of the
                white ball, its position is controlled.
            </p>
        </>
    );
}
