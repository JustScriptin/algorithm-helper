import { cn } from "@/lib/utils/cn";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

jest.mock("clsx");
jest.mock("tailwind-merge");

describe("cn", () => {
  beforeEach(() => {
    (clsx as jest.Mock).mockClear();
    (twMerge as jest.Mock).mockClear();
  });

  test("should merge classes correctly", () => {
    const inputClasses: string[] = [ "bg-red-500", "text-white" ];
    const expectedClassString = "bg-red-500 text-white";

    (clsx as jest.Mock).mockReturnValue(expectedClassString);
    (twMerge as jest.Mock).mockReturnValue(expectedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith(expectedClassString);
    expect(result).toBe(expectedClassString);
  });

  test("should handle conflicting classes correctly", () => {
    const inputClasses: string[] = [ "bg-red-500", "bg-blue-500" ];
    const mergedClassString = "bg-blue-500";

    (clsx as jest.Mock).mockReturnValue("bg-red-500 bg-blue-500");
    (twMerge as jest.Mock).mockReturnValue(mergedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith("bg-red-500 bg-blue-500");
    expect(result).toBe(mergedClassString);
  });

  test("should handle empty inputs correctly", () => {
    const inputClasses: string[] = [];
    const mergedClassString = "";

    (clsx as jest.Mock).mockReturnValue(mergedClassString);
    (twMerge as jest.Mock).mockReturnValue(mergedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith(mergedClassString);
    expect(result).toBe(mergedClassString);
  });

  test("should handle undefined and null inputs correctly", () => {
    const inputClasses: (string | undefined | null)[] = [
      undefined,
      null,
      "bg-red-500"
    ];
    const expectedClassString = "bg-red-500";

    (clsx as jest.Mock).mockReturnValue(expectedClassString);
    (twMerge as jest.Mock).mockReturnValue(expectedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith(expectedClassString);
    expect(result).toBe(expectedClassString);
  });

  test("should handle multiple inputs with duplicates correctly", () => {
    const inputClasses: string[] = [ "bg-red-500", "text-white", "bg-red-500" ];
    const expectedClassString = "bg-red-500 text-white";

    (clsx as jest.Mock).mockReturnValue(expectedClassString);
    (twMerge as jest.Mock).mockReturnValue(expectedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith(expectedClassString);
    expect(result).toBe(expectedClassString);
  });

  test("should handle a mix of strings and objects correctly", () => {
    const inputClasses: (string | Record<string, boolean>)[] = [
      "bg-red-500",
      { "text-white": true, "text-black": false }
    ];
    const clsxResult = "bg-red-500 text-white";
    const expectedClassString = "bg-red-500 text-white";

    (clsx as jest.Mock).mockReturnValue(clsxResult);
    (twMerge as jest.Mock).mockReturnValue(expectedClassString);

    const result = cn(...inputClasses);

    expect(clsx).toHaveBeenCalledWith(inputClasses);
    expect(twMerge).toHaveBeenCalledWith(clsxResult);
    expect(result).toBe(expectedClassString);
  });
});