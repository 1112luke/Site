export default function Post5() {
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
                    src="/"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                        zoom: "60%",
                    }}
                ></iframe>
            </div>
            <h3>History</h3>
            <p>
                This website has been a long time coming, yet I built it up to
                this point in less than a month... Let me explain.
            </p>

            <p>
                This is the third iteration of my website. The first was made
                during my senior year of high school, and was pure HTML and CSS.
                After a bit, I became emberassed having that site up with my
                name on it, and knew it needed a refresh. I had learned{" "}
                <a href="https://react.dev/" target="_blank">
                    React
                </a>{" "}
                for some miscellaneous projects, and was ready to begin
                building.
            </p>
            <p>
                I wanted my site to be impressive, so I set out with an
                ambitious plan: make the website fully 3D. Any 2D elements would
                be pasted onto 2D planes in the space I would build out, and the
                scroll experience would have the user flying through a starfield
                of all of my projects and posts. It was going to be glorious...
                or so I thought.
            </p>

            <p>
                After working on and off for about a month and a half, I had the
                following prototype:
            </p>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1920/1080",
                    position: "relative",
                }}
            >
                <iframe
                    src="https://dazzling-sopapillas-5aebe4.netlify.app/"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                        zoom: "60%",
                    }}
                ></iframe>
            </div>
            <p>
                If you mess with the above website a bit, you will probably
                notice three things
                <ol>
                    <li>it is cool</li>
                    <li>it bears strong resemblance to the current website</li>
                    <li>
                        it is hard to navigate, buggy, confusing, bulky, and
                        unintuitive
                    </li>
                </ol>
            </p>
            <p>
                At a certain point, I finally decided to scrap the project, and
                I was so upset. The reality is, it <strong>was</strong>{" "}
                <i>so</i> cool. My work on this project for a long time was
                heavily motivated by the{" "}
                <a
                    href="https://thedecisionlab.com/biases/the-sunk-cost-fallacy"
                    target="_blank"
                >
                    sunk-cost fallacy
                </a>
                . I did end up cutting my losses though, as the codebase became
                very hard to work with and reviews from friends expressed the
                sentiment that yes, it was cool, but no, it was not enjoyable or
                intuitive to use.
            </p>
            <p>
                Looking back, the website was more of a lesson in project
                planning than in software. While I did learn a lot about web
                development, the most valuable thing I learned was about the
                value of design for functionality first, only implementing cool
                features where strong underlying design principles have already
                been established.
            </p>
            <p>
                When I began work on this website a little less than a month
                ago, progress came quickly. My react skills were honed, but,
                more importantly, I was equipped with the wisdom that can only
                come from a failure like the previous one that design and UI
                would come first.{" "}
            </p>

            <i>ARTICLE NOT FINISHED</i>
            <p></p>
        </>
    );
}
