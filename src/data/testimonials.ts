import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Smith',
        role: 'Founder at LaunchHive',
        message: `Partnering with ${siteDetails.siteName} was a game-changer. They took our idea and turned it into a fully functional MVP in weeks — with clean code, beautiful UI, and solid performance.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO at GrowthStack',
        message: `${siteDetails.siteName}'s team felt like an extension of ours. They’re proactive, communicative, and seriously know their tech — from architecture to deployment.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Product Manager at NovaTech',
        message: `We needed a team that could move fast without sacrificing quality. ${siteDetails.siteName} delivered — and even helped us refine features we hadn’t considered. Highly recommended.`,
        avatar: '/images/testimonial-3.webp',
    }
];
