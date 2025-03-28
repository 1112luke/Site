import { useEffect, useRef, useState } from "react";
import * as wasm from "wasm-test";
import { memory } from "wasm-test/wasm_test2_bg.wasm";
import "./Wasm.css";
import Barsbox from "./Barsbox";
import Sortar from "./Sortar";

export default function Wasm() {
    const [bars, setbars] = useState([0, 1, 2]);
    var newb = useRef(new Sortar(1000, setbars));

    const worker1 = useRef();
    const worker2 = useRef();

    const [rustbars, setrustbars] = useState([0, 1, 2]);
    const data = useRef(wasm.Data.new());
    const rustBarsArray = useRef();

    //number of elements in arrays;
    const [els, setels] = useState(10);

    function bubblesort(arr) {}

    const SIZE = 10000;

    const progress = 0;

    useEffect(() => {
        //spawn webwork
        worker1.current = new Worker(new URL("./worker.js", import.meta.url), {
            type: "module",
        });
        worker2.current = new Worker(new URL("./worker.js", import.meta.url), {
            type: "module",
        });

        worker1.current.onmessage = (event) => {
            console.log(event); // Update state with the worker's result
        };

        worker2.current.onmessage = (event) => {
            console.log(event); // Update state with the worker's result
        };

        setbars([...newb.current.data]);
    }, []);

    useEffect(() => {
        data.current.populate(els);
        data.current.resetptrs();

        var newbar = get_bars();
        setrustbars(newbar);

        let barsptr = data.current.bars();
        rustBarsArray.current = new Uint32Array(memory.buffer, barsptr, els);
    }, [els]);

    async function sortrustbars() {
        worker1.current.postMessage({ platform: "Rust", num: 50000 });

        /*
        for (var i = 0; i < 5000; i++) {
            var ar = new Uint32Array();

            data.current.bubblesortiters(1000);

            setrustbars([...get_bars()]);
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
            */

        /*
        data.current.bubblesort();
        console.log("here");
        setrustbars([...get_bars()]);
        */
    }

    async function sortbars() {
        worker2.current.postMessage({
            platform: "JS",
            num: 50000,
        });
        /*
        for (var i = 0; i < 5000; i++) {
            var start = performance.now();
            newb.current.bubblesortiters(1000);
            console.log("Js:", performance.now() - start);
            newb.current.refresh();
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
            */

        /*
        data.current.bubblesort();
        console.log("here");
        setrustbars([...get_bars()]);
        */
    }

    function get_bars() {
        if (!rustBarsArray.current) {
            let barsptr = data.current.bars();
            rustBarsArray.current = new Uint32Array(
                memory.buffer,
                barsptr,
                els
            );
        }
        return rustBarsArray.current;
    }

    return (
        <>
            <img
                src="/rustacean.png"
                style={{
                    position: "fixed",
                    top: "20px",
                    left: "20px",
                    width: "100px",
                    zIndex: 200,
                }}
                draggable={false}
            ></img>
            <div
                style={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--darkblue)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div id="leftbar">
                    <input
                        value={els}
                        onChange={(e) => {
                            setels(e.target.value);
                            newb.current.populate(e.target.value);
                        }}
                        min={10}
                        max={1000}
                        type="range"
                    ></input>
                    {els}
                    <button
                        onClick={() => {
                            newb.current.shuffle();
                            data.current.populate(els);
                        }}
                    >
                        shuffle
                    </button>
                    <button
                        onClick={() => {
                            sortbars();
                        }}
                    >
                        sort js
                    </button>
                    <button
                        onClick={() => {
                            sortrustbars();
                        }}
                    >
                        sort rust
                    </button>
                </div>
                <div id="main">
                    Javascript
                    <div style={{ width: "100%" }}>
                        <Barsbox bars={bars}></Barsbox>
                    </div>
                    Rust
                    <div style={{ width: "100%" }}>
                        <Barsbox bars={Array.from(rustbars)}></Barsbox>
                    </div>
                </div>
            </div>
        </>
    );
}
