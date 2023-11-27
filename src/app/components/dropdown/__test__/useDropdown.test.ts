import { act, renderHook } from "@testing-library/react";
import useDropdown from "../useDropdown";
import exp from "constants";

describe("useDropdown", () => {
  const items = ["Huey", "Dewey", "Louie"];

    it("should return the correct initial values", () => {
        const { result } = renderHook(() => useDropdown(items));
        const { open, selected, selectedIndex, ariaAttributes } = result.current;
    
        expect(open).toBe(false);
        expect(selected).toBe(null);
        expect(selectedIndex).toBe(-1);
        expect(ariaAttributes).toEqual({
            "role": "listbox",
            "aria-expanded": false,
            "aria-labelledby": "menuItem",
            "aria-activedescendant": undefined,
        });
    });

    it("should update the open state", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { open, toggleOpen } = result.current;
        expect(open).toBe(false);
        
        await act(async () => toggleOpen());
        const { open: openAfterToggle } = result.current;
        expect(openAfterToggle).toBe(true);
    });

    it("should update the selected state", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { setSelected } = result.current;

        expect(result.current.selected).toBe(null);
        await act(async () => setSelected(items[1]));
        const { selected } = result.current;
        expect(selected).toBe(items[1]);
    });

    it("should update the selectedIndex state", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { setSelectedIndex } = result.current;
        expect(result.current.selectedIndex).toBe(-1);

        await act(async () => setSelectedIndex(1));
        const { selectedIndex } = result.current;
        expect(selectedIndex).toBe(1);
    });

    it("should update the aria attributes when the dropdown is open", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { toggleOpen } = result.current;
        expect(result.current.ariaAttributes).toEqual({
            "role": "listbox",
            "aria-expanded": false,
            "aria-labelledby": "menuItem",
            "aria-activedescendant": undefined,
        });

        await act(async () => toggleOpen());

        const { ariaAttributes } = result.current;
        expect(ariaAttributes).toEqual({
            "role": "listbox",
            "aria-expanded": true,
            "aria-labelledby": "menuItem",
            "aria-activedescendant": "item--1",
        });
    });

    it("should handle the ArrowDown key", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { handleKeyDown } = result.current;

        await act(async () => handleKeyDown({ key: "ArrowDown" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex } = result.current;
        expect(selectedIndex).toBe(0);
    });

    it("should handle the ArrowUp key", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { handleKeyDown } = result.current;

        await act(async () => handleKeyDown({ key: "ArrowDown" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex } = result.current;
        expect(selectedIndex).toBe(0);

        const { handleKeyDown: handleKeyDown2 } = result.current;
        await act(async () => handleKeyDown2({ key: "ArrowDown" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex: newIndex } = result.current;
        expect(newIndex).toBe(1);

        const { handleKeyDown: handleKeyDown3 } = result.current;
        await act(async () => handleKeyDown3({ key: "ArrowUp" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex: finalIndex } = result.current;
        expect(finalIndex).toBe(0);
    });

    it("should handle the Enter key", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { handleKeyDown } = result.current;

        await act(async () => handleKeyDown({ key: "Enter" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex, selected, open } = result.current;
        expect(selectedIndex).toBe(-1);
        expect(selected).toBe(undefined);
        expect(open).toBe(true);
    });

    it("should handle the Escape key", async () => {
        const { result } = renderHook(() => useDropdown(items));
        const { handleKeyDown } = result.current;

        await act(async() => handleKeyDown({ key: "Escape" } as React.KeyboardEvent<HTMLDivElement>));
        const { selectedIndex, selected } = result.current;
        expect(selectedIndex).toBe(-1);
        expect(selected).toBe(null);
    });
});
