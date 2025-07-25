import { BsCodeSlash, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "5+",
        icon: <BsCodeSlash size={34} className="text-blue-500" />,
        description: "Custom digital products built — from MVPs to full-scale platforms.",
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Average client rating across projects. We deliver what we promise.",
    },
    {
        title: "1+ Countries",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Global reach. Trusted by clients from Southeast Asia to Europe.",
    },
];
