import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
/*henüz bir reducer tanımlanmadı. sadece örnek yapılandırma aşağıdaki gibidir. 
bkz ./slices/counterSlice","../components/ornek",
*/
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
