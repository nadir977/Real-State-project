import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";



const CustomDropDown = ({
  options,
  selectedOption,
  onOptionSelect,
  isMulti = false,
  calsses = "",
  searchabel = false,
  position = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    if (isMulti) {
      const exists = selectedOption?.find((o) => o.name === option.name);
      if (exists) {
        onOptionSelect(selectedOption.filter((o) => o.name !== option.name));
      } else {
        onOptionSelect([...(selectedOption || []), option]);
      }
    } else {
      onOptionSelect(option);
      setIsOpen(false);
    }
  };

  const removeChip = (option) => {
    if (isMulti) {
      onOptionSelect(selectedOption.filter((o) => o.name !== option.name));
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options?.filter((option) =>
    option?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const positionClasses = {
    bottom: "top-full mt-1",
    top: "bottom-full mb-1",
    left: "right-full mr-1 top-0",
    right: "left-full ml-1 top-0",
  };

  return (
    <div className="relative dropdown-wrapper">
      <div
        className={`${calsses} bg-main cursor-pointer flex items-center justify-between gap-1 text-left border-border border  p-2 rounded`}
        onClick={handleToggle}
      >
        {/* Multi-select chips */}
        <div className="flex flex-nowrap gap-2 overflow-x-auto max-w-[95%] p-0 scrollbar-thin scrollbar-thumb-gray-300">
          {isMulti ? (
            selectedOption?.length > 0 ? (
              selectedOption.map((o) => (
                <span
                  key={o._id || o.name}
                  className="flex items-center gap-1 bg-primary/15 text-primary border border-primary/30 px-3 py-1 rounded-full text-sm font-medium shrink-0 transition hover:bg-primary/25"
                >
                  {o.name}
                  <IoClose
                    className="cursor-pointer text-[16px] hover:text-red-500 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeChip(o);
                    }}
                  />
                </span>
              ))
            ) : (
              <span className="text-text text-sm">Select...</span>
            )
          ) : (
            <span className="text-text text-sm">
              {selectedOption || "Select..."}
            </span>
          )}
        </div>

        {isOpen ? <IoChevronUpOutline  /> : <IoChevronDownOutline  />}
      </div>

      {isOpen && (
        <div
          className={`absolute z-10 bg-main border-border border text-text shadow-lg rounded-md w-full max-h-[200px] overflow-auto ${positionClasses[position]}`}
        >
          <ul>
            {searchabel && (
              <li className="p-2 sticky top-0 bg-main border-b border-border">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="search..."
                  className="w-full border border-border px-2 py-1.5 rounded focus:outline-none focus:ring-1 focus:ring-primary bg-bg text-sm"
                />
              </li>
            )}

            {isMulti && (
              <li
                onClick={() => {
                  const allSelected = filteredOptions?.every((opt) =>
                    selectedOption?.some((sel) => sel?.name === opt.name)
                  );
                  if (allSelected) {
                    const remaining = selectedOption.filter(
                      (sel) =>
                        !filteredOptions.some((opt) => opt.name === sel.name)
                    );
                    onOptionSelect(remaining);
                  } else {
                    const merged = [
                      ...(selectedOption || []),
                      ...filteredOptions.filter(
                        (opt) =>
                          !selectedOption?.some((sel) => sel.name === opt.name)
                      ),
                    ];
                    onOptionSelect(merged);
                  }
                }}
                className="px-3 py-2 cursor-pointer hover:bg-bg font-semibold text-[14px]"
              >
                {filteredOptions.every((opt) =>
                  selectedOption?.some((sel) => sel.name === opt.name)
                )
                  ? "deselectAll"
                  : "selectAll"}
              </li>
            )}

            {filteredOptions?.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(option)}
                className={[
                  "px-3 py-2 cursor-pointer hover:bg-bg text-[14px]",
                  isMulti
                    ? selectedOption?.some((o) => o.name === option.name) &&
                      "bg-bg mb-1"
                    : selectedOption?.name === option?.name && "bg-bg",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {option.name}
              </li>
            ))}

            {filteredOptions.length === 0 && (
              <li className="px-3 py-2 text-sm text-textp">No result found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;