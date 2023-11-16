import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Этот хук заменён на todoSelector.ts, который применяется в TodoList.tsx, строка 9
