import React, { useState } from "react";

const useDropdown = (items: string[]) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    
    const toggleOpen = () => {
      setOpen(!open);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case "Enter":
                setSelected(items[selectedIndex]);
                toggleOpen();
                break;
            case "ArrowDown":
                if (selectedIndex === items.length - 1) return;
                setSelectedIndex((selectedIndex + 1));
                break;                              
            case "ArrowUp":
                if (selectedIndex === -1) return;
                setSelectedIndex((selectedIndex - 1));
                break;
            case "Escape":
                setSelected(null);
                toggleOpen();
                break;
        }
    };

    // add aria attributes to the dropdown button
    const ariaAttributes = {
        "role": "listbox",
        "aria-expanded": open,
        "aria-labelledby": "menuItem",
        "aria-activedescendant": open ? `item-${selectedIndex}` : undefined,
    };

    return { open, selected, selectedIndex, toggleOpen, handleKeyDown, setSelected, setSelectedIndex, ariaAttributes };
}

export default useDropdown;