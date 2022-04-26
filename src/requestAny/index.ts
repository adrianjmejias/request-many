import requestOne from "../requestOne/index";

export const requestAny = (axiosConfigs: Parameters<typeof requestOne>[]) => {
  const requests = axiosConfigs.map((req) => requestOne(...req));
  return Promise.allSettled(requests);
};

export const unwrappedRequestAny = (
  ...axiosConfigs: Parameters<typeof requestAny>
) => {
  return requestAny(...axiosConfigs)
    .then((allRequests) => {
      const unwrappedResponses: any[] = [];

      allRequests.forEach((request) => {
        if (request.status === "fulfilled") {
          unwrappedResponses.push(request.value.data);
        }
      });

      return unwrappedResponses;
    })
};
