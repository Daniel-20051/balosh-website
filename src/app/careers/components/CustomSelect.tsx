"use client";

import { useEffect, useRef, useState } from "react";

export type Option = {
  value: string;
  label: string;
};

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomSelect({
  id,
  name,
  label,
  options,
  required,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [placement, setPlacement] = useState<"down" | "up">("down");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const display = selected?.label ?? placeholder ?? "Select";

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Decide whether to open the menu upward or downward and set a viewport-fit height
  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const gutter = 12; // px spacing from trigger
    const spaceBelow = viewportHeight - rect.bottom - gutter;
    const spaceAbove = rect.top - gutter;
    const shouldOpenUp = spaceBelow < 200 && spaceAbove > spaceBelow;
    setPlacement(shouldOpenUp ? "up" : "down");

    const maxHeight = Math.max(
      140,
      Math.floor(shouldOpenUp ? spaceAbove : spaceBelow)
    );
    if (listRef.current) {
      listRef.current.style.maxHeight = `${maxHeight}px`;
    }
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (
      !open &&
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
    ) {
      setOpen(true);
      setActiveIndex(0);
      e.preventDefault();
      return;
    }
    if (!open) return;
    if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (e.key === "ArrowDown") {
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setActiveIndex((i) => Math.max(i - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        const opt = options[activeIndex];
        setSelected(opt);
        setOpen(false);
        buttonRef.current?.focus();
      }
      e.preventDefault();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="hidden"
        name={name}
        value={selected?.value ?? ""}
        required={required}
      />
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className="mt-2 flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-3 text-left text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <span className={classNames(!selected && "text-gray-400")}>
          {display}
        </span>
        <svg
          className={classNames(
            "h-5 w-5 text-gray-500 transition-transform",
            open && "rotate-180"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          className={
            placement === "down"
              ? "absolute left-0 right-0 top-full z-20 mt-2 w-full overflow-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
              : "absolute left-0 right-0 bottom-full z-20 mb-2 w-full overflow-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
          }
        >
          {options.map((opt, index) => {
            const isActive = index === activeIndex;
            const isSelected = selected?.value === opt.value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={classNames(
                  "cursor-pointer rounded-md px-3 py-2 text-sm text-gray-800",
                  isActive && "bg-orange-50",
                  isSelected && "bg-orange-100 font-medium"
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
