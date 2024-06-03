import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";

type AppDispatch = typeof store.dispatch
type RootState = typeof store.dispatch


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()