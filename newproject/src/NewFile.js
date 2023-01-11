import React, { useEffect, useState } from "react";
import FetchData from "./CustomHooks";
 
function NewFile() {

  const data =  FetchData("https://jsonplaceholder.typicode.com/todos/1");
 
 return (
   <div>
       
       <h1>welcome</h1>
     <div>{data?.userId}</div>
     <div>{data?.id}</div>
     <div>{data?.title}</div>
     <div>{data?.completed}</div>
   </div>
 );
}
export default NewFile;