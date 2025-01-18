import { useState } from "react";

export const InputLog = (props) => {
  const { inputDataArray, calculateKcal, deleteButton, editButton } = props;
  const [editIndex, setEditIndex] = useState(null);
  const [editFood, setEditFood] = useState("");
  const [editProtein, setEditProtein] = useState("");
  const [editFat, setEditFat] = useState("");
  const [editCarbs, setEditCarbs] = useState("");

  const startEditing = (index, record) => {
    setEditIndex(index);
    setEditFood(record.foodName);
    setEditProtein(record.protein);
    setEditFat(record.fat);
    setEditCarbs(record.carbs);
  };

  const saveEdit = (index) => {
    const updatedItem = {
      foodName: editFood,
      protein: editProtein,
      fat: editFat,
      carbs: editCarbs,
    };
    editButton(index, updatedItem);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <ul className="w-2/3 mx-auto mt-6 space-y-4">
      {inputDataArray.map((record, index) => (
        <li
          key={index}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          {editIndex === index ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <input
                value={editFood}
                onChange={(e) => setEditFood(e.target.value)}
                placeholder="食品名"
                className="w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                value={editProtein}
                onChange={(e) => setEditProtein(e.target.value)}
                placeholder="P"
                className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                value={editFat}
                onChange={(e) => setEditFat(e.target.value)}
                placeholder="F"
                className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                value={editCarbs}
                onChange={(e) => setEditCarbs(e.target.value)}
                placeholder="C"
                className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                onClick={() => saveEdit(index)}
                className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                保存
              </button>
              <button
                onClick={cancelEdit}
                className="px-3 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                キャンセル
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">
                {record.foodName}
              </span>
              <span className="text-gray-600">
                {calculateKcal(record.protein, record.fat, record.carbs)} kcal
              </span>
              <div className="flex space-x-4 text-sm text-gray-700">
                <span>P: {record.protein}g</span>
                <span>F: {record.fat}g</span>
                <span>C: {record.carbs}g</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(index, record)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                >
                  編集
                </button>
                <button
                  onClick={() => deleteButton(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  削除
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
