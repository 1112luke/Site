import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router";

export default function Post15() {
    return (
        <>
            <img width="100%" src="/homelab/dashboard.png"></img>
            <p>
                If you've never heard the word{" "}
                <i>
                    <strong>
                        <Link
                            to="https://stormagic.com/company/blog/what-is-homelab/"
                            target="_blank"
                        >
                            homelab
                        </Link>
                    </strong>
                </i>
                , you're at the same spot I was about a month ago. When I
                discovered the concept, though, I knew I had to try it.
            </p>
            <h3>What is a Homelab?</h3>
            <p>
                At its core, creating a homelab is as simple as setting up
                computing devices in your home to act as servers for a myriad of{" "}
                <Link
                    to="https://en.wikipedia.org/wiki/Self-hosting_(web_services)"
                    target="_blank"
                >
                    self-hosted
                </Link>{" "}
                services. These can be anything from{" "}
                <Link to="https://nextcloud.com/" target="_blank">
                    Nextcloud
                </Link>
                , a google drive replacement, to{" "}
                <Link to="https://www.home-assistant.io/" target="_blank">
                    Home Assistant
                </Link>{" "}
                for smart home automations, to{" "}
                <Link to="https://www.plex.tv/" target="_blank">
                    Plex
                </Link>{" "}
                for serving your very own media to your own personal streaming
                service.
            </p>
            <h3>Why is it so addicting?</h3>
            <p>
                I'm not the only person who finds this "hobby" of sorts so fun
                and addicting. All over the internet, there are stories of folks
                who just wanted to dip their toes into the water of this world,
                but got completely sucked in over their head. My experience was
                no exception...
            </p>
            <p>
                Some time ago, I wrote{" "}
                <Link
                    to="https://lukescholler.com/I've-Discovered-Docker"
                    target="_blank"
                >
                    this
                </Link>{" "}
                post about my love for{" "}
                <Link to="https://www.docker.com/" target="_blank">
                    docker
                </Link>
                . At the end of that post, I mentioned that I hope to find more
                projects that use docker so I could use it more and become more
                experienced with things like docker-compose. As it turns out,
                homelabbing is just about the ultimate project to learn all
                about docker and docker-compose, so my interest in it quite
                frankly shouldn't have surprised me as much as it did.
            </p>
            <p>
                Docker isn't the only aspect of this project that I found
                incredibly enjoyable, though. For a while, networking had been a
                topic that I really wanted to learn about. It is one of those
                topics that shows up everywhere, yet there were only a subset of
                people I knew who really understood it. Homelabbing has gotten
                me to the point with networking that I know what I don't know,
                and I feel competant in answering many networking questions. For
                example:
            </p>
            <ul>
                <li>What does a router do?</li>
                <li>What is a subnet?</li>
                <li>What is a VPN</li>
                <li>What does an internet service provider do?</li>
                <li>What is a reverse proxy?</li>
            </ul>
            <p>
                These questions were always a bit blurry to me until I started
                my home server. Through the process, I've had hands on
                experience answering each of these questions, and I feel more
                competant than ever with networking.
            </p>
            <p>
                In short, it is a combination of my interest in docker, my
                interest in networking, and my interest in computer systems in
                general that has made this project so much fun. I am by no means
                finished, and I hope to have a home server in some form or
                another for the forseeable future.
            </p>
            <h3>My Home Server</h3>
            <p>
                My specific setup is very rudimentary and subject to much
                change, but I'll provide a brief overview of the hardware here
                and then talk a bit about what software I am currenlty hosting.
            </p>
            <p>
                <b>Hardware</b>
            </p>
            <p>
                When I initially got into this, I used an old hp laptop I had
                laying around with a broken screen. I installed debian, plugged
                it into the wall and into my network, and just like that I had a
                server. I quickly realized, though, that the 100gb of storage on
                that laptop would be nowhere near enough to properly host any
                sort of media server. I eventually decided to part together a
                system with an old motherboard and cpu I had laying around, and
                purchased an 8tb hard drive for the system. It only runs a core
                i3 10100f, but I've found that that is plenty of compute unless
                I want to do things like batch transcoding of all of my media,
                in which case I would greatly benefit from a GPU.
            </p>
            <p>
                <b>Software</b>
            </p>
            <p>
                {" "}
                I run many peices of software on my machine. I'll discuss a few
                of my favorites individually, and also mention programs I hope
                to run in the future.
            </p>
            <ul>
                <li>
                    <h3>Portainer</h3>
                    <p>
                        Portainer is very essential for my setup. Portainer is
                        primarily used to spawn and manage docker containers.
                        Every single one of the programs I run are currently
                        contaierized with docker, so portatiner is of utmost
                        importance. I've been able to learn docker-compose
                        through this process, and it has been super satisfying
                        to declaratively spawn programs from a simple
                        compose.yaml file.{" "}
                    </p>
                </li>
                <li>
                    <h3>Wireguard VPN</h3>
                    <p>
                        <Link to="https://www.wireguard.com/" target="_blank">
                            Wireguard
                        </Link>{" "}
                        is a fast, modern, secure vpn client/server system.
                        Before doing this project, I only understood VPNs in the
                        context of VPN services, where users pay to have their
                        internet connection encrypted or to change their
                        location to watch media from different parts of the
                        world. While I understand that use-case far better now,
                        I also see VPNs in a whole new light, as I use my VPN to
                        securely and remotely access my home server while I am
                        not at home. It acts as a tunnel to my network,
                        "tricking" my computer into thinking it is at my house
                        even when it isn't. My VPN server doesn't actually run
                        on my server but on my router, as TP-Link comes with a
                        super simple solution for Wireguard VPN and other built
                        in.
                    </p>
                </li>
                <li>
                    <h3>Dynamic DNS</h3>
                    <p>
                        For remote access and DNS traffic to be properly routed
                        to my home server, my public IP must be known. This
                        becomes an issue because my ISP does not give me a
                        static IP address, leaving it up to me to configure all
                        of my services each time my IP changes. There is a fix
                        for this, though, and it comes in the form of{" "}
                        <Link
                            to="https://en.wikipedia.org/wiki/Dynamic_DNS"
                            target="_blank"
                        >
                            Dynamic DNS
                        </Link>
                        . Dynamic DNS is a system to automatically point a
                        domain name to whatever my public IP happens to be,
                        updating in real time. Similar to Wireguard, this runs
                        on my TP-Link router, as it have convenient options for
                        this built in.
                    </p>
                </li>
                <li>
                    <h3>Plex</h3>
                    <p>
                        Plex is awesome. It is a service that allows any media
                        stored on the drive of my home server to be streamed
                        anywhere in the world, and presents a very polished user
                        interface for mobile, web, and smart TV devices.
                    </p>
                </li>
            </ul>
        </>
    );
}
