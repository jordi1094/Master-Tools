# Dnd master complement


DnD Master Tools is an aplication that will give you all the necessary tools to create you own Campaing and have all the necessary informatión when you playing. With this app you will do your sesion more dinamic and adaptable to the players' improvisations.

![](https://media.giphy.com/media/3oEjHFzI1y4erDQ4kE/giphy.gif?cid=790b7611d8kr4at5b4kvqvrpkr8eq70hdd2uy6so6trzmnpe&ep=v1_gifs_search&rid=giphy.gif&ct=g)

[Functional](#funtional)
- [Dnd master complement](#dnd-master-complement)
  - [Funtional](#funtional)
    - [Use Cases](#use-cases)
    - [Data Model](#data-model)
      - [Master and Player](#master-and-player)
      - [Campain](#campain)
      - [Missions](#missions)
      - [Character](#character)
      - [Npc](#npc)


## Funtional

### Use Cases

Master

- Create a campain.
- Next steps in the campain.
- Easy accses to every character player or Npc.
- Information abou the actual ubication and possiblities of movement.
- List of the missions to do.
- Notes.

Player | Master
- Generate new characters

### Data Model

#### Master and Player
- Id(auto)
- Name (string, required).
- Surname (string, required).
- Email (etring, required).
- Password (string, required).
- role (string , required, enum: Master , Player)

#### Campain

- Id (auto)
- Title (string, required)
- Adventure, background( string, required)
- Nº of players. (number, required)
- Player Characters. (array, required)
- Npc Characters.(array, required)
- Objective.(string, required)
- World(array, required)
- Places


#### Missions

- id(auto)
- name(string, required)
- ubication (string, required)
- Min decomended Level (nunmber, required)
- Space description (string, required)
- Mision objective (string, required)
- Places (array, required)
- Npc Friendy List (array, required)
- Npc Enemy List (array, required)
- Events (array, required)
- Solutions(array, required)
- Map (img)

#### Character

- ID(auto)
- Portrait (img)
- Sice
- Name (string, required)
- Class (string, required, enum: Barbarian | Bard | Cleric | Druid | Fighter | Sorcerer | Wizard | Monk | Paladin | Rogue | Ranger | Warlock).
- Level( number, required, default :0)
- Background ( string, required, enum:Acolyte | Charlatan | Criminal | Entertainer | Folk Hero | Guild Artisan | Hermit | Noble | Outlander | Sage | Sailor | Soldier | Urchin)
- Player Name(String, required)
- Race ( string, required, enum: Dragonborn | Dwarf | Elf | Gnome | Half-Elf | Half-Orc | Halfling | Human | Tiefling )
- Aligment (string, required, enum: Lawful Good | Neutral Good | Chaotic Good | Lawful Neutral | True Neutral | Chaotic Neutral | Lawful Evil | Neutral Evil | Chaotic Evil)
- Expirience Points (number, required, default: 0)
- Inspiration(boolean, required, default: false)
- Proficiency Bonus( number, required)

- Strength (number, required)
- Dexterity (number, required)
- Constitution (number, required)
- Inteligence (number, required)
- Wisdom (number, required)
- Charisma (number, required)

- Equipment( objects Array, Required)
- Weapons( array , required)
- Attacks & spellcasting(object Array, Required)
- Money (object Array, required)
- Personality traits( string, required)
- Ideals( string, required)
- Bonds (String , requires)
- Flaws(string, required)
- Death saves succeses (number, requires enum: 0| 1| 2| 3) 
- Death saves Failures (number, requires enum: 0| 1| 2| 3) 
- Features and Traits (string, required)
- Other proeficiences and Languages(array, required)



#### Npc

- ID(auto)
- Name( string, required)
- Description (string , required)
- Race (string, required)
- Aligment (string, required)
- Armor Class
- Hit points
- Speed
- Strength
- Dexterity
- Constitution
- Initiative
- Wisdom
- Charisma
- Habilities (string)
