const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

export const messages = [
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
];