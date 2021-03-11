import { useState, createContext } from 'react';

import { Player } from 'types';

export interface PlayerHooks {
  playerList: Player[];
  addPlayer: (newPlayer: Player) => void;
  deletePlayer: (index: number) => void;
}

const PlayersContext = createContext<PlayerHooks>({
  playerList: [],
  addPlayer: (newPlayer: Player) => {},
  deletePlayer: (index: number) => {}
});


const TEMP = [
  {
    name: "toto",
    points: 0,
  },
  {
    name: "titi",
    points: 0,
  },
  {
    name: "tata",
    points: 0,
  },
  {
    name: "tutu",
    points: 0,
  },
  {
    name: "tyty",
    points: 0,
  },
  {
    name: "popo",
    points: 0,
  },
  {
    name: "papa",
    points: 0,
  },
];

export const usePlayers = (): PlayerHooks => {
  const [playerList, setPlayerList] = useState<Player[]>(TEMP);
  const addPlayer = (newPlayer: Player): void => {
    const tmp = playerList;
    tmp.push(newPlayer);
    setPlayerList(tmp);
  };

  const deletePlayer = (index: number): void => {
    const tmp = playerList;
    tmp.splice(index, 1);
    setPlayerList(tmp);
  };

  return { playerList, addPlayer, deletePlayer };
}

export default PlayersContext;
