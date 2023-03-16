var quotes = [
    '\"Your only limit is the amount of action you take.\" - Tony Robbins',
    '\"The only way to do great work is to love what you do.\" - Steve Jobs',
    '\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela',
    '\"I\'ve come to believe that each of us has a personal calling that\'s as unique as a fingerprint - and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you.\" - Oprah Winfrey',
    '\"If you want to change your life, change your mind.\" - Tony Robbins',
    '\"I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.\" —Michael Phelps',
    '\"Setting goals is the first step in turning the invisible into the visible.\" - Tony Robbins',
    '\"If you want to live a happy life, tie it to a goal, not to people or things.\" - Albert Einstein',
    '\"Do what you have to do until you can do what you want to do.\" - Oprah Winfrey',
    '\"You never know how strong you are, until being strong is your only choice.\" - Bob Marley',
    '\"The purpose of our lives is to be happy.\" - Dalai Lama',
    '\"The real test is not whether you avoid this failure, because you won\'t. It\'s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.\" - Barack Obama'
];

var maxQuote = quotes.length;

function randomQuote() {
    var randomQuote = Math.floor(Math.random() * maxQuote);
    console.log(quotes[randomQuote]);
}