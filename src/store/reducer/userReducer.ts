import { Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Profile, fetchProfileApi } from '../../servers/user';



interface UserInfo{
  userInfo:{
    email:string,
    accessToken:string
  },
  profile:Profile[]
} 

const initialState:UserInfo = {
    userInfo: {
      email: "",
      accessToken:""
    },
    profile:[]
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    //login get accessToken and email
    getUserInfo:(state,action)=>{
      state.userInfo = action.payload
    },
    removeUseInfo:(state,action)=>{
       state.userInfo.accessToken  = ""
       state.userInfo.email =""
       state.profile = [];
    }
  },
  extraReducers(builder) {
      builder.addCase(fetchProfileAction.fulfilled,(state,action)=>{
        state.profile = action.payload
      })
  },
});


export const {getUserInfo,removeUseInfo} = userReducer.actions

export default userReducer.reducer



export const fetchProfileAction = createAsyncThunk("user/ProfileAction",async(accessToken:string)=>{
  const result = await fetchProfileApi(accessToken);
  return result.data.content
})