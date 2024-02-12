import { faker } from '@faker-js/faker';


const getRandomArtist = ()=>{
    return {
        imageUrl:faker.internet.avatar(),
        artistName:faker.person.firstName()
    }
}

export const getMultipleArtist = ()=>{

    return new Array(30).fill(null).map(_=>getRandomArtist())
}
