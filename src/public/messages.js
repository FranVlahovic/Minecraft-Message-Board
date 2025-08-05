const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const messages = [
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
];

export { formattedDate, messages }