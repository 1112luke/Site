import { useEffect, useState } from "react";
import "./Post9.css";

export default function Post9() {
    const [views, setviews] = useState(0);

    useEffect(() => {
        const url = new URL("https://www.googleapis.com/youtube/v3/videos");
        url.searchParams.append("part", "statistics");
        url.searchParams.append("id", "z6PXviT86tI");
        url.searchParams.append(
            "key",
            "AIzaSyDGYeMyAV_mKpcw2opPDk3f7pdzndjqnVQ"
        );

        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                setviews(data.items[0].statistics.viewCount.toLocaleString())
            );
    }, []);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1920/1080",
                    position: "relative",
                }}
            >
                <iframe
                    src="https://www.youtube.com/embed/z6PXviT86tI"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                    }}
                ></iframe>
            </div>
            <h1
                style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "100%",
                        backgroundColor: "red",
                    }}
                    id="blink"
                ></div>
                <div
                    style={{
                        marginLeft: "20px",
                        marginRight: "20px",
                    }}
                >
                    Views:{" "}
                    <span style={{ color: "var(--yellow)" }}>
                        {Number(views).toLocaleString()}
                    </span>
                </div>
            </h1>
            <h3>Background</h3>
            <p>
                My junior year of high school, we were assigned a final project
                in AP Calc AB and one of our options was to make a music video.
                This does seem a bit odd, doesnt it? A music video? For
                calculus?
            </p>

            <p>
                That is, until you realize that calculus music videos have kind
                of become a thing, with 2,500+ posted to youtube to date (see{" "}
                <a
                    href="https://www.youtube.com/playlist?list=PLSzlDwDTrZnebswo-FabRCOK83F1aYtP-"
                    target="_blank"
                >
                    Ultimate Calculus Parody Song Playlist
                </a>
                ). I knew I wanted to make a parody song, so I started
                brainstorming. Many ideas came and went. Then, the first good
                line came to me: "could try boxing, maybe shading, but here we
                are now, integrating." From that point on, I knew it would be a
                Nirvana parody, and Smells Like Calculus was born.
            </p>

            <h3>Production</h3>
            <p>
                After writing the full list of lyrics, I had to figure out how I
                would film the video and record the vocals. I think one of the
                factors that contributed to the success of this video was
                research. I remember watching multiple videos explaining{" "}
                <a
                    href="https://www.youtube.com/watch?v=MjI9IzPLvvw"
                    target="_blank"
                >
                    how Kurt Cobain recorded his vocals
                </a>
                . I remember scouring youtube and watching the best calculus
                parody videos over and over again to attempt to mimic their
                stylistic choices.
            </p>
            <p>
                To record the video I used a gopro, but in retrospect an iphone
                or any camera would have been fine. I think the camera is an
                often overthought part of calculus parody music video production
                quality. I filmed the video over the course of about a week,
                getting random clips here and there during the school day. I cut
                it all together in{" "}
                <a
                    href="https://www.blackmagicdesign.com/products/davinciresolve"
                    target="_blank"
                >
                    Davinci Resolve
                </a>{" "}
                because it was free. The editing wasn't too intense and any
                video editing software would have been fine.
            </p>
            <p>
                For the vocals, I used{" "}
                <a href="https://www.image-line.com/" target="_blank">
                    FL studio
                </a>{" "}
                because it was free. I remember screaming the vocals at the top
                of my lungs in my room -- the parents were probably very
                confused. As per my research on Kurt Cobain, I recorded many of
                the vocals multiple times and layerd them on top of eachother
                for a more full sound. Then, by a combination of reverb, EQ,
                compression, distortion, and other effects, I attempted to mimic
                the sound further.
            </p>
        </>
    );
}
