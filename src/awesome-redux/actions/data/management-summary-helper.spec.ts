import {formattedSummaryResponse} from './management-summary-helper';

const mockResponse: ManagementResponse = {
  data: {
    properties: [
      {
        leaseSummary: 'Ending 09 Dec 2021',
        leases: [
          {
            id: '5fc9e88a826ebb36019a04d3',
            inspectionSummary: 'Last inspected 11 Mar 2021',
          },
        ],
      },
    ],
  },
};

describe('convert the response which coming from summary api to a visualizable format', () => {
  it('format the server date correctly', () => {
    expect(formattedSummaryResponse(mockResponse)).toEqual({
      leaseSummary: 'Ending 09 Dec 2021',
      inspectionSummary: 'Last inspected 11 Mar 2021',
    });
  });
});
