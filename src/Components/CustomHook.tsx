import React,{useMemo} from "react";
import UseFetch from "./UseFetch";

export default function CustomHook() {
  const { data, done } = UseFetch("/hv-taplist.json");
  const portlandTaps = useMemo(()=>
        (data || []).filter(bev =>bev.producerLocation.includes("Portland"))
        ,[data]);
  return (
    <div>
      <h2>Custom Hook</h2>

      {portlandTaps.length && (
        <div>
          <img alt="logo" src={portlandTaps![0].logo} />
          <h2>{portlandTaps![0].name}</h2>
        </div>
      )}
    </div>
  );
}
