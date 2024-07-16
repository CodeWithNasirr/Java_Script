const handle_user_input = (action)=>{
    switch (action){
        case 'login':
            console.log("loging........")
            break;
        case 'logout':
            console.log('logout.....')
            break;
        default:
            console.log("unknown...")
    }

};

handle_user_input('login')
handle_user_input('kokin')


