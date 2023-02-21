// // Create an array of potential values

let books = [
    "1984",
"1Q84",
"2001: A Space Odyssey",
"84, Charing Cross Road",
"A Bear Called Paddington",
"A Christmas Carol",
"A Clockwork Orange",
"A Confederacy of Dunces",
"A Connecticut Yankee in King Arthur's Court",
"A Doll's House",
"A Farewell to Arms",
"A Game of Thrones",
"A Heartbreaking Work of Staggering Genius",
"A House for Mr. Biswas",
"A is for Alibi",
"A Light in August",
"A Little Princess",
"A Man Called Ove",
"A Million Little Pieces",
"A Passage to India",
"A Portrait of the Artist as a Young Man",
"A Prayer for Owen Meany",
"A Raisin in the Sun",
"A River Runs Through It",
"A Room with a View",
"A Series of Unfortunate Events",
"A Streetcar Named Desire",
"A Study in Scarlet",
"A Tale of Two Cities",
"A Thousand Splendid Suns",
"A Time to Kill",
"A Wizard of Earthsea",
"A Wrinkle in Time",
"About a Boy",
"Absalom, Absalom!",
"Aeneid",
"Agnes Grey",
"Alice's Adventures in Wonderland",
"All Quiet on the Western Front",
"All the King's Men",
"All the Light We Cannot See",
"All the Pretty Horses",
"Along Came a Spider",
"Amelia Bedelia",
"American Gods",
"American Psycho",
"Americanah",
"Amsterdam",
"An American Tragedy",
"An Artist of the Floating World",
"Anansi Boys",
"Angela's Ashes",
"Anil's Ghost",
"Animal Farm",
"Animorphs: The Invasion",
"Anna Karenina",
"Anne of Green Gables",
"Anthem",
"Anthony and Cleopatra",
"Anya's Ghost",
"Apaloosa",
"Appointment in Samarra",
"Are You My Mother?",
"Are you there God? It's me, Margaret",
"Around the World in Eighty Days",
"Arrowsmith",
"Artemis Fowl",
"As I Lay Dying",
"Atlas Shrugged",
"Atonement",
"Axiom's End",
"Bag of Bones",
"Balzac and the Little Chinese Seamstress",
"Bambi, A Life in the Woods",
"Bartleby the Scrivener",
"Baudolino",
"Because of Winn-Dixie",
"Beezus and Ramona",
"Bel Canto",
"Beloved",
"Ben-Hur: A Tale of the Christ",
"Beowulf",
"Berlin Alexanderplatz",
"Berlin Blues",
"Big Little Lies",
"Bird Box",
"Black Beauty",
"Black Boy",
"Bleak House",
"Blood Meridian",
"Blubber",
"Brave New World",
"Breakfast at Tiffany's",
"Breakfast of Champions",
"Brideshead Revisited",
"Bridge to Terabithia",
"Bridget Jones's Diary",
"Brokeback Mountain",
"Brown Girl Dreaming",
"Bud, Not Buddy",
"Bunnicula",
"Call Me By Your Name",
"Can You Forgive Her?",
"Candide",
"Cannery Row",
"Caps for Sale",
"Captain Blood",
"Captain Correlli's Mandolin",
"Captains Courageous",
"Carmilla",
"Carrie",
"Cat on a Hot Tin Roof",
"Catch-22",
"Catherine, Called Birdy",
"Cat's Cradle",
"Cat's Eye",
"Charlie and the Chocolate Factory",
"Charlotte's Web",
"Chocolat",
"Chronicle of a Death Foretold",
"Chrysanthemum",
"Circe",
"Clifford, the Big Red Dog",
"Cloud Atlas",
"Cloud Cuckoo Land",
"Cloudy with a Chance of Meatballs",
"Cold Mountain",
"Cold Sassy Tree",
"Confessions of a Shopaholic",
"Coraline",
"Corduroy",
"Crazy Rich Asians",
"Crime and Punishment",
"Cry, the Beloved Country",
"Curious George",
"Cyrano de Bergerac",
"Daniel Deronda",
"Darkness at Noon",
"David Copperfield",
"Dead Souls",
"Dead Until Dark",
"Death Comes for the Archbishop",
"Death Comes to Pemberly",
"Death of a Salesman",
"Deliverance",
"Detransition, Baby",
"Devil in a Blue Dress",
"Diary fo a Madman",
"Diary of a Wimpy Kid",
"Dirk Gently's Holistic Detective Agency",
"Divergent",
"Divine Secrets of the Ya-Ya Sisterhood",
"Do Androids Dream of Electric Sheep",
"Doctor Doolittle",
"Doctor Faustus",
"Doctor Zhivago",
"Dolores Claiborne",
"Don Quixote",
"Dr. No",
"Dracula",
"Dream of the Red Chamber",
"Dubliners",
"Dune",
"East of Eden",
"Ella Enchanted",
"Emil and the Detectives",
"Emma",
"Ender's Game",
"Epic of Gilgamesh",
"Eragon",
"Erewhon",
"Esperanza Rising",
"Eugene Onegin",
"Everything is Illuminated",
"Exodus",
"Fahrenheit 451",
"Faust",
"Fear and Loathing in Las Vegas",
"Fear of Flying",
"Fences",
"Fight Club",
"Fire and Blood",
"Flat Stanley",
"Flatland",
"Flowers for Algernon",
"Flowers in the Attic",
"Forrest Gump",
"Frankenstein",
"Franny and Zooey",
"Friday the Rabbi Slept Late",
"Frindle",
"Frog and Toad All year",
"Frog and Toad Together",
"From Somalia with Love",
"From the Mixed-Up Files of Mrs. Basil E. Frankweiler",
"George's Marvelous Medicine",
"Gerald's Game",
"Germinal",
"Get Shorty",
"Ghost in the Shell",
"Giraffes Can't Dance",
"Girl with a Pearl Earring",
"Girl, Interrupted",
"Go Set a Watchman",
"Go Tell it on the Mountain",
"God Bless You, Mr. Rosewater",
"Golem Girl",
"Gone Girl",
"Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
"Goodbye, Columbus",
"Goodnight Moon",
"Gorky Park",
"Gravity's Rainbow",
"Great Expectations",
"Green Eggs and Ham",
"Gulliver's Travels",
"Hamlet",
"Hannibal",
"Hans Brinker, or the Silver Skates",
"Harold and the Purple Crayon",
"Harriet the Spy",
"Hatchet",
"Heart of Darkness",
"Heat and Dust",
"Heidi",
"Herschel and the Hanukkah Goblins",
"High Fidelity",
"Holes",
"House of Sand and Fog",
"Howard's End",
"Howl's Moving Castle",
"I Am Legend",
"I Capture the Castle",
"I Know Why the Caged Bird Sings",
"I Sing the Body Electric",
"I, Claudius",
"If Beale Street Could Talk",
"If on a Winter's Night a Traveler",
"If You Give a Mouse a Cookie",
"Iliad",
"In Cold Blood",
"In Search of Lost Time",
"Infinite Jest",
"Interpreter of Maladies",
"Interview with the Vampire",
"Invisible Man",
"Invitation to a Beheading",
"Island of the Blue Dolphins",
"It",
"It Ends with Us",
"Ivanhoe",
"Jacob Have I Loved",
"Jamaica Inn",
"James and the Giant Peach",
"Jane Eyre",
"Jaws",
"Jazz",
"John Carter of Mars",
"Johnny Tremain",
"Jonathan Livingston Seagull",
"Jonathan Strange and Mr. Norris",
"Journey to the Center of the Earth",
"Journey to the End of the Night",
"Jude the Obscure",
"Jurassic Park",
"Kafka on the Shore",
"Kidnapped",
"Kindred",
"King Lear",
"King Solomon's Mines",
"Kiss of the Spider Woman",
"L. A. Confidential",
"Lady Susan",
"Lafcadio: The Lion Who Shot Back",
"Les Miserables",
"Let the Right One In",
"Life of Pi",
"Like Water for Chocolate",
"Little Fires Everywhere",
"Little Lord Fauntleroy",
"Little Women",
"Lolita",
"Lonesome Dove",
"Long Day's Journey into Night",
"Lord of the Flies",
"Lorna Doone",
"Love in the Time of Cholera",
"Love Like Hate",
"Lucky Jim",
"Macbeth",
"Madame Bovary",
"Madeline",
"Mainstreet",
"Mansfield Park",
"Marley and Me",
"Mary Poppins",
"MASH: A Novel about Three Army Doctors",
"Master and Commander",
"Matilda",
"Maurice",
"Maus",
"McTeague",
"Me and Earl and the Dying Earl",
"Medea",
"Metamorphoses",
"Middlemarch",
"Middlesex",
"Midnight in the Garden of Good and Evil",
"Midnight's Children",
"Misery",
"Miss Peregrine's Home for Peculiar Children",
"Miss Pettigrew Lives for a Day",
"Moby-Dick",
"Mrs. Dalloway",
"Mrs. Frisby and the Rats of NIMH",
"Murder on the Orient Express",
"My Antonia",
"My Brilliant Career",
"My Cousin Rachel",
"My Name is Asher Lev",
"Mystic River",
"Naked Lunch",
"Native Son",
"Needful Things",
"Never Let Me Go",
"Neverwhere",
"Nicholas Nickleby",
"Night",
"No Country for Old Men",
"Normal People",
"North and South",
"Northanger Abbey",
"Norwegian Wood",
"Number the Stars",
"O Pioneers!",
"October Sky",
"Odyssey",
"Oedipus Rex",
"Of Human Bondage",
"Of Mice and Men",
"Old Yeller",
"Olive Kitteridge",
"Oliver Twist",
"On the Road",
"One Crazy Summer",
"One Day in the Life of Ivan Denisovich",
"One Flew Over the Cuckoo's Nest",
"One for the Money",
"One Hundred Years of Solitude",
"One Thousand and One Nights",
"Orange is the New Black",
"Orlando",
"Oryx and Crake",
"Othello",
"Outlander",
"Pale Fire",
"Parable of the Sower",
"Paradise Lost",
"Paradise of the Blind",
"Patriot Games",
"Perdido Street Station",
"Pere Goriot",
"Persepolis",
"Persuasion",
"Pet Sematary",
"Peter Pan",
"Peyton Place",
"Pippi Longstocking",
"Piranesi",
"Plainsong",
"Play it As it Lays",
"Portnoy's Complaint",
"Possession",
"Practical Magic",
"Pride and Prejudice",
"Pride and Prejudice and Zombies",
"Psycho",
"Push",
"Pym",
"QB VII",
"Quo Vadis",
"Rabbit, Run",
"Ragtime",
"Ready Player One",
"Rebecca",
"Rebecca of Sunnybrook Farm",
"Redwall",
"Requiem for a Dream",
"Revolutionary Road",
"Robinson Crusoe",
"Roll of Thunder, Hear My Cry",
"Romeo and Juliet",
"Room",
"Rosencrantz and Guildenstern Are Dead",
"Runaway Jury",
"Running with Scissors",
"Sadako and the Thousand Paper Cranes",
"Sahara",
"Sanditon",
"Sarah, Plain and Tall",
"Sense and Sensibility",
"Seven Years in Tibet",
"Shane",
"Shiloh",
"Shopgirl",
"Short Girls",
"Shutter Island",
"Siddhartha",
"Silas Marner",
"Six Degrees of Separation",
"Slaughterhouse-Five",
"Smile",
"Snow Falling on Cedars",
"Solaris",
"Song of Solomon",
"Sons and Lovers",
"Sophie's Choice",
"Sophie's World",
"Stardust",
"Stellaluna",
"Steppewolf",
"Strange Case of Dr. Jekyll and Mr. Hyde",
"Stuart Little",
"Tales of a Fourth Grade Nothing",
"Tar Baby",
"Tarzan of the Apes",
"Tender is the Night",
"Tess of the d'Urbervilles",
"The 39 Steps",
"The Absolutely True Diary of a Part-Time Indian",
"The Adventures of Augie March",
"The Adventures of Huckleberry Finn",
"The Adventures of Pinocchio",
"The Adventures of Tom Sawyer",
"The Age of Innocence",
"The Alchemist",
"The Amazing Adventures of Kavalier and Clay",
"The Ambassadors",
"The Amen Corner",
"The Andromeda Strain",
"The Autobiography of Malcolm X",
"The Awakening",
"The Ballad of the Sad Café",
"The Bell Jar",
"The BFG",
"The Big Sleep",
"The Blind Assassin",
"The Bluest Eye",
"The Bon Collector",
"The Bonesetter's Daughter",
"The Bonfire of the Vanities",
"The Book Thief",
"The Borrowers",
"The Bourne Identity",
"The Boxcar Children",
"The Boy in the Striped Pyjamas",
"The Bridge of San Luis Rey",
"The Bridge Over the River Kwai",
"The Bridges of Madison County",
"The Brief Wondrous Life of Oscar Wao",
"The Brothers K",
"The Brothers Karamazov",
"The Canterbury Tales",
"The Castle",
"The Castle in the Attic",
"The Cat in the Hat",
"The Catcher in the Rye",
"The Celestine Prophecy",
"The Cherry Orchard",
"The Children of Men",
"The Chocolate War",
"The Chosen",
"The Chronicles of Robin Hood",
"The Cider House Rules",
"The City and the City",
"The Clan of the Cave Bear",
"The Code of the Woosters",
"The Color Purple",
"The Corrections",
"The Count of Monte Cristo",
"The Crucible",
"The Crying of Lot 49",
"The Curious Incident of the Dog in the Night-Time",
"The Darker Face of the Earth",
"The DaVinci Code",
"The Day of the Jackal",
"The Death of Ivan Ilyich",
"The Decameron",
"The Devil Wears Prada",
"The Devil's Arithmetic",
"The Dharma Bums",
"The Diary of a Young Girl",
"The Diving Bell and the Butterfly",
"The End of the Affair",
"The English Patient",
"The Exorcist",
"The Eye of the World",
"The Fault in Our Stars",
"The Fellowship of the Ring",
"The Firm",
"The Fixer",
"The Fountainhead",
"The French Lieutenant's Woman",
"The Girl on the Train",
"The Girl Who Drank the Moon",
"The Girl with the Dragon Tattoo",
"The Giver",
"The Glass Menagerie",
"The God of Small Things",
"The God of Vengeance",
"The Godfather",
"The Golden Compass",
"The Good Earth",
"The Good Soldier",
"The Grapes of Wrath",
"The Graveyard Book",
"The Great Gatsby",
"The Green Mile",
"The Gruffalo",
"The Gunslinger",
"The Handmaid's Tale",
"The Hate U Give",
"The Haunting of Hill House",
"The Heart is a Lonely Hunter",
"The Heart of the Matter",
"The Help",
"The Hitchhiker's Guide to the Galaxy",
"The Hobbit",
"The Horse Whisperer",
"The Hound of the Baskervilles",
"The Hours",
"The House at Pooh Corner",
"The House of Mirth",
"The House of Seven Gables",
"The House of the Spirits",
"The House on Mango Street",
"The Hunchback of Notre-Dame",
"The Hunger Games",
"The Hunt for Red October",
"The Idiot",
"The Incredible Journey",
"The Invention of Hugo Cabret",
"The Joy Luck Club",
"The Jungle",
"The Jungle Book",
"The Kitchen God's Wife",
"The Kite Runner",
"The Last of the Mohicans",
"The Last Temptation of Christ",
"The Last Tycoon",
"The Last Unicorn",
"The Left Hand of Darkness",
"The Legend of Sleepy Hollow",
"The Life and Opinions of Tristram Shandy, Gentleman",
"The Lightning Thief",
"The Lincoln Lawyer",
"The Lion, the Witch, and the Wardrobe",
"The Little Mermaid",
"The Little Prince",
"The Lorax",
"The Lost World",
"The Lovely Bones",
"The Lover",
"The Magic Mountain",
"The Magician's Nephew",
"The Maltese Falcon",
"The Man in the High Castle",
"The Man in the Iron Mask",
"The Marriage Plo",
"The Martian",
"The Martian Chronicles",
"The Master and Margarita",
"The Maze Runner",
"The Merchant of Venice",
"The Midwife's Apprentice",
"The Milagro Beanfield War",
"The Mill on the Floss",
"The Mouse and the Motorcycle",
"The Murder at the Vicarage",
"The Murder of Roger Ackroyd",
"The Mysteries of Udolpho",
"The Mysterious Benedict Society",
"The Naked and the Damned",
"The Name of the Rose",
"The Namesake",
"The Nanny Diaries",
"The Neverending Story",
"The No. 1 Ladies' Detective Agency",
"The Notebook",
"The Old Man and the Sea",
"The Once and Future King",
"The Other Boleyn Girl",
"The Outsiders",
"The Pale King",
"The Pearl",
"The Pelican Brief",
"The Perks of Being a Wallflower",
"The Phantom of the Opera",
"The Phantom Tollbooth",
"The Pickwick Papers",
"The Picture of Dorian Grey",
"The Pilgrim's Progress",
"The Pillars of the Earth",
"The Plague",
"The Plot Against America",
"The Poisonwood Bible",
"The Polar Express",
"The Portrait of a Lady",
"The Postman Always Rings Twice",
"The Power and the Glory",
"The Price of Salt",
"The Prime of Miss Jean Brodie",
"The Prince and the Pauper",
"The Prince of Tides",
"The Princess Bride",
"The Princess Diaries",
"The Prophet",
"The Quiet American",
"The Rainbow Fish",
"The Rainmaker",
"The Reader",
"The Red and the Black",
"The Red Badge of Courage",
"The Red Tent",
"The Remains of the Day",
"The Rescuers",
"The Return of the King",
"The Risen Empire",
"The Road",
"The Ruby in the Smoke",
"The Satanic Verses",
"The Scarlet Letter",
"The Scarlet Pimpernel",
"The Screwtape Letters",
"The Secret Garden",
"The Secret Life of Bees",
"The Secret of the Old Clock",
"The Sheltering Sky",
"The Shining",
"The Shipping News",
"The Silence of the Lambs",
"The Silmarillion",
"The Silver Linings Playbook",
"The Sisterhood of the Traveling Pants",
"The Snowman",
"The Snowy Day",
"The Sorrow of War",
"The Sound and the Fury",
"The Spy Who Came in from the Cold",
"The Stand",
"The Stepford Wives",
"The Story of Ferdinand",
"The Stranger",
"The Tale of Despereaux",
"The Tale of Genji",
"The Tale of Peter Rabbit",
"The Talented Mr. Ripley",
"The Tenant of Wildfell Hall",
"The Thin Man",
"The Things They Carried",
"The Thorn Birds",
"The Three Musketeers",
"The Time Machine",
"The Time Traveler's Wife",
"The Tin Drum",
"The Trial",
"The True Meaning of Smekday",
"The Turn of the Screw",
"The Two Towers",
"The Unbearable Lightness of Being",
"The Velveteen Rabbit",
"The Very Hungry Caterpillar",
"The Virgin Suicides",
"The War of the Worlds",
"The Water Dancer",
"The Way of All Flesh",
"The Wife of Martin Guerre",
"The Wind in the Willows",
"The Wind-Up Bird Chronicle",
"The Wings of the Dove",
"The Witch of Blackbird Pond",
"The Woman in White",
"The Woman Warrior",
"The Wonderful Wizard of Oz",
"The World According to Garp",
"Their Eyes Were Watching God",
"They Both Die at the End",
"Things Fall Apart",
"Thirteen Reasons Why",
"Tinker, Tailor, Soldier, Spy",
"To All the Boys I've Loved Before",
"To Kill a Mockingbird",
"To the Lighthouse",
"Tortilla Flat",
"Trainspotting",
"Treasure Island",
"Tropic of Cancer",
"True Grit",
"Tuck Everlasting",
"Turtles All the Way Down",
"Twenty Thousand Leagues Under the Sea",
"Twilight",
"Ulysses",
"Up in the Air",
"V for Vendetta",
"Valley of the Dolls",
"Vanity Fair",
"Villette",
"Waiting for Godot",
"Walk Two Moons",
"War and Peace",
"Washington Square",
"Watchmen",
"Water for Elephants",
"Watership Down",
"We",
"We Have Always Lived in the Castle",
"We Need to Talk about Kevin",
"Where the Crawdads Sing",
"Where the Red Fern Grows",
"Where the Wild Things Are",
"White Fang",
"White Noise",
"White Oleander",
"White Teeth",
"Who's Afraid of Virginia Woolf?",
"Whose Body?",
"Wicked",
"Wide Sargasso Sea",
"Winesburg, Ohio",
"Winnie-the-Pooh",
"Winter's Tale",
"Wolf Hall",
"Wolf in White Van",
"Wonder",
"Wonder Boys",
"World War Z",
"Wuthering Heights",
"Zorba the Greek",
"Zorro",
];

