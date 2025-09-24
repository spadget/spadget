const siteName = SITE_SETTINGS.siteName;

function createHeader(containerId) {
    const container = containerId ? document.getElementById(containerId) : document.body;
    const headerText = document.createElement("h1");
    headerText.textContent = siteName;

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
const publishingBy = "by " + siteName;
const bookCollection = SITE_SETTINGS.bookCollection;

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
        img.alt = book.title + ' ' + publishingBy;

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

function createBookContainer(book) {
    const imgPath = "assets/images/";
    const img = document.createElement('img');

    img.src = imgPath + book.cover;
    img.alt = book.title + ' ' + publishingBy;
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

    injectBookJsonLd(book);

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
    footerLeft.textContent = siteName + " 2025";

    // Center section (social icons)
    const footerCenter = document.createElement("div");
    footerCenter.className = "footer-center";
    // Icon container
    const iconContainer = document.createElement("span");
    iconContainer.className = "icon-container";

    const socialLinks = SITE_SETTINGS.socialLinks;

    const linkedin = document.createElement("a");
    linkedin.href = socialLinks.linkedin;

    linkedin.target = "_blank";
    const linkedinIcon = document.createElement("i");
    linkedinIcon.className = "fa-brands fa-linkedin";
    linkedin.appendChild(linkedinIcon);

    const facebook = document.createElement("a");
    facebook.href = socialLinks.facebook;
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

// SEO 

// JSON-LD injection
const siteUrl = SITE_SETTINGS.siteURL + '/';

// Main website schema info
function injectSiteJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteName,
        "url": siteUrl,
        "description": siteName + " offers insightful non-fiction works. Discover our debut release, The Essential Canterbury Travel Guide, crafted to enlighten and inspire.",
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": siteUrl + "assets/images/logo.png"  //  need a new version logo..similar to favicon.ico
            }
        },
        // uncomment later if site implement search using https://spadget.com/search?q={search_term_string} 
        // "potentialAction": {
        //     "@type": "SearchAction",
        //     "target": siteUrl + "search?q={search_term_string}",
        //     "query-input": "required name=search_term_string"
        // }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
}

// Minimal book schema info to include in index book collection
function injectBookListSchema() {
    const currentBooks = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": siteName + " Books",
        "itemListOrder": "http://schema.org/ItemListOrderAscending",
        "itemListElement": bookCollection.map((book, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": siteUrl + book.link,
        }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(currentBooks, null, 2);

    document.head.appendChild(script);
}

// Book schema info to include in each book page
function injectBookJsonLd(book) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": book.title,
        "author": { "@type": "Organization", "name": book.author },
        "publisher": { "@type": "Organization", "name": siteName },
        "description": book.description,
        "url": siteUrl + book.link,
        "image": siteUrl + "assets/images/" + book.cover,
        "inLanguage": "en",
        "datePublished": book.published,
        "bookFormat": "https://schema.org/EBook"
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
}
