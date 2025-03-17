import React, { useRef, useEffect, useState } from "react";
import "./Pidemo.css";

export default function Pidemo() {
    const [dim, setdim] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    const [kp, setkp] = useState(0.01);
    const [ki, setki] = useState(0.000004);
    const [kd, setkd] = useState(6);

    const controllerRef = useRef(null);

    const [smally, setsmally] = useState(0);
    const [bigy, setbigy] = useState(0);

    const canvasRef = useRef(null);

    class Circle {
        constructor(ypos, yvel, size, color, centered, setfunction) {
            this.ypos = ypos;
            this.yvel = yvel;
            this.yacc = 0;
            this.size = size;
            this.color = color;
            this.centered = centered;
            this.setfunction = setfunction;
        }

        update() {
            //move based on velocity
            this.yvel += this.yacc;
            this.ypos += this.yvel;

            //call set function
            this.setfunction(this.ypos);
        }

        setacc(value) {
            this.yacc = value;
        }
    }

    function handleResize() {
        setdim({ x: window.innerWidth, y: window.innerHeight });
    }

    //pid variables
    class PID {
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
    }

    var mousepos = 0;

    function handlemousemove(e) {
        mousepos = e.clientY;
        setbigy(mousepos);
    }

    var controller;

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        window.addEventListener("mousemove", handlemousemove);

        var smallcircle = new Circle(0, 0, 0, "white", false, setsmally);

        controller = new PID(kp, ki, kd, 100);

        controllerRef.current = controller;

        const go = setInterval(() => {
            //adjust small circle velocity based on output
            var value = controller.compute(smallcircle.ypos, mousepos);
            smallcircle.setacc(value);
            //move small circle
            smallcircle.update();
        }, 1000 / 60);

        return () => {
            clearInterval(go);
            removeEventListener("resize", handleResize);
            removeEventListener("mousemove", handlemousemove);
        };
    }, []);

    useEffect(() => {
        controllerRef.current.kp = kp;
        controllerRef.current.ki = ki;
        controllerRef.current.kd = kd;
        console.log(kp, ki, kd);
    }, [kp, ki, kd]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#1F4662",
                    position: "absolute",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "40%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                    }}
                >
                    <div style={{ transform: "translateY(-40px)" }}>
                        <p>Kp: {kp}</p>
                        <input
                            type="range"
                            value={kp}
                            onChange={(e) => {
                                setkp(e.target.value);
                            }}
                            min={0}
                            max={0.02}
                            step={0.001}
                            className="slider"
                        ></input>

                        <p>Ki: {ki}</p>
                        <input
                            type="range"
                            value={ki}
                            onChange={(e) => {
                                setki(e.target.value);
                            }}
                            min={0}
                            max={0.00005}
                            step={0.000001}
                            className="slider"
                        ></input>
                        <p>Kd: {kd}</p>
                        <input
                            type="range"
                            value={kd}
                            onChange={(e) => {
                                setkd(e.target.value);
                            }}
                            min={0}
                            max={8}
                            step={0.5}
                            className="slider"
                        ></input>
                    </div>
                </div>

                <div
                    style={{
                        width: "12%",
                        aspectRatio: 1,
                        backgroundColor: "var(--yellow)",
                        position: "absolute",
                        top: bigy,
                        left: "50%",
                        borderRadius: "1000px",
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>

                <div
                    style={{
                        width: "5%",
                        aspectRatio: 1,
                        backgroundColor: "white",
                        position: "absolute",
                        top: smally,
                        left: "50%",
                        borderRadius: "1000px",
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
            </div>
        </>
    );
}
