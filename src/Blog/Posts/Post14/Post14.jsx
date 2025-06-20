import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router";

export default function Post14() {
    return (
        <>
            <img width="100%" src="ti84/DSC_0069.JPG"></img>

            <p>
                Have you ever been frustrated that you cannot find that
                notorious mini USB cable for your calculator? Have you ever
                thought to yourself: "There has to be a better way 😭." No?
                Well, I certainly have, and I had to do something about it.
            </p>

            <p>
                A few months ago, it hit me. I would add wireless charging to my
                calculator. I thought that I could surely find a cheap wireless
                charging receiver that would fit. Sure enough, I checked amazon
                and there it was. Two days later, it was at my doorstep.
            </p>

            <img width="100%" src="ti84/DSC_0025.JPG"></img>

            <img
                style={{
                    width: "30%",
                    float: "left",
                    margin: "20px",
                    marginLeft: "0px",
                }}
                src={"ti84/DSC_0032.JPG"}
            ></img>

            <p>
                Sizing it up next to the calculator, I was excited that my plan
                actually might work. In theory, all I had to do was open the
                calculator, wire it up, and it would work. There were a few
                considerations that I would have to make before I could begin:
            </p>

            <ol style={{ fontSize: "1.6rem" }}>
                <li>
                    What functionality do I want to remain?
                    <p>
                        Do I still want to be able to send data over the mini
                        USB? What about charging via a dock? Ultimately, I
                        decided that I would like to retain full functionality.
                    </p>
                </li>
                <li>Where should I connect the leads internally?</li>
                <p>
                    To determine this, I had to crack open the calculator to see
                    what I was working with
                </p>
            </ol>

            <img
                style={{
                    width: "100%",
                    float: "left",
                }}
                src={"ti84/DSC_0045.JPG"}
            ></img>

            <p>
                I saw that I only had a few options. I could wire to the large
                charging pads on the bottom, or hijack the connections coming
                out of the mini USB port.{" "}
                <img
                    style={{
                        width: "40%",
                        float: "right",
                        margin: "20px",
                        marginRight: "0px",
                    }}
                    src={"ti84/DSC_0048.JPG"}
                ></img>{" "}
                As it was the most obvious solution, I thought I would
                definitely wire to the two large pads on the bottom. However,
                after some probing with a multimeter, I decided I would have to
                hijack the USB port. This decision was made after I noticed that
                the input positive terminal for the docking station was{" "}
                <i>
                    <b>not</b>
                </i>{" "}
                electrically connected to the input positive terminal coming
                form the mini USB port. I knew I could input the five volts from
                the reciever into the mini USB port input, as that connection
                usually receives five volts. I did not, however, know the spec
                of the charging dock, and figured it was best that I not risk
                it. For ground, I ended up soldering to the large pad on the
                bottom, though, as it was electrically connected to the one on
                the mini USB port.
            </p>

            <img style={{ width: "100%" }} src={"ti84/DSC_0050.JPG"}></img>

            <p>
                For the wiring, I used thin enameled copper wire. Before
                soldering, I had to strip the enamel back a few millimeters to
                ensure I was working with the bare copper. This soldering job
                definitely wasn't easy, but it was a fun challenge.
            </p>
            <p>
                Initially, I wired it up, closed the case, and to great
                disappointment, it didnt work. The coil needed to be closer to
                the back panel in order to properly receive the power from the
                electric charger. When I opened up the back case, I was glad to
                see that it was covered with a thin lattice of plastic, and I
                knew I would be able to carve out space for the coil to move
                about another 5 millimeters towards the charger.
            </p>

            <img style={{ width: "100%" }} src={"ti84/DSC_0064.JPG"}></img>

            <p>Finally, I could close the case and finish the project.</p>

            <img style={{ width: "100%" }} src={"ti84/DSC_0060.JPG"}></img>

            <p>
                Unlike most of my projects, This one went fairly smoothly, and
                worked as expected. Once upon a time, a project like this for me
                was daunting and risky. As I have gained more experience in the
                field of electrical engineering, though, projects like these
                have allowed me to see that engineering really is a superpower,
                and that the random ideas I get do not have to stay ideas
                forever.
            </p>
        </>
    );
}
