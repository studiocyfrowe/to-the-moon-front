import React from "react";

export default function SectionHeader({label}) {
    return (
        <React.Fragment>
            <h3 className="mb-12 text-3xl text-zinc-800">
                {label}
            </h3>
        </React.Fragment>
    )
}