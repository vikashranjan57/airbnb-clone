const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
         filename:"listingimage",
         url:"https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      },
     price: 1500,
    location: "Malibu",
    country: "United States",
    continent: "america",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291cmNlfGVufDB8fDB8fHww",
     },   
         price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1743031031848-d1cb97c18395?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },    
         price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1743031031851-bffbe65f338f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
     },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1742969590900-67c6d077946d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
     },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
         filename:"listingimage",
         url:"https://images.unsplash.com/photo-1716292690672-cac6b9008447?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJpc3QlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
      },
     price: 1500,
    location: "Malibu",
    country: "United States",
    continent: "america",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1567106838064-5b6aa8bf04d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvdXJpc3QlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
     },   
         price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename:"listingimage",
        url:"https://media.istockphoto.com/id/2181855711/photo/mumbai-gateway-to-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZxrKZBceZOrxphWq_UZfSPPba4Sw09R6qv_MwgqUL14=",
     },    
         price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
        filename:"listingimage",
        url:"https://media.istockphoto.com/id/505757382/photo/jama-masjid-mosque-in-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=WAgWWzqPY0yZQV7sw3MY8SEQkB-fAKY3LvCyKrSfFHA=",
     },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:{
        filename:"listingimage",
        url:"https://media.istockphoto.com/id/510795912/photo/india-gate.webp?a=1&b=1&s=612x612&w=0&k=20&c=xbVf3ubpJkSUL15k6T_lcoB9LVWQB5CBLE2wIx4I2iY=",
     },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
         filename:"listingimage",
         url:"https://images.unsplash.com/photo-1700825469384-33f4a4edbf81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMHBsYWNlfGVufDB8fDB8fHww",
      },
     price: 1500,
    location: "Malibu",
    country: "United States",
    continent: "america",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1700825469384-33f4a4edbf81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMHBsYWNlfGVufDB8fDB8fHww",
     },   
         price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzdCUyMHBsYWNlfGVufDB8fDB8fHww",
     },    
         price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1679056251616-b9fc63dae5ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdCUyMHBsYWNlfGVufDB8fDB8fHww",
     },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1742969590900-67c6d077946d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
     },
    price: 800,
    location: "Portland",
    country: "United States",
  },
]
  

module.exports = { data: sampleListings };