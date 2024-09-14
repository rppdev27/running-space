'use client'

import React, { useState, useRef } from 'react';
import { ChevronDown, Move, ArrowUpDown } from 'lucide-react';

type WidthOption = 'w-full' | 'w-1/2' | 'w-1/3' | 'w-2/3';
type RowSpanOption = 'row-span-1' | 'row-span-2' | 'row-span-3';

interface GridItemProps {
  id: number;
  content: string;
  width: WidthOption;
  rowSpan: RowSpanOption;
  onWidthChange: (id: number, newWidth: WidthOption) => void;
  onRowSpanChange: (id: number, newRowSpan: RowSpanOption) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

const GridItem: React.FC<GridItemProps> = ({ 
  id, 
  content, 
  width, 
  rowSpan, 
  onWidthChange, 
  onRowSpanChange, 
  onDragStart, 
  onDragOver, 
  onDrop 
}) => {
  const widthOptions: Record<WidthOption, string> = {
    'w-full': 'col-span-12',
    'w-1/2': 'col-span-6',
    'w-1/3': 'col-span-4',
    'w-2/3': 'col-span-8'
  };
  const rowSpanOptions: RowSpanOption[] = ['row-span-1', 'row-span-2', 'row-span-3'];

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
      className={`${widthOptions[width]} ${rowSpan} relative group transition-all duration-1000`}
    >
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg transition-shadow duration-300 group-hover:shadow-xl"></div>
      <div className="relative p-4 h-full">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2 z-10">
          <div className="relative">
            <select
              className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-1 px-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={width}
              onChange={(e) => onWidthChange(id, e.target.value as WidthOption)}
            >
              {(Object.keys(widthOptions) as WidthOption[]).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-1 px-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={rowSpan}
              onChange={(e) => onRowSpanChange(id, e.target.value as RowSpanOption)}
            >
              {rowSpanOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
        <Move className="absolute top-2 left-2 cursor-move text-gray-400 z-10" size={16} />
        <div className="mt-10">{content}</div>
      </div>
    </div>
  );
};

interface GridItem {
  id: number;
  content: string;
  width: WidthOption;
  rowSpan: RowSpanOption;
}

const BentoGridBuilder: React.FC = () => {
  const [items, setItems] = useState<GridItem[]>([
    { id: 1, content: 'Item 1', width: 'w-full', rowSpan: 'row-span-1' },
    { id: 2, content: 'Item 2', width: 'w-1/2', rowSpan: 'row-span-1' },
    { id: 3, content: 'Item 3', width: 'w-1/2', rowSpan: 'row-span-1' },
    { id: 4, content: 'Item 4', width: 'w-1/3', rowSpan: 'row-span-1' },
    { id: 5, content: 'Item 5', width: 'w-2/3', rowSpan: 'row-span-1' },
  ]);

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleWidthChange = (id: number, newWidth: WidthOption) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, width: newWidth } : item
      )
    );
  };

  const handleRowSpanChange = (id: number, newRowSpan: RowSpanOption) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, rowSpan: newRowSpan } : item
      )
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    dragItem.current = id;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    dragOverItem.current = id;
    
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const draggedItemIndex = items.findIndex((item) => item.id === dragItem.current);
      const dropItemIndex = items.findIndex((item) => item.id === dragOverItem.current);
      
      if (draggedItemIndex !== dropItemIndex) {
        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggedItemIndex, 1);
        newItems.splice(dropItemIndex, 0, draggedItem);
        setItems(newItems);
      }
    }
    
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bento Grid Builder</h1>
      <div className="grid grid-cols-12 gap-4 auto-rows-min">
        {items.map((item) => (
          <GridItem
            key={item.id}
            {...item}
            onWidthChange={handleWidthChange}
            onRowSpanChange={handleRowSpanChange}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGridBuilder;