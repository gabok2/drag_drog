"use client";

import useWindowDimensions from "@/utils";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ColumnContainer } from "./ColumnContainer";
import TaskCard from "./TaskCard";
import { arrayMove } from "@dnd-kit/sortable";
import { Column, Task } from "@/types";

export function TaskBoard() {
  const sensors = useSensors(useSensor(TouchSensor));
  const { width, height, isLoaded } = useWindowDimensions();
  const defaultCols: Column[] = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "doing",
      title: "Work in progress",
    },
    {
      id: "done",
      title: "Done",
    },
  ];

  const defaultTasks: Task[] = [
    {
      id: "1",
      columnId: "todo",
      content: "List admin APIs for dashboard",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
    },
    {
      id: "3",
      columnId: "doing",
      content: "Conduct security testing",
    },
    {
      id: "4",
      columnId: "doing",
      content: "Analyze competitors",
    },
    {
      id: "5",
      columnId: "done",
      content: "Create UI kit documentation",
    },
    {
      id: "6",
      columnId: "done",
      content: "Dev meeting",
    },
    {
      id: "7",
      columnId: "done",
      content: "Deliver dashboard prototype",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Optimize application performance",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Implement data validation",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Design database schema",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Integrate SSL web certificates into workflow",
    },
    {
      id: "12",
      columnId: "doing",
      content: "Implement error logging and monitoring",
    },
    {
      id: "13",
      columnId: "doing",
      content: "Design and implement responsive UI",
    },
  ];
  const [data, setData] = useState([
    {
      id: 0,
      title: "board 1",
      tasks: [
        {
          id: 0,
          title: "task 1",
        },
        {
          id: 1,
          title: "task 2",
        },
        {
          id: 2,
          title: "task 3",
        },
        {
          id: 3,
          title: "task 4",
        },
        {
          id: 4,
          title: "task 5",
        },
        {
          id: 5,
          title: "task 6",
        },
        {
          id: 6,
          title: "task 4",
        },
        {
          id: 7,
          title: "task 4",
        },
        {
          id: 8,
          title: "task 4",
        },
        {
          id: 9,
          title: "task 4",
        },
        {
          id: 10,
          title: "task 4",
        },
      ],
    },
    {
      id: 1,
      title: "board 2",
      tasks: [
        {
          id: 12,
          title: "teste",
        },
        {
          id: 13,
          title: "task 2",
        },
        {
          id: 14,
          title: "task 3",
        },
        {
          id: 15,
          title: "task 4",
        },
        {
          id: 16,
          title: "task 5",
        },
        {
          id: 17,
          title: "task 6",
        },
        {
          id: 18,
          title: "task 4",
        },
        {
          id: 19,
          title: "task 4",
        },
        {
          id: 20,
          title: "task 4",
        },
        {
          id: 21,
          title: "task 4",
        },
        {
          id: 22,
          title: "task 4",
        },
      ],
    },
  ]);
  const columnsModify = data.map(({ id, title }) => ({ id, title }));
  const tasksModify = data.flatMap(({ id: columnId, tasks }) =>
    tasks.map((task, index) => ({
      ...task,
      id: `${columnId}-${task.id}`,
      columnId,
    }))
  );

  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeTask, setActiveTask] = useState(null);

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          // Fix introduced after video recording
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  return (
    <div
      className="
        flex
        min-h-screen
        w-full
        overflow-x-auto
        overflow-y-hidden
     
        px-4"
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="">
          <div className="flex gap-4 pt-6">
            {columns.map((col) => (
              <ColumnContainer
                key={col.id}
                column={col}
                tasks={tasks.filter((task) => task.columnId === col.id)}
              />
            ))}
          </div>
        </div>

        {typeof window !== "undefined" &&
          createPortal(
            <DragOverlay>
              {activeTask && <TaskCard task={activeTask} />}
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </div>
  );
}
