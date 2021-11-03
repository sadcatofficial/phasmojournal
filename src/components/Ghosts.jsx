import React, { useState, useContext, useEffect } from "react";
import "../css/Ghosts.scss";
import EvidenceContext from "../context";
import ChosenIdContext from "../ChosenIdContext";

const Ghosts = () => {
  let evidenceImages = [
    { id: 1, path: "/dotss.png" },
    { id: 2, path: "/emp.png" },
    { id: 3, path: "/fingerprints.png" },
    { id: 4, path: "/temperature.png" },
    { id: 5, path: "/ghostorb.png" },
    { id: 6, path: "/ghostwriting.png" },
    { id: 7, path: "/spiritbox.png" },
  ];
  let { evidences, changeEvidences } = useContext(EvidenceContext);
  let { chosenId, changeChosenId } = useContext(ChosenIdContext);

  let [confirmedEvidences, setCEvidences] = useState([]);
  let [declinedEvidences, setDEvidences] = useState([]);

  useEffect(() => {
    setCEvidences(
      evidences
        .filter((element) => element.state === 1)
        .map((element) => element.id)
    );
    setDEvidences(
      evidences
        .filter((element) => element.state === 2)
        .map((element) => element.id)
    );
  }, [evidences]);

  function contains(where, what) {
    for (var i = 0; i < what.length; i++) {
      if (where.indexOf(what[i]) === -1) return false;
    }
    return true;
  }

  function isIn(where, what) {
    for (var i = 0; i < what.length; i++) {
      if (where.indexOf(what[i]) !== -1) return true;
    }
    return false;
  }

  useEffect(() => {
    changeGhosts(
      ghosts.map((element) => {
        if (!contains(element.evidences, confirmedEvidences))
          return { ...element, className: "ghost declined" };
        else if (
          isIn(element.evidences, declinedEvidences) &&
          declinedEvidences.length != 0
        )
          return { ...element, className: "ghost declined" };
        else return { ...element, className: "ghost" };
      })
    );
  }, [confirmedEvidences, declinedEvidences]);

  let [ghosts, changeGhosts] = useState([
    {
      id: 1,
      evidences: [1, 3, 5],
      name: "Banshee",
      className: "ghost",
      behavior: `Unlike other ghosts, who will often change their selected target between and during Hunts, Banshees will always target the same player every time it hunts until it successfully kills them. It will ignore other players and only pay attention to its target. However, if the target is outside the building, it can hunt like any other ghost and kill whoever it sees.

      When a Banshee uses its ghost ability, it will navigate to a location near its target and attempt to start a Hunt, regardless of average Sanity. For 20 seconds, if it sees its chosen target for long enough, it will initiate a hunt, otherwise it will return to the room it spawned in. It is unclear if these 20 seconds pass while the Banshee is navigating to the location near its target, or if it only starts when it has reached the location.[1][verify] As such, a Banshee may wander far from its ghost room when attempting to hunt its target. Banshees will also initiate hunts like most other ghosts if the average sanity is less than 50%, but can also use its ability under this condition.
      
      Although the Banshee's ability theoretically allows it to hunt at any time, in practice, the successful use of this ability is very rare.
      
      If a Banshee hunts with its target inside the building, the Banshee will mostly follow standard hunt rules, but it will ignore all players other than its target. It will not attempt to chase other players and will not kill them, even if they come into contact with the players. The Banshee will still react to Smudge Sticks lit by other players, but this will not allow for completion of the "Repel a ghost while it is chasing someone" optional Objective, unless the Banshee is also chasing the target.
      
      If a Banshee begins a Hunt while its target is outside the building, the Banshee will act according to standard hunt rules with respect to all players, and will kill any player it catches.
      
      The Banshee selects a new target when their previous one dies or leaves the game, choosing the first non-dead player in the list.[verify]
      
      A crucifix has an effective range of 5 meters instead of 3 meters against a Banshee; a Hunt will fail to start if the Banshee is within this radius and the Crucifix has not been completely used up. The Crucifix has no other special effect on the Banshee.`,
    },

    {
      id: 2,
      evidences: [3, 4, 6],
      name: "Demon",
      className: "ghost",
      behavior: `A Demon can begin a Hunt when the average sanity is below 70% instead of the usual 50% threshold, making the first hunt begin much earlier on average in the game.

      Although a Demon may initiate a hunt from 70% and lower, if adjusted for the hunt sanity threshold, there is no evidence to suggest that Demons hunt more often than most other ghosts on average. For example, a Demon will on average have the same chance of hunting if the average team sanity is 60%, versus the chance that a Spirit will hunt with an average team sanity of 40%. In fact, below an average team sanity of 25%, there is no difference in the average hunting rate between Demons and most other ghosts. This does not mean that investigation and completion of objectives is not more challenging, however, as there will be less time to collect evidence and perform such objectives before the first hunt starts.
      
      If a Demon answers a question asked towards an Ouija Board, the player who asked the question will have a sanity drop of 40% instead of the usual 50%. An unsuccessful question will drop their sanity by 10%, like all other ghosts.`,
    },
    {
      id: 3,
      name: "Goryo",
      evidences: [1, 2, 3],
      className: "ghost",
      behavior: `When a Goryo interacts with a D.O.T.S. Projector, its sillhouette will only be visibile viewed through a Video Camera, and usually when no people are in the room. Their sillhouette will not be visible using the naked eye. A Goryo will still manifest normally during ghost events and Hunts with its ghost model, which does not require any special equipment to be seen.

      A Goryo is less likely to roam when they are not hunting.`,
    },
    {
      id: 4,
      name: "Hantu",
      evidences: [3, 4, 5],
      className: "ghost",
      behavior: `During a Hunt, a Hantu's speed is affected by the temperature of the rooms that it goes through. They moved at about 1.8 m/s in cold rooms and about 1 m/s in warm rooms. This means that the Hantu is highly dependent on the map's breaker state, as the presence of power keeps the investigation area warm and thus slows the Hantu down.`,
    },
    {
      id: 5,
      name: "Jinn",
      evidences: [2, 3, 4],
      className: "ghost",
      behavior: `During a Hunt, when a Jinn enters the "chasing" mode by spotting a player, it will travel to them at a higher speed of 2 m/s,[verify] until they are close to the player.[verify] They will then pursue the player at the standard ghost speed.

      A Jinn has another ability, that when used, will lower the sanity of all players within a certain range by 25%.
      
      For the Jinn to be able to use its abilities, the fuse box must be turned on. If the fuse box is not turned on, it cannot use either ability. Whether there are lights turned on does not affect this.
      
      There is a popular myth claiming the Jinn will interact with electronics often rather than other interactions, this is not true. A Jinn has an equal chance of interacting with anything nearby.`,
    },
    {
      id: 6,
      name: "Mare",
      evidences: [5, 6, 7],
      className: "ghost",
      behavior: `A Mare has a modified sanity hunt threshold depending on whether the room it is currently in is lit. If the room lights are turned off, the hunt sanity threshold is increased 60%, and if the lights are turned on, the hunt sanity threshold is decreased to 40%. Other sources of light, such as brought-in equipment and onsite candles, do not affect this threshold. Mares cannot turn on lights`,
    },
    {
      id: 7,
      name: "Myling",
      evidences: [2, 3, 6],
      className: "ghost",
      behavior: `When not hunting, a Myling will make paranormal sounds more often than other ghosts. These can be heard through a Parabolic Microphone.

      When hunting, a Myling's footstep sounds will only be audible to players within 10 meters, similar to the distance required for electronic interference. Other hunting sounds (laugh, sing, wheeze, etc.) will remain audible at the same distance as other ghosts.`,
    },
    {
      id: 8,
      name: "Obake",
      evidences: [2, 3, 5],
      className: "ghost",
      behavior: `On non-Nightmare Difficulties, he Obake has a reduced chance (~40/50%) of creating Fingerprints when doing interactions that could create them, such as opening doors, knocking on windows, and flicking light switches. When it does leave Fingerprints, there is a chance that the handprint will have 6 fingers instead of the usual 5. This can be used to accurately identify the Ghost as an Obake.

      When a fingerprint is imprinted, there is also a separate chance for it to disappear in 1 minute, instead of the usual 2 minutes.
      
      Obake will not morph into a player model, nor do they have a unique ghost model that they can morph into, nor does it change models between manifestations and Hunts. You cannot tell whether it is an Obake just by looking at its ghost model.`,
    },
    {
      id: 9,
      name: "Oni",
      evidences: [1, 2, 4],
      className: "ghost",
      behavior: `When there are more people in the same room as an Oni, it will become more active, on average creating more Ghost Activity and Ghost Events.

      When interacting with objects, an Oni has a chance of throwing it with more force, making it land further away. Unlike Poltergeists, they cannot throw multiple items at once, nor does interacting with items reduce the players' sanity.`,
    },
    {
      id: 10,
      name: "Onryo",
      evidences: [4, 5, 7],
      className: "ghost",
      behavior: `When a flame is extinguished near[verify] an Onryo, whether by itself or blown out by the ghost, there is a chance[verify] for the Onryo to begin an Hunt, regardless of average sanity. In multiplayer, this chance to hunt increases each time it successfully kills a player during a Hunt, with it having a near-guaranteed chance after killing two players.

      In addition to this, the Onryo is an early hunter even when there are no flames to be extinguished. Similar to the Yokai, whose hunt sanity threshold is raised to 80% while players are talking near it, the Onryo's hunt threshold is higher[verify] than the default 50% of other ghosts while there are no sources of fire nearby. When this is negated by a lit Candle, Lighter, or Campfire, its threshold is the normal 50%.[1] However, having a lit flame for this purpose also risks triggering an early hunt if the flame goes out.
      
      The Onryo also has a higher chance to blow out a flame than other ghosts, further complicating the task of countering one.
      
      Contrary to the Journal quote, the Onryo does not attempt to escape from lit candles, nor does an open flame reduce the Onryo's normal hunt chance.`,
    },
    {
      id: 11,
      name: "Phantom",
      evidences: [1, 3, 7],
      className: "ghost",
      behavior: `When a Phantom uses its power, it will navigate to a random player's location, creating an Interaction EMF at its starting location.

      If a photo is a taken of a Phantom, it will disappear temporarily for a certain amount of time. This will not affect its ability to cause a Ghost Event or hunt, and will not stop an ongoing hunt.
      
      Looking at a Phantom will reduce your sanity by 0.4% each second, as opposed to 0.2% for other Ghosts.
      
      During a hunt, a Phantom will flash visible every 1 to 2 seconds, as opposed to every 0.3 to 1 second for other Ghosts, making it harder to take a photo of.`,
    },
    {
      id: 12,
      name: "Poltergeist",
      evidences: [3, 6, 7],
      className: "ghost",
      behavior: `When a Poltergeist interacts with the environment, it has a chance of throwing multiple items at once. If a player is nearby, it will decrease their sanity by an amount equal to the number of items thrown multiplied by 2. This will also create an EMF Level 3.

      If there are no items near a Poltergeist, it is unable to use its ability. This, however, will not prevent a Hunt.`,
    },
    {
      id: 13,
      name: "Raiju",
      evidences: [1, 2, 5],
      className: "ghost",
      behavior: `While hunting, if a Raiju is near any type of electronic equipment that is turned on, the Raiju will have an increased movement speed, rivaling (though not matching) the speed of a Revenant. This applies to both items held in the hand and items dropped on the floor. Head Mounted Cameras, Motion Sensors and Sound Sensors are not included.

      When nearby activated electronic equipment, the Raiju may be able to initiate an early Hunt, similar to a Yokai with talking. The Raiju can hunt between 60-70% insanity as long as there are electronics around it.
      
      There is also a sure way to know whether the Ghost is a Raiju by looking at its model during Hunts. If a Raiju gets its electrical "boost", its model will become translucent.`,
    },
    {
      id: 14,
      name: "Revenant",
      evidences: [4, 5, 6],
      className: "ghost",
      behavior: `When a Revenant it hunting, it will have one of two speeds. If it is not chasing a player, it will roam at 0.5 times the speed of most other ghosts. If it is actively chasing a player, it will do so at 2 times the speed of most other ghosts`,
    },
    {
      id: 15,
      name: "Shade",
      evidences: [2, 4, 6],
      className: "ghost",
      behavior: `When at least two players are in the same room as a Shade, less Ghost Activity and Ghost Events will occur on average. The chance of it hunting when sanity is low enough will also decrease. This does not mean the Shade cannot hunt, however, as it can initiate a hunt in another room where players are not grouped together.`,
    },
    {
      id: 16,
      name: "Spirit",
      evidences: [2, 6, 7],
      className: "ghost",
      behavior: `When a Smudge Stick is used near a Spirit, it cannot initiate a hunt for 180 seconds instead of 90 seconds with most other ghosts.

      Spirits have no other special behaviour.`,
    },
    {
      id: 17,
      name: "The Twins",
      evidences: [2, 4, 7],
      className: "ghost",
      behavior: `When The Twins are not hunting, they can move separately and interact with the environment on their own, or at the same time. There is one "main" Twin, which primarily remains within the Ghost Room. This Twin creates Freezing Temperatures and can respond to Spirit Box prompts. The other Twin wanders around the map, interacting with the environment. This wandering Twin cannot set off motion sensors, and cannot respond to the Spirit Box nor spread Freezing Temperatures, but its interactions may give off EMF Level 5.

      When the ghost attempts to initiate a Hunt, there is a 50% chance for it to begin at the "main" Twin, and a 50% chance for it to begin at the Twin that last interacted with the environment. When this happens, the Twin which initiated the Hunt will follow standard hunting rules like most other ghost types. Both Twins cannot Hunt at the same time, and will follow the standard grace period between Hunts.`,
    },
    {
      id: 18,
      name: "Wraith",
      evidences: [1, 2, 7],
      className: "ghost",
      behavior: `When the Wraith is not hunting, it has a chance to teleport within 3 meters of a random player, generating an EMF Level 2 reading, with a 25% chance for this to be an EMF Level 5 reading instead. Wraiths cannot teleport during Hunts, but can teleport just before initiating one.

      When a Wraith steps in a salt pile, indicated by the presence of an imprint, it will never leave any Footprints, the only ghost to have this ability. Shining a UV light around the area where the ghost made footstep noises will not reveal any green footprints. It will also temporarily have an increased amount of Ghost Activity.`,
    },
    {
      id: 19,
      name: "Yokai",
      evidences: [1, 5, 7],
      className: "ghost",
      behavior: `The abilities of a Yokai are focused on the presence of players' voices near it. The Yokai's hunt sanity threshold is increased to 80% while players are talking within a certain range of it, otherwise, it has the normal threshold of 50%.

      During hunts, a Yokai can only hear voices that are within 2 meters of it.`,
    },
    {
      id: 20,
      name: "Yurei",
      evidences: [1, 4, 5],
      className: "ghost",
      behavior: `During a Ghost Event, if the player is near a Yurei, their sanity will drop by 0.4% per second compared to 0.2% per second with most other ghosts, similar to the Phantom. This also applies if the player is within 10 meters of a Yurei during a hunt.

      The Yurei does not have any special effect on players' sanity outside of these events. The player's sanity will not drop quicker in the dark.
      
      When Smudge Sticks are used on the Yurei, it will roam less on average for 90 seconds.`,
    },
  ]);

  let choose = (e) => {
    changeChosenId(e.target.id - 1);
    // changeGhosts(
    //   ghosts.map((element, index) => {
    //     if (index == e.target.id - 1)
    //       return { ...element, className: "ghost chosen" };
    //     else return { ...element, className: "ghost" };
    //   })
    // );
  };
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  return (
    <div className="ghosts-box">
      <div className="ghosts-list">
        <div className="list-row">
          {ghosts.map((element, index) => {
            if (between(index, 0, 4)) {
              return (
                <div
                  className={element.className}
                  id={element.id}
                  onClick={choose}
                >
                  <span id={element.id}> {element.name} </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="list-row">
          {ghosts.map((element, index) => {
            if (between(index, 5, 9)) {
              return (
                <div
                  className={element.className}
                  id={element.id}
                  onClick={choose}
                >
                  <span id={element.id}> {element.name} </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="list-row">
          {" "}
          {ghosts.map((element, index) => {
            if (between(index, 10, 14)) {
              return (
                <div
                  className={element.className}
                  id={element.id}
                  onClick={choose}
                >
                  <span id={element.id}> {element.name} </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="list-row">
          {" "}
          {ghosts.map((element, index) => {
            if (between(index, 15, 19)) {
              return (
                <div
                  className={element.className}
                  id={element.id}
                  onClick={choose}
                >
                  <span id={element.id}> {element.name} </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="ghost-evidence">
        {ghosts[chosenId].evidences.map((evidenceNumber) => (
          <img src={evidenceImages[evidenceNumber-1].path} alt="" />
        ))}
      </div>

      <div className="ghost-behavior">
        {" "}
        <h2>Ghost Behavior</h2>
        <p>
          <h3>{ghosts[chosenId].name}</h3>
          {ghosts[chosenId].behavior}
        </p>
      </div>
    </div>
  );
};

export default Ghosts;
