import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";

type Props = {
    options: any[];
    value: any;
    onChange: (value: any) => void;
    label?: string;
    required?: boolean;
    size?: "small" | "medium";
    name: string;
    readOnly?: boolean
    className?: string
};

const ATMSelect = ({
    options,
    label,
    required = false,
    value,
    onChange,
    size = "small",
    name,
    readOnly,
    className
}: Props) => {
    return (
        <>
            <div className="relative ">
                {label && (
                    <label className="text-slate-700 font-medium">
                        {label} {required && <span className="text-[#FED700] font-bold" > * </span>}
                    </label>
                )}
                <FormControl fullWidth>
                    <Select
                        name={name}
                        value={value}
                        onChange={onChange}
                        size={size}
                        className={twMerge(` ${label && "mt-2"} ${className}`)}
                        style={{ borderRadius: "none", border: "none" }}
                        readOnly={readOnly}
                    >

                        {options?.map((option) => (
                            <MenuItem
                                key={option.value} value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {name && (
                    <ErrorMessage name={name}>
                        {(errMsg: any) => (
                            <p className="font-poppins absolute text-[14px] text-start mt-0 text-red-500">
                                {errMsg}
                            </p>
                        )}
                    </ErrorMessage>
                )}
            </div>
        </>
    );
};
export default ATMSelect;