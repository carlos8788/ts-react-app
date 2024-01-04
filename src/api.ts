import axios from "axios";
import { SubsResponseFromApi } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
const API: string = 'http://localhost:3000/subs';

export const getUsers = async (): Promise<SubsResponseFromApi> => await fetch(API).then((response) => response.json())


export const getSubsAxios = async () => axios.get<SubsResponseFromApi>(API).then((response) => response.data) // Para axios, es opcional