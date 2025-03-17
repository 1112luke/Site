import React, { useRef, useEffect, useState } from "react";

export default function Pidemo() {
    const [dim, setdim] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    const canvasRef = useRef(null);

    class Circle {
        constructor(ypos, yvel, size, color, centered, context) {
            this.ypos = ypos;
            this.yvel = yvel;
            this.yacc = 0;
            this.size = size;
            this.color = color;
            this.context = context;
            this.centered = centered;
            this.canvas = canvasRef.current;
        }

        draw() {
            this.context.beginPath();
            this.context.arc(
                this.canvas.width / 2,
                this.ypos,
                this.size,
                0,
                2 * Math.PI
            );
            this.context.fillStyle = this.color;
            this.context.fill();
        }

        update() {
            //refresh position for centered
            this.canvas = canvasRef.current;
            if (this.centered) {
                this.ypos = this.canvas.height / 2;
            }

            //move based on velocity
            this.yvel += this.yacc;
            this.ypos += this.yvel;
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
            var dt = Date.now() - this.time;
            this.time = Date.now();

            var error = this.setpoint - position;
            this.integral += error * dt;
            var derivative = (error - this.preverror) / dt;

            var output =
                this.kp * error +
                this.ki * this.integral +
                this.kd * derivative;

            this.preverror = error;

            return output;
        }
    }

    var mousepos = 0;

    function handlemousemove(e) {
        mousepos = e.clientY;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        window.addEventListener("resize", handleResize);

        window.addEventListener("mousemove", handlemousemove);

        var smallcircle = new Circle(0, 0, 20, "white", false, context);
        var bigcircle = new Circle(
            canvas.height / 2,
            0,
            50,
            "#FFC600",
            true,
            context
        );

        var controller = new PID(0.01, 0.00000001, 5.9, canvas.height / 2);

        const go = setInterval(() => {
            var width = canvas.width;
            var height = canvas.height;

            //clear canvas
            var context = canvasRef.current.getContext("2d");
            context.fillStyle = "#0E3A59";
            context.fillRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );

            //draw big circle
            bigcircle.draw();

            //draw small circle
            smallcircle.draw();

            //move small circle
            smallcircle.update();

            //move big circle based on mouse
            bigcircle.ypos = mousepos;

            //adjust small circle velocity based on output
            var value = controller.compute(smallcircle.ypos, bigcircle.ypos);

            smallcircle.yacc = value;

            //ypos += yvel;
        }, 1000 / 60);

        return () => clearInterval(go);
    }, []);

    return <canvas ref={canvasRef} width={dim.x} height={dim.y} />;
}
