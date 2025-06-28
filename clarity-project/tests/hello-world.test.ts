
import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

describe("hello-world contract tests", () => {
  it("ensures simnet is well initialised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("should have default greeting", () => {
    const { result } = simnet.callReadOnlyFn("hello-world", "get-greeting", [], deployer);
    expect(result).toBeAscii("Hello, World!");
  });

  it("should have initial greeting count of 0", () => {
    const { result } = simnet.callReadOnlyFn("hello-world", "get-greeting-count", [], deployer);
    expect(result).toBeUint(0);
  });

  it("should return contract owner", () => {
    const { result } = simnet.callReadOnlyFn("hello-world", "get-contract-owner", [], deployer);
    expect(result).toBePrincipal(deployer);
  });

  it("should allow saying hello", () => {
    const { result } = simnet.callPublicFn("hello-world", "say-hello", [Cl.stringAscii("Alice")], wallet1);
    expect(result).toBeOk(Cl.stringAscii("Hello, World! Alice"));
  });

  it("should increment greeting count after saying hello", () => {
    simnet.callPublicFn("hello-world", "say-hello", [Cl.stringAscii("Bob")], wallet1);
    const { result } = simnet.callReadOnlyFn("hello-world", "get-greeting-count", [], deployer);
    expect(result).toBeUint(1);
  });

  it("should track user greeting counts", () => {
    simnet.callPublicFn("hello-world", "say-hello", [Cl.stringAscii("Charlie")], wallet2);
    const { result } = simnet.callReadOnlyFn("hello-world", "get-user-greeting-count", [Cl.principal(wallet2)], deployer);
    expect(result).toBeUint(1);
  });

  it("should allow owner to set custom greeting", () => {
    const { result } = simnet.callPublicFn("hello-world", "set-greeting", [Cl.stringAscii("Greetings")], deployer);
    expect(result).toBeOk(Cl.bool(true));

    const { result: newGreeting } = simnet.callReadOnlyFn("hello-world", "get-greeting", [], deployer);
    expect(newGreeting).toBeAscii("Greetings");
  });

  it("should not allow non-owner to set greeting", () => {
    const { result } = simnet.callPublicFn("hello-world", "set-greeting", [Cl.stringAscii("Unauthorized")], wallet1);
    expect(result).toBeErr(Cl.uint(100)); // ERR_UNAUTHORIZED
  });

  it("should reject empty names", () => {
    const { result } = simnet.callPublicFn("hello-world", "say-hello", [Cl.stringAscii("")], wallet1);
    expect(result).toBeErr(Cl.uint(101)); // ERR_INVALID_NAME
  });

  it("should reject empty greeting", () => {
    const { result } = simnet.callPublicFn("hello-world", "set-greeting", [Cl.stringAscii("")], deployer);
    expect(result).toBeErr(Cl.uint(101)); // ERR_INVALID_NAME
  });
});
