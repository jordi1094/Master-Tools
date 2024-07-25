# Dnd master complement


DnD Master Tools is an aplication that will give you all the necessary tools to create you own Campaing and have all the necessary informatión when you are playing. With this app you will do your sesion more dinamic and adaptable to the players' improvisations.

<!-- ![](https://media.giphy.com/media/3oEjHFzI1y4erDQ4kE/giphy.gif?cid=790b7611d8kr4at5b4kvqvrpkr8eq70hdd2uy6so6trzmnpe&ep=v1_gifs_search&rid=giphy.gif&ct=g) -->

![](https://media.giphy.com/media/l2QE7HxEjbju1aUIU/giphy.gif?cid=ecf05e47fyli5k5zdxucyrr4jku7rug7o1jowl987iqdy76r&ep=v1_gifs_search&rid=giphy.gif&ct=g)

[Functional](#funtional)
- [Dnd master complement](#dnd-master-complement)
  - [How to Use](#how-to-use)
  - [Skills](#skills)
  - [UI desing](#ui-desing)
  - [Funtional](#funtional)
    - [Use Cases](#use-cases)
      - [Master](#master)
      - [Player | Master](#player--master)
    - [Data Model](#data-model)
      - [Master and Player](#master-and-player)
      - [Campain](#campain)
      - [Ubication](#ubication)
      - [Missions](#missions)
      - [Character](#character)
      - [Npc](#npc)
      - [Enemy](#enemy)
  - [Future Skills](#future-skills)

## How to Use

## Skills

- Generate Campains for Dnd games
- Generate DnD charactes.
- Have all the info from the status of the game ass mision and objectives
- Fast acces to the characters,npc or enemys skills.


## UI desing
[figma](https://www.figma.com/design/PdC19KGjf6emxNUYK9wrIS/Master-Tools?node-id=0-1&t=f2Rn5kymmVgPLI9p-1)


## Funtional

### Use Cases

#### Master

- Create a campain.
- Next steps in the campain.
- Easy accses to every character player or Npc.
- Information abou the actual ubication and possiblities of movement.
- List of the missions to do.
- Notes.

#### Player | Master
- Generate new characters
---

### Data Model

#### Master and Player
- **Id**(String)
- **Name** (string, required).
- **Surname** (string, required).
- **Email** (etring, required).
- **Password** (string, required).
- **Role** (string , required, enum: Master , Player)

#### Campain

- **Id** (String)
- **Title** (string, required)
- **Adventure, background**( string, required)
- **Player Characters** (array[Object{character}], required)
- **Objective**(string, required)
- **World**(array, required)
- **Places**(array[Object{Places}], required)

#### Ubication
- **Npc List** (Array[Npc...], required)
- **Enemy List**(Array [Enemy...], required)
- **Objects**(Array[Game-Objects], required)
- **background**(String)
- **Check List**(array)
- **Posibilities to go**(Array [Ubication])



#### Missions

- **Id**(String)
- **name**(string, required)
- **Main ubication** (object{Ubication}, required)
- **Min decomended Level** (nunmber, required)
- **Space description** (string, required)
- **Mision objective** (string, required)
- **Events** (array, required)
- **Objective**(string, required)
- **Background**(string, required)
- **Check List**(Array, required)
- **Map** (img)

#### Character

- **ID**(String)
- **Portrait** (img)
- **Sice**(number)
- **Name** (string, required)
- **Class** (string, required, enum: Barbarian | Bard | Cleric | Druid | Fighter | Sorcerer | Wizard | Monk | Paladin | Rogue | Ranger | Warlock).
- **Level**( number, required, default :0)
- **Background** ( string, required, enum:Acolyte | Charlatan | Criminal | Entertainer | Folk Hero | Guild Artisan | Hermit | Noble | Outlander | Sage | Sailor | Soldier | Urchin)
- **Player Name**(String, required)
- **Race** ( string, required, enum: Dragonborn | Dwarf | Elf | Gnome | Half-Elf | Half-Orc | Halfling | Human | Tiefling )
- **Aligment** (string, required, enum: Lawful Good | Neutral Good | Chaotic Good | Lawful Neutral | True Neutral | Chaotic Neutral | Lawful Evil | Neutral Evil | Chaotic Evil)
- **Expirience Points** (number, required, default: 0)
- **Inspiration**(boolean, required, default: false)
- **Proficiency Bonus**( number, required)

- **Class Armor**(object{ base: number , variable:(number)}, required)
- **Initiative**(number, required)
- **Speed**(number, required)

- **Strength** (number, required)
- **Dexterity** (number, required)
- **Constitution** (number, required)
- **Inteligence** (number, required)
- **Wisdom** (number, required)
- **Charisma** (number, required)

- **Equipment**( objects Array, Required)
- **Weapons**( array , required)
- **Attacks & spellcasting**(object Array, Required)
- **Money** (object Array, required)
- **Personality traits**( string, required)
- **Ideals**( string, required)
- **Bonds** (String , requires)
- **Flaws**(string, required)
- **Death saves succeses** (number, requires enum: 0| 1| 2| 3) 
- **Death saves Failures** (number, requires enum: 0| 1| 2| 3) 
- **Features and Traits** (string, required)
- **Other proeficiences and Languages**(array, required)



#### Npc

- **ID:**(auto)
- **Name:**( string, required)
- **Description:** (string , required)
- **Race:** (string, required)
- **Aligment:** (string, required)
- **Armor Class:** ( Object{base: (number), variable:(number)}, required)
- **Hit points:** (Object{ points:( number), Dice: (string)}, required)
- **Speed:** (number, required)
- **Strength:** (Object { points: (number), Variable:(number)},required)
- **Dexterity** (Object { points: (number), Variable:(number)},required)
- **Constitution** (Object { points: (number), Variable:(number)},required)
- **Initiative** (Object { points: (number), Variable:(number)},required)
- **Wisdom** (Object { points: (number), Variable:(number)},required)
- **Charisma** (Object { points: (number), Variable:(number)},required)
- **Skills**  (Array [object{name skill(string, required),enum:Acrobatics | Animal Handling | Arcana | Athletics | Deception | History | Insight | Intimidation | Investigation | Medicine | Nature | Perception | Performance | Persuasion | Religion | Sleight of Hand | Stealth | Survival =>  variable}])
- **Senses** (Array [Object {name sense( string, required), enum: Blindsight | Darkvision | Tremorsense | Truesight ==> variable}])
- **Lenguages** (Array , required)
- **Challenge** (Object{ level: number, points: number})
- **Accions** (Object{acction: description(string)... })


#### Enemy

- **ID:**(auto)
- **Name:**( string, required)
- **Description:** (string , required)
- **Race:** (string, required)
- **Aligment:** (string, required)
- **Armor Class:** ( Object{base: (number), variable:(number)}, required)
- **Hit points:** (Object{ points:( number), Dice: (string)}, required)
- **Speed:** (number, required)
- **Strength:** (Object { points: (number), Variable:(number)},required)
- **Dexterity** (Object { points: (number), Variable:(number)},required)
- **Constitution** (Object { points: (number), Variable:(number)},required)
- **Initiative** (Object { points: (number), Variable:(number)},required)
- **Wisdom** (Object { points: (number), Variable:(number)},required)
- **Charisma** (Object { points: (number), Variable:(number)},required)
- **Skills**  (Array [object{name skill(string, required),enum:Acrobatics | Animal Handling | Arcana | Athletics | Deception | History | Insight | Intimidation | Investigation | Medicine | Nature | Perception | Performance | Persuasion | Religion | Sleight of Hand | Stealth | Survival =>  variable}])
- **Senses** (Array [Object {name sense( string, required), enum: Blindsight | Darkvision | Tremorsense | Truesight ==> variable}])
- **Lenguages** (Array , required)
- **Challenge** (Object{ level: number, points: number})
- **Accions** (Object{acction: description(string)... })




## Future Skills

- Share and import Campain
- share and import characters
- Generate Maps
- Tv app to see the maps
- Generate Charactes and Campain images with IA like bing Image generator or midjourney (premium)
- Generate Background and descriptins with ChatGpt (premium) 
- Nornative search engine