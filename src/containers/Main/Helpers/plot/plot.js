import { filterPlotListBy } from '../general/general';

//Constant words used in the plots
const funnys = ['monster', 'legend', 'saint', 'nerd', 'geek'];
const seriouses = ['injury', 'death', 'slip', 'challenge'];
const verbs = ['sad', 'hairy', 'grave', 'huge', 'broken'];
const times = ['morning', 'afternoon', 'evening', 'night', 'day'];
// const number = '';
const bads = ['bad', 'jealous', 'scary', 'egomaniac', 'psycho', 'dirty'];
const actions = ['race', 'dash', 'quest'];
const objects = ['desert', 'moon', 'galaxy', 'spaceship', 'universe'];
const items = ['magic hat', 'pet lizard', 'love child', 'sword collection', 'purple marbel'];
const curiouses = ['mystical', 'dark', 'shiny', 'frigid', 'powerful', 'great'];
const moods = ['infuriate', 'anger', 'rage'];

const i = 0;
const j = 1;
const k = 2;

// Helper function to retrieve a random word or sentence
const get = (word) => {
  const length = word.length;
  const pos = Math.floor(Math.random() * length);
  return word[pos];
};

export const getRandomPlot = (plotList) => {
  const planets = filterPlotListBy(plotList, 'Planets');
  const characters = filterPlotListBy(plotList, 'Characters');
  const numPlanets = planets.length;
  const numCharacters = characters.length;

  const object = get(objects);
  const item = get(items);
  const funny = get(funnys);
  const verb = get(verbs);
  const serious = get(seriouses);
  const time = get(times);
  const bad = get(bads);
  const action = get(actions);
  const curious = get(curiouses);
  const mood = get(moods);

  const titles = findTitle(numPlanets, numCharacters, characters, planets, 
    object, item, funny, verb, serious, time, bad, action, curious, mood);

  const descriptions = findDescription(numPlanets, numCharacters, characters, planets, 
    object, item, funny, verb, serious, time, bad, action, curious, mood);

  const rand = Math.floor(Math.random() * titles.length);

  return { 
    title: titles[rand], 
    description: descriptions[rand], 
    resources: plotList 
  };
}

