import { faker } from "@faker-js/faker";

export const getRandomPerson = ()=>{
    return {
        id:faker.string.uuid(),
        userName:faker.person.firstName(),
        userImage:faker.image.avatar(),
        userLocation: faker.location.city()+', '+faker.location.state({abbreviated:true})
    }
}