import React from 'react';
import { FlatList } from 'react-native';

import Text from 'components/Text';

import { ElementType, SizeType, Player } from 'types';

import Cross from 'assets/Cross.svg';

import theme from 'static/theme';

import {
  ListItem,
  RemoveButton
} from './HomeStyle';

export interface ListPlayerProps {
  list: Player[];
  deleteItem: (index: number) => void;
  load: React.Dispatch<React.SetStateAction<boolean>>
}

const ListPlayer = (props: ListPlayerProps): JSX.Element => {
  const { list, deleteItem, load } = props;

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.name}
      renderItem={({ item, index }): JSX.Element => (
        <ListItem>
          <Text
            style={{ marginLeft: 10 }}
            font={ElementType.BOLD}
            size={SizeType.BIG}
            color={theme.black}
          >
            {`${index + 1}. ${item.name}`}
          </Text>

          <RemoveButton onPress={(): void => {
            deleteItem(index)
            load(true);
          }}>
            <Cross width={'100%'} height={'100%'}/>
          </RemoveButton>
        </ListItem>
      )}
    />
  );
};

export default ListPlayer;
