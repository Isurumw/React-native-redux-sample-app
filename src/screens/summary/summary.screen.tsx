import React, {useEffect} from 'react';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';
import {onDocuments, onManagement} from 'awesome-redux/actions/summary.actions';

import DocumentsScreen from '../documents/documents.screen';
import ManagementScreen from '../management/management.screen';
import TabNavigator from 'navigation/tab-navigator/tab-navigator';

import style from './summary.styles';

const SummaryScreen: React.FC = () => {
  const dispatch = useDispatch();
  const tabs = [
    {screen: ManagementScreen, route: 'management'},
    {screen: DocumentsScreen, route: 'document'},
  ];

  useEffect(() => {
    dispatch(onDocuments('758'));
    dispatch(onManagement('758'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <TabNavigator tabs={tabs} />
    </View>
  );
};

export default SummaryScreen;
