(this["webpackJsonpplot-generator"]=this["webpackJsonpplot-generator"]||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n,o=a(0),c=a.n(o),r=a(8),i=a.n(r),s=a(166),l=a(4),h=a(17),m=a.n(h),u=a(33),d=a(42),p=a(57),f=a(81),g=a(74),w=a(75),y=a(83),b=a(82),x=a(163),v=a(152),T=function(e,t){return E(e,"resource",t)},E=function(e,t,a){return e.filter((function(e){return e[t]===a}))},k={duplicate:"No duplicate entries allowed!",tooManyResources1:"Maximum of 3",tooManyResources2:"allowed in plot!"},W=a(45),S=a.n(W),C=function(e){switch(e){case"Characters":return"people";case"Planets":return"planets"}},O={people:82,planets:60},j=function(e){var t=O[e];return Math.ceil(Math.random()*t)},I=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var o,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.cancel(),n=S.a.CancelToken.source(),e.prev=2,e.next=5,S()("".concat("https://swapi.dev/api/").concat(t,"/?").concat("search=")+"".concat(a),{cancelToken:n.token});case 5:return o=e.sent,c=o.data.results.map((function(e){return{label:e.name,value:e.name}})),r=c.length>5?c.slice(0,5):c,e.abrupt("return",r);case 11:if(e.prev=11,e.t0=e.catch(2),!S.a.isCancel(e.t0)){e.next=17;break}return e.abrupt("return","");case 17:return e.abrupt("return","Unfortunately your search request could not be processed!");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(t),n=j(a),e.prev=2,e.next=5,S()("".concat("https://swapi.dev/api/").concat(a,"/").concat(n,"/"));case 5:return o=e.sent,e.abrupt("return",o.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return","Unfortunately your search request could not be processed!");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),R=["monster","legend","saint","nerd","geek"],F=["injury","death","slip","challenge"],L=["sad","hairy","grave","huge","broken"],A=["morning","afternoon","evening","night","day"],z=["bad","jealous","scary","egomaniac","psycho","dirty"],P=["race","dash","quest"],H=["desert","moon","galaxy","spaceship","universe"],B=["magic hat","pet lizard","love child","sword collection","purple marbel"],D=["mystical","dark","shiny","frigid","powerful","great"],N=["infuriate","anger","rage"],q=function(e){var t=e.length;return e[Math.floor(Math.random()*t)]},Y=function(e,t,a,n,o,c,r,i,s,l,h,m,u,d){if(0===e){if(1===t)return["The only ".concat(o," ").concat(a[0].name," can secretly hide their ").concat(c),"The return of the ".concat(r," inside of ").concat(a[0].name),"The ".concat(i," ").concat(s," of ").concat(a[0].name)];if(2===t)return["The face off of ".concat(a[0].name," against ").concat(a[1].name),"The tale of ".concat(a[1].name," and the ").concat(h," ").concat(a[0].name),"The ".concat(l," ").concat(a[0].name," peed themselves")];if(3===t)return["A wonderful journey through space with 3 ".concat(r,"s"),"A space ".concat(m," through comet hell"),"The great battle between ".concat(a[0].name,", ").concat(a[2].name," and ...")]}else if(1===e){if(0===t)return["Uncovering the ".concat(u," ").concat(n[0].name),"".concat(n[0].name,", planet of the secret millionaires"),"The ".concat(h," side to living on ").concat(n[0].name)];if(1===t)return["Planet ".concat(n[0].name,", beware of the ").concat(h," ").concat(a[0].name),"".concat(a[0].name," and their ").concat(i," history"),"People of ".concat(n[0].name,", beware of the scam")];if(2===t)return["The ".concat(u," battle on ").concat(n[0].name),"The ".concat(m," to ").concat(n[0].name),"The ".concat(i," ").concat(a[1].name," faces on ").concat(n[0].name)];if(3===t)return["Three ".concat(h," characters on ").concat(n[0].name,"?"),"".concat(a[1].name," road to get to ").concat(u," ").concat(n[0].name),"The planet of ".concat(n[0].name," is just too small for this ").concat(u," trio")]}else if(2===e){if(0===t)return["The brewing war between ".concat(n[0].name," and ").concat(n[1].name),"The places no one wants to go to: ".concat(n[0].name," and ").concat(n[1].name),"Something smells bad in the ".concat(l,", but where...")];if(1===t)return["Torn between 2 homes, ".concat(a[0].name," must decide on 1"),"The day ".concat(a[0].name," was born from 2 different worlds"),"The ".concat(o," of ").concat(n[1].name," ").concat(d,"s ").concat(a[0].name)];if(2===t)return["Can ".concat(a[1].name," handle the ").concat(u," ").concat(a[0].name),"2 ".concat(r,"s, 2 planets, and only 1 winner!"),"Why is it so smelly on ".concat(n[1].name,"? One person knows...")];if(3===t)return["How did ".concat(a[2].name," meet ").concat(a[1].name,"? On planet ").concat(n[1].name),"Where in the ".concat(o," is ").concat(a[0].name,"?"),"The ".concat(m," for a ").concat(c,"!")]}else if(3===e){if(0===t)return["The ".concat(l," after the big ").concat(m,", three planets rise to the top"),"The mystical planets of ".concat(n[0].name,", ").concat(n[2].name," and ..."),"Somewhere in the ".concat(o," is a ").concat(h," race. But where?")];if(1===t)return["What ".concat(d,"s ").concat(a[0].name," so much on planet ").concat(n[1].name,"?"),"The day ".concat(a[0].name," finds out he was born on ").concat(n[2].name),"Why the ".concat(r," in ").concat(a[0].name," calls 3 planets their home")];if(2===t)return["How ".concat(a[1].name," ").concat(d,"s the ").concat(h," ").concat(a[0].name),"Three planets? Not enough space for these 2 ".concat(r,"s"),"The ".concat(u," ").concat(m," from ").concat(n[1].name," to ").concat(n[2].name)];if(3===t)return["The ".concat(i," truths that ").concat(a[2].name," reveals..."),"Three powers in three ".concat(u," places"),"The story of the loser who gets exciled to planet ".concat(n[0].name)]}},V=function(e,t,a,n,o,c,r,i,s,l,h,m,u,d){if(0===e){if(1===t)return["This is the ".concat(i," story of how ").concat(a[0].name," found a ").concat(o,". ")+"It was in the ".concat(l," during a legendary ").concat(s,". This ").concat(s," ")+"was the result of their ".concat(h," ways and a lesson they'll not soon ")+"forget. In the turmoil they needed to protect their sacred ".concat(c,". ")+"Will it be found or discovered? Stay tuned to find out...","The ".concat(r," is here! The ").concat(r," is here! This is the tune that ")+"".concat(a[0].name," had to listen to when they ventured into the ")+"".concat(o,". To most people this would ").concat(d," them, but not this ")+"".concat(u," character. Afterall, they come from a rare ").concat(o," ")+"that is known for its toughness. However, something is bothering "+"".concat(a[0].name," deep, down inside. But what is it? Find out in ")+"this episode!","It was the ".concat(s," that ").concat(a[0].name," will never forget! A ")+"truely ".concat(i," ").concat(l," for the ").concat(r,". What led ").concat(a[0].name," ")+"to become such a ".concat(r,"? Why did the ").concat(s," happen? Who else ")+"was there in the ".concat(l," to see it happen? Oh so many questions and ")+"so little answers. Find out everything in this episode of Star Wars!"];if(2===t)return["The ".concat(l," that ").concat(a[0].name," ventured too far was the day that ")+"they'll never forget. They thought that they were a ".concat(r," and ")+"could do whatever they wanted. However, ".concat(a[0].name," pushed their ")+"luck too far this time. They stepped on the toes of ".concat(a[1].name,". ")+"This ".concat(h," was ready to duel. Simply hearing the name ").concat(a[0].name," ")+"".concat(d,"s them. What did they duel over? Find out in this episode!"),"They call 'em ".concat(h," ").concat(a[0].name," for good reason. They simply are! ")+"Poor ".concat(a[1].name,", a ").concat(r," by nature, never knew the hole they ")+"were getting themselves into. It was well into the ".concat(l," and they ")+"were frantically trying to find the ".concat(c," of ").concat(a[0].name,". Hoping ")+"that this would get them on the good side of ".concat(a[1].name,". Little did ")+"they know how naive their intentions were. What was going to happen...","It was a dark ".concat(l," for poor old ").concat(a[0].name,". They were minding their ")+"space business when they came across the ".concat(h," ").concat(a[1].name,". Face to ")+"face. Staring them right in the eye. The heart inside of ".concat(a[0].name," ")+"was on the verge of popping out of their chest. They took a deep breath and "+"nothing came out. ".concat(a[1].name," reached behind his back for something. ")+"Find out what it was in this episode of Star Wars!"];if(3===t)return["It was a friendship like no other. They were practically family! "+"".concat(a[2].name," was the mastermind behind this group of ").concat(r,"s and ")+"was always a bit ".concat(h," on the inside. This ").concat(l," a strange ")+"idea was in the air. The ".concat(h," ").concat(a[2].name," had a evil plan for ")+"them. What surprises were ".concat(a[0].name," and ").concat(a[1].name," going to ")+"come across on this episode? Stay tuned to find out.","There were comet's everywhere. This ".concat(m," was proving to test the ")+"limits of the young racer's. Whoosh ....and a comet just flew over the "+"top of the jedi fighter of ".concat(a[1].name,". A sigh of relief, but ")+"something bigger was heading their way. What was it? Both ".concat(a[0].name," ")+"and ".concat(a[2].name," were able to see and narrowly avoid it. But they ")+"were well know ".concat(o," racer's. Will ").concat(a[0].name," meet their fate???"),"It was only a ".concat(c,", but ").concat(a[0].name," and ").concat(a[2].name," were in ")+"a fierce battle. A battle of the ".concat(r,"s. They were both in deadlock ")+"and unwilling to give an inch. It's mine....nooo, it is mine! They kept going back and forth. Then came another individual into the room. The "+"".concat(h," ").concat(a[1].name," as they liked to call 'em. ").concat(a[1].name," looks ")+'both of them in the eye and hand on their sword. They say, "nobody is going '+"anywhere this ".concat(l,", until I get my ").concat(c,'."')]}else if(1===e){if(0===t)return["Why was ".concat(n[0].name," so ").concat(u,"? This is the untold tale of how ")+"it all began for the ".concat(o,"-like planet. This ").concat(u," place was ")+"always a bit different. Its people were often ".concat(h," and they and known ")+"to be ".concat(r,"s. Then something happened one ").concat(l,". What was it?"),"A secret society known as the ".concat(r,"s. They lived in quiet on their ")+"".concat(u," planet. What did everyone have in common there? Well they ")+"mastered the ".concat(o," and all became millionaires on ").concat(n[0].name,". ")+"Find out how they did it on this episode.","Some people say it was a great planet. If you ask anyone who lives there, "+"they all tell you the same thing. ".concat(n[0].name," is a ").concat(h," place. ")+"This ".concat(h," place is inside the biggest ").concat(o," of all time. It is only ")+"full of ".concat(c,"s. But there is a deeper problem that happens in the ").concat(l,"...")];if(1===t)return["They say the ".concat(h," ").concat(a[0].name," is the most feared fighter in the entire ")+"galaxy. Anywhere they go to, ".concat(d,"s everyone! When they paid a visit to the ")+"peaceful ".concat(n[0].name,", it was no different. Everyone hid their ").concat(c,"s, ")+"locked their doors and stayed silent. How long was ".concat(a[0].name," going to be ")+"there for? Was a ".concat(s," about to occur of ").concat(n[0].name,"? Find out..."),"How ".concat(i," can someone be? What goes into creating such a life like that? ")+"Well this is the story of ".concat(a[0].name,". Born on a ").concat(o," in ")+"".concat(n[0].name,", they have had a difficult life right from the beginning. This ")+"episode will take you through it, including the story of their ".concat(c,"."),"There is a ".concat(h," person going around ").concat(n[0].name,". Who is this ").concat(h," ")+"person and what are they up to? Why are they on a ".concat(m," to scam everyone ")+"on ".concat(n[0].name,"? Who is really behind the scheme? This is the story of ")+"how ".concat(a[0].name," will become a ").concat(r," inspector!")];if(2===t)return["A long ".concat(l," ago, there was a remark made to ").concat(a[1].name,". This ")+"remark still ".concat(d,"s ").concat(a[1].name," to this day. It is something ")+"that they will never let go of. However, their is a ".concat(r," living on ")+"".concat(n[0].name," by the name of ").concat(a[0].name,". They have a ").concat(u," ")+"vibe to them and are ready for battle! Will this be the battle of the century?","Normally a quiet ".concat(l," on ").concat(n[0].name,", but not today. Today is a ")+"very ".concat(u," ").concat(l," for this little planet. Two new faces have come ")+"to visit in a ".concat(m," of a lifetime. Who will win? Will it be the ").concat(h," ")+"".concat(a[0].name,"? Or will it be the ").concat(r," ").concat(a[1].name,"?"),"Why did ".concat(a[1].name," come to ").concat(n[0].name,"? Why were they so ")+"".concat(i,"? What sort of ").concat(m," is going on. Why is the ").concat(r," ")+"".concat(a[0].name," there? Everything will be made clear on this episode.")];if(3===t)return["How did this relatively ".concat(u," planet by the name of ").concat(n[0].name," ")+"attract 3 super ".concat(h," characters? Why were they all on this planet? ")+"What were the looking for? Is there really a ".concat(c," here? Will ")+"".concat(a[0].name,", ").concat(a[2].name," and ").concat(a[1].name," play nice?"),"Why is ".concat(a[1].name," on a mission to get to the ").concat(u," planet of ")+"".concat(n[0].name,"? Why have ").concat(a[2].name," and ").concat(a[1].name," ")+"teamed up to stop ".concat(a[1].name,"? You wont want to miss this exciting ")+"episode that ends in an ".concat(s,"!"),"An unlikely ".concat(u," trio is on a gigantic mission to get to the one ")+"and only planet of ".concat(n[0].name,"! But why and what ").concat(h," is ")+"awaiting them there? Will ".concat(a[2].name,", ").concat(a[0].name," and ")+"".concat(a[1].name," have enough space? Find out...")]}else if(2===e){if(0===t)return["In a far away ".concat(o," there is a place of uncertainty. There is a ")+"brewing war between the two most feared and ".concat(h," nations. They ")+"used to be friends, but now are fierce foes. Will ".concat(n[0].name," ")+"be the ruler of this ".concat(o," or will it be ").concat(n[1].name,"?"),"In the middle of some unknown galaxy in the corner of the universe lies "+"2 places that are uninhabited. One is known for its ".concat(u," atmosphere. ")+"The other is so bare and miserable it ".concat(d,"s anyone who dares to venture ")+"onto it. So in this episode we will take you to these two planets, "+"".concat(n[1].name," and ").concat(n[0].name,", for the first time."),+"It is a sunny day on planet ".concat(n[0].name,", but there is something ")+"".concat(i," in the air. What is it? And why does it smell so bad? Well it ")+"turns out that there is turmoil going on with their neighbours. "+"What is going on at ".concat(n[1].name,"? Find out in this episode.")];if(1===t)return["".concat(a[0].name," has always been a ").concat(u," person, but one day they ")+"found out something they would have never wanted to know. Their father "+"was actually a ".concat(r,"! More importantly, their real father. Their ")+"real father was actually from ".concat(n[0].name,"! A secret their mother ")+"had kept from them. Now he was torn from where we was from... "+"".concat(n[0].name,", the place they'd known all their life or ")+"".concat(n[1].name,"?"),"".concat(a[0].name," was meant to be the next ruler of the galaxy. They had ")+"the blood. However, their parents came from 2 different worlds. Their "+"mother was from ".concat(n[1].name,", while their father was from ")+"".concat(n[0].name,". Now the ").concat(l," before they must declare their oath ")+"to a planet, nobody knows where they will align themselves with. Not "+"even the poor ".concat(r," ").concat(a[0].name,"."),"Everyday in the ".concat(l," when ").concat(a[0].name," looks at the ").concat(o," ")+"it ".concat(d,"s them. Why? Nobody will ever know. To them it is ").concat(i,". ")+"They will never be able to have a ".concat(c," of their own. For they have ")+"failed in living life on ".concat(n[1].name,". This is where it most ")+"hurts them. This has turned them into a ".concat(h," person. Will they ")+"take the ".concat(i," risk and move to ").concat(n[0].name,"?")];if(2===t)return["They come from 2 very different planets. On ".concat(n[0].name," they are ")+"known to be ".concat(r,"s. On ").concat(n[1].name,", they are more ").concat(h," ")+"in nature. Today is the ".concat(l," that ").concat(a[1].name," meets ")+"the ".concat(u," ").concat(a[0].name,". Will ").concat(a[0].name," be too ")+"much for the young ".concat(a[1].name,"?"),"The battle of a lifetime is taking place on planet ".concat(n[1].name,". ")+"This is the ".concat(m," that will soon not be forgotten. In it are 2 ")+"warriors from ".concat(n[0].name,". In the ").concat(u," corner is the ")+"challenger, ".concat(a[1].name,". The ").concat(i," champ is back again and ")+"they call him ".concat(a[0].name,". Who will win the showdown?"),"The food that they eat on planet ".concat(n[1].name," is so smelly ")+"that the people of ".concat(n[0].name," can smell it! What are they ")+"producing on planet ".concat(n[1].name," that is so smelly? Two friends, ")+"".concat(a[1].name," and ").concat(a[0].name,", are on a mission to find out!")];if(3===t)return["How did the love story between ".concat(a[1].name," and ").concat(a[0].name," ")+"happen? From two vastly different worlds. One is from the ".concat(u," ")+"planet of ".concat(n[1].name," and the other is from the boring planet ")+"of ".concat(n[0].name,". And why is ").concat(a[2].name," trying to stop them?"),"Two friends, ".concat(a[1].name," and ").concat(a[2].name,", are searching for ")+"their friend, ".concat(a[0].name,". They are nowhere to be found in the ")+"".concat(o,"! On searching through the house of ").concat(a[0].name,", they ")+"find a ".concat(c," and what other ").concat(i," item? Find out on this episode ")+"as they race through ".concat(n[1].name," to ").concat(n[0].name,"."),"This was the ultimate trophey! A ".concat(c,". It was no ordinary ").concat(c,". ")+"It was passed down from the great leaders who hailed from "+"".concat(n[1].name," and ").concat(n[0].name,". It was now in the hands ")+"of the ".concat(r," named ").concat(a[0].name,". However they are in a ")+"".concat(m," of a lifetime. Will they get to hold onto the ").concat(c," or ")+"will ".concat(a[2].name," or the ").concat(h," ").concat(a[1].name," take it?")]}else if(3===e){if(0===t)return["It was the biggest ".concat(m," in the entire universe. The stakes were ")+"high for all the competitors. They knew the risks and the rewards. "+"The ".concat(s," showed what everyone had to deal with. In the end, ")+"three teams came out on top. They hailed from ".concat(n[2].name,", ")+"".concat(n[0].name," and ").concat(n[1].name,". Yet something was wrong! ")+"What was going on the ".concat(l," after?"),"Far, far away there were 3 planets of mystical nature. They were "+"colorful in nature and featured a bunch of ".concat(h," people. ")+"These people were also known to be quite ".concat(u,". They hailed ")+"from ".concat(n[0].name,", ").concat(n[2].name," and ").concat(n[1].name,". ")+"Though there was something else that went on in these ".concat(u," ")+"places. What was it? Find out in this episode.","On planet ".concat(n[2].name," there was a massive ").concat(m," going ")+"on. It was happening in this ".concat(o,". The entrants were a ")+"bit shocking. They weren't spaceships, but planets! Yes planets. "+"How did these planets of ".concat(n[0].name," and ").concat(n[1].name," ")+"move? You will get to find out in this episode of Star Wars!"];if(1===t)return["Born on planet ".concat(n[1].name,", and living on planet ")+"".concat(n[0].name," is one ").concat(h," cookie named ").concat(a[0].name,". ")+"The craziest of things will ".concat(d," them. What are they? Well ")+"seeing a ".concat(r," for starters. The other is simply hearing of ")+"the planet ".concat(n[2].name,". The last one... you will have ")+"to tune into this episode to find out.","The ".concat(r," named ").concat(a[0].name," always thought he was from ")+"".concat(n[2].name,". They were so proud of their heritage, ")+"always smiling from ear to ear. Then one ".concat(i," day the truth ")+"came out. They were actually from planet ".concat(n[0].name," and ")+"the blood line in the family came from planet ".concat(n[1].name,". ")+"How could this be? How could they be from there? You will get all the answers in this exciting episode!","Among their peers, ".concat(a[0].name," was always a bit strange. ")+"Their peers thought of 'em as a ".concat(r,". Most likely ")+"because they had an obsession with a ".concat(c,". Though the ")+"best part was that they called 3 planets their home. "+"".concat(n[1].name,", ").concat(n[0].name," and ").concat(n[2].name,". ")+"You will find out in this riveting tale through space."];if(2===t)return["This is the ".concat(i," story of two polar opposites. ").concat(a[0].name," ")+"from planet ".concat(n[0].name," and ").concat(a[1].name," from ")+"".concat(n[2].name,". They were sitting in a bar when ")+"".concat(a[1].name," ").concat(d,"s ").concat(a[0].name,". Why? What was said? ")+"You wont want to miss this ".concat(u," episode!"),"".concat(a[0].name," is one big, bad person! The most feared on ")+"planets ".concat(n[1].name," and ").concat(n[0].name,". They used to ")+"also be the most feared on planet ".concat(n[2].name,", but that ")+"title is now held by someone else. Someone by the name of "+"".concat(a[1].name,"! How did this ").concat(r," become so feared? ")+"Find out in this episode!","".concat(a[0].name," calls it like it is. ").concat(a[1].name," had ")+"stolen their precious ".concat(c," and decided to challenge the ")+"person to a ".concat(m,". A ").concat(m," from ").concat(n[1].name," ")+"to ".concat(n[2].name,". The winner would get to own the ")+"".concat(i," planet of ").concat(n[0].name,". Who was going to win ")+"this epic duel?"];if(3===t)return["It was meant to be another ".concat(l,", but ").concat(a[2].name," had ")+"a confession to make. They were struggling to find the words "+"of the ".concat(s," that changed everything. It had happened on ")+"planet ".concat(n[2].name,", when they were in a ").concat(o,". ")+"Now ".concat(a[2].name," must travel to both ").concat(n[1].name," ")+"and ".concat(n[0].name," to deliver the news. Time is ticking. ")+"Will they make it and inform both ".concat(a[0].name," and more ")+"importantly ".concat(a[1].name,"? Find out in this episode!"),"This is the story of three superpowers and how they came to be. "+"First is the ".concat(r," ").concat(a[0].name,", who hails from the ")+"tragic planet of ".concat(n[0].name,". Next is the ").concat(h," ")+"".concat(a[1].name," who lives on planet ").concat(n[2].name,". ")+"Lastly, is ".concat(a[2].name,", who lives on planet ")+"".concat(n[1].name,". You will find out what ").concat(d,"s them ")+"as well as a ".concat(c,"! Yes, only in this episode."),"In this last ever episode of Star Wars that will be released, "+"we learn about the person who gets exciled to ".concat(n[0].name,". ")+"It is either going to be ".concat(a[0].name," or ").concat(a[1].name,". ")+"Why is ".concat(a[2].name," the one responsible for exciling one ")+"of them? Who is the ultimate loser? Why are the people of "+"planet ".concat(n[2].name," and ").concat(n[1].name," nervously ")+"watching? Who will scar the entire galaxy forever?"]}},G=a(126),U=Object(v.a)(G.a)({fontWeight:"500",background:"#ffcdd2",padding:"5px 10px",borderRadius:"5px",border:"1px solid #ef9a9a"}),J=function(e){var t=e.errorMsg;return c.a.createElement(s.a,{my:"15px"},c.a.createElement(U,{variant:"body2",color:"error"},t))},Q=a(155),$=a(58),K=a.n($),X=Object(l.a)({root:{background:"#9e9e9e",height:"22px",width:"22px",cursor:"pointer",mask:"url(".concat(K.a,")"),"&:hover":{background:"#1c1b1b"}}})((function(e){return c.a.createElement(Q.a,e)})),Z=function(e){var t=e.pr,a=void 0===t?"0px":t,n=e.onDelete,o=e.pos;return c.a.createElement(s.a,{display:"flex",pr:a},c.a.createElement(X,{pos:o,onClick:function(){return n(o)},title:"Delete",src:K.a}))},_=Object(v.a)(G.a)({fontSize:"22px","@media (min-width: 451px) and (max-width: 600px)":{fontSize:"18px"},"@media (max-width: 450px)":{fontSize:"16px"}}),ee=Object(v.a)(s.a)({"@media (max-width: 600px)":{paddingLeft:"50px"}}),te=function(e){var t=e.resourceName;return c.a.createElement(s.a,{display:"flex"},c.a.createElement(ee,{display:"flex",flexGrow:1,height:"60px",alignItems:"center",pl:"100px"},c.a.createElement(_,null,t)),c.a.createElement(s.a,{display:"flex",width:"60px",height:"60px",alignItems:"center",justifyContent:"center"},c.a.createElement(Z,e)))},ae=Object(v.a)(s.a)({background:"#fff"}),ne=function(e){var t=e.plotList,a=e.isError,n=e.resource,o=e.onDelete,r=0!==t.length?"15px":"0px",i=function(e,t){return e.duplicate?k.duplicate:!!e.tooManyResources&&"".concat(k.tooManyResources1," ").concat(t.toLowerCase()," ").concat(k.tooManyResources2)}(a,n),s=i?c.a.createElement(J,{errorMsg:i}):null;return c.a.createElement(ae,{px:"30px",py:r},s,t.map((function(t,a){return c.a.createElement(te,Object.assign({resourceName:t.name,key:t.name+a,onDelete:o,pos:a},e))})))},oe=a(156),ce=a(171),re=a(165),ie=a(172),se="#fbc81c",le="#f8f8f9",he="#1c1b1b",me="#af0000",ue=le,de=Object(l.a)({root:{minWidth:"275px",maxWidth:"275px"}})(oe.a),pe=Object(l.a)({outlined:{background:ue,padding:"1px 5px"},root:{color:"#9e9e9e"}})(ce.a),fe=Object(l.a)({select:{"&:focus":{background:ue}}})(re.a),ge=function(e){var t=c.a.useRef(null);return c.a.createElement("form",{autoComplete:"off"},c.a.createElement(de,{variant:"outlined"},c.a.createElement(pe,{ref:t,htmlFor:"outlined-resources"},"Resource"),c.a.createElement(fe,{value:e.resource?e.resource:"",onChange:e.onChange,inputProps:{name:"resources",id:"outlined-resources"}},c.a.createElement(ie.a,{value:"Characters"},"Characters"),c.a.createElement(ie.a,{value:"Planets"},"Planets"))))},we=Object(v.a)(G.a)({fontWeight:500,"@media (min-width: 561px) and (max-width: 750px)":{fontSize:"3.2vw"},"@media (min-width: 360px) and (max-width: 560px)":{fontSize:"18px"},"@media (max-width: 359px)":{fontSize:"16px"}}),ye=function(e){var t=e.text;return c.a.createElement(s.a,{display:"flex",flexDirection:"column",pb:"12px"},c.a.createElement(we,{variant:"h5",color:"primary"},t))},be=function(e){return c.a.createElement(s.a,{display:"flex",flexDirection:"column",alignItems:"center",pb:"32px"},c.a.createElement(ye,{text:"1. Choose resource type"}),c.a.createElement(ge,e))},xe=a(158),ve=function(e){var t=e.text,a=e.onClick;return c.a.createElement(s.a,{mx:"10px"},c.a.createElement(xe.a,{onClick:a,variant:"outlined",color:"primary",size:"large"},t))},Te=a(79),Ee=function(e){var t=e.onSelectChange,a=e.suggestionResults,n=e.customDropdownMessage,o=e.onTextChange;return c.a.createElement(s.a,{display:"flex",alignItems:"center",mb:"15px"},c.a.createElement(s.a,{width:"225px"},c.a.createElement(Te.a,{loadOptions:a,placeholder:"Search...",noOptionsMessage:n,onChange:t,onInputChange:o,isClearable:!0})))},ke=Object(v.a)(s.a)({"@media (max-width: 600px)":{flexDirection:"column",alignItems:"center"}}),We=function(e){var t=e.singularResourceLC,a=e.plotButtonClick;return c.a.createElement(o.Fragment,null,c.a.createElement(ye,{text:"3. Search for a ".concat(t,", then add to plot")}),c.a.createElement(ke,{display:"flex",flexDirection:"row"},c.a.createElement(Ee,e),c.a.createElement(ve,{onClick:a,text:"Add To Plot",outline:!0})))},Se=a(159),Ce=function(e){var t=e.isLoading,a=e.randomSuggestion;return c.a.createElement(o.Fragment,null,t?c.a.createElement(Se.a,null):c.a.createElement(s.a,{mx:"12px",borderBottom:1},a.name))},Oe=a(59),je=a.n(Oe),Ie=Object(l.a)({root:{background:"#9e9e9e",height:"35px",width:"35px",borderRadius:"50%",cursor:"pointer",mask:"url(".concat(je.a,")"),"&:hover":{background:"#1c1b1b"}}})((function(e){return c.a.createElement(Q.a,e)})),Me=function(e){var t=e.onRefreshClick,a=e.pr;return c.a.createElement(s.a,{display:"flex",pr:a},c.a.createElement(Ie,{onClick:t,title:"Generate new",src:je.a}))},Re=Object(v.a)(s.a)({"@media (max-width: 600px)":{flexDirection:"column"}}),Fe=function(e){var t=e.singularResourceLC,a=e.plotButtonClick;return c.a.createElement(o.Fragment,null,c.a.createElement(ye,{text:"3. Find a ".concat(t,", then add to plot")}),c.a.createElement(Re,{display:"flex",alignItems:"center",mt:"5px"},c.a.createElement(s.a,{display:"flex",alignItems:"center",mb:"15px"},c.a.createElement(Me,Object.assign({pr:"10px"},e)),c.a.createElement(Ce,e)),c.a.createElement(ve,{onClick:a,text:"Add To Plot",outline:!0})))},Le=function(e){var t=e.resource,a=e.option,n=t.toLowerCase().slice(0,-1),o="search"===a?c.a.createElement(We,Object.assign({singularResourceLC:n},e)):c.a.createElement(Fe,Object.assign({singularResourceLC:n},e));return c.a.createElement(s.a,{display:"flex",flexDirection:"column",alignItems:"center"},o)},Ae=a(168),ze=a(169),Pe=he,He=Object(l.a)({root:{color:"#9e9e9e","&$checked":{color:Pe}},checked:{}})(Ae.a),Be=function(e){var t=e.option,a=e.onChange;return c.a.createElement(oe.a,{component:"fieldset",inputprops:{"aria-label":"radioGroup"}},c.a.createElement(ze.a,{"aria-label":"searchOptions",name:"searchOptions",value:t,onChange:a,row:!0},c.a.createElement(s.a,{display:"flex",alignItems:"center",pb:"12px"},c.a.createElement(s.a,{width:"42px",textAlign:"center"},c.a.createElement(He,{value:"search",name:"option1",inputProps:{"aria-label":"Search"}})),c.a.createElement(s.a,{pl:"5px",pr:"30px"},"Search yourself"),c.a.createElement(s.a,{width:"42px",textAlign:"center"},c.a.createElement(He,{value:"random",name:"option2",inputProps:{"aria-label":"Random"}})),c.a.createElement(s.a,{pl:"5px"},"Generate random"))))},De=function(e){var t=e.option;return c.a.createElement(s.a,{display:"flex",flexDirection:"column",alignItems:"center"},c.a.createElement(ye,{text:"2. Select an option"}),c.a.createElement(Be,e),c.a.createElement(s.a,{pt:"20px"},""!==t?c.a.createElement(Le,e):null))},Ne=function(e){var t=e.resource;return c.a.createElement("div",null,c.a.createElement(be,e),""!==t?c.a.createElement(De,e):null)},qe=function(e){return c.a.createElement(s.a,{px:"30px",py:"15px",bgcolor:"secondary.main"},c.a.createElement(Ne,e))},Ye=function(e){return c.a.createElement(s.a,null,c.a.createElement(qe,e),c.a.createElement(ne,e))},Ve=a(84),Ge=he,Ue=Object(v.a)((function(e){e.bgColor;var t=Object(Ve.a)(e,["bgColor"]);return c.a.createElement(s.a,t)}))({backgroundColor:function(e){return e.bgColor},padding:"10px 0",borderRadius:"30px 30px 0 0","@media (max-width: 600px)":{borderRadius:"0px"}}),Je=Object(v.a)(G.a)({fontFamily:"starJediHol",fontSize:"80px","@media (min-width: 451px) and (max-width: 600px)":{fontSize:"64px"},"@media (max-width: 450px)":{fontSize:"52px"}}),Qe=Object(v.a)(G.a)({fontFamily:"starJedise",fontSize:"28px","@media (min-width: 451px) and (max-width: 600px)":{fontSize:"25px"},"@media (max-width: 450px)":{fontSize:"23px"}}),$e=function(){return c.a.createElement(Ue,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",bgColor:Ge},c.a.createElement(Je,{variant:"h1",color:"textSecondary"},"STAR WARS"),c.a.createElement(Qe,{color:"secondary"},"Plot Generator"))},Ke=he,Xe=se,Ze=Object(v.a)(xe.a)({background:Xe,color:Ke,fontSize:"24px",textTransform:"capitalize",fontFamily:"distantGalaxy",borderRadius:"0 0 30px 30px","&:hover":{background:"#fdd820"},"@media (max-width: 600px)":{fontSize:"21px",borderRadius:"0px"}}),_e=function(e){var t=e.fullWidth,a=e.text,n=e.onClick;return c.a.createElement(Ze,{fullWidth:t,onClick:n},a)},et=function(e){var t=e.onClick;return c.a.createElement(_e,{fullWidth:!0,text:"Generate Plot",onClick:t})},tt=a(170),at=a(161),nt=a(162),ot=a(160),ct=a(60),rt=a.n(ct),it=Object(l.a)({root:{background:"#9e9e9e",height:"16px",width:"16px",cursor:"pointer",mask:"url(".concat(rt.a,")"),"&:hover":{background:"#1c1b1b"}}})((function(e){return c.a.createElement(Q.a,e)})),st=Object(l.a)((function(e){return{root:{margin:"0 50px 0 0",padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose;return c.a.createElement(at.a,{disableTypography:!0,className:a.root},c.a.createElement(G.a,{variant:"h6"},t),n?c.a.createElement(ot.a,{"aria-label":"close",className:a.closeButton,onClick:n},c.a.createElement(it,{src:rt.a})):null)})),lt=Object(l.a)({root:{padding:"20px"}})(nt.a),ht=function(e){var t=e.closeModal,a=e.openModal,n=e.plotStory,o=n.resources,r=n.resources.map((function(e,t){return 1===o.length?e.name:o.length-1!==t?"".concat(e.name,", "):"& ".concat(e.name)}));return c.a.createElement("div",null,c.a.createElement(tt.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:a},c.a.createElement(st,{id:"customized-dialog-title",onClose:t},n.title),c.a.createElement(lt,{dividers:!0},c.a.createElement(G.a,null,n.description)),c.a.createElement(lt,null,c.a.createElement(G.a,{variant:"subtitle2"},"Featuring: ",r))))},mt=Object(v.a)(x.a)({padding:"0px",margin:"15px","@media (max-width: 600px)":{position:"absolute",margin:"0px",top:"0px"},"@media (max-height: 515px)":{position:"absolute",top:"0px"}}),ut=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).generatePlot=function(t){t.preventDefault();var a=e.state.plotList;if(a.length>0){var n=function(e){var t=T(e,"Planets"),a=T(e,"Characters"),n=t.length,o=a.length,c=q(H),r=q(B),i=q(R),s=q(L),l=q(F),h=q(A),m=q(z),u=q(P),d=q(D),p=q(N),f=Y(n,o,a,t,c,r,i,s,l,h,m,u,d,p),g=V(n,o,a,t,c,r,i,s,l,h,m,u,d,p),w=Math.floor(Math.random()*f.length);return{title:f[w],description:g[w],resources:e}}(a);e.setState({isModalOpen:!0,plotStory:n})}},e.closeModal=function(){var t={resource:"",option:"",searchValue:"",inputValue:"",searchSuggestions:"",randomSuggestion:"",plotList:[],plotStory:{title:[],description:[],resources:[]},isLoading:!1,isError:{duplicate:!1,tooManyResources:!1,onFetch:!1},isModalOpen:!1};e.setState(t)},e.addToPlot=function(){var t=e.state,a=t.searchValue,n=t.randomSuggestion,o=t.option,c=t.resource,r=t.plotList,i="random"===o?n.name:a,s=function(e,t){if(e.length>0){if(1===E(e,"name",t).length)return!0}return!1}(r,i),l=T(r,c).length+1;if(!s&&l<=3)e.setState((function(e){return{plotList:[].concat(Object(f.a)(e.plotList),[{name:i,resource:c}])}}));else{var h=s?"duplicate":"tooManyResources";e.updateErrorState(h),setTimeout(e.updateErrorState,3e3,h)}},e.updateErrorState=function(t){e.setState((function(e){return{isError:Object(p.a)(Object(p.a)({},e.isError),{},Object(d.a)({},t,!e.isError[t]))}}))},e.deletePlotItem=function(t){e.setState((function(e){return{plotList:e.plotList.filter((function(e,a){return t!==a}))}}))},e.onStepChanges=function(t){var a=t.target.value,n=t.target.name.slice(0,-1);e.setState(Object(d.a)({},n,a)),"random"===a&&e.getRandomQuery()},e.onSearchChange=function(t){e.setState({searchValue:t?t.value:""})},e.onInputChange=function(t){return e.setState({inputValue:t}),t},e.getSuggestions=function(){var t=Object(u.a)(m.a.mark((function t(a){var n,o,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.resource,o=C(n),t.next=4,I(o,a);case 4:return c=t.sent,e.setState({searchSuggestions:c}),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchResults=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e.getSuggestions(a);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.abrupt("return");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.queryList=function(t){return new Promise((function(a){setTimeout((function(){a(e.searchResults(t))}),0)}))},e.getRandomQuery=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0,randomSuggestion:""}),a=e.state.resource,t.next=4,M(a);case 4:n=t.sent,e.setState({isLoading:!1,randomSuggestion:n});case 6:case"end":return t.stop()}}),t)}))),e.state={resource:"",option:"",searchValue:"",inputValue:"",searchSuggestions:"",randomSuggestion:"",plotList:[],plotStory:{title:[],description:[],resources:[]},isLoading:!1,isError:{duplicate:!1,tooManyResources:!1,onFetch:!1},isModalOpen:!1},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.inputValue,n=t.isModalOpen;return c.a.createElement(o.Fragment,null,c.a.createElement(mt,{maxWidth:"sm"},c.a.createElement($e,null),c.a.createElement(Ye,Object.assign({onChange:this.onStepChanges,suggestionResults:this.queryList,customDropdownMessage:function(){return""!==a?"No results found!":null},onSelectChange:this.onSearchChange,onTextChange:this.onInputChange,onRefreshClick:this.getRandomQuery,plotButtonClick:this.addToPlot,onDelete:function(t){return e.deletePlotItem(t)}},this.state)),c.a.createElement(et,{onClick:this.generatePlot})),c.a.createElement(ht,Object.assign({openModal:n,closeModal:this.closeModal},this.state)))}}]),a}(o.Component);var dt=Object(l.a)((function(e){return{"@global":{body:{background:"radial-gradient(circle 400px at 25% 20%, #1591ac 6%, #14859f 16%, #106b7f 30%, #0b4856 47%, #093d49 52.6%, #8edff1 53%, #6dd5ed 68%, #2193b0 104%, transparent 180%), radial-gradient(circle 150px at 85% 80%, #fff 25%, #1c1b1b 45%, transparent 60%), radial-gradient(circle 20px at 90% 15%, #fff 5%, #1c1b1b 18%)",minHeight:"100vh",margin:0,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","@media(max-width: 980px)":{background:"radial-gradient(circle 400px at 25% 20%, #1591ac 5%, #14859f 14%, #106b7f 24%, #0b4856 34%, #093d49 38.6%, #8edff1 39%, #6dd5ed 45%, #2193b0 70%, transparent 98%), radial-gradient(circle 150px at 85% 80%, #fff 25%, #1c1b1b 45%, transparent 60%), radial-gradient(circle 20px at 90% 15%, #fff 5%, #1c1b1b 18%)"}}}}}))((function(){return c.a.createElement(s.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"520px"},c.a.createElement(ut,null))})),pt=a(80),ft=le,gt=se,wt=he,yt=me,bt=Object(pt.a)({palette:{primary:{main:wt},secondary:{main:ft},text:{secondary:gt},error:{main:yt}}}),xt=a(164);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(xt.a,{theme:bt},c.a.createElement(dt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,a){e.exports=a.p+"static/media/trash.0213d47b.svg"},59:function(e,t,a){e.exports=a.p+"static/media/refresh.2fcb3dc2.svg"},60:function(e,t,a){e.exports=a.p+"static/media/close.71793c62.svg"},97:function(e,t,a){e.exports=a(124)}},[[97,1,2]]]);
//# sourceMappingURL=main.7231c417.chunk.js.map