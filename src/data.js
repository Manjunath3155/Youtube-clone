export const API_KEY = "AIzaSyBfyr2t8h635P-8eKI8Aui2SbiQ2dyo_jo";

export const value_convertor=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value / 1000000)+"M";
    }
    else if(value>=1000)
    {
       return Math.floor(value / 1000)+"K";
    }
    else{
        return value;
    }
}