const quotesObject = {
  // 13 total
  musicians: [
    'I play the notes as they are written, but it is God who makes the music.', 
    'If I decide to be an idiot, then I will be an idiot on my own accord', 
    'Without deviation from the norm, progress is not possible',
     'Information is not knowledge. Knowledge is not wisdom. Wisdom is not truth. Truth is not beauty. Beauty is not love. Love is not music. Music is THE BEST.',
     'There is more stupidity than hydrogen in the universe, and it has a longer shelf life.',
     'Art is making something out of nothing, and selling it.',
     'But if you are doing something, show up every day, and something good might happen - its not going happen if you dont show up.', 
     'Music is the only religion that delivers the goods',
    'Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.',
  'Dont only practice your art, but force your way into its secrets, for it and knowledge can raise men to the divine.',
  'Only the pure of heart can make a good soup.',
  'Man, sometimes it takes you a long time to sound like yourself',
  'Knowledge is freedom and ignorance is slavery.'],
writers: [
  // 13 total
  'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect)',
  'I have never let my schooling interfere with my education',
  'I did not attend his funeral',
  'The truth will set you free. But not until its finished with you',
  'You will become way less concerned with what other people think of you when you realize how seldom they do.',
  'Try to learn to let what is unfair to teach you.',
  'Its weird to feel like you miss someone youre not even sure you know.',
  'Grammar is a piano I play by ear.',
  'Character -- the willingness to accept responsibility for ones own life -- is the source from which self-respect springs.',
  'You have to pick the places you dont walk away from.',
  'To free us from the expectations of others, to give us back to ourselves -- there lies the great, singular power of self-resepct.',
 'There is no real ending. Its just the place where you stop the story',
 'Seek freedom and become captive of your desires. Seek discipline and find your liberty.'],
presidents: [
  // 13 total
  'It is hard to fail, but it is worse never to have tried to succeed.',
  'Believe you can and you are halfway there.',
  'When you are at the end of your rope, tie a knot and hold on.',
  'The only man who never makes mistakes is the man who never does anything.',
  'To educate a person in the mind but not in morals is to educate a menace to society.',
  'Knowing whats right doesnt mean much unless you do whats right.',
  'Do you want to know who you are? Dont ask. Act! Action will deliniate and define you.',
  'I am a great believer in luck, and I find the harder I work the more I have of it.',
  'History, in general, only informs us what bad government is.',
  'Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.',
  '99% of failures come from people who make excuses.',
  'Human happiness and moral duty are inseparably connected.',
  'Guard against the impostures of prentended patriotism.']
};

// Iterate over the quotes object,
const randomMessage = () => {
  const myQuotes = ['musicians', 'writers', 'presidents'];
  const subjects = Math.floor(Math.random() * 3);
  const quotes = Math.floor(Math.random() * 13);
  console.log(quotesObject[myQuotes[subjects]][quotes]);
}
randomMessage();
