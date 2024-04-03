import { faker } from '@faker-js/faker';

import { UserProfileData } from "../Types/UserProfile";

export const users:UserProfileData[] = [
    {
      userId: 1,
      userName: "Karan Aujla",
      userBirthday:faker.date.birthdate() ,
      userDisplayImage:"https://pbs.twimg.com/media/FpojXkgaYAIDUP1.jpg",      
      userAge: 20,
      userLocation: "Gurgaon, IN",
      genres: [
        {
          value: "Soul",
        },
        {
          value: "R&B",
        },
        {
          value: "Hip Hop",
        },
      ],
      topSong: {
        songName: "DIVINE & Karan Aujla - Street Dreams",
        songImage:
          "https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg",
      },
      userScreens: [
        {
          screenType: "image",
          screenData: {
            url: "https://pbs.twimg.com/media/FpojXkgaYAIDUP1.jpg",
          },
        },
        {
          screenType: "prompt",       
          screenData: {
            promptTitle:"I put this on when I need to relax",
            promptSubtitle:"A song to chill out to ",
            promptAnswer:{
              answer:"The Thrill",
              artist:"Wiz Khalifa & The Empire of the sun",
              promptImage:"https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg"
            },
          },
        }
      ],
    },
    // {
    //   userId: 1,
    //   userName: "Tanishq Sharma",
    //   userBirthday: "10/02/2000",
    //   userAge: "20",
    //   userLocation: "Gurgaon, IN",
    //    userProfileImage:[
    //     "https://pbs.twimg.com/media/FpojXkgaYAIDUP1.jpg"
    //   ],
    //   topGenres: [
    //     {
    //       value: "Soul",
    //     },
    //     {
    //       value: "R&B",
    //     },
    //     {
    //       value: "Hip Hop",
    //     },
    //   ],
    //   topSong: {
    //     name: "DIVINE & Karan Aujla - Street Dreams",
    //     songImage:
    //       "https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg",
    //   },
    //   userProfileData: [
    //     {
    //       screenType: "image",
          
    //       screenData: {
    //         imageUrl: "https://pbs.twimg.com/media/FpojXkgaYAIDUP1.jpg",
    //       },
    //     },
    //     {
    //       screenType: "prompt",       
          
    //       screenData: {
    //         promptTitle:"I put this on when I need to relax",
    //         promptSubtitle:"A song to chill out to ",
    //         promptAnswer:{
    //           musicName:"The Thrill",
    //           musicArtist:"Wiz Khalifa & The Empire of the sun",
    //           musicImage:"https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg"
    //         },
    //       },
    //     },
    //   ],
    // },
  ];