import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: '$100',
        features: [
            'Ideal for MVP & small-scale apps',
            '1 platform (web or mobile)',
            'Up to 2 weeks delivery',
            'Basic UI/UX design',
            'Post-launch support (2 weeks)',
        ],
    },
    {
        name: 'Growth',
        price: '$1,500',
        features: [
            'For scaling products or startups',
            'Cross-platform (web + mobile)',
            'Up to 6 weeks delivery',
            'Custom UI/UX design',
            'Agile sprints & milestone tracking',
            'Post-launch support (1 month)',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom Quote',
        features: [
            'Tailored for businesses & SaaS at scale',
            'Full-stack architecture planning',
            'End-to-end development & deployment',
            'Ongoing collaboration & feature rollout',
            'Dedicated team & project manager',
            'Priority support & maintenance',
        ],
    },
];
