function CharacterResume({ name, race, level, characterClass }) {
    return (
      <div className="grid grid-cols-4 gap-4 border-b-2 border-black/20 px-2">
        <h4 className="text-black text-center">{name}</h4>
        <p className="text-black text-center">{race}</p>
        <p className="text-black text-center">{characterClass}</p>
        <p className="text-black text-center">{level}</p>
      </div>
    );
  }
  
  export default CharacterResume;