//Coming up with the title for the plot
const findTitle = (
  numPlanets, 
  numCharacters, 
  chars, 
  planets, 
  object, 
  item,
  funny, 
  verb,
  serious,
  time,
  bad,
  action,
  curious,
  mood
) => {
  if (numPlanets === 0) {
    if (numCharacters === 1) {
      return [
        `The only ${object} ${chars[i].name} can secretly hide their ${item}`,
        `The return of the ${funny} inside of ${chars[i].name}`,
        `The ${verb} ${serious} of ${chars[i].name}`
      ];
    } else if (numCharacters === 2) {
      return [
        `The face off of ${chars[i].name} against ${chars[j].name}`,
        `The tale of ${chars[j].name} and the ${bad} ${chars[i].name}`,
        `The ${time} ${chars[i].name} peed themselves`
      ];
    } else if (numCharacters === 3) {
      return [
        `A wonderful journey through space with 3 ${funny}s`,
        `A space ${action} through comet hell`,
        `The great battle between ${chars[i].name}, ${chars[k].name} and ...`
      ];
    }
  } else if (numPlanets === 1) {
    if (numCharacters === 0) {
      return [
      `Uncovering the ${curious} ${planets[i].name}`,
      `${planets[i].name}, planet of the secret millionaires`,
      `The ${bad} side to living on ${planets[i].name}`
      ];
    } else if (numCharacters === 1) {
      return [
      `Planet ${planets[i].name}, beware of the ${bad} ${chars[i].name}`,
      `${chars[i].name} and their ${verb} history`,
      `People of ${planets[i].name}, beware of the scam`
      ];
    } else if (numCharacters === 2) {
      return [
      `The ${curious} battle on ${planets[i].name}`,
      `The ${action} to ${planets[i].name}`,
      `The ${verb} ${chars[j].name} faces on ${planets[i].name}`
      ];
    } else if (numCharacters === 3) {
      return [
      `Three ${bad} characters on ${planets[i].name}?`,
      `${chars[j].name} road to get to ${curious} ${planets[i].name}`,
      `The planet of ${planets[i].name} is just too small for this ${curious} trio`
      ];
    }
  } else if (numPlanets === 2) {
    if (numCharacters === 0) {
      return [
      `The brewing war between ${planets[i].name} and ${planets[j].name}`,
      `The places no one wants to go to: ${planets[i].name} and ${planets[j].name}`,
      `Something smells bad in the ${time}, but where...`
      ];
    } else if (numCharacters === 1) {
      return [
      `Torn between 2 homes, ${chars[i].name} must decide on 1`,
      `The day ${chars[i].name} was born from 2 different worlds`,
      `The ${object} of ${planets[j].name} ${mood}s ${chars[i].name}`
      ];
    } else if (numCharacters === 2) {
      return [
      `Can ${chars[j].name} handle the ${curious} ${chars[i].name}`,
      `2 ${funny}s, 2 planets, and only 1 winner!`,
      `Why is it so smelly on ${planets[j].name}? One person knows...`
      ];
    } else if (numCharacters === 3) {
      return [
      `How did ${chars[k].name} meet ${chars[j].name}? On planet ${planets[j].name}`,
      `Where in the ${object} is ${chars[i].name}?`,
      `The ${action} for a ${item}!`
      ];
    }
  } else if (numPlanets === 3) {
    if (numCharacters === 0) {
      return [
      `The ${time} after the big ${action}, three planets rise to the top`,
      `The mystical planets of ${planets[i].name}, ${planets[k].name} and ...`,
      `Somewhere in the ${object} is a ${bad} race. But where?`
      ];
    } else if (numCharacters === 1) {
      return [
      `What ${mood}s ${chars[i].name} so much on planet ${planets[j].name}?`,
      `The day ${chars[i].name} finds out he was born on ${planets[k].name}`,
      `Why the ${funny} in ${chars[i].name} calls 3 planets their home`
      ];
    } else if (numCharacters === 2) {
      return [
      `How ${chars[j].name} ${mood}s the ${bad} ${chars[i].name}`,
      `Three planets? Not enough space for these 2 ${funny}s`,
      `The ${curious} ${action} from ${planets[j].name} to ${planets[k].name}`
      ];
    } else if (numCharacters === 3) {
      return [
      `The ${verb} truths that ${chars[k].name} reveals...`,
      `Three powers in three ${curious} places`,
      `The story of the loser who gets exciled to planet ${planets[i].name}`
      ];
    }
  }
};


