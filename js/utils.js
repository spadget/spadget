function createHeader(containerId) {
    const container = containerId ? document.getElementById(containerId) : document.body;
    const headerText = document.createElement("h1");
    headerText.textContent = "Spadget Publishing";

    container.appendChild(headerText);
}

const textToType = "Enlightening and educating readers through impactful non-fiction works.";
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typeWriter.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 52); // Typing speed (milliseconds)
    }
}

// Book data
const bookCollection = [
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
    }
];

function getBooks() {
    return bookCollection;
}

function getBook(bookId) {
    const book = bookCollection.find(b => b.id === bookId);
    return book;
}

function createBookList(containerId) {
    const container = document.getElementById(containerId);

    const books = getBooks();

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const imgPath = "assets/images/";

        const link = document.createElement('a');
        link.href = book.link;

        const img = document.createElement('img');
        img.src = imgPath + book.cover;
        img.alt = book.title;

        link.appendChild(img);
        bookDiv.appendChild(link);

        /*
        const desc = document.createElement('p');
        desc.textContent = book.description;
        bookDiv.appendChild(desc);

        if (book.status == 'for-sale') {

            if (book.saleLink != null && book.saleLink.length > 0) {
                const saleLink = document.createElement('a');
                saleLink.href = book.saleLink;
                saleLink.target = "_blank"
                saleLink.className = "buy-link";
                saleLink.textContent = "Buy it Now";

                bookDiv.appendChild(saleLink);

            } else {
                const missingSaleLink = document.createElement('span');
                missingSaleLink.textContent = "Unavailable";
                missingSaleLink.classList.add('coming-soon');
                bookDiv.appendChild(missingSaleLink);
            }

        } else if (book.status == 'coming-soon') {
            const comingSoonSpan = document.createElement('span');
            comingSoonSpan.textContent = "Coming Soon";
            comingSoonSpan.classList.add('coming-soon');
            bookDiv.appendChild(comingSoonSpan);
        }*/

        container.appendChild(bookDiv);
    });
}

function createParagraph(label, property) {
    const paragraph = document.createElement('p');
    const strongText = document.createElement("strong");
    const boldText = document.createTextNode(label);
    strongText.appendChild(boldText);
    const afterText = document.createTextNode(property);
    paragraph.appendChild(strongText);
    paragraph.appendChild(afterText);

    return paragraph;
}

function createContainer(book) {
    const imgPath = "assets/images/";
    const img = document.createElement('img');

    img.src = imgPath + book.cover;
    img.alt = book.title;
    container.appendChild(img);

    const bookDiv = document.createElement('div');
    bookDiv.className = "book-info";

    const titleBook = document.createElement('h2');
    titleBook.textContent = book.title;
    bookDiv.appendChild(titleBook);

    bookDiv.appendChild(createParagraph('Author: ', book.author));
    bookDiv.appendChild(createParagraph('Genre: ', book.genre));

    if (book.published) {
        bookDiv.appendChild(createParagraph('Published: ', book.published));
    } else {
        const unPublishedSpan = document.createElement('span');
        unPublishedSpan.textContent = "Coming Soon";
        unPublishedSpan.classList.add('book-coming-soon');
        bookDiv.appendChild(unPublishedSpan);
    }

    bookDiv.appendChild(createParagraph('', book.fullDescription));

    const backLink = document.createElement('a');
    backLink.href = "index.html";
    backLink.className = "back-link";
    backLink.textContent = "Back to Book List";

    bookDiv.appendChild(backLink);

    if (book.status == 'for-sale') {

        if (book.saleLink != null && book.saleLink.length > 0) {
            const saleLink = document.createElement('a');
            saleLink.href = book.saleLink;
            saleLink.target = "_blank"
            saleLink.className = "buy-link";
            saleLink.textContent = "Buy it Now";

            bookDiv.appendChild(saleLink);

        } else {
            const missingSaleLink = document.createElement('span');
            missingSaleLink.textContent = "Unavailable";
            missingSaleLink.classList.add('coming-soon');
            bookDiv.appendChild(missingSaleLink);
        }

    } else if (book.status == 'coming-soon') {
        const comingSoonSpan = document.createElement('span');
        comingSoonSpan.textContent = "Coming Soon";
        comingSoonSpan.classList.add('coming-soon');
        bookDiv.appendChild(comingSoonSpan);
    }

    return bookDiv;
}

function createFooter(containerId) {

    if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
        fa.referrerPolicy = 'no-referrer';
        document.head.appendChild(fa);
    }

    const root = containerId ? document.getElementById(containerId) : document.body;
    const footer = document.createElement('footer');

    // Footer container (flexbox)
    const footerContainer = document.createElement("div");
    footerContainer.className = "footer-container";

    // Left section
    const footerLeft = document.createElement("div");
    footerLeft.className = "footer-left";
    footerLeft.textContent = "Spadget Publishing 2025";

    // Center section (social icons)
    const footerCenter = document.createElement("div");
    footerCenter.className = "footer-center";
    // Icon container
    const iconContainer = document.createElement("span");
    iconContainer.className = "icon-container";

    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/company/spadget-publishing";
    linkedin.target = "_blank";
    const linkedinIcon = document.createElement("i");
    linkedinIcon.className = "fa-brands fa-linkedin";
    linkedin.appendChild(linkedinIcon);

    const facebook = document.createElement("a");
    facebook.href = "https://www.facebook.com/profile.php?id=61562649484365";
    facebook.target = "_blank";
    const facebookIcon = document.createElement("i");
    facebookIcon.className = "fa-brands fa-facebook-f";
    facebook.appendChild(facebookIcon);

    iconContainer.appendChild(linkedin);
    iconContainer.appendChild(facebook);

    footerCenter.appendChild(iconContainer);

    // Right section
    const footerRight = document.createElement("div");
    footerRight.className = "footer-right";
    const privacyLink = document.createElement("a");
    privacyLink.href = "privacy.html";
    privacyLink.textContent = "Privacy Policy";
    privacyLink.target = "_blank"
    footerRight.appendChild(privacyLink);

    // Append sections
    footerContainer.appendChild(footerLeft);
    footerContainer.appendChild(footerCenter);
    footerContainer.appendChild(footerRight);

    footer.appendChild(footerContainer);
    root.appendChild(footer);
}
