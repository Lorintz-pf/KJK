"use strict";
const book = [
    {
        pageNumber: 0,
        content: "Ez az első oldal, ahol elkezdődik a kaland. Merre mész?",
        choices: [
            { text: "Erdei ösvény", nextPage: 1 },
            { text: "Hegyi ösvény", nextPage: 2 }
        ],
        imageUrl: './src/images/image1.png'
    },
    {
        pageNumber: 2,
        content: "Kard, A hegyi ösvényen haladsz. A távolban egy barlangot látsz...",
        choices: [
            { text: "Bemész a barlangba", nextPage: 5 },
            { text: "Továbbmész", nextPage: 6 }
        ],
        imageUrl: './src/images/image1.png',
        item: "kard"
    },
    {
        pageNumber: 3,
        content: "Harcolsz az árnnyal, de túl erős. Vége a kalandnak!",
        choices: [
            { text: "Kezdd újra", nextPage: 0 }
        ],
        imageUrl: './src/images/image1.png'
    },
    {
        pageNumber: 4,
        content: "Sikeresen elmenekülsz. Mihez kezdesz most?",
        choices: [
            { text: "Kezdd újra", nextPage: 0 }
        ],
        imageUrl: './src/images/image1.png'
    },
    {
        pageNumber: 5,
        content: "A barlang sötét és hideg. Találsz egy kincset!",
        choices: [
            { text: "Kezdd újra", nextPage: 0 }
        ],
        imageUrl: "./src/images/image1.jpg"
    },
    {
        pageNumber: 6,
        content: "Továbbmész, de a sötétség elnyel. Vége a kalandnak!",
        choices: [
            { text: "Kezdd újra", nextPage: 0 }
        ],
        imageUrl: "./src/images/image1.jpg"
    }
];
let currentPage = 0;
let inventory = [];
const renderPage = (pagenumber) => {
    const page = book.find(p => p.pageNumber === pagenumber);
    const bookelement = document.getElementById('book');
    const imageElement = document.getElementById('current-image');
    bookelement.innerHTML = '';
    if (page) {
        const contentelement = document.createElement('p');
        contentelement.className = "page";
        contentelement.textContent = page.content;
        bookelement.appendChild(contentelement);
        page.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                gotoPage(choice.nextPage);
            });
            bookelement.appendChild(button);
        });
        if (page.item) {
            inventory.push(page.item);
        }
        renderinventory();
        imageElement.src = page.imageUrl;
    }
};
const gotoPage = (pageNumber) => {
    currentPage = pageNumber;
    renderPage(pageNumber);
};
const renderinventory = () => {
    const inventoryElement = document.getElementById('inventory');
    if (!inventoryElement) {
        console.error("inventory hiba");
        return;
    }
    inventoryElement.innerHTML = '<h3>Inventory</h3>';
    if (inventory.length === 0) {
        inventoryElement.innerHTML += '<p>Üres</p>';
    }
    else {
        inventory.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = item;
            inventoryElement.appendChild(itemElement);
        });
    }
};
document.addEventListener('DOMContentLoaded', () => {
    renderPage(currentPage);
});
