# Dnd master complement


DnD Master Tools is an aplication that will give you all the necessary tools to create you own campaigng and have all the necessary informatión when you are playing. With this app you will do your sesion more dinamic and adaptable to the players' improvisations.


![](https://media.giphy.com/media/l2QE7HxEjbju1aUIU/giphy.gif?cid=ecf05e47fyli5k5zdxucyrr4jku7rug7o1jowl987iqdy76r&ep=v1_gifs_search&rid=giphy.gif&ct=g)

[Functional](#funtional)
- [Dnd master complement](#dnd-master-complement)
  - [How to Use](#how-to-use)
  - [Skills](#skills)
  - [UI desing](#ui-desing)
  - [Funtional](#funtional)
    - [Use Cases](#use-cases)
      - [Master](#master)
        - [v0.1](#v01)
      - [Player | Master](#player--master)
    - [Data Model](#data-model)
      - [User](#user)
      - [Campaign](#campaign)
      - [Location](#location)
      - [Missions](#missions)
        - [Task](#task)
        - [v0.1](#v01-1)
      - [Character](#character)
        - [Sense](#sense)
        - [HitPoint](#hitpoint)
        - [DeathSaves](#deathsaves)
        - [Money](#money)
        - [Skils](#skils)
      - [Npc](#npc)
  - [Coverage](#coverage)
  - [Roadmap](#roadmap)

## How to Use

## Skills

- Generate campaigns for Dnd games
- Generate DnD charactes.
- Have all the info from the status of the game ass mision and objectives
- Fast acces to the characters,npc or enemys skills.


## UI desing
[figma](https://www.figma.com/design/PdC19KGjf6emxNUYK9wrIS/Master-Tools?node-id=0-1&t=f2Rn5kymmVgPLI9p-1)


## Funtional

### Use Cases

#### Master

- Create  campaign
  
  - add character
  - add objective
  - add background
  - add Startlocation
    - add Npc
    - add enemy
    - add object
    - add description
    - add next locations
  - add mission
    - add background
    - add objective
    - add Task
  

- Delete campaign

 - View Campaigns
  
    - View Campaign
    - View Character details
    - view Npcs
    - View Npc details
    - view Enemies
    - View Enemy details
    - View location details
    - View missions List
    - view Notes list
    - view next locations
    


##### v0.1

- Edit campaign
  - edit character
  - edit objective
  - edit background
  - edit location
    - edit Npc
    - edit enemy
  - edit mission
    - edit background

#### Player | Master
- Create character
- Edit  character
- Delete  character
- View characters



---

### Data Model

#### User
- id(String, auto)
- name (string, required).
- surname (string, required).
- email (etring, required).
- password (string, required).
- role (string , required, enum: Master , Player)

#### Campaign

- id (String,auto)
- author(User.id)
- title (string, required)
- background( string, required)
- characters([Charater.id], required)
- objective(string, required)
- location(Location.id, required)

#### Location
- id (String, auto)
- author(User.id)
- npcs ([Npc.id], required)
- enemies([string(Dnd.index)], required)
- objects([string(Dnd.index)],required)
- description(String, required)
- misions([Mission.id],required)
- nextLocations([Location.id],required)

#### Missions

- id(String,auto)
- author(User.id)
- name(string, required)
- mainUbication (Location.id, required)
- minRecomendedLevel (nunmber, required)
- background (string, required)
- objective (string, required)
- checkList([Task])
  
  ##### Task
  - id(string,auto)
  - description(string, required)
  - status(boolean, required)

##### v0.1
- map (img)

#### Character

- id (String)
- author(User.Id)
- image (img) 
- sice(number) 
- name (string, required) 
- race ( string, required, enum: Dragonborn | Dwarf | Elf | Gnome | Half-Elf | Half-Orc | Halfling | Human | Tiefling )
- class (string, required, enum: Barbarian | Bard | Cleric | Druid | Fighter | Sorcerer | Wizard | Monk | Paladin | Rogue | Ranger | Warlock). 
- level( number, required, default :0) 
- background ( string, required, enum: Acolyte | Charlatan | Criminal | Entertainer | Folk Hero | Guild Artisan | Hermit | Noble | Outlander | Sage | Sailor | Soldier | Urchin) 
- aligment (string, required, enum: Lawful Good | Neutral Good | Chaotic Good | Lawful Neutral | True Neutral | Chaotic Neutral | Lawful Evil | Neutral Evil | Chaotic Evil) 
- expiriencePoints (number, required, default: 0) 
- inspiration (boolean, required, default: false) 
- proficiencyBonus( number, required) 

- armorClass (object{ base: number , variable:(number)}, required ) 
- initiative (number, required) 
- speed (number, required) 

- strength ({Score(number, required), modifier(number, required)}) 
- dexterity ({Score(number, required), modifier(number, required)}) 
- constitution ({Score(number, required), modifier(number, required)}) 
- inteligence ({Score(number, required), modifier(number, required)}) 
- wisdom ({Score(number, required), modifier(number, required)}) 
- charisma ({Score(number, required), modifier(number, required)}) 
- skills(Skills, required) // NO SE COMO rellenarlo
- sense (Sense)
- equipment ( objects Array, Required) 
- weapons ( array , required) 
- attacks&spellcasting (object Array, Required)
- money (Money) 
- personalityTraits ( string, required)  
- ideals (string, required) 
- bonds (String , requires) 
- flaws (string, required) 
- hitPoint (HitPoint)
- deathSaves (DeathSaves)
- featuresAndTraits (string, required)
- otherProeficiencesAndLanguages (array, required)

##### Sense
  - sense (String, required)
  - description(String, required)

##### HitPoint
  - maxHitPoints(number, required)
  - currentHitPoint(number, required)
  - dice (string)

##### DeathSaves
- deathSavesSucceses (number, requires enum: 0| 1| 2| 3) 
- deathSavesFailures (number, requires enum: 0| 1| 2| 3)

##### Money
- [{coin:(string), quantity:(number)}]

##### Skils
- acrobatics: number
- animalHandling: number
- arcana: number
- athletics: number
- deception: number
- history: number
- insight: number
- intimidation: number
- investigation: number
- medicine: number
- nature: number
- perception: number
- performance: number
- persuasion: number
- religion: number
- sleigthOfHand: number
- stealth: number
- survival: number


#### Npc

- id (String)
- author(User.Id)
- image (img) 
- description(String, required)
- sice(number) 
- name (string, required) 
- race ( string, required, enum: Dragonborn | Dwarf | Elf | Gnome | Half-Elf | Half-Orc | Halfling | Human | Tiefling )
- aligment (string, required, enum: Lawful Good | Neutral Good | Chaotic Good | Lawful Neutral | True Neutral | Chaotic Neutral | Lawful Evil | Neutral Evil | Chaotic Evil) 
- armorClass (object{ base: number , variable:(number)}, required ) 
- speed (number, required) 
- strength ({Score(number, required), modifier(number, required)}) 
- dexterity ({Score(number, required), modifier(number, required)}) 
- constitution ({Score(number, required), modifier(number, required)}) 
- inteligence ({Score(number, required), modifier(number, required)}) 
- wisdom ({Score(number, required), modifier(number, required)}) 
- charisma ({Score(number, required), modifier(number, required)})
- skills  (Array [object{name skill(string, required),enum:Acrobatics | Animal Handling | Arcana | Athletics | Deception | History | Insight | Intimidation | Investigation | Medicine | Nature | Perception | Performance | Persuasion | Religion | Sleight of Hand | Stealth | Survival =>  variable}])
- sense (Sense)

## Coverage
![Coverage](Coverage%20Screenshot.png)

## Roadmap

- Share and import campaign
- share and import characters
- Generate Maps
- Tv app to see the maps
- Generate Charactes and campaign images with IA like bing Image generator or midjourney (premium)
- Generate Background and descriptins with ChatGpt (premium) 
- Nornative search engine