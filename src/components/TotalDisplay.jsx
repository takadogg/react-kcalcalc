export const TotalDisplay = ({ Kcal, Protein, Fat, Carbs }) => {
    return (
        <div className="w-full p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="mb-4 text-lg font-bold text-center text-gray-800">合計摂取量</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-yellow-100 rounded-md shadow-sm">
                    <h3 className="font-semibold text-gray-700 text-md">カロリー</h3>
                    <p className="text-xl font-bold text-yellow-600">{Kcal} kcal</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-md shadow-sm">
                    <h3 className="font-semibold text-gray-700 text-md">たんぱく質</h3>
                    <p className="text-xl font-bold text-blue-600">{Protein} g</p>
                </div>
                <div className="p-4 bg-red-100 rounded-md shadow-sm">
                    <h3 className="font-semibold text-gray-700 text-md">脂質</h3>
                    <p className="text-xl font-bold text-red-600">{Fat} g</p>
                </div>
                <div className="p-4 bg-green-100 rounded-md shadow-sm">
                    <h3 className="font-semibold text-gray-700 text-md">炭水化物</h3>
                    <p className="text-xl font-bold text-green-600">{Carbs} g</p>
                </div>
            </div>
        </div>
    );
};
