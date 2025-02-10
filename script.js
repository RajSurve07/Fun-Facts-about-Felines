const facts = [
  "Cats have 32 muscles in each of their ears! That's 26 more muscles than humans have.",
  "A group of kittens is called a *kindle*. Aww, how cute!",
  "Cats can jump up to six times their height! This impressive leaping ability is thanks to their powerful hind legs.",
  "A cat's nose is as unique as a human's fingerprint. No two cat noses have the same pattern of bumps and ridges.",
  "Cats spend about 70% of their lives sleeping! It seems like they've really mastered the art of relaxation.",
  "The world's smallest wild cat is the rusty-spotted cat. Native to India and Sri Lanka, it's only slightly larger than a domestic cat's paw.",
  "A cat's purr can have healing properties. The frequency of a cat's purr (between 25 and 150 Hertz) is thought to promote bone healing and reduce swelling.",
  "Cats use their whiskers for more than just sensing their surroundings. The whiskers are also attached to muscles and nerves that help cats show how they are feeling.",
  "The first cat in space was a French feline named Félicette. In 1963, Félicette bravely went on a sub-orbital flight and returned safely to Earth.",
  "A cat rubs against you to mark you as its territory. While it might seem like a gesture of affection, cats have scent glands on their cheeks and heads that release pheromones to signal that you belong to them!"
];

const factDisplay = document.getElementById('fact-display');
const generateFactButton = document.getElementById('generate-fact');
const shareFactButton = document.getElementById('share-fact');

// ... (rest of your script.js) 

function displayRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];

  // Add the 'show' class to trigger the opacity transition
  factDisplay.classList.add('show'); 
}

shareFactButton.addEventListener('click', () => {
  const currentFact = factDisplay.textContent;
  if (navigator.share) {
    navigator.share({ text: currentFact })
      .then(() => console.log('Fact shared successfully.'))
      .catch((error) => console.error('Error sharing fact:', error));
  } else {
    alert("Your browser doesn't support sharing. Copy and paste the fact!");
  }
});

// Display an initial fact
//displayRandomFact();
