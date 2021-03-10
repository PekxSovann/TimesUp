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

export const usePlayers = (): PlayerHooks => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
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
