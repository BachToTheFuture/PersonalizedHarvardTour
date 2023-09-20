
const data = {
  statue: {
    title: "Statue of John Harvard",
    desc: "This is one of the most recognizable landmarks on the Harvard campus.",
    image: "https://www.harvardmagazine.com/sites/default/files/img/article/0815/statue-2.jpg",
    facts: {
      "Fun Facts": 'The statue is actually not a statue of John Harvard',
      "Lore": 'Touching the feet of John Harvard can apparently give you good luck...',
      "History": 'John Harvard donated some books, idk',
      "Student Life": 'Please wash your hands! One of the Harvard traditions is for students to pee on the statue...',
    },
    closest: ['memorial'],
    gmap_id: '2sThe%20Harry%20Elkins%20Widener%20Memorial%20Library' //'2sJohn%20Harvard%20Statue%2C%20Harvard%20Yard%2C%20Cambridge%2C%20MA%2002138'
  },
  memorial: {
    title: "Memorial Hall",
    desc: "I have no idea what to put here",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Sanders_theater_2009y.JPG",
    facts: {
      "Fun Facts": 'Fun facts about Memorial Hall',
      "Lore": 'I have no clue',
      "History": 'No idea',
      "Student Life": 'This is a first year dining hall',
    },
    closest: ['statue'],
    gmap_id: '2sMemorial%20Hall%2C%2045%20Quincy%20St%2C%20Cambridge%2C%20MA%2002138'
  }
};

const categories = [
  'Fun Facts', 'Lore', 'History', 'Student Life'
];