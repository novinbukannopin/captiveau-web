import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Building scalable digital products for startups and businesses — with clarity, speed, and purpose.",
    quickLinks: [
        {
            text: "Our Services",
            url: "#services"
        },
        {
            text: "Portfolio",
            url: "#portfolio"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'hello@captiveau.com',
    telephone: '+62 851-5626-5910',
    socials: {
        github: 'https://github.com/captiveau',
        twitter: 'https://twitter.com/captiveau',
        linkedin: 'https://www.linkedin.com/company/captiveau',
        instagram: 'https://www.instagram.com/captiv.eau',
    }
}
