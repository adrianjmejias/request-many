import { requestAll, unwrappedRequestAll } from "./index";

describe("requestAll", () => {
  test("It should work", async () => {
    const requestPromises = await requestAll([
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"],
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json"],
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json"],
    ]);

    await expect(requestPromises).toBeDefined();
  });

  test("It should fail if given an invalid url", async () => {
    try {
      const requestPromises = await requestAll([
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
        ],
        ["-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json"],
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
        ],
      ]);
    } catch (error) {
      await expect(error).toBeDefined();
    }
  });

  test("It should fail if given an empty url", async () => {
    try {
      const requestPromises = await requestAll([
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
        ],
        [""],
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
        ],
      ]);
    } catch (error) {
      await expect(error).toBeDefined();
    }
  });
});

describe("unwrappedRequestAll", () => {
  test("It should unwrap the data in the axios requests", async () => {
    const dataRes = await unwrappedRequestAll([
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"],
    ]);

    expect(dataRes[0].data).toBeDefined();
  });
});
