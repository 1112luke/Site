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
                        interface for mobile, web, and smart TV devices. I
                        simply load movies onto my server, and they are
                        available instantly for all of my friends and family who
                        use the service.
                    </p>
                </li>
                <li>
                    <h3>Jellyfin</h3>
                    <p>
                        Jellyfin is an open source alternative to Plex. Many
                        prefer it over Plex for its increased level of
                        customization and lightweight interface. While I do
                        prefer this as well, I stick with Plex for sharing
                        content with family and friends for its ease of use.
                    </p>
                </li>
                <li>
                    <h3>Homarr</h3>
                    <p>
                        Homarr is the interface that you see in the title image
                        of this post. It allows me to quickly view which of my
                        services are running, as well as system stats such as
                        CPU Usage, Storage space, memory utilizaiton, and
                        network utilizaiton via the{" "}
                        <Link to="https://getdashdot.com/" target="_blank">
                            Dash.
                        </Link>{" "}
                        service, which I also host on the server.
                    </p>
                </li>
                <li>
                    <h3>Nginx Reverse Proxy Manager</h3>
                    <p>
                        To access services remotely, a reverse proxy is
                        necessary to map incoming DNS requests to the correct
                        internal machine and port. If I want, say,
                        dashboard.lukescholler.com to map to my homarr instance,
                        I need to setup a reverse proxy to map that incoming
                        request to the machine and port (192.168.0.33:7575)
                    </p>
                    <br></br>
                    <aside>
                        The above assumes that a CNAME record has been created
                        for the subdomain, pointing it to my public IP address
                        or, in my case, the dynamic DNS setup on my router.
                    </aside>
                </li>
            </ul>

            <p>
                The above are by no means all the services I run, but are a good
                overview of the types of things I am doing with my server.
                Containers I want to run in the future include NextCloud and
                PiHole, for storage and ad blocking, respectively.
            </p>
            <p>
                <b>Orchestration with Docker Compose</b>
            </p>
            <p>
                All of my media containers are spawned and managed via Docker
                Compose using the following compose.yaml file:
            </p>

            <SyntaxHighlighter
                id="syntax"
                language="yaml"
                style={monoBlue}
            >{`services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - VERSION=docker
      - PLEX_CLAIM= #optional
    volumes:
      - /appdata/plex:/config
      - /vault/data:/data
    restart: unless-stopped

  tautulli:
    image: lscr.io/linuxserver/tautulli:latest
    container_name: tautulli
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /appdata/tautulli:/config
    ports:
      - 8181:8181
    restart: unless-stopped

  jellyseerr:
       image: fallenbagel/jellyseerr:latest
       container_name: jellyseerr
       environment:
            - LOG_LEVEL=debug
            - TZ=Etc/UTC
       ports:
            - 5055:5055
       volumes:
            - /appdata/jellyseer:/app/config
       restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /appdata/radarr:/config
      - /vault/data:/data
    ports:
      - 7878:7878
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /appdata/sonarr:/config
      - /vault/data:/data

    ports:
      - 8989:8989
    restart: unless-stopped

  flaresolverr:
    # DockerHub mirror flaresolverr/flaresolverr:latest
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - LOG_LEVEL=\${LOG_LEVEL:-info}
      - LOG_HTML=\${LOG_HTML:-false}
      - CAPTCHA_SOLVER=\${CAPTCHA_SOLVER:-none}
      - TZ=Etc/UTC
    ports:
      - "\${PORT:-8191}:8191"
    restart: unless-stopped 

  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /appdata/prowlarr:/config
      - /vault/data:/data
    ports:
      - 9696:9696
    restart: unless-stopped

  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - WEBUI_PORT=8080
      - TORRENTING_PORT=6881
    volumes:
      - /appdata/qbittorrent:/config
      - /vault/data:/data
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  cleanuparr:
    image: ghcr.io/cleanuparr/cleanuparr:latest
    container_name: cleanuparr
    restart: unless-stopped
    ports:
      - "11011:11011"
    volumes:
      - /appdata/cleanuparr:/config
    environment:
      - PORT=11011
      - BASE_PATH=
      - PUID=1000
      - PGID=1000
      - UMASK=022
      - TZ=Etc/UTC

  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - JELLYFIN_PublishedServerUrl=http://192.168.0.5 #optional
    volumes:
      - /appdata/jellyfin:/config
      - /vault/data:/data
    ports:
      - 8096:8096
      - 8920:8920 #optional
      - 7359:7359/udp #optional
      - 1900:1900/udp #optional
    restart: unless-stopped

  tdarr:
    container_name: tdarr
    image: ghcr.io/haveagitgat/tdarr:latest
    restart: unless-stopped
    network_mode: bridge
    ports:
      - 8265:8265 # webUI port
      - 8266:8266 # server port
    environment:
      - TZ=Europe/London
      - PUID=1000
      - PGID=1000
      - UMASK_SET=002
      - serverIP=0.0.0.0
      - serverPort=8266
      - webUIPort=8265
      - internalNode=true
      - inContainer=true
      - ffmpegVersion=7
      - nodeName=MyInternalNode
      - auth=false
      - openBrowser=true
      - maxLogSizeMB=10
      - cronPluginUpdate=
    volumes:
      - /appdata/tdarr/server:/app/server
      - /appdata/tdarr/configs:/app/configs
      - /appdata/tdarr/logs:/app/logs
      - /vault/data/media:/media
      - /vault/transcode_cache:/temp

    `}</SyntaxHighlighter>

            <p>
                For each service, an addition is made to this file listing
                common things like the source of the docker container, ports to
                forward through to the container, and volumes to map persistent
                data through to the container. Much of this information is
                provided by the maker of the docker file, making this setup as
                simple as changing a few lines to add any new service.
            </p>
            <aside>
                I do not run docker compose directly, but rather manage it
                through portainer on what is called "stacks." This is simply for
                convenience sake, but it works the same either way!
            </aside>
        </>
    );
}
