import requestOne from "../requestOne/index";

export const requestAll = (
  axiosConfigs: Parameters<typeof requestOne>[]
) => {
  return Promise.all(axiosConfigs.map((req) => requestOne(...req)));
};

export const unwrappedRequestAll = (
  ...axiosConfigs: Parameters<typeof requestAll>
) => {
  return requestAll(...axiosConfigs).then((allResponses) => {
    return allResponses.map((res) => res.data);
  });
};
