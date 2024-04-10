import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Column from "../Column";

export default function App() {
  const [originalElement, setOriginalElement] = useState<any>("Drag");
  const [droppedElement, setDroppedElement] = useState<any>(null);

  const handleDragEnd = (event: any) => {
    const { over } = event;
    if (over && over.id === "droppable") {
      // Element dropped inside droppable area
      setDroppedElement(originalElement);
      setOriginalElement(null);
    } else {
      // Element dropped outside droppable area
      setDroppedElement(null);
      // Reset the draggable element to its original position
      setOriginalElement("Drag me");
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-8">
        <div className="bg-[#e78787]">
          {originalElement !== null && originalElement !== "Drop here" && (
            <Draggable>{originalElement}</Draggable>
          )}
        </div>
        <div className="bg-[#43b4af]">
          <Droppable>{droppedElement || "Drop here"}</Droppable>
        </div>
      </div>
    </DndContext>
  );
}
