import {} from '../Actions/actions.js';


const initialState = {
    temperature: "",
    description: "",
    humiditi: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
    loading: false,
    units: "",
};


const reducer = (state= initialState, action) => {
    switch (action.type) {

    }
}


export default reducer;