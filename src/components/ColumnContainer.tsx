"use client";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import useWindowDimensions from "@/utils";
import { useMemo } from "react";
import TaskCard from "./TaskCard";
import { SortableContext, useSortable } from "@dnd-kit/sortable";

type Board = {
  column: any;
  tasks: any;
};

export function ColumnContainer({ column, tasks }: Board) {
  const { width, height, isLoaded } = useWindowDimensions();

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const tasksIds = useMemo(() => {
    return tasks.map((task: { id: any }) => task.id);
  }, [tasks]);

  return (
    <div
      ref={setNodeRef}
      style={{ width: width * 0.75, ...style }}
      className="bg-[#403A64]  rounded-2xl px-4 pb-4 flex-shrink-0  "
    >
      <h1 className="text-white text-base font-bold pt-5 pb-4">
        {column.title}
      </h1>

      <div
        style={{
          height: height * 0.5,
          minHeight: "50px",
        }}
        className="flex flex-col gap-2 mt-2 overflow-y-auto overflow-x-hidden  "
      >
        <SortableContext items={tasksIds}>
          {tasks?.map((task: { id: any }) => (
            <>
              <TaskCard key={task.id} task={task} />
            </>
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
