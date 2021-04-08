import { useState, createContext } from 'react';

import { Player } from 'types';

export interface PlayerHooks {
  playerList: Player[];
  addPlayer: (newPlayer: Player) => void;
  deletePlayer: (index: number) => void;
  resetPlayersPoint: () => void;
}

const PlayersContext = createContext<PlayerHooks>({
  playerList: [],
  addPlayer: (newPlayer: Player) => {},
  deletePlayer: (index: number) => {},
  resetPlayersPoint: () => {},
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

  const resetPlayersPoint = (): void => {
    for (let i = 0; i < playerList.length; i++)
      playerList[i].points = 0;
  }

  return { playerList, addPlayer, deletePlayer, resetPlayersPoint };
}

export default PlayersContext;
