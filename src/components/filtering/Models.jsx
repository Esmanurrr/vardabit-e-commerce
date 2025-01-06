import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getModels } from "../../service/apiProduct";
import { setModels } from "../../redux/filterSlice";

function Models() {
  const dispatch = useDispatch();
  const [modelOptions, setModelOptions] = useState([]);
  useEffect(() => {
    const fetchModels = async () => {
      const models = await getModels();
      setModelOptions(models);
    };
    fetchModels();
  }, []);
  const handleModelChange = (event) => {
    const selectedModels = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    dispatch(setModels(selectedModels));
  };
  return (
    <div>
      {" "}
      <label htmlFor="models" className="block mb-2 font-bold">
        Models:
      </label>{" "}
      <select
        id="models"
        multiple
        className="block w-full p-2 border rounded"
        onChange={handleModelChange}
      >
        {" "}
        {modelOptions.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
}

export default Models;
