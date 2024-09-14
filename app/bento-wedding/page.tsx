import React from 'react';

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-6 gap-4 p-6">
      <div className="col-span-6 row-span-2 bg-blue-300 rounded-lg">Large Item 1</div>
      <div className="col-span-2 row-span-2 bg-yellow-300 rounded-lg">Merged Item (1 col, 2 rows)</div>
      <div className="col-span-4 row-span-1 bg-red-300 rounded-lg">Small Item 2</div>
      <div className="col-span-4 row-span-1 bg-green-300 rounded-lg">Small Item 3</div>
      <div className="col-span-3 row-span-2 bg-purple-300 rounded-lg">Large Item 5 (3 cols)</div>
      <div className="col-span-3 row-span-2 bg-gray-300 rounded-lg">New Item (3 cols)</div>
      <div className="col-span-6 row-span-1 bg-pink-300 rounded-lg">Wide Item 6</div>
    </div>
  );
}
