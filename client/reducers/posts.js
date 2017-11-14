//a reducer takes in two things, 1.action 2.current state
//in redux, we use functional programming and we do not mutate our state
//and we use pure functions, pure function is a predictable function where everytime
//you pass in something the result is always the same
//an exmaple of inpure function is function that return a number * 2, 2 ,4, 6 then it's in pure
//a way to get around using inpure function is to use a copy the object and then pass the new object to state after 
//it pass through the function 

function posts(state=[], action){
    switch (action.type) {
        case 'INCREMENT_LIKES' :
            console.log('one more like');
            //return updated state, state is undefined when i try to set it
            //maybe its because state doesn't exist here in this function
            const i = action.index;

            /* this.setState({
            state: this.state.map(user => {
                if (i === user[i]) {
                    return [
                        ...user,
                        {...user[i], likes: state[i].likes +1 } 
                    ];
                }    
            })
            })
            */
             return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1), //after the one we are updating
            ]
        default:
            return state;
    } 
}

export default posts;
