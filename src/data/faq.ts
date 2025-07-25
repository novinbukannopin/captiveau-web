import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} experienced in building scalable products?`,
        answer:
            "Absolutely. We've helped startups and growing businesses build apps and platforms that scale — both in terms of traffic and features. From MVPs to full-blown SaaS, we’ve got your back.",
    },
    {
        question: `What kind of projects can I build with ${siteDetails.siteName}?`,
        answer:
            `${siteDetails.siteName} specializes in building web apps, mobile apps, SaaS platforms, and internal tools. Whether it’s a marketplace, booking system, dashboard, or custom solution — we’ll tailor it to your needs.`,
    },
    {
        question: `How involved will I be during the development process?`,
        answer:
            "As involved as you want to be. We use agile methodology, so you’ll get regular updates, prototypes, and a say in every sprint. Think of us as your extended tech team.",
    },
    {
        question: 'Do you offer post-launch support?',
        answer:
            "Yes! We don’t disappear after shipping. We offer flexible maintenance and scaling plans, so your product keeps running smoothly as your business grows.",
    },
    {
        question: 'Is my project idea safe with CAPTIVEAU?',
        answer:
            "Totally. We take confidentiality seriously. We can sign NDAs before any deep discussions, and your code and data are secured with best practices and private repositories.",
    }
];
