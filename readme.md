# npm-practice-request-many

## About the API

4 functions are exposed, they all take the same parameters as the [axios.get method](https://github.com/axios/axios).

These being in the form of `[string, AxiosConfig<any, any>]`

These 4 functions are

1. requestAll

   Returns a promise that is resolved if and only if all the requests are resolved, if It's an error It returns an Axios error.

   When resolved It returns an array of AxiosResponses

2. unwrappedRequestAll

    Uses requestAll but takes the data from requests alone

3. requestAny

    Returns a promise that is resolved when all the promises are settled, they could be rejected or resolved but they don't throw an error

4. unwrappedRequestAny

    Uses requestAny to fetch data, culls the rejected promises and extracts the data from the resolved ones
    

## Dependencies used in the library

### Axios

This library is used because It's a simpler and more complete version of the native fetch API given by the browsers, and It also covers the lack of fetch APIs in NodeJS enviroments.

### Observations

1. In hindsight, the "unwrapped" versions could be functions that act over the "non-unwrapped" versions return values. 