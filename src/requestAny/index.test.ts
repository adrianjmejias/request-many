import { requestAny, unwrappedRequestAny } from "./index";

describe("requestAny", () => {
  test("should not break if a request fails", async () => {
    await expect(
      requestAny([
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
        ],
        [""],
        [
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
        ],
      ])
    ).resolves.toBeDefined();
  });
});

describe("unwrappedRequestAny", () => {
  test("It should unwrap the data in the requests", async () => {
    const dataRes = await unwrappedRequestAny([
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"],
      [""],
    ]);

    expect(dataRes[0].data).toBeDefined();
  });

  test("It should cull the rejected requests", async () => {
    const dataRes = await unwrappedRequestAny([
      ["https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"],
      [""],
    ]);

    expect(dataRes.length).toBe(1);
  });
});
