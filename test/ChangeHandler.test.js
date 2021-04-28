const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function () {
  test("class is defined", function () {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...
  test("starts at 0 if no params", function () {
    const vendingMachine = new ChangeHandler();
    expect(vendingMachine.amountDue).toBe(0);
  });

  //increases cash tendered by 25 for quarter
  test("increases cash tendered by 25", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.cashTendered).toBe(25);
  });
  //increases cash tendered by 10 for dime
  test("increases cash tendered by 10", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(10);
  });
  //increases cash tendered by 5 for nickel
  test("increases cash tendered by 5", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("nickel");
    expect(vendingMachine.cashTendered).toBe(5);
  });
  //increases cash tendered by 1 for penny
  test("increases cash tendered by 1", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(1);
  });
  // adds coins together
  test("increases cash tendered by 2", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(2);
  });

  test("increases cash tendered by 35", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(35);
  });
  test("increases cash tendered by 16", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(16);
  });
  test("increases cash tendered by 41", function () {
    const vendingMachine = new ChangeHandler();
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.cashTendered).toBe(41);
  });
  // boolean test. is cash tendered more or less than amount due
  test("amount paid is more than due", function () {
    const vendingMachine = new ChangeHandler(10);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient).toBeTruthy();
  });
  test("return false", function () {
    const vendingMachine = new ChangeHandler(100);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient).toBeTruthy();
  });
  test("is equal", function () {
    const vendingMachine = new ChangeHandler(25);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient).toBeTruthy();
  });
});
