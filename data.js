
const data = {
  statue: {
    title: "Statue of John Harvard",
    desc: "This is one of the most recognizable landmarks on the Harvard campus.",
    image: "https://www.harvardmagazine.com/sites/default/files/img/article/0815/statue-2.jpg",
    facts: {
      "Fun Facts": 'The statue was painted red by drunk students in 1890 after Harvard victory at the Harvard-Yale football game.',
      "Lore": 'This statue is known as the "Statue of Three Lies". This is because this statue is not a statue of John Harvard; John Harvard was actually not the sole founder of the college, and Harvard was actually founded in 1636, not 1638.',
      "History": 'The original location of the statue was actually in front of Memorial Hall. The tradition of rubbing the feet came from misinformation in 1990s that it was a student tradition (it was never a student tradition).',
      "Student Life": 'Please wash your hands if you touched his feet! One of the more popular Harvard traditions is for students to pee on the statue.',
    },
    closest: ['widener', 'memorial'],
    gmap_id: '1s0x89e3774305f6eb89%3A0xa46fba92be1e842b!2sJohn%20Harvard%20Statue%2C%20Harvard%20Yard%2C%20Cambridge%2C%20MA!3m2!1d42.3744665!2d-71.1172096'
  },

  memorial: {
    title: "Memorial Hall",
    desc: "Hogwarts-esc looking building that honors fallen Harvard alumni who fought in the Civil War",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Sanders_theater_2009y.JPG",
    facts: {
      "Fun Facts": 'There used to be a large clock atop the tower, but the top of the tower burned down in 1956 and was later rebuilt according to the original plans, which did not include a clock.',
      "Lore": "Winston Churchill, Theodore Roosevelt, Martin Luther King Jr., and Albert Einstein have all given talks in Sanders Theater.",
      "History": "The building was built after the Civil War to commemorate Harvard's fallen soldiers.",
      "Student Life": 'This building includes Annenberg Hall, which is a hogwarts-looking room dedicated for first-year dining, and Sanders Theater, which is where classes like CS50 are taught.',
    },
    closest: ['widener', 'statue'],
    gmap_id: '1s0x89e3772262caf8af%3A0x44c0f5e5eac1031b!2sMemorial%20Hall%2C%2045%20Quincy%20St%2C%20Cambridge%2C%20MA%2002138!3m2!1d42.3758829!2d-71.11464269999999'
  },

  widener: {
    title: "Widener Library",
    desc: "The largest library on the Harvard campus.",
    image: "https://i.pinimg.com/736x/0f/b1/c7/0fb1c7d0051339abbebdf8e826aaa4fc--universities-in-cambridge-massachusetts-usa.jpg",
    facts: {
      "Fun Facts": 'The library contains one of the rare, perfect copies of the Gutenberg Bibles.',
      "Lore": 'Elenor Widenor, the mother of the benefactor of the library, insisted that all graduates must know how to swim to avoid the same fate as her son, who died in the Titanic disaster.',
      "History": 'The library is named after Harry Elkins Widener, who was a graduate and a book collector who died from the Titanic disaster in 1912. His mother built the library as a memorial to his son.',
      "Student Life": 'The library features a large study space on the second floor (Loker Reading Room), which is probably the quietest study space any student would find on Harvard.',
    },
    closest: ['statue', 'memorial'],
    gmap_id: '1s0x89e377436d7628e5%3A0xd094748bb4eaa34a!2sThe%20Harry%20Elkins%20Widener%E2%80%A6!3m2!1d42.373446699999995!2d-71.1165055'
  }
};

const categories = [
  'Fun Facts', 'Lore', 'History', 'Student Life'
];