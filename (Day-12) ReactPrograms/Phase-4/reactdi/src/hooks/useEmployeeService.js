 import { ServiceContext } from "../contexts/ServiceContext";
import { useContext } from "react";

export function useEmployeeService()
{
return useContext(ServiceContext);
}


