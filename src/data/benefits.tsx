import {
    FiBarChart2,
    FiBriefcase,
    FiCode,
    FiLock,
    FiUser,
    FiTarget,
    FiTrendingUp,
    FiShield,
} from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Agile Product Development",
        description:
            "From MVPs to scalable platforms, we build digital products that evolve with your business.",
        bullets: [
            {
                title: "Lean MVP Strategy",
                description: "Get to market faster with focused, validated features.",
                icon: <FiTarget size={26} />,
            },
            {
                title: "Iterative Sprints",
                description:
                    "Stay involved with regular updates and transparent progress tracking.",
                icon: <FiTrendingUp size={26} />,
            },
            {
                title: "Clean, Scalable Code",
                description: "Built with modern stacks and future growth in mind.",
                icon: <FiCode size={26} />,
            },
        ],
        imageSrc: "/images/mockup-1.webp",
    },
    {
        title: "End-to-End Collaboration",
        description:
            "We work like your in-house tech team — flexible, communicative, and always aligned with your goals.",
        bullets: [
            {
                title: "Dedicated Project Team",
                description:
                    "Developers, designers, and PMs ready to work closely with you.",
                icon: <FiBriefcase size={26} />,
            },
            {
                title: "Cross-Timezone Ready",
                description: "Remote-first and async-friendly communication.",
                icon: <FiUser size={26} />,
            },
            {
                title: "Post-Launch Support",
                description: "We don’t ghost after shipping — we help you scale.",
                icon: <FiBarChart2 size={26} />,
            },
        ],
        imageSrc: "/images/mockup-2.webp",
    },
    {
        title: "Reliable & Secure Infrastructure",
        description:
            "From the database to the front-end, we prioritize performance, privacy, and protection.",
        bullets: [
            {
                title: "Secure Architecture",
                description: "Built with industry best practices for safety and uptime.",
                icon: <FiLock size={26} />,
            },
            {
                title: "Data Protection",
                description: "Your product and customer data stay confidential.",
                icon: <FiShield size={26} />,
            },
            {
                title: "Compliance-Ready",
                description: "We help you stay aligned with GDPR, HIPAA, and more.",
                icon: <FiUser size={26} />,
            },
        ],
        imageSrc: "/images/mockup-1.webp",
    },
];
