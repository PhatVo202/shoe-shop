import { Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Profile, Register, fetchProfileApi, registerApi } from '../../servers/user';



interface UserInfo{
  userInfo:{
    email:string,
    accessToken:string
  },
  profile:Profile[],
  userRegister:Register[]
} 

const initialState:UserInfo = {
    userInfo: {
      email: "",
      accessToken:""
    },
    profile:[],
    userRegister:[]
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    //login get accessToken and email
    getUserInfo:(state,action)=>{
      state.userInfo = action.payload
    },

    getRegisterUser:(state,action)=>{
      state.userRegister = action.payload
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


export const {getRegisterUser,getUserInfo,removeUseInfo} = userReducer.actions

export default userReducer.reducer



export const fetchProfileAction = createAsyncThunk("user/ProfileAction",async(accessToken:string)=>{
  const result = await fetchProfileApi(accessToken);
  return result.data.content
})
