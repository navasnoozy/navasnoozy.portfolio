// src/components/AnimatedBackground/icons.ts
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudIcon from "@mui/icons-material/Cloud"; // Proxy for AWS/Cloud services

// PNG imports
import DockerIcon from "../../assets/icons/Dockericon.png";
import JavaScriptIcon from "../../assets/icons/JavaScriptIcon.png";
import TypeScriptIcon from "../../assets/icons/TypeScriptIcon.png";
import MongoDBIcon from "../../assets/icons/MongoDBIcon.png";
import PostgreSQLIcon from "../../assets/icons/PostgreSQLIcon.png";
import HTML5Icon from "../../assets/icons/HTML5Icon.png";
import CSS3Icon from "../../assets/icons/CSS3Icon.png";
import NodeIcon from "../../assets/icons/NodeIcon.png";
import ReactIcon from "../../assets/icons/ReactIcon.png";
import NextJSIcon from "../../assets/icons/NextJSIcon.png";
import ViteIcon from "../../assets/icons/ViteIcon.png";
import ReduxIcon from "../../assets/icons/ReduxIcon.png";
import ZustandIcon from "../../assets/icons/ZustandIcon.png";
import SocketIOIcon from "../../assets/icons/SocketIOIcon.png";
import PrismaIcon from "../../assets/icons/PrismaIcon.png";
import TailwindCSSIcon from "../../assets/icons/TailwindCSSIcon.png";
import MUIImageIcon from "../../assets/icons/MUIImageIcon.png";
import ChakraUI from "../../assets/icons/ChakraUI.png";
import KubernetesIcon from "../../assets/icons/KubernetesIcon.png";
import NginxIcon from "../../assets/icons/NginxIcon.png";
import KafkaIcon from "../../assets/icons/KafkaIcon.png";
import GitIcon from "../../assets/icons/GitIcon.png";
import VercelIcon from "../../assets/icons/VercelIcon.png";
import RenderIcon from "../../assets/icons/RenderIcon.png";
import DigitalOceanIcon from "../../assets/icons/DigitalOceanIcon.png";
import VitestIcon from "../../assets/icons/VitestIcon.png";
import RestIcon from "../../assets/icons/RestIcon.png";
import RadixUIicons from "../../assets/icons/radixui.png";
import AwsIcon from "../../assets/icons/awsicon.png";

export type IconType = string | React.ComponentType<any>;

export const ALL_ICONS = [
  { Component: JavaScriptIcon, key: "js" },
  { Component: TypeScriptIcon, key: "ts" },
  { Component: MongoDBIcon, key: "mongo" },
  { Component: PostgreSQLIcon, key: "postgres" },
  { Component: HTML5Icon, key: "html5" },
  { Component: CSS3Icon, key: "css3" },
  { Component: NodeIcon, key: "node" },
  { Component: ReactIcon, key: "react" },
  { Component: NextJSIcon, key: "nextjs" },
  { Component: ViteIcon, key: "vite" },
  { Component: ReduxIcon, key: "redux" },
  { Component: ZustandIcon, key: "zustand" },
  { Component: SocketIOIcon, key: "socketio" },
  { Component: PrismaIcon, key: "prisma" },
  { Component: TailwindCSSIcon, key: "tailwind" },
  { Component: MUIImageIcon, key: "mui" },
  { Component: ChakraUI, key: "chakra" },
  { Component: DockerIcon, key: "docker" },
  { Component: KubernetesIcon, key: "k8s" },
  { Component: NginxIcon, key: "nginx" },
  { Component: KafkaIcon, key: "kafka" },
  { Component: GitIcon, key: "git" },
  { Component: GitHubIcon, key: "github" },
  { Component: VercelIcon, key: "vercel" },
  { Component: CloudIcon, key: "aws" }, // Proxy for AWS
  { Component: RenderIcon, key: "render" },
  { Component: DigitalOceanIcon, key: "do" },
  { Component: VitestIcon, key: "vitest" },
  { Component: RestIcon, key: "rest" },
  { Component: RadixUIicons, key: "radix" },
  { Component: AwsIcon, key: "aws" },
];
