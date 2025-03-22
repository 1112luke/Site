import Latex from "react-latex";
import { FaExternalLinkAlt } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Helmet } from "react-helmet";

export default function Post8() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Interactive demo, Mathematical explanation, and Programmatic implemention of PID Controls."
                ></meta>
                <meta
                    name="keywords"
                    content="pid, control, demo, demonstration, program, code, math"
                ></meta>
                <meta name="author" content="Luke Scholler"></meta>
                <title>An Exploration of PID Control</title>
            </Helmet>

            <div
                style={{
                    width: "100%",
                    height: "50vh",
                    position: "relative",
                }}
            >
                <iframe
                    src="/codes/pidemo"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                    }}
                ></iframe>
                <div
                    style={{
                        position: "absolute",
                        fontSize: "20px",
                        right: "0px",
                    }}
                >
                    <a target="_blank" href="/codes/pidemo">
                        View in Fullscreen{" "}
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                    </a>
                </div>
            </div>

            <h3>Background</h3>
            <p>
                The above is a simulation of a{" "}
                <a
                    href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller"
                    target="_blank"
                >
                    PID controller
                </a>
                . PID control is an algorithm used in everything from drones to
                home heating systems, and I have been fascinated by it since I
                became aware of its existence. The yellow circle is the target
                position and directly follows the position of your mouse. The
                white circle implements a PID controller to track the target
                position in real time.
            </p>
            <p>
                I built this article after realizing during my research that
                there are no good explanations online that had everything I was
                looking for. My motivation while making this article was that it
                might be "the article I wish I came across when I was learning
                PID controls." All in one place, I present an interactive demo,
                mathematical background, and an explanation of programmatic
                implementation.
            </p>
            <h3>Introduction</h3>
            <p>
                The letters P, I, and D stand for Proportional, Integral, and
                Derivative, respectively. A detailed explanation of the math is
                given further in this article, but I will start with some
                intuition.{" "}
            </p>
            <p>
                I like to think about the system as a sort of spring. In this
                analogy, the P term might be the <i>stiffness</i> of the spring
                and the D some <i>damping</i>. I know, this is not a perfect
                analogy, but it helped me in understanding the utility of the
                sliders. Do not worry about I for now.
            </p>
            <p>
                Zero out Kp, Ki, and Kd. Now increment only Kp. You will find
                that the white circle aggressively moves towards the target
                yellow circle and in fact overshoots the target. To mitigate
                this, increase Kd until there is less overshoot. You now are
                familiar with the importance of the ratio between P and D. Make
                P is too high and the the system overshoots. Make D too high and
                the response is slow.
            </p>

            <p>
                You may notice that by putting the D term to its max and the
                others low, the white circle very nicely tracks the position of
                the yellow. Why can't we just keep cranking up Kd? Well, with
                only Kd and nothing else, the system has no feedback based on
                the absolute position of the error, only the rate of change of
                the error. Thus, if there is any initial offset, it will persist
                given any change to the target position. We <i>need</i> Kp and
                Ki to correct for offsets. Furthermore, in real systems, the
                behavior of high Kd is often not as nice as this prestine
                computer simulation. Systems can enter{" "}
                <a
                    href="https://www.youtube.com/watch?v=gcvr0wp6hbw"
                    target="_blank"
                >
                    oscillations{" "}
                </a>
                if the D term is too high, and the data will not be clean enough
                that Kd alone maps the value so closely to the target.
            </p>

            <p>
                Finally, I should mention the I term. Imagine we have a real
                system -- a small robotic car. We want the car to steer towards
                a center line to follow it. Imagine we are very, very close to
                the center of the line and our proportional output is 0.1. A
                common issue that arises in real systems is that our means of
                moving an object does not have enough resolution to respond to
                very small outputs from Kp. In the case of our car, a steering
                servo might only have the resolution to respond at, say,
                intervals of 0.2. Our Kp output of 0.1 is less than this! The
                car would not move.{" "}
            </p>
            <p>
                The I term is the solution to this issue. I accumulates error
                over time. If our car is off by 0.1 for a duration of time, the
                I term will accumulate and correct for this small error,
                commonly known as <i>steady state error</i>.
            </p>

            <p>
                In the above simulation, the effects of Ki may be hard to
                understand. This is due to the fact that, again, a computer
                system is very prestine. The simulation has the ability to
                respond to very very low proportional output values and is not
                limited by any physical hardware constraints.{" "}
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
                        "$\\Huge u(t) = Kp\\cdot e(t) + Ki\\cdot\\int{e(t)}\\;dt + Kd \\cdot\\frac{de(t)}{dt}$"
                    }
                </Latex>
            </div>

            <p>
                By applying this output on each frame to the velocity of the
                white ball, its position is controlled.
            </p>
            <p>
                I would like to make a brief aside here about the process of{" "}
                <i>tuning</i> a PID controller. By tuning, I simply mean finding
                the values Kp, Ki, and Kd which result in optimal performance.
                There are mathematically sound ways of calculating optimal
                values such as the{" "}
                <a
                    href="https://www.sciencedirect.com/topics/computer-science/ziegler-nichols-method"
                    target="_blank"
                >
                    Ziegler Nichols Method
                </a>
                , however I will not being going into detail here. In my
                experience with PID control, which has only been racing drones,
                tuning is more of an art form, and optimal values are often left
                up to personal preference!
            </p>
            <h3>Programmatic Implementation</h3>
            <p>
                At this point, you may have some intuitive understanding of how
                a PID controller works as well as an idea of how the math behind
                it works. How might we actually implement such a thing though? I
                see calculus in the math -- how am I supposed to work with
                continuous data on a discrete machine?? These questions are some
                of the many I had when attempting to actually implement this
                thing in code. I found a few ok resources when I was
                troubleshooting, but I hope to provide a clear explanation
                below. I will begin with the logic for the PID simulation, then
                get into the details of my specific implementation
            </p>

            <p>The code for the PID controller itself is as follows:</p>
            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`class PID {
        constructor(kp, ki, kd, setpoint) {
            this.kp = kp;
            this.ki = ki;
            this.kd = kd;
            this.setpoint = setpoint;
            this.integral = 0;
            this.derivative = 0;
            this.time = Date.now();
            this.preverror = 0;
        }

        compute(position, setpoint) {
            this.setpoint = setpoint;

            //get dt and set previous time
            var dt = Date.now() - this.time;
            this.time = Date.now();

            //calculate error
            var error = this.setpoint - position;

            //change integral value
            this.integral += error * dt;

            //cap integral value to prevent runaway
            if (this.integral > 5000) {
                this.integral = 5000;
            } else if (this.integral < -5000) {
                this.integral = -5000;
            }

            //get derivative
            var derivative = (error - this.preverror) / dt;

            //output
            var output =
                this.kp * error +
                this.ki * this.integral +
                this.kd * derivative;

            //store error for next derivative
            this.preverror = error;

            //return
            return output;
        }
    }`}</SyntaxHighlighter>
            <p>Let's break it down into smaller sections.</p>
            <p>
                I create a class so that we can easily create PID objects if I
                ever intend to control more than one thing at once or have
                multiple dimensions. If I wanted to, say, move the yellow target
                circle around in two dimensions, I would need a PID controller
                for both axes.
            </p>

            <p>
                The constructor function for this class takes in an initial kp,
                ki, and kd, as well as a setpoint. With this, We can create our
                controller with:
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`const PID1 = new PID(0.1, 0, 2, 5)`}</SyntaxHighlighter>

            <p>
                Next in the class, I define the compute method, which will be
                called with every animation cycle. It takes the current position
                of the white ball as well as a setpoint, which in my case is the
                position of the yellow ball. A call to the function looks like:
            </p>
            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`PID1.compute(circle1.ypos, mousepos)`}</SyntaxHighlighter>

            <p>
                the output of this can then be added to the velocity of the
                white circle.
            </p>

            <p>
                Finally, I begin implementing the logic for PID control. Because
                we have multiple components which depend on time, we start by
                getting the time that has elapsed since the last call to
                compute(). This is done by:
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`var dt = Date.now() - this.time;
this.time = Date.now();`}</SyntaxHighlighter>

            <p>
                Date.now() is the equivalent to millis() in arduino, getting the
                time in milliseconds. I compare with a previously stored time to
                get the difference in time, dt.
            </p>

            <p>
                Next, I calculate the proportional term which is just equal to
                the error at the given moment:
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`var error = this.setpoint - position;`}</SyntaxHighlighter>

            <p>
                for the integral term, it would be impossible to truly sum the
                error infinitesimal changes in time, so instead we make our best
                approximation by adding (error * dt) to an accumulating
                variable, this.integral:
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`this.integral += error * dt;`}</SyntaxHighlighter>

            <p>
                Finally, the derivative. Again, it would be impossible to know
                the slope for an infinitesimal step in time, so we do our best
                by approximation. This is a simple "rise over run" calculation
                to find the slope, requiring the error from the previous call to
                compute().
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`var derivative = (error - this.preverror) / dt;`}</SyntaxHighlighter>

            <p>
                To make this work the next time around, we set the previous time
                to what is now the current time:
            </p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`this.preverror = error;`}</SyntaxHighlighter>

            <p>At last, we can put it all together and return our output:</p>

            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`var output =
                this.kp * error +
                this.ki * this.integral +
                this.kd * derivative;`}</SyntaxHighlighter>
        </>
    );
}
