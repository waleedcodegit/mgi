const current_state = {
    tabs:{
        step1_tab_display: "nav-link active",
        step1_tab_content: "tab-pane fade show active",
        step2_tab_display: "nav-link",
        step2_tab_content: "tab-pane fade",
        step3_tab_display: "nav-link",
        step3_tab_content: "tab-pane fade",
        step4_tab_display: "nav-link",
        step4_tab_content: "tab-pane fade",
        step5_tab_display: "nav-link",
        step5_tab_content: "tab-pane fade",
        step1_is_display: true,
        step1_is_display: false,
        step1_is_display: false,
        step1_is_display: false,
        step1_is_display: false,
    },
    user:{data:{},is_login:false},
    stepSignUp: 1,
    signUpFormOne: {}
}
const reducer = (state = current_state, action) => {
    if(action.type == "CHANGE_STEPS"){
        // console.log('In Reducer')
        return{
            ...state,
            tabs:action.payload
        }
    }else if(action.type == 'Sign_Up_Form_One'){
        // console.log(action.payload)
        return {
            ...state,
            signUpFormOne:action.payload
        }
    }else if(action.type == 'CHANGE_SignUp_STEP'){
        // console.log(action.payload);
        return {
            ...state,
            stepSignUp:action.payload
        }
    } else if(action.type == "CHANGE_USER"){
        return{
            ...state,
            user:action.payload
        }
    }
    return state;
}
export default reducer;