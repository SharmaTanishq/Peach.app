import { faker } from '@faker-js/faker';

const getRandomLike = ()=>{
    return {
        imageUrl:faker.internet.avatar(),
        userName:faker.person.firstName(),
        userId:faker.string.uuid()
    }
}


export const generateRandomLikes = ()=>{

    return new Array(Math.floor(Math.random()*29)).fill(null).map(_=>getRandomLike())
}