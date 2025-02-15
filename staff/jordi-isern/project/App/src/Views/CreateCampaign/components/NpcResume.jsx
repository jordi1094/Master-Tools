function NpcResume({ name, race,aligment }) {
    return (
      <div className="grid grid-cols-3 gap-4 border-b-2 border-black/20 px-2">
        <h4 className="text-black text-center">{name}</h4>
        <p className="text-black text-center">{race}</p>
        <p className="text-black text-center">{aligment}</p>
      </div>
    );
  }
  
  export default NpcResume;