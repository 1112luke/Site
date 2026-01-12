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
import Diagram from "./Diagram";
import Packet from "./Packet";

export default function Post16() {
    return (
        <>
            <img
                style={{ width: "80%" }}
                src="/alpha-peripheral-board/Board.png"
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
                                    <li>Finite State Machine</li>
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
                <li style={{ fontWeight: "200" }}>
                    Precise actuation of 4 solenoid valves
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
            <h3 style={{ fontSize: "1.5rem", fontWeight: "300" }}>
                Data Collection
            </h3>
            <ul>
                <li>12x 0-5v ADC (used for pressure sensing)</li>
                <li>4x Thermocouple Channels</li>
                <li>1x I2C plug interface for IMU</li>
                <li>1x Load Cell Interface</li>
            </ul>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "300" }}>
                Communication
            </h3>
            <ul>
                <li>1x RS-485 Channel (For Communication With F.E.R.B)</li>
                <li>1x Serial USB Port</li>
            </ul>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "300" }}>Actuation</h3>
            <ul>
                <li>4x Solenoid Valve Channels</li>
                <li>1x Pyro Channel</li>
            </ul>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "300" }}>Failsafe</h3>
            <ul>
                <li>2x Keyed Switches (pyro, solenoids)</li>
                <li>1x E-Stop</li>
            </ul>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Design Considerations
            </h4>
            <p>
                When designing the project, there were a few themes that emerged
                in our design decisions that greatly shaped the form of the
                final project: modularity, transparency, and future proofing.
            </p>
            <p>
                Of all these design patterns, modularity definitely had the
                largest impact on our decisions. It showed itself not only in
                our hardware design -- provisioning for multiple boards and
                detatcheable components -- but also in our software where
                breaking problems down into their smallest subcomponents is of
                utmost importance.
            </p>
            <p>
                By transparency, I mean the ease at which the project could be
                picked up by a third party who has never seen it before and
                begin making their own contributions. For many projects this
                isn't a very large factor -- especially for a prototype. For our
                specific case, though, it is very important that future NDRT
                members are able to carry on the project we have started. To
                enable this, we have made sure to save and document all of our
                work on our github. Additionally, we have created a technical
                writeup detailing every aspect of this project for any potential
                individuals who might pick it up in the future. Our software
                specifically has been written at every point to be as modular
                and readable as possible, with extensive comments to make it as
                digestible as possible for newcomers.
            </p>
            <p>
                Most of the complexity of this design comes because this board
                isnt meant to be a one-off solution for this particular engine,
                but rather a long-term investment for NDXP for years to come.
                Although this board didnt need to be flight-ready to serve its
                immediate purpose, it was designed to be flight-ready
                regardless. Examples of future-proof provisions include having
                more pressure sensing channels than needed for the Alpha engine
                and including RS-485 communication capability for connection to
                a vehicle flight computer.
            </p>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                System Architecture
            </h4>
            <Diagram></Diagram>
            <p>
                As the Alpha Board is inherintly microcontroller based, serial
                communication is simplest, most fool-proof method for
                communication from the board. USB serial communication however,
                is not ideal for long distance, robust, high speed
                communication. While there are high signal integrity, high speed
                protocols such as{" "}
                <Link to="https://en.wikipedia.org/wiki/RS-485" target="_blank">
                    RS-485
                </Link>{" "}
                that would work directly for long-distance communication, we
                decided to go with a Raspberry Pi for immediately translating
                the serial signal into a websocket communication to be
                transported via ethernet.
            </p>
            <p>
                This decision was made for multiple reasons. First, in
                accordance with modular design principles, we didn't want to
                incorporate features specific to our first ground test onto this
                board that is inherently designed to be a piece of a larger
                system. Because we also need data logging of the entire fire
                event, the Raspberry Pi is needed to log all data passing
                through it to its onboard SD card. Its close physical proximity
                to the Alpha Board is important in facilitating this reliable
                data logging.
            </p>
            <p>
                As for communication over ethernet, multiple options existed:
                TCP/IP Sockets directly, websockets, or HTTP based
                communication. The easiest of these to rule out was TCP/IP
                sockets, as there is little support for these sockets directly
                in most web technology. Both HTTP communication or websockets
                would word fine for communication to our web app, and a
                websocket connection was ultimately chosen for its simplicity,
                reliablity, and ability to make long-lasting client-server
                connections rather relying on the slower call/response model of
                HTTP.
            </p>
            <h3 style={{ textAlign: "center" }}>Hardware</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Component Selection
            </h4>
            <p>
                The most important component we selected, by far, is the
                microcontroller. Specifically the microcontroller family. In a
                world where Microchip, ESP, STMicroelectronics, TI, PIC, and
                many other microcontroller families exist, we had many options.
                In the end, we went with the STM32 platform for its widespread
                reputation in industry and CUBEMX configuration program. For
                most other ICs, the largest factors we considered were first
                availability of good C libraries and second market availability.
                For some ICs, specific specifications had to be met, whether it
                be speed or resolution, but for the most part component
                selection was very straightforward.
            </p>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                I/O Consideration
            </h4>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                PCB Design
            </h4>
            <img
                style={{ width: "50%" }}
                src="/alpha-peripheral-board/filledpcb.png"
            ></img>
            <img
                style={{ width: "50%" }}
                src="/alpha-peripheral-board/unfilledpcb.png"
            ></img>
            Filled and unfilled PCB layouts
            <p>
                For me, the most fun part of this projects is usually PCB
                design. I love the challenge of positioning the components
                compactly and routing the traces efficiently while still
                maintaining signal integrity and following most{" "}
                <Link
                    to="https://www.protoexpress.com/blog/best-high-speed-pcb-routing-practices/"
                    target="_blank"
                >
                    PCB design best practices
                </Link>
                .
            </p>
            <p>
                The board consists of four layers which from top to bottom are:
                signal, power, ground, signal. While we have no extremely high
                speed signals, care was still taken to maintain signal integrity
                especially on our SPI busses and USB routes.
            </p>
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
            <p>
                One of the most important parts of a system like this is
                communication. There were two main issues we had to solve when
                developing this system: CPU utilization and packet structure.
            </p>
            <p>
                Most common microcontroller serial communicaiton systems loop in
                the CPU to handle sending the serial data to its UART
                peripheral. While this is ok for many scenarios, it is crucial
                that in our scenario, most of the CPU's time is spent elsewhere.
                For this reason, we use the a feature of STM32 and many
                microcontrollers called DMA, as well as a circular buffer for
                handling bursts of input. DMA, or direct memory access, is a
                peripheral in our microcontroller that handles routing data from
                a specified memory location to a specified peripheral, all in
                hardware! By pointing this to the data we want to send and the
                UART peripheral, memory transfer is handled automatically
                without any CPU intervention. For scenarios when data is
                requested for sending faster than the UART peripheral can send
                it (based on its BAUD rate), we have also implemented a buffer
                to queue data in memory. The code is shown below:
            </p>
            <SyntaxHighlighter
                language="c"
                style={monoBlue}
                id="syntax"
            >{`#include "dmacirc.h"
#include <string.h>

#define TX_QUEUE_LEN 256
#define TX_ITEM_SIZE 36

// tx item
typedef struct
{
    uint8_t data[TX_ITEM_SIZE];
    uint64_t len;
} tx_item;

// uart object
UART_HandleTypeDef *u;

tx_item tx_queue[TX_QUEUE_LEN];
volatile uint8_t tx_head = 0;
volatile uint8_t tx_tail = 0;
volatile uint8_t dma_active = 0;

void dmasendinit(UART_HandleTypeDef *n)
{
    u = n;
}

void dmasend(uint8_t *data, uint16_t size)
{
    int next = (tx_head + 1) % TX_QUEUE_LEN;

    if (next == tx_tail)
    {
        // queue full
        return;
    }

    memcpy(tx_queue[tx_head].data, data, size);
    tx_queue[tx_head].len = size;

    uint8_t start_dma = 0;

    __disable_irq();
    tx_head = next; // Update head

    if (!dma_active) // Check if we need to start
    {
        dma_active = 1;
        start_dma = 1; // Use a flag to start outside the critical section
    }
    __enable_irq();

    if (start_dma)
    {
        HAL_UART_Transmit_DMA(u, tx_queue[tx_tail].data, tx_queue[tx_tail].len);
    }
}

void HAL_UART_TxCpltCallback(UART_HandleTypeDef *huart)
{

    if (huart != u)
        return;

    // move tail forward
    tx_tail = (tx_tail + 1) % TX_QUEUE_LEN;

    // check for continuing transmit
    if (tx_tail != tx_head)
    {
        HAL_UART_Transmit_DMA(u, tx_queue[tx_tail].data, tx_queue[tx_tail].len);
    }
    else
    {
        dma_active = 0;
    }
}`}</SyntaxHighlighter>
            <p>
                Upon call to our custom dmasend, data is added to the queue for
                handling by the DMA peripheral as soon as it can.
            </p>
            <p>
                When looking at packet structure, a good first question to
                answer is: "why packets?" To answer this, first consider what is
                actually happening on the serial line. The line can take one of
                two states: high (3.3v) or low (0v). Somehow, we have to
                translate these voltages or 1s and 0s to useable data. To do
                this, we have to know when any particular data stream is
                starting or stopping. For example, if I'm searching for a
                pattern of <i>01001</i> in the stream: <i>01001001</i>, I find
                two instances, but I don't know which one is correct! At the
                hardware level, this bit ambiguity is solved by framing
                protocols involving known start bits, stop bits, and other
                features depending on the particular spec. See{" "}
                <Link
                    to="https://www.analog.com/en/resources/analog-dialogue/articles/uart-a-hardware-communication-protocol.html"
                    target="_blank"
                >
                    this article
                </Link>{" "}
                for more info. This protocol leaves the user (Sebastian and I)
                with a very specific question: How to transfer useable data as a
                stream of bytes?
            </p>
            <p>
                At first it seems trivial: just send the data over the line
                encoded in binary. Many, many problems arise in this case, such
                as:{" "}
                <ul>
                    <li>What type of data am I receiving at any given time?</li>
                    <li>
                        I want to send a 16 bit integer. How does the receiving
                        end know which two bytes go together?
                    </li>
                    <li>
                        If there are multiple potential senders of data, how do
                        I know who my data is from?
                    </li>
                </ul>
                It is quesitons like these and many others that we answered
                using our custom serial byte packetization protocol:{" "}
                <i>XPLink</i>.
            </p>
            <p>An XPLink packet is defined as the following:</p>
            <Packet
                names={[
                    "COBS Header",
                    "Sender ID",
                    "Packet Type",
                    "Data x7",
                    "Checksum",
                    "0x00 (end byte)",
                ]}
                labels={[
                    "Byte 1",
                    "Byte 2",
                    "Byte 3",
                    "Bytes 4-10",
                    "Byte 11",
                    "Byte 12",
                ]}
            ></Packet>
            <p>
                Using this twelve byte packet structure, information is now
                available about the packet type, the sender, and the packet can
                even be checked for accurate transmission using the{" "}
                <Link
                    to="https://en.wikipedia.org/wiki/Checksum"
                    target="_blank"
                >
                    checksum
                </Link>{" "}
                byte at the end. You may have also noticed the end byte of all
                zeros. This gives us a way to know when one packet ends and one
                starts, allowing us to decode any given stream of data into the
                relevant information.
            </p>
            <p>
                What happens though if, for example, out pressure sensor wants
                to send a temperature of zero? A byte of zeros might make its
                way into the data section and would result in a false packet end
                byte. To get around this issue, we implement Consistent Overhead
                Byte-Stuffing, or COBS. COBS provides a method of removing this
                ambiguity around the end byte. To do this, Take the following 5
                bytes of data as an example:
            </p>
            <h4>5 Bytes Example Data</h4>
            <br></br>
            <div style={{ width: "75%", margin: "auto" }}>
                <Packet
                    names={["0xAA", "0xC3", "0x00", "0x03", "0x00"]}
                    labels={[
                        "Data Byte 1",
                        "Data Byte 2",
                        "Data Byte 3",
                        "Data Byte 4",
                        "Data Byte 5",
                    ]}
                ></Packet>
            </div>
            <p>
                {" "}
                if we packaged this up, adding 0x00 to the end as a delimiter,
                the end would be ambiguious! The other two 0x00 bytes in our
                data would create a signal that it is the end of the byte, even
                though it is the middle of our data. To solve this, a COBS
                header is added along with the end byte:
            </p>
            <h4>Unencoded Example Packet</h4>
            <br></br>
            <Packet
                names={["0x03", "0xAA", "0xC3", "0x00", "0x03", "0x00", "0x00"]}
                labels={[
                    "COBS HEADER",
                    "Data Byte 1",
                    "Data Byte 2",
                    "Data Byte 3",
                    "Data Byte 4",
                    "Data Byte 5",
                    "End Byte",
                ]}
            ></Packet>
            <p>
                From here, we can eliminate all zero valued data bytes with a
                simple procedure. to start, we set the value of COBS header to
                the index of the first occuring 0. In this case, the third data
                byte is a 0, so we set the COBS header to 0x03. Next, we replace
                the first occuring zero with the number of data bytes to the
                next occuring zero. In this case it becomes 2, as there are two
                data bytes between Byte 3 and Byte 5. This pattern continues
                until the following COBS encoded packet is formed:
            </p>
            <h4>COBS Encoded Example Packet</h4>
            <br></br>
            <Packet
                names={["0x03", "0xAA", "0xC3", "0x02", "0x03", "0x01", "0x00"]}
                labels={[
                    "COBS HEADER",
                    "Data Byte 1",
                    "Data Byte 2",
                    "Data Byte 3",
                    "Data Byte 4",
                    "Data Byte 5",
                    "End Byte",
                ]}
            ></Packet>
            <p>
                As you can see, data bytes 3 and 5, which were previously zeros,
                now contain a value pointing to what was the next occuring zero
                in the stream. Importantly, the end byte is left untouched.
            </p>
            <p>
                Finally, this version contains only one zero and our firmware
                can use it to delimit our stream of bytes. This is the stream
                that gets sent over the line. Crucially, the original data can
                be reclaimed by following the encoding procedure in reverse.
            </p>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>
                Finite State Machine
            </h4>
            <h3 style={{ fontSize: "1.8rem" }}>Raspberry Pi</h3>
            <h4 style={{ textAlign: "left", fontSize: "1.5rem" }}>Overview</h4>
        </>
    );
}
