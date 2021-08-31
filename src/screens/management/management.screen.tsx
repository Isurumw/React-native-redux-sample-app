import React from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ApplicationState} from 'awesome-redux/reducers';

import ManagementSummary from './component/management-summary/management-summary';

import styles from './management.styles';

const ManagementScreen: React.FC = () => {
  const {summary} = useSelector(
    (state: ApplicationState) => state.summaryReducer,
  );

  if (!summary?.leaseSummary && !summary?.inspectionSummary) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No summary is available...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ManagementSummary
        icon={require('assets/images/key.png')}
        containerStyle={styles.summaryItem}
        title="Key receipt"
        subTitle={summary?.leaseSummary}
      />
      {summary?.inspectionSummary && (
        <ManagementSummary
          icon={require('assets/images/search.png')}
          title="Electricity"
          subTitle={summary.inspectionSummary}
        />
      )}
    </View>
  );
};

export default ManagementScreen;
