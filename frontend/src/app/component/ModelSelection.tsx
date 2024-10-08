'use client'

import useSWR from "swr"
import Select from "react-select"

const fetchModels = ()=> fetch('/api/getEngine').then(res=> res.json())
const ModelSelection = () => {
    const {data:  models, isLoading } = useSWR("models", fetchModels)
    const {data:  model,  mutate: setModel  } = useSWR("model", {
      fallbackData: "gpt-3.5-turbo"})
  
    return (
    <div className="mt-2" >
        <Select 
          key={model.id}
          className="mt-2"
          options={models?.modelOptions}
          defaultValue={model}
          placeholder={model}
          isSearchable
          isLoading={isLoading}
          menuPosition='fixed'
          classNames={
            {
              control: (state)=> "bg-[#434654] border-[#434654]"
            }}
          onChange={(e) => setModel(e.value)}
        />
        
    </div>
  )
}

export default ModelSelection
