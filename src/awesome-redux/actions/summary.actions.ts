/* eslint-disable @typescript-eslint/no-unused-vars */
import {Dispatch} from 'react';

import {NetworkManager} from 'shared-services';
import {query_documents, query_summary} from './summary.queries';
import {formattedSummaryResponse} from './data/management-summary-helper';

import {default as documentResponse} from 'shared-services/mock-data/mock-document-response.json';
import {default as summaryResponse} from 'shared-services/mock-data/mock-summary-response.json';

interface ManagementAction {
  readonly type: 'ON_MANAGEMENT';
  payload: Summary;
}

interface ErrorActionManagement {
  readonly type: 'ON_ERROR_MANAGEMENT';
  payload: any;
}

interface DocumentAction {
  readonly type: 'ON_DOCUMENT';
  payload: ApplicationDocument[];
}

interface ErrorActionDocument {
  readonly type: 'ON_ERROR_DOCUMENT';
  payload: any;
}

export type SummaryAction =
  | DocumentAction
  | ManagementAction
  | ErrorActionDocument
  | ErrorActionManagement;

type DocumentResponse = {
  data: {
    properties: [
      {
        documents?: ApplicationDocument[];
      },
    ];
  };
};

export const onManagement = (propertyId: string, isMock: boolean = true) => {
  return async (dispatch: Dispatch<SummaryAction>) => {
    try {
      const response = isMock
        ? summaryResponse
        : await NetworkManager.request<ManagementResponse>(query_summary, {
            id: propertyId,
          });
      dispatch({
        type: 'ON_MANAGEMENT',
        payload: formattedSummaryResponse(response as ManagementResponse),
      });
    } catch (e) {
      dispatch({
        type: 'ON_ERROR_MANAGEMENT',
        payload: e,
      });
    }
  };
};

export const onDocuments = (propertyId: string, isMock: boolean = true) => {
  return async (dispatch: Dispatch<SummaryAction>) => {
    try {
      const response = isMock
        ? documentResponse
        : await NetworkManager.request<DocumentResponse>(query_documents, {
            id: propertyId,
          });
      dispatch({
        type: 'ON_DOCUMENT',
        payload: response.data.properties[0].documents ?? [],
      });
    } catch (e) {
      dispatch({
        type: 'ON_ERROR_DOCUMENT',
        payload: e,
      });
    }
  };
};

// export const updateState = (content: string) => {
//   return async (
//     dispatch: Dispatch<SummaryAction>,
//     getState: () => ApplicationState,
//   ) => {
//     const {error} = getState().summaryReducer;
//     dispatch({
//       type: 'ON_MANAGEMENT',
//       payload: content,
//     });
//   };
// };
