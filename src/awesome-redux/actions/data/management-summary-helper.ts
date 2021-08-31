export const formattedSummaryResponse = (
  response: ManagementResponse,
): Summary => {
  return {
    leaseSummary: response.data.properties[0].leaseSummary,
    inspectionSummary:
      response.data.properties[0].leases.length > 0
        ? response.data.properties[0].leases[0].inspectionSummary
        : undefined,
  };
};
