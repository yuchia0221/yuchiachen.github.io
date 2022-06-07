import React from "react";
import cn from "classnames";
import { Phase, useTypeWriter } from "../hooks/useTypeWriter";

function TypeWriter(typingWords) {
    const { currentText, selectedWords, phase } = useTypeWriter(typingWords);
    return (
        <h2>
            I am
            <span
                className={cn("text-blue-500 text-2xl", {
                    ["end-cursor"]: phase !== Phase.Deleting,
                    ["blinking"]: phase === Phase.Pausing,
                })}
                aria-label={selectedWords}>
                {currentText}
            </span>
        </h2>
    );
}

export default TypeWriter;
