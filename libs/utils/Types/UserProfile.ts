export interface UserProfileData{
    userId:number|string,
    userName:string,
    userBirthday:Date,
    userAge:number,
    userDisplayImage:string,
    userLocation:string,
    genres:Genres[],
    topSong:SongDetail
    userScreens:UserScreenType[]
}

export interface Genres{
    value:string
}

export interface SongDetail{
    songName:string,
    songImage:string
}

export interface UserScreenType{
    screenType:'image' | 'prompt',
    screenData:ImageData | PromptData;

}

export interface ImageData{
    url:string
}

export interface PromptData{
    promptTitle?:string,
    promptSubtitle?:string,
    promptAnswer:PromptAnswer
}

export interface PromptAnswer{
    answer:string,
    artist?:string,
    promptImage:string
}