//Coming up with the description for the plot
const findDescription = (
  numPlanets, 
  numCharacters, 
  chars, 
  planets, 
  object, 
  item,
  funny, 
  verb,
  serious,
  time,
  bad,
  action,
  curious,
  mood
) => {
  if (numPlanets === 0) {
    if (numCharacters === 1) {
      return [
        `This is the ${verb} story of how ${chars[i].name} found a ${object}. `
        + `It was in the ${time} during a legendary ${serious}. This ${serious} `
        + `was the result of their ${bad} ways and a lesson they'll not soon `
        + `forget. In the turmoil they needed to protect their sacred ${item}. `
        + `Will it be found or discovered? Stay tuned to find out...`,
        `The ${funny} is here! The ${funny} is here! This is the tune that `
        + `${chars[i].name} had to listen to when they ventured into the `
        + `${object}. To most people this would ${mood} them, but not this `
        + `${curious} character. Afterall, they come from a rare ${object} `
        + `that is known for its toughness. However, something is bothering `
        + `${chars[i].name} deep, down inside. But what is it? Find out in `
        + `this episode!`,
        `It was the ${serious} that ${chars[i].name} will never forget! A `
        + `truely ${verb} ${time} for the ${funny}. What led ${chars[i].name} `
        + `to become such a ${funny}? Why did the ${serious} happen? Who else `
        + `was there in the ${time} to see it happen? Oh so many questions and ` 
        + `so little answers. Find out everything in this episode of Star Wars!`
      ];
    } else if (numCharacters === 2) {
      return [
        `The ${time} that ${chars[i].name} ventured too far was the day that `
        + `they'll never forget. They thought that they were a ${funny} and `
        + `could do whatever they wanted. However, ${chars[i].name} pushed their `
        + `luck too far this time. They stepped on the toes of ${chars[j].name}. `
        + `This ${bad} was ready to duel. Simply hearing the name ${chars[i].name} `
        + `${mood}s them. What did they duel over? Find out in this episode!`,
        `They call 'em ${bad} ${chars[i].name} for good reason. They simply are! `
        + `Poor ${chars[j].name}, a ${funny} by nature, never knew the hole they `
        + `were getting themselves into. It was well into the ${time} and they `
        + `were frantically trying to find the ${item} of ${chars[i].name}. Hoping `
        + `that this would get them on the good side of ${chars[j].name}. Little did `
        + `they know how naive their intentions were. What was going to happen...`,
        `It was a dark ${time} for poor old ${chars[i].name}. They were minding their `
        + `space business when they came across the ${bad} ${chars[j].name}. Face to `
        + `face. Staring them right in the eye. The heart inside of ${chars[i].name} `
        + `was on the verge of popping out of their chest. They took a deep breath and `
        + `nothing came out. ${chars[j].name} reached behind his back for something. `
        + `Find out what it was in this episode of Star Wars!`
      ];
    } else if (numCharacters === 3) {
      return [
        `It was a friendship like no other. They were practically family! `
        + `${chars[k].name} was the mastermind behind this group of ${funny}s and `
        + `was always a bit ${bad} on the inside. This ${time} a strange `
        + `idea was in the air. The ${bad} ${chars[k].name} had a evil plan for `
        + `them. What surprises were ${chars[i].name} and ${chars[j].name} going to `
        + `come across on this episode? Stay tuned to find out.`,
        `There were comet's everywhere. This ${action} was proving to test the `
        + `limits of the young racer's. Whoosh ....and a comet just flew over the `
        + `top of the jedi fighter of ${chars[j].name}. A sigh of relief, but `
        + `something bigger was heading their way. What was it? Both ${chars[i].name} `
        + `and ${chars[k].name} were able to see and narrowly avoid it. But they `
        + `were well know ${object} racer's. Will ${chars[i].name} meet their fate???`,
        `It was only a ${item}, but ${chars[i].name} and ${chars[k].name} were in `
        + `a fierce battle. A battle of the ${funny}s. They were both in deadlock `
        + `and unwilling to give an inch. It's mine....nooo, it is mine! They kept `
        + `going back and forth. Then came another individual into the room. The `
        + `${bad} ${chars[j].name} as they liked to call 'em. ${chars[j].name} looks `
        + `both of them in the eye and hand on their sword. They say, "nobody is going `
        + `anywhere this ${time}, until I get my ${item}."`
      ];
    }
  } else if (numPlanets === 1) {
    if (numCharacters === 0) {
      return [
        `Why was ${planets[i].name} so ${curious}? This is the untold tale of how `
        + `it all began for the ${object}-like planet. This ${curious} place was `
        + `always a bit different. Its people were often ${bad} and they and known `
        + `to be ${funny}s. Then something happened one ${time}. What was it?`,
        `A secret society known as the ${funny}s. They lived in quiet on their `
        + `${curious} planet. What did everyone have in common there? Well they `
        + `mastered the ${object} and all became millionaires on ${planets[i].name}. `
        + `Find out how they did it on this episode.`,
        `Some people say it was a great planet. If you ask anyone who lives there, `
        + `they all tell you the same thing. ${planets[i].name} is a ${bad} place. `
        + `This ${bad} place is inside the biggest ${object} of all time. It is only ` 
        + `full of ${item}s. But there is a deeper problem that happens in the ${time}...`
      ];
    } else if (numCharacters === 1) {
      return [
        `They say the ${bad} ${chars[i].name} is the most feared fighter in the entire `
        + `galaxy. Anywhere they go to, ${mood}s everyone! When they paid a visit to the `
        + `peaceful ${planets[i].name}, it was no different. Everyone hid their ${item}s, `
        + `locked their doors and stayed silent. How long was ${chars[i].name} going to be `
        + `there for? Was a ${serious} about to occur of ${planets[i].name}? Find out...`,
        `How ${verb} can someone be? What goes into creating such a life like that? `
        + `Well this is the story of ${chars[i].name}. Born on a ${object} in `
        + `${planets[i].name}, they have had a difficult life right from the beginning. This `
        + `episode will take you through it, including the story of their ${item}.`,
        `There is a ${bad} person going around ${planets[i].name}. Who is this ${bad} `
        + `person and what are they up to? Why are they on a ${action} to scam everyone `
        + `on ${planets[i].name}? Who is really behind the scheme? This is the story of `
        + `how ${chars[i].name} will become a ${funny} inspector!`
      ];
    } else if (numCharacters === 2) {
      return [
        `A long ${time} ago, there was a remark made to ${chars[j].name}. This `
        + `remark still ${mood}s ${chars[j].name} to this day. It is something `
        + `that they will never let go of. However, their is a ${funny} living on `
        + `${planets[i].name} by the name of ${chars[i].name}. They have a ${curious} `
        + `vibe to them and are ready for battle! Will this be the battle of the `
        + `century?`,
        `Normally a quiet ${time} on ${planets[i].name}, but not today. Today is a `
        + `very ${curious} ${time} for this little planet. Two new faces have come `
        + `to visit in a ${action} of a lifetime. Who will win? Will it be the ${bad} `
        + `${chars[i].name}? Or will it be the ${funny} ${chars[j].name}?`,
        `Why did ${chars[j].name} come to ${planets[i].name}? Why were they so `
        + `${verb}? What sort of ${action} is going on. Why is the ${funny} `
        + `${chars[i].name} there? Everything will be made clear on this episode.`
      ];
    } else if (numCharacters === 3) {
      return [
        `How did this relatively ${curious} planet by the name of ${planets[i].name} `
        + `attract 3 super ${bad} characters? Why were they all on this planet? `
        + `What were the looking for? Is there really a ${item} here? Will `
        + `${chars[i].name}, ${chars[k].name} and ${chars[j].name} play nice?`,
        `Why is ${chars[j].name} on a mission to get to the ${curious} planet of `
        + `${planets[i].name}? Why have ${chars[k].name} and ${chars[j].name} `
        + `teamed up to stop ${chars[j].name}? You wont want to miss this exciting `
        + `episode that ends in an ${serious}!`,
        `An unlikely ${curious} trio is on a gigantic mission to get to the one `
        + `and only planet of ${planets[i].name}! But why and what ${bad} is `
        + `awaiting them there? Will ${chars[k].name}, ${chars[i].name} and `
        + `${chars[j].name} have enough space? Find out...`
      ];
    }
  } else if (numPlanets === 2) {
    if (numCharacters === 0) {
      return [
        `In a far away ${object} there is a place of uncertainty. There is a `
        + `brewing war between the two most feared and ${bad} nations. They `
        + `used to be friends, but now are fierce foes. Will ${planets[i].name} `
        + `be the ruler of this ${object} or will it be ${planets[j].name}?`,
        `In the middle of some unknown galaxy in the corner of the universe lies `
        + `2 places that are uninhabited. One is known for its ${curious} atmosphere. `
        + `The other is so bare and miserable it ${mood}s anyone who dares to venture `
        + `onto it. So in this episode we will take you to these two planets, `
        + `${planets[j].name} and ${planets[i].name}, for the first time.`,
        + `It is a sunny day on planet ${planets[i].name}, but there is something `
        + `${verb} in the air. What is it? And why does it smell so bad? Well it `
        + `turns out that there is turmoil going on with their neighbours. `
        + `What is going on at ${planets[j].name}? Find out in this episode.`
      ];
    } else if (numCharacters === 1) {
      return [
        `${chars[i].name} has always been a ${curious} person, but one day they `
        + `found out something they would have never wanted to know. Their father `
        + `was actually a ${funny}! More importantly, their real father. Their `
        + `real father was actually from ${planets[i].name}! A secret their mother `
        + `had kept from them. Now he was torn from where we was from... `
        + `${planets[i].name}, the place they'd known all their life or `
        + `${planets[j].name}?`,
        `${chars[i].name} was meant to be the next ruler of the galaxy. They had `
        + `the blood. However, their parents came from 2 different worlds. Their `
        + `mother was from ${planets[j].name}, while their father was from `
        + `${planets[i].name}. Now the ${time} before they must declare their oath `
        + `to a planet, nobody knows where they will align themselves with. Not `
        + `even the poor ${funny} ${chars[i].name}.`,
        `Everyday in the ${time} when ${chars[i].name} looks at the ${object} `
        + `it ${mood}s them. Why? Nobody will ever know. To them it is ${verb}. `
        + `They will never be able to have a ${item} of their own. For they have `
        + `failed in living life on ${planets[j].name}. This is where it most `
        + `hurts them. This has turned them into a ${bad} person. Will they `
        + `take the ${verb} risk and move to ${planets[i].name}?`
      ];
    } else if (numCharacters === 2) {
      return [
        `They come from 2 very different planets. On ${planets[i].name} they are `
        + `known to be ${funny}s. On ${planets[j].name}, they are more ${bad} `
        + `in nature. Today is the ${time} that ${chars[j].name} meets `
        + `the ${curious} ${chars[i].name}. Will ${chars[i].name} be too `
        + `much for the young ${chars[j].name}?`,
        `The battle of a lifetime is taking place on planet ${planets[j].name}. `
        + `This is the ${action} that will soon not be forgotten. In it are 2 `
        + `warriors from ${planets[i].name}. In the ${curious} corner is the `
        + `challenger, ${chars[j].name}. The ${verb} champ is back again and `
        + `they call him ${chars[i].name}. Who will win the showdown?`,
        `The food that they eat on planet ${planets[j].name} is so smelly `
        + `that the people of ${planets[i].name} can smell it! What are they `
        + `producing on planet ${planets[j].name} that is so smelly? Two friends, `
        + `${chars[j].name} and ${chars[i].name}, are on a mission to find out!`
      ];
    } else if (numCharacters === 3) {
      return [
        `How did the love story between ${chars[j].name} and ${chars[i].name} `
        + `happen? From two vastly different worlds. One is from the ${curious} `
        + `planet of ${planets[j].name} and the other is from the boring planet `
        + `of ${planets[i].name}. And why is ${chars[k].name} trying to stop them?`,
        `Two friends, ${chars[j].name} and ${chars[k].name}, are searching for `
        + `their friend, ${chars[i].name}. They are nowhere to be found in the `
        + `${object}! On searching through the house of ${chars[i].name}, they `
        + `find a ${item} and what other ${verb} item? Find out on this episode `
        + `as they race through ${planets[j].name} to ${planets[i].name}.`, 
        `This was the ultimate trophey! A ${item}. It was no ordinary ${item}. `
        + `It was passed down from the great leaders who hailed from `
        + `${planets[j].name} and ${planets[i].name}. It was now in the hands `
        + `of the ${funny} named ${chars[i].name}. However they are in a `
        + `${action} of a lifetime. Will they get to hold onto the ${item} or `
        + `will ${chars[k].name} or the ${bad} ${chars[j].name} take it?`
        ];
    }
  } else if (numPlanets === 3) {
    if (numCharacters === 0) {
      return [
        `It was the biggest ${action} in the entire universe. The stakes were `
        + `high for all the competitors. They knew the risks and the rewards. `
        + `The ${serious} showed what everyone had to deal with. In the end, `
        + `three teams came out on top. They hailed from ${planets[k].name}, `
        + `${planets[i].name} and ${planets[j].name}. Yet something was wrong! `
        + `What was going on the ${time} after?`,
        `Far, far away there were 3 planets of mystical nature. They were `
        + `colorful in nature and featured a bunch of ${bad} people. `
        + `These people were also known to be quite ${curious}. They hailed `
        + `from ${planets[i].name}, ${planets[k].name} and ${planets[j].name}. `
        + `Though there was something else that went on in these ${curious} `
        + `places. What was it? Find out in this episode.`,
        `On planet ${planets[k].name} there was a massive ${action} going `
        + `on. It was happening in this ${object}. The entrants were a `
        + `bit shocking. They weren't spaceships, but planets! Yes planets. `
        + `How did these planets of ${planets[i].name} and ${planets[j].name} `
        + `move? You will get to find out in this episode of Star Wars!`
      ];
    } else if (numCharacters === 1) {
      return [
        `Born on planet ${planets[j].name}, and living on planet `
        + `${planets[i].name} is one ${bad} cookie named ${chars[i].name}. `
        + `The craziest of things will ${mood} them. What are they? Well `
        + `seeing a ${funny} for starters. The other is simply hearing of `
        + `the planet ${planets[k].name}. The last one... you will have `
        + `to tune into this episode to find out.`,
        `The ${funny} named ${chars[i].name} always thought he was from `
        + `${planets[k].name}. They were so proud of their heritage, `
        + `always smiling from ear to ear. Then one ${verb} day the truth `
        + `came out. They were actually from planet ${planets[i].name} and `
        + `the blood line in the family came from planet ${planets[j].name}. `
        + `How could this be? How could they be from there? You will get `
        + `all the answers in this exciting episode!`,
        `Among their peers, ${chars[i].name} was always a bit strange. `
        + `Their peers thought of 'em as a ${funny}. Most likely `
        + `because they had an obsession with a ${item}. Though the `
        + `best part was that they called 3 planets their home. `
        + `${planets[j].name}, ${planets[i].name} and ${planets[k].name}. `
        + `You will find out in this riveting tale through space.`
      ];
    } else if (numCharacters === 2) {
      return [
        `This is the ${verb} story of two polar opposites. ${chars[i].name} `
        + `from planet ${planets[i].name} and ${chars[j].name} from `
        + `${planets[k].name}. They were sitting in a bar when `
        + `${chars[j].name} ${mood}s ${chars[i].name}. Why? What was said? `
        + `You wont want to miss this ${curious} episode!`,
        `${chars[i].name} is one big, bad person! The most feared on `
        + `planets ${planets[j].name} and ${planets[i].name}. They used to `
        + `also be the most feared on planet ${planets[k].name}, but that `
        + `title is now held by someone else. Someone by the name of `
        + `${chars[j].name}! How did this ${funny} become so feared? `
        + `Find out in this episode!`,
        `${chars[i].name} calls it like it is. ${chars[j].name} had `
        + `stolen their precious ${item} and decided to challenge the `
        + `person to a ${action}. A ${action} from ${planets[j].name} `
        + `to ${planets[k].name}. The winner would get to own the `
        + `${verb} planet of ${planets[i].name}. Who was going to win `
        + `this epic duel?`
      ];
    } else if (numCharacters === 3) {
      return [
        `It was meant to be another ${time}, but ${chars[k].name} had `
        + `a confession to make. They were struggling to find the words `
        + `of the ${serious} that changed everything. It had happened on `
        + `planet ${planets[k].name}, when they were in a ${object}. `
        + `Now ${chars[k].name} must travel to both ${planets[j].name} `
        + `and ${planets[i].name} to deliver the news. Time is ticking. `
        + `Will they make it and inform both ${chars[i].name} and more `
        + `importantly ${chars[j].name}? Find out in this episode!`,
        `This is the story of three superpowers and how they came to be. `
        + `First is the ${funny} ${chars[i].name}, who hails from the `
        + `tragic planet of ${planets[i].name}. Next is the ${bad} `
        + `${chars[j].name} who lives on planet ${planets[k].name}. `
        + `Lastly, is ${chars[k].name}, who lives on planet `
        + `${planets[j].name}. You will find out what ${mood}s them ` 
        + `as well as a ${item}! Yes, only in this episode.`,
        `In this last ever episode of Star Wars that will be released, `
        + `we learn about the person who gets exciled to ${planets[i].name}. `
        + `It is either going to be ${chars[i].name} or ${chars[j].name}. `
        + `Why is ${chars[k].name} the one responsible for exciling one `
        + `of them? Who is the ultimate loser? Why are the people of `
        + `planet ${planets[k].name} and ${planets[j].name} nervously `
        + `watching? Who will scar the entire galaxy forever?`
      ];
    }
  }
};
