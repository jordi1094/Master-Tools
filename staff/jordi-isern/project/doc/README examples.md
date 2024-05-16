# Cool Steps

An app for renting and lending ladders.

![](https://media.giphy.com/media/ULhdQEF9etfji/giphy.gif?cid=790b761118teuaz0ojtj0vsytuoevmgff91t460gpic3jk80&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Funtional

### Use Cases

User | Admin | Root
- publish a ladder (for lending or selling)
- search ladders(with filter)
- rent ladder
- buy a ladder
- chat with lader owner 
- report a ladder owner
- see owner reviews(by rating)
- see ladder reviews


Admin | Root
- list latest reportings (from users)
- view a report
- reply to a report
- deactivate a user
- ...

Root
- list admins
- view admin user
- deactivate admin user
- register new admin user
- ...

### UI Desing
 [Figma]( url project)

## Techincal

### Data Model

User
- id(auto)
- name (string, required)
- surname(string, required)
- email(string, required)
- password(string, required)
- role(string , required, default regular, enum:  regula| admin | root)

Ladder
- id (auto)
- owner(User.id, required)
- title (string, required)
- description (sstring , required)
- type (string, required, default plain, enum: plain|angular| extensible...|other)
- height (number, required)
- wiegth (number, required)
- maxLoad (number, required)
- age(number, required)
- material (string, required, enum: wood | aliminium | ...| other)
- brand (string)
- model (string)
- price(number, required)
- king (string, required, enum: renting| sale )
- address (string , required)


Deal 
- id(auto)
- provider (User.id , required)
- customer(User.id, required)
- ladder (Ladder.id, required)
- type(string, required , enum: renting| sale)
- date(date, required)
- price(number , required) 
- fromDate (date, required)
- toDate (date, required)
