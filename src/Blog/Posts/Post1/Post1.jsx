import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {
    atomOneDark,
    gradientDark,
    idea,
    monoBlue,
    solarizedDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Post1() {
    return (
        <>
            <img
                style={{ width: "80%" }}
                src="https://docs.deepwavedigital.com/Tutorials/img/docker_logo.png"
            ></img>
            <h3>My Experience</h3>
            <p>
                If you have been around tech for a sufficient amount of time,
                I'm sure you have heard of Docker. Growing up, anytime I heard
                the word docker I became instantly scared of the topic and
                shifted my attention to another solution.
            </p>
            <p>
                The reality is, I never understood what docker is even trying to
                do! I had heard of{" "}
                <a target="_blank" href="https://kubernetes.io/">
                    kubernetes
                </a>{" "}
                and docker-compose and the whole world of things yet if you
                asked me when/why anyone would use docker, I would have had no
                idea. That is, until it was exactly what I needed this semester
                as part of
                <a> this</a> research project I completed at my University.
            </p>
            <h3>The "Aha" Moment!</h3>
            <p>
                As part of my project, it was necessary that I find a way to
                efficiently and effectively deploy code to a raspberry pi 5. I
                was writing code locally on my laptop and simulating the Drone
                flight. Before I knew about docker, I kinda just <i>hoped</i> I
                would find a way.
            </p>
            <p>
                There are two main issues I faced when it actually came time to
                deploy the code:
            </p>
            <ol>
                <li>
                    How was I going to ensure that all of my dependencies and
                    processes would work as expected on different hardware?
                </li>
                <li>
                    If I wanted to be able to debug in real time, how should I
                    go about uploading new code to the Raspberry Pi?
                </li>
            </ol>
            <p>
                As it turns out, Docker is the perfect solution to{" "}
                <strong>both</strong> of these problems.
            </p>
            <p>
                The first problem is docker's bread and butter. Docker fixes the
                age old problem: "I promise it works on my machine." I like to
                think about docker like a virtual machine, except instead of
                allowing compatibility among operating systems, docker ensures
                compatibility among similar hardware architectures. This means
                that if I build a docker image for arm64 architecture, any
                machine with that architecture should be able to run the image!
            </p>
            <p>
                As for the second problem, Docker's concept of an <i>image</i>{" "}
                allows the code to be easily packaged up and published on{" "}
                <a target="_blank" href="https://hub.docker.com/">
                    Docker Hub.
                </a>{" "}
                Then, as if by magic, the image can be pulled from the cloud and
                deployed. Docker is very clever about the way it caches data,
                and in my experience, I was able to go from ctrl+s on my laptop
                to docker run on the Pi in about 5 seconds.
            </p>
            <h3>How to Actually Use Docker</h3>
            <p>
                To use Docker, you must understand its three common components:
            </p>
            <ol>
                <li>
                    Dockerfiles
                    <p>
                        Think of the Dockerfile as a blueprint for the "virtual
                        machine" that your code will run on. The Dockerfile
                        initializes a new machine, installing dependencies and
                        code. Using CMD, you can specify the entry point for
                        your application. Take the dockerfile from my Drone
                        project as an example:
                    </p>
                    <SyntaxHighlighter
                        language="dockerfile"
                        style={monoBlue}
                        id="syntax"
                    >{`FROM arm64v8/python:3.12

# Install system dependencies for building Python packages
RUN apt-get update && apt-get install -y 
    gcc 
    g++ 
    libpython3-dev 
    libffi-dev 
    libssl-dev 
    make 
    python3-pip 
    python3-dev
    build-essential 
    && rm -rf /var/lib/apt/lists/*

WORKDIR /

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . . 

CMD ["python", "./Drone.py"]`}</SyntaxHighlighter>
                    <p>
                        The Dockerfile uses FROM to begin its configuration with
                        the{" "}
                        <a
                            target="_blank"
                            href="https://hub.docker.com/_/python"
                        >
                            official python docker image{" "}
                        </a>
                        which can be found on Docker hub. The, using RUN, the
                        Dockerfile installs the system dependencies required for
                        my environment. Next, it uses WORKDIR. This is the
                        Dockerfile of cd and I use it to ensure I am in the root
                        directory of the machine. I then copy requirements.txt
                        from the directory of the dockerfile to the machine,
                        install the python requirements by with RUN, and finally
                        copy the rest of the directory and specify the entry
                        point with CMD.
                    </p>
                </li>
                <li>Images</li>
                <p>
                    Once a Dockerfile has been created, it can be used as a
                    template to create a Docker image. This image is incredibly
                    portable, and is where docker is really able to solve my
                    second problem listed above. The image is everything you
                    need to run your code on whatever machine you want. It
                    contains within itself all of the dependencies that were
                    specified in its Dockerfile and runs in its own private
                    environment, so there is no need to worry about sytem
                    environment varibale or any changes in OS configuration.
                </p>
                <h3>How to build a Docker image</h3>
                <p>
                    Once you have successfully created a Dockerfile, build the
                    image simply using the following:
                </p>
                <SyntaxHighlighter language="bash" id="syntax">
                    {`$ sudo docker build .`}
                </SyntaxHighlighter>
                <p>To view your image or all of your images, run:</p>
                <SyntaxHighlighter language="bash" id="syntax">
                    {`$ sudo docker images`}
                </SyntaxHighlighter>
                <p>
                    Now we have an image! in the next section, we will run the
                    image and create what is a <i>container</i>
                </p>
                <li>Containers</li>
            </ol>
            <p>
                A docker contianer can be though of as a running instance of
                your program that has been spawned using the docker image. Using
                the image, many containers can be spawned and deployed across
                many machines. A docker container can be run using the
                following:
            </p>
            <SyntaxHighlighter
                language="bash"
                id="syntax"
            >{`$ sudo docker run -it image-name`}</SyntaxHighlighter>
            <p>
                where <i>image-name</i> is the name of the image you previously
                built.
            </p>
            <p>
                {" "}
                The -it specifies that the container will run with an
                interactive terminal, which may be useful for certain
                applications. Below are some common flags which I find helpful:
            </p>
            <ul>
                <li>
                    -it
                    <p>run in interactive terminal mode</p>
                </li>
                <li>
                    -p <i>internal</i>:<i>external</i>
                    <p>
                        forward a port from within the docker container to the
                        host machine's network
                    </p>
                </li>
                <li>
                    -restart always
                    <p>
                        run the docker container if no instance is already
                        running
                    </p>
                </li>
                <li>
                    --device <i>device</i>
                    <p>
                        forward any device from the host machine into the docker
                        container
                    </p>
                </li>
            </ul>
            <h3>My Workflow</h3>
            <p>
                {" "}
                Once I have created a Dockerfile, any change I make to the code
                is accomplished with the following:
            </p>
            <SyntaxHighlighter language="bash" id="syntax">
                {`$ sudo docker build -t 1112luke/drone . \n$ sudo docker push 1112luke/drone`}
            </SyntaxHighlighter>
            <p>
                Then, on the raspberry pi, I can simply pull the image and run
                with:
            </p>
            <SyntaxHighlighter
                language="bash"
                id="syntax"
            >{`$ sudo docker pull 1112luke/drone \n$ sudo docker run -it --device /dev/ttyUSB0 -p 14551:14551 --restart always 1112luke/drone`}</SyntaxHighlighter>
            <p>
                The entire process, from saving the code on my laptop to running
                it on the raspberry pi takes around 5 seconds.
            </p>
            <h3>What's Next?</h3>
            <p>
                Learning and using Docker has truly been a joy. In my
                experience, I find that any new tool I consistently use falls
                into one of three categories:
                <ol>
                    <li>
                        Tools that are necessary but I don't enjoy using.{" "}
                        <p>-cron, stripe, windows 11, etc.</p>
                    </li>
                    <li>
                        Tools that are unnecessary but I enjoy using.
                        <p>
                            -way too many VSCode plugins, color customizations,
                            most other customizations, etc.
                        </p>
                    </li>
                    <li>
                        Tools that are necessary and I enjoy using.
                        <p>
                            -<strong>Docker</strong>, React, Unix commands,
                            Framer motion, etc.
                        </p>
                    </li>
                    <p>
                        As you can see, Docker falls right into the third
                        category as a tool I feel is both necessary and
                        enjoyable to use. Tools like Docker make me <i>want</i>{" "}
                        to have a project where I need it. I hope I will be able
                        to learn more about docker, specifically about
                        Docker-Compose and Kubernetes, as I tackle more complex
                        projects.
                    </p>
                </ol>
            </p>
        </>
    );
}
