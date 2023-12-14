import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Auth } from 'aws-amplify';

Amplify.configure(awsconfig);

document.addEventListener("DOMContentLoaded", function () {
  const jordanShoes = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High OG "Bred"',
      image: 'https://m.media-amazon.com/images/I/61s9NYYXk+L._AC_UY780_.jpg',
      price: 1294,
      location: 'Amazon.ca',
      website: 'https://www.amazon.ca/Jordan-Retro-Reimagined-Chicago-Found/dp/B0BMDZYN9D/ref=sr_1_3_sspa?keywords=air+jordan+1&qid=1696378539&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
      id: 2,
      name: 'Air Jordan 4 Retro "Fire Red"',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Lqxffefrsj9zc_ld7vEcUIhDZfTbyBUGiHf15HFozmWdzCBK_7mIvv3hF7697z8DrXY&usqp=CAU',
      price: 190,
      location: 'JD Sports Guildford',
      website: 'https://www.jdsports.com/store/jordan-retro-4'
    },
    {
      id: 3,
      name: 'Air Jordan 11 Retro "Concord"',
      image: 'https://i.ebayimg.com/images/g/rNkAAOSwaGxitWw~/s-l500.jpg',
      price: 220,
      location: 'eBay.ca',
      website: 'https://www.ebay.ca/itm/354817219759?chn=ps&norover=1&mkevt=1&mkrid=706-159614-043509-9&mkcid=2&mkscid=101&itemid=354817219759&targetid=4586269160971570&device=c&mktype=&googleloc=&poi=&campaignid=414169804&mkgroupid=1322713655057161&rlsatarget=pla-4586269160971570&abcId=9300552&merchantid=136822&msclkid=6b51d615775e11b1fa99b309d80e643d&var=624135625694',
    },
    {
      id: 4,
      name: 'Air Jordan 3 Retro "Black Cement"',
      image: 'https://i.ebayimg.com/images/g/LM8AAOSwud1jTrFE/s-l1600.jpg',
      price: 200,
      location: 'eBay.ca',
      website: 'https://www.ebay.ca/itm/325831834806?epid=12052269204&hash=item4bdd173cb6:g:SiwAAOSwH~RlGBxh&amdata=enc%3AAQAIAAAA0DPr8pF9sRWf%2FqXDRh5IB%2FnGmDh4S6vfVG5%2B%2BK29vQskB1Pz7TT7ab0ThM0smMd%2FkOdwkYrtv9XbwbxeaYarmrF%2BO71NHWgfBDR9RAvZ1cSZGghajw9kziDJ5VKfX93ews%2Fe%2FLUNH94iUZzVzfYHeie2Gn6FvFEPeTMtLy2O7JCW7fbDOwMegN8S67btFSMM%2Bt4GjJ7FB9GyiNqq2Cq9A8m35gbZ4krXRAxHb8G%2BznHFER2sW0ioxBvhJZNLLQAsYDM8qbQOP%2F4eS%2B4rw9x%2Bv30%3D%7Ctkp%3ABk9SR6Dp8YDfYg',
    },
    {
      id: 5,
      name: 'Air Jordan 6 Retro "Infrared"',
      image: 'https://us03-imgcdn.ymcart.com/89311/2022/06/01/9/2/9226d2aff17bebcf.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_700,h_1000/format,webp',
      price: 190,
      location: 'Pure Cotton Times',
      website: 'https://www.purecottontimes.com/Air-Jordan-6-Retro-Infrared-2019-384664-060-p17269972.html',
    },
    {
      id: 6,
      name: 'Air Jordan 12 Retro "Flu Game"',
      image: 'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/080/647/original/46482_01.jpg.jpeg?action=crop&width=500',
      price: 190,
      location: 'Goat.com',
      website: 'https://www.goat.com/en-ca/sneakers/air-jordan-12-retro-flu-game-2016-130690-002',
    },
    {
      id: 7,
      name: 'Air Jordan 5 Retro "Grape"',
      image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c59c1a8b-c3a4-495e-aada-a871c8cce359/air-jordan-5-purple-grape-release-date.jpg',
      price: 190,
      location: 'Footlocker.com',
      website: 'https://www.footlocker.com/category/collection/jordan/retro-5.html',
    },
    {
      id: 8,
      name: 'Air Jordan 13 Retro "He Got Game"',
      image: 'https://i.ebayimg.com/images/g/bV8AAOSwbTRh1jdh/s-l500.jpg',
      price: 190,
      location: 'eBay.ca',
      website: 'https://www.ebay.ca/itm/166347423967?epid=26039811876&hash=item26bb1440df:g:a4UAAOSwcn9k7~aC&amdata=enc%3AAQAIAAAA8FEkK7AoZmm0oUrcMZmtegzQh2yOIvx0CScyKJkxxF06e7ZEz7BLZ3KJN1TufBBaoTI8RH%2FrIo19NXVXS9s6W7sgEtjKyx2ukBKHCai4sNFLTCPoBRwpKQdY%2Bcy5v%2FLXXiWoPscxhhcxg6OqssCYRo%2BVp3jIE1hbjMFUsQzOEVK%2B5CN6uh3pbUPro8CShTezbgy2c8J0IWJ%2FW%2B8qGSfHIEUeOBKSwPW2Sb%2Be8I9m7LaIPEwvZGzZmWyt60%2BigGbyn3ZZw9bOSFOomlLiQxQ4xDnVXUI6P6bzPBWR9SlV2Hu%2FGGtheuE0tXSYv0KcikiMVw%3D%3D%7Ctkp%3ABk9SR9DcloHfYg',
    },
    {
      id: 9,
      name: 'Air Jordan 7 Retro "Bordeaux"',
      image: 'https://www.bing.com/th?id=OPHS.qC5xZeY2qD%2fMqg474C474&o=5&pid=21.1&w=130&h=106&qlt=100&dpr=1&bw=6&bc=FFFFFF',
      price: 190,
      location: 'pkkicks.org',
      website: 'https://pkkicks.org/product/air-jordan-7-retro-bordeaux-black-bordeaux-light-graphite-suede/'
    },
  ];

  const signInButton = document.getElementById("signin-btn");
  signInButton.addEventListener("click", async function () {
    try {
      // Sign in user using Amplify Auth
      const signInResponse = await Auth.signIn('username', 'password');

      console.log("Sign In Response:", signInResponse);

      // Log the current authentication status
      const isAuthenticated = await Auth.currentAuthenticatedUser();
      console.log("User Authenticated:", isAuthenticated);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  });

  // Example: Sign out user when a button with id "signout-btn" is clicked
  const signOutButton = document.getElementById("signout-btn");
  signOutButton.addEventListener("click", async function () {
    try {
      // Sign out user using Amplify Auth
      const signOutResponse = await Auth.signOut();

      console.log("Sign Out Response:", signOutResponse);

      // Log the current authentication status
      const isAuthenticated = await Auth.currentAuthenticatedUser();
      console.log("User Authenticated:", isAuthenticated);
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  });
});

  displayProducts(jordanShoes);

  function displayProducts(products) {
      const shoesList = document.getElementById("shoes-list");

      // Clear previous content
      shoesList.innerHTML = '';

      // Loop through products and create rows of 3
      for (let i = 0; i < products.length; i += 3) {
          const row = document.createElement("div");
          row.classList.add("shoe-row");

          for (let j = i; j < i + 3 && j < products.length; j++) {
              const product = products[j];

              const shoeCard = document.createElement("div");
              shoeCard.classList.add("shoe-card");

              const shoeImage = document.createElement("img");
              shoeImage.src = product.image;
              shoeImage.alt = product.name;
              shoeImage.classList.add("shoe-image");

              // Add event listener to open the website when the image is clicked
              shoeCard.addEventListener("click", function () {
                  window.location.href = product.website;
              });

              const shoeTitle = document.createElement("div");
              shoeTitle.textContent = product.name;
              shoeTitle.classList.add("shoe-title");

              const shoePrice = document.createElement("div");
              shoePrice.textContent = `Price: $${product.price}`;
              shoePrice.classList.add("shoe-price");

              shoeCard.appendChild(shoeImage);
              shoeCard.appendChild(shoeTitle);
              shoeCard.appendChild(shoePrice);

              row.appendChild(shoeCard);
          }

          shoesList.appendChild(row);
      }
  }

