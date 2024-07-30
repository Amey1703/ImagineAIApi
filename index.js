import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const data = {
  prompt:
    "full-body shot, three-quarter profile, wide angle lens, photo of a man barefoot in a boxing pose throwing a punch  at someone not visible in the scene --cref https://cl.imagineapi.dev/assets/eede0fc0-8785-4a38-b0d9-1aead8475dc3.png --sref https://cl.imagineapi.dev/assets/a34fab62-01d2-4e1a-8b58-e33df7fd672e.png",
};

async function main() {
  try {
    const response = await fetch("https://cl.imagineapi.dev/items/images", {
      method: "POST",
      headers: {
        Authorization: "Bearer TEpnQn4CsA6-9_inqBn4hZgeNMB2CO14", // <<<< TODO: remember to change this
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
  //   const fetchData = await response.json()
  //   console.log(fetchData.data);
}
// main();

async function getImages() {
  const imageId = "8def5b11-d9f0-4cc1-91a9-37dba9e1c61d";
  try {
    const response = await fetch(
      `https://cl.imagineapi.dev/items/images/${imageId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.IMAGINEAI_API_KEY}`, // <<<< TODO: remember to change this
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

// getImages()

async function imageToImage(){
    try {
        const imageData = {
          prompt: "https://cl.imagineapi.dev/assets/a34fab62-01d2-4e1a-8b58-e33df7fd672e.png https://cl.imagineapi.dev/assets/eede0fc0-8785-4a38-b0d9-1aead8475dc3.png",
        };
        const response = await fetch("https://cl.imagineapi.dev/items/images", {
          method: "POST",
          headers: {
            Authorization: "Bearer TEpnQn4CsA6-9_inqBn4hZgeNMB2CO14", // <<<< TODO: remember to change this
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imageData),
        });
    
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error("Error generating image:", error);
        throw error;
      }
}

// imageToImage()