// Get the input element and the autocomplete div
let input_1 = document.getElementsByName("guess");
let autocomplete = document.getElementById("autocomplete-list");

// Add a keyup event listener to the input element
input_1[0].addEventListener("input", function (e) {
  // Clear any previous suggestions
  autocomplete.innerHTML = "";
  // Get the input value
  let valueOne = this.value;
  // Check if the value is not empty
  if (valueOne) {
    // Loop through the array of possible values
    for (let i = 0; i < books.length; i++) {
      // Check if the value matches the beginning of a book title
      if (books[i].substr(0, valueOne.length).toLowerCase() === valueOne.toLowerCase()) {
        let matchingPart = books[i].substr(0, valueOne.length);
        // Check if the matching part is longer than 2 characters
        if (matchingPart.length > 5) {
          // Create a div element for each matching book title
          let div = document.createElement("div");
          let remainingPart = books[i].substr(valueOne.length);
          div.innerHTML = "<strong>" + matchingPart + "</strong>" + remainingPart;
          // Add a hidden input field to store the book title
          div.innerHTML += "<input type='hidden' value='" + books[i] + "'>";
          // Add a click event listener to the div element
          div.addEventListener("click", function(e) {
            // Set the input value to the selected book title
            input_1[0].value = this.getElementsByTagName("input")[0].value;
            // Clear any previous suggestions
            autocomplete.innerHTML = "";
          });
          autocomplete.appendChild(div);
        }
      }
    }
  }
});
