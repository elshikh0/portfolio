import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialHobbies = [
  { id: 'hobby-1', content: '🎮 Gaming' },
  { id: 'hobby-2', content: '🏃‍♂️ Running' },
  { id: 'hobby-3', content: '📚 Reading' },
  { id: 'hobby-4', content: '🎵 Music' },
  { id: 'hobby-5', content: '✈️ Traveling' },
];

export const HobbiesCard = () => {
  const [hobbies, setHobbies] = useState(initialHobbies);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(hobbies);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setHobbies(items);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#10132E] p-4">
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-slate-100 mb-4">My Hobbies</h3>
        <p className="text-sm text-slate-400 mb-4">Drag and drop to reorder</p>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="hobbies">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {hobbies.map((hobby, index) => (
                  <Draggable key={hobby.id} draggableId={hobby.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-3 bg-[#10132E] rounded-lg cursor-move hover:bg-[#10132E] transition-colors"
                      >
                        {hobby.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}; 