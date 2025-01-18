import { useState } from 'react';
import { InputValue } from './components/InputValue';
import { InputLog } from './components/InputLog';
import { TotalDisplay } from './components/TotalDisplay';

export const KcalCalculator = () => {
  const [inputDataArray, setInputDataArray] = useState([]);
  const [inputFood, setInputFood] = useState("");
  const [inputProtein, setInputProtein] = useState("");
  const [inputFat, setInputFat] = useState("");
  const [inputCarbs, setInputCarbs] = useState("");
  const [totalValue, setTotalValue] = useState("");

  const inputData = {
    foodName: inputFood,
    protein: inputProtein,
    fat: inputFat,
    carbs: inputCarbs
  };

  const onClickInputButton = () => {
    const nextDataArray = [...inputDataArray, inputData];
    setInputDataArray(nextDataArray);
    setTotalValue(calculateTotal(nextDataArray));

    setInputFood("");
    setInputProtein("");
    setInputFat("");
    setInputCarbs("");
  };

  const calculateTotal = (array) => {
    const totalP = array.reduce((total, data) => total + Number(data.protein), 0);
    const totalF = array.reduce((total, data) => total + Number(data.fat), 0);
    const totalC = array.reduce((total, data) => total + Number(data.carbs), 0);

    const totalKcal = calculateKcal(totalP, totalF, totalC);

    return {
      Kcal: totalKcal,
      protein: totalP,
      fat: totalF,
      carbs: totalC
    };
  };

  const calculateKcal = (protein, fat, carbs) => {
    return protein * 4 + fat * 9 + carbs * 4;
  };

  const onClickDeleteButton = (index) => {
    const afterDeleteArray = inputDataArray.filter((_, i) => i !== index);
    setInputDataArray(afterDeleteArray);
    setTotalValue(calculateTotal(afterDeleteArray));
  };

  const onClickEditButton = (index, updatedItem) => {
    const updatedArray = inputDataArray.map((item, i) =>
      i === index ? updatedItem : item
    );
    setInputDataArray(updatedArray);
    setTotalValue(calculateTotal(updatedArray));
  };

  return (
    <div className="w-8/12 mx-auto"> 
      <div className='flex items-center justify-between border border-yellow-300 rounded-xl shadow-lg h-28 mt-6 px-4 bg-yellow-100'>
        <input 
          placeholder='food name'
          value={inputFood} 
          onChange={(e) => setInputFood(e.target.value)}
          className='w-60 h-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />

        <div className='px-12'>
          <InputValue 
            valueName="たんぱく質"
            placeholder="P"
            inputValue={inputProtein}
            updateValue={setInputProtein}
          />
          <InputValue 
            valueName="脂質"
            placeholder="F"
            inputValue={inputFat}
            updateValue={setInputFat}
          />
          <InputValue 
            valueName="炭水化物"
            placeholder="C"
            inputValue={inputCarbs}
            updateValue={setInputCarbs}
          />
        </div>

        <button 
          onClick={onClickInputButton}
          className="px-6  py-4 shadow-lg bg-emerald-500 shadow-emerald-500/50 hover:bg-emerald-600 hover:scale-105 text-white rounded "  >
          記録する
        </button>

      </div>

      <TotalDisplay 
        Kcal={totalValue.Kcal}
        Protein={totalValue.protein}
        Fat={totalValue.fat}
        Carbs={totalValue.carbs}
      />

      <InputLog 
        inputDataArray={inputDataArray} 
        calculateKcal={calculateKcal}
        deleteButton={onClickDeleteButton}
        editButton={onClickEditButton}
      />
      
    </div>
  );
};

