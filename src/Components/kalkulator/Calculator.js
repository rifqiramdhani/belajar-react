
import React from "react";
import FunctionalTambah from "./FunctionalTambah";
import FunctionalKurang from "./FunctionalKurang";
import FunctionalKali from "./FunctionalKali";
import FunctionalBagi from "./FunctionalBagi";

export default function Calculator() {
    return(
        <div>
            <FunctionalTambah />
            <FunctionalKurang />
            <FunctionalKali />
            <FunctionalBagi />
        </div>
    )
}