const quotes = {
    "- Tony Robbins": '"Your only limit is the amount of action you take."',
    "- Steve Jobs": '"The only way to do great work is to love what you do."',
    "- Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "- Oprah Winfrey": '"I’ve come to believe that each of us has a personal calling that’s as unique as a fingerprint - and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you."',
    "- Tony Robbins": '"If you want to change your life, change your mind."',
    "- Michael Phelps": '"I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time."',
    "- Tony Robbins": '"Setting goals is the first step in turning the invisible into the visible."',
    "- Albert Einstein": '"If you want to live a happy life, tie it to a goal, not to people or things."',
    "- Oprah Winfrey": '"Do what you have to do until you can do what you want to do."',
    "- Bob Marley": '"You never know how strong you are, until being strong is your only choice."',
    "- Dalai Lama": '"The purpose of our lives is to be happy."',
    "- Barack Obama": '"The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."',
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value.\"'
  };
  
  window.onload = function(){
    generate()
  }
  
  function generate(){
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  }
  
  document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });