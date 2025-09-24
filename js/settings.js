const SITE_SETTINGS = {
    // Site info
    siteName: "Spadget Publishing",
    siteURL: "https://spadget.com",
    defaultLanguage: "en",
    defaultTheme: "light",    

    // Social links
    socialLinks: {
        facebook: "https://www.facebook.com/profile.php?id=61562649484365",
        linkedin: "https://www.linkedin.com/company/spadget-publishing"
    },

    // Pages
    privacyPolicy: "/privacy.html",
    books: [
        { url: "/canterbury_travel_guide.html", title: "Spadget Publishing - The Essential Canterbury Travel Guide", lastmod: "2025-09-24" },
        { url: "/the_adult_adhd_mind.html", title: "Spadget Publishing - The Adult ADHD Mind", lastmod: "2025-09-24" },
        { url: "/cognitive_behavioural_therapy_for_insomnia.html", title: "Spadget Publishing - Cognitive Behavioural Therapy for Insomnia", lastmod: "2025-09-24" }
    ],

    // Books
    bookCollection: [
        {
            id: 1,
            title: "The Essential Canterbury Travel Guide",
            cover: "canterbury_travel_guide.jpg",
            description: "Insider Tips, Authentic Experiences and a Free Self-Guided Walking Tour of the City.",
            link: "canterbury_travel_guide.html",
            saleLink: "https://www.amazon.co.uk/Essential-Canterbury-Travel-Guide-Experiences-ebook/dp/B0D3F16N9B",
            status: "for-sale",
            author: "Bow Harrison",
            genre: "Travel guide",
            published: "June 5, 2024",
            fullDescription: "The City of Canterbury is one of the most culturally significant cities in the UK. There is so much to see, do and experience and an online search only scratches the surface.This isn't a standard list of attractions but an insight into what makes Canterbury such a wonderful place to be.", status: "for-sale",
            eBookCover: "canterbury_travel_guide.pdf",
        },
        {
            id: 2,
            title: "The Adult ADHD Mind",
            cover: "the_adult_adhd_mind.jpg",
            description: "Unlock your full potential and thrive with strategies designed for the unique challenges of adult ADHD.",
            link: "the_adult_adhd_mind.html",
            saleLink: "",
            status: "coming-soon",
            author: "Lydia Blooth",
            genre: "Therapy guide",
            published: "",
            fullDescription: "Whether you’re navigating daily responsibilities, pursuing ambitious goals, or seeking a greater sense of balance, The Adult ADHD Mind is your companion for transforming challenges into opportunities for growth and achievement.",
            eBookCover: "the_adult_adhd_mind.pdf",
        },
        {
            id: 3,
            title: "Cognitive Behavioural Therapy for Insomnia",
            cover: "cognitive_behavioural_therapy_for_insomnia.jpg",
            description: "Transform your nights and reclaim your days with this practical, science-backed guide to better sleep.",
            link: "cognitive_behavioural_therapy_for_insomnia.html",
            saleLink: "",
            status: "coming-soon",
            author: "Lydia Blooth",
            genre: "Therapy guide",
            published: "",
            fullDescription: "Whether your insomnia is new or long-standing, Cognitive Behavioural Therapy for Insomnia offers step-by-step tools, easy exercises, and actionable advice to guide you toward deep, natural sleep—night after night.",
            eBookCover: "cognitive_behavioural_therapy_for_insomnia.pdf",
        }
    ],

    contactEmail: "info@spadget.com"
};
