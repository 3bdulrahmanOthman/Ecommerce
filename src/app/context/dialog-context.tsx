"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type DialogType =
  | "add"
  | "edit"
  | "delete"
  /* Users Table */
  | "invite"
  /* Products Table */
  | "global_variants"
  | "variants"
  /* Global Variant Card */
  | "add-option"
  /* Category Table */
  | "add-subcategory"
  | null;

interface DialogContextType<TData = any> {
  open: DialogType;
  setOpen: (dialog: DialogType) => void;
  setData: Dispatch<SetStateAction<TData | null>>;
  getData: TData | null;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider<TData>({ children }: { children: ReactNode }) {
  const [open, setOpenState] = useState<DialogType>(null);
  const [data, setDataState] = useState<TData | null>(null);

  const setOpen = (dialog: DialogType) => {
    setOpenState(dialog);
    if (!dialog) setDataState(null);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen, setData: setDataState, getData: data }}>
      {children}
    </DialogContext.Provider>
  );
}

export function useDialog<TData>() {
  const context = useContext(DialogContext as React.Context<DialogContextType<TData> | undefined>);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}
