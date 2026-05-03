import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import TaskItem from "./TaskItem";
import "../styles/kanban.css";

export default function TaskList({
  tasks = [],
  onUpdateStatus,
  onEdit,
  onDelete,
}) {
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const columns = {
    todo: safeTasks.filter((t) => t.status === "todo"),
    doing: safeTasks.filter((t) => t.status === "doing"),
    done: safeTasks.filter((t) => t.status === "done"),
  };

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    onUpdateStatus?.(
      String(draggableId),
      destination.droppableId
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        {["todo", "doing", "done"].map((status) => (
          <Droppable
            key={status}
            droppableId={status}
          >
            {(provided, snapshot) => (
              <div
                className={`column ${
                  snapshot.isDraggingOver
                    ? "dragging-over"
                    : ""
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3 className="column-title">
                  {status.toUpperCase()}
                </h3>

                {columns[status].length === 0 && (
                  <div className="empty-column">
                    No tasks
                  </div>
                )}

                {columns[status].map((task, index) => (
                  <Draggable
                    key={task._id}
                    draggableId={String(task._id)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <TaskItem
                          task={task}
                          onEdit={onEdit}
                          onDelete={onDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}