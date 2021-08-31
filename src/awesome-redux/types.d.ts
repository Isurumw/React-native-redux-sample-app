declare type ApplicationDocument = {
  files: string[];
  category: {
    code: string;
    name: string;
  };
  type: {
    name: string;
  };
  createdAt: string;
};

declare type Summary = {
  leaseSummary: string;
  inspectionSummary?: string;
};

declare type ManagementResponse = {
  data: {
    properties: [
      {
        leaseSummary: string;
        leases: [
          {
            id: string;
            inspectionSummary: string;
          },
        ];
      },
    ];
  };
};
