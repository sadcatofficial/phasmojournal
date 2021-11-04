import React, { useContext } from "react";
import ChosenIdContext from "../ChosenIdContext";
import "../css/ExplicitEvidences.scss";
const ExplicitEvidences = () => {
  let { chosenId, changeChosenId } = useContext(ChosenIdContext);
  let explicitEvidences = [
    { id: 1, name: "Six-finger fingerprints", ghosts: [8], description: "" },
    {
      id: 2,
      name: "50-70% hunt",
      ghosts: [1, 2, 6, 10, 13, 19],
      description: "",
    },
    { id: 3, name: "No footstep after salt", ghosts: [18], description: "" },
    {
      id: 4,
      name: "One target",
      ghosts: [1],
      description:
        "target the same player every time it hunts until it successfully kills them",
    },
    { id: 5, name: ">70% hunt", ghosts: [1, 10, 19], description: "" },
    {
      id: 6,
      name: "Large crucifix effective range",
      ghosts: [1],
      description:
        "A crucifix has an effective range of 5 meters instead of 3 meters",
    },
    {
      id: 7,
      name: "Lower sanity drop after Ouija",
      ghosts: [2],
      description:
        "the player who asked the question will have a sanity drop of 40% instead of the usual 50%.",
    },
    {
      id: 8,
      name: "Only camera D.O.T.S",
      ghosts: [3],
      description:
        "Sillhouette will only be visibile viewed through a Video Camera",
    },
    {
      id: 9,
      name: "Fast speed in cold rooms",
      ghosts: [4],
      description: "about 1.8 m/s in cold rooms and about 1 m/s in warm rooms",
    },
    {
      id: 10,
      name: "Fast speed hunt",
      ghosts: [4, 5, 13, 14],
      description: "",
    },
    {
      id: 11,
      name: "Fast speed chasing mode",
      ghosts: [5],
      description:
        "travel to player at a higher speed of 2 m/s, until they are close to the player.",
    },
    {
      id: 12,
      name: "25% sanity drop",
      ghosts: [5],
      description:
        "will lower the sanity of all players within a certain range by 25%",
    },
    {
      id: 13,
      name: "Fuse box makes abilities available",
      ghosts: [5],
      description:
        "to be able to use its abilities, the fuse box must be turned on",
    },
    { id: 14, name: "Cannot turn on lights", ghosts: [6], description: "" },
    {
      id: 15,
      name: "Quiet hunt",
      ghosts: [7],
      description:
        "Myling's footstep sounds will only be audible to players within 10 meters",
    },
    {
      id: 16,
      name: "A lot of sound while not hunting",
      ghosts: [7],
      description: "",
    },
    {
      id: 17,
      name: "Puts the item back after the interaction",
      ghosts: [8],
      description:
        "Witnessing an item being moved momentarily by the Ghost before returning to its original position is a very strong indication of an Obake",
    },
    {
      id: 18,
      name: "A lot of Ghost ACtivity and Ghost Events",
      ghosts: [9],
      description:
        "Become more active when there are more people in the same room",
    },
    {
      id: 19,
      name: "Items land further away",
      ghosts: [9],
      description:
        "When interacting with objects, an Oni has a chance of throwing it with more force",
    },
    {
      id: 20,
      name: "Throw multiple items at once",
      ghosts: [12],
      description:
        "Poltergeists throw items with higher force than other ghosts. Unlike other ghosts, objects thrown by Poltergeists have the ability to decrease player sanity even if they were not looking at the objects being thrown.",
    },
    {
      id: 21,
      name: "Extinguishing a flame can cause a hunt.",
      ghosts: [10],
      description:
        "When a flame is extinguished near an Onryo, whether by itself or blown out by the ghost, there is a chance for the Onryo to begin an Hunt, regardless of average sanity. ",
    },
    {
      id: 22,
      name: "Slow blinking",
      ghosts: [11],
      description:
        "During a hunt, a Phantom will flash visible every 1 to 2 seconds",
    },
    {
      id: 23,
      name: "Rapid sanity fall ",
      ghosts: [5, 11, 12, 20],
      description: "",
    },
    {
      id: 24,
      name: "Disappears after photographing ",
      ghosts: [11],
      description:
        "If a photo is a taken of a Phantom, it will disappear temporarily for a certain amount of time.",
    },
    {
      id: 25,
      name: "Fast speed near working electronics ",
      ghosts: [13],
      description: "",
    },
    {
      id: 26,
      name: "Slow roam ",
      ghosts: [14],
      description:
        " If it is not chasing a player, it will roam at 0.5 times the speed of most other ghosts.",
    },
    {
      id: 27,
      name: "Low activity when there are a lot of people",
      ghosts: [15],
      description:
        "When at least two players are in the same room as a Shade, less Ghost Activity and Ghost Events will occur on average.",
    },
    {
      id: 28,
      name: "Effective smudge stick ",
      ghosts: [16],
      description:
        "When a Smudge Stick is used near a Spirit, it cannot initiate a hunt for 180 seconds instead of 90 seconds with most other ghosts.",
    },
    {
      id: 29,
      name: "Motion sensors are not responding ",
      ghosts: [17],
      description:
        "The wandering Twin cannot set off motion sensors, and cannot respond to the Spirit Box nor spread Freezing Temperatures, but its interactions may give off EMF Level 5.",
    },
    {
      id: 30,
      name: "Activity in different rooms",
      ghosts: [17],
      description: "",
    },
    {
      id: 31,
      name: "A lot of activity",
      ghosts: [5, 9, 12, 17],
      description: "",
    },
    {
      id: 32,
      name: "Teleport to player ",
      ghosts: [18],
      description:
        "When the Wraith is not hunting, it has a chance to teleport within 3 meters of a random player",
    },
    {
      id: 33,
      name: "Does not tolerate voice chat",
      ghosts: [19],
      description:
        "The Yokai's hunt sanity threshold is increased to 80% while players are talking within a certain range of it,",
    },
  ];

  return (
    <div className="explicit-evidences-box">
      {explicitEvidences.map((element) => {
        if (element.ghosts.indexOf(chosenId+1) !== -1)
        if(element.description != "")
        {
          return (
            <div className="explicit-evidence">
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
          );
      }
    else return (            <div className="explicit-evidence">
    <h3>{element.name}</h3>
  </div>

    ) } 
)}
    </div>
  );
};

export default ExplicitEvidences;
