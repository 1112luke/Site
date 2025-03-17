import { useState } from "react";
import Pidemo from "../../../Codes/PID/Pidemo";

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
        </>
    );
}
