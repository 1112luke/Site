import { useEffect, useState } from "react";

export default function useHover() {
    const [out, setout] = useState({ x: 0, y: 0, z: 0 });

    var count = 0;

    useEffect(() => {
        var go = setInterval(() => {
            count += 0.05;

            setout({
                x: 0.08 * Math.sin(count * 1) + 0.01 * Math.cos(count * 2),
                y: 0.1 * Math.sin(count * 0.3) + 0.1 * Math.cos(count * 0.8),
                z: 0.03 * Math.sin(count * 1) + 0.03 * Math.cos(count * 1),
            });

            return () => clearInterval(go);
        }, 1000 / 30);
    }, []);

    return out;
}
