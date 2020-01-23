export const USER_SELECTED = 'USER_SELECTED';

export function selectUser(user){

    console.log("seleted : " +user.name);

    return{
        type:USER_SELECTED,
        payload:user
    }

}