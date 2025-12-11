export default defineNuxtRouteMiddleware( (to, from) =>{
    const { loggedIn } = useUserSession();
    const user = useUserSession();
    console.log(user.user.value);
    console.log('logged')

    if ( !loggedIn.value ) {
        return navigateTo("/login");
    }
})