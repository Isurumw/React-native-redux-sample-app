import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ApplicationState} from 'awesome-redux/reducers';

import CustomRow from 'components/custom-row/custom-row';
import Separator from 'components/separator/separator';

import {formattedDate} from 'shared-services/helper-services/helper';
import styles from './documents.styles';

const DocumentsScreen: React.FC = () => {
  const {documents} = useSelector(
    (state: ApplicationState) => state.summaryReducer,
  );

  const renderDoc = ({
    item,
    index,
  }: {
    item: ApplicationDocument;
    index: number;
  }) => (
    <View key={index} style={styles.rowContainer}>
      <CustomRow
        title={item.type.name}
        subTitle={formattedDate(item.createdAt)}
      />
      <Separator />
    </View>
  );

  const trackItem = (item: ApplicationDocument, index: number) => {
    return `${index}-${item.category.code}`;
  };

  if (documents.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No documents are available...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={documents}
        renderItem={renderDoc}
        keyExtractor={trackItem}
      />
    </View>
  );
};

export default DocumentsScreen;
