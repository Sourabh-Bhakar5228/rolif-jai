import { Title } from "react-head";
import Banners from "./Banners";
import Clientele from "./Clientele";
import ClientTestimonials from "./ClientTestimonials";
import WhyChooseUs from "./WhyChooseUs";
import FurnitureSlider from "../../components/FurnitureSlider";
import FurnitureGrid from "../../components/FurnitureGrid";
import FurnitureAbout from "../../components/FurnitureAbout";
import TilesAbout from "../../components/TilesAbout";
import ElectricAbout from "../../components/ElectricAbout";
import EpcAbout from "../../components/EpcAbout";
import Heading from "../../components/heading/Heading";
import Review from "./Review";

const Home = () => {
  const sliderImages = [
    // "/images/banner-image-1.png",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg",
    "https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg",
    "https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=",
    "https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg",
    "https://www.realsimple.com/thmb/kRRAaK6XhZIqL_GFIxfZzHTHx7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furniture-styles-GettyImages-1467984982-512fed4077b646eabbc187619554d517.jpg",
    "https://m.media-amazon.com/images/I/81JKyHGNbQL._AC_UF894,1000_QL80_.jpg",
  ];

  const sliderImages1 = [
    // "/images/tiles/t2.jpg",
    "https://www.spectoceramics.com/wp-content/uploads/sanitaryware-3.jpg",
    "https://i.pinimg.com/736x/83/57/b4/8357b4c18a3fd00ceb94c506bc626fa7.jpg",
    "https://www.lycosceramic.com/wp-content/uploads/2021/08/Stunning-Sanitary-ware-to-update-your-Bathroom.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/12/471797020/DX/NK/TI/6923942/ceramic-tiles-and-sanitary-wares.jpg",
    "https://mehrasons.wordpress.com/wp-content/uploads/2015/09/bathroom-tiles-bangalore.jpg",
    "https://www.cera-india.com/sites/default/files/2024-12/Main%20Category%20Mobile%20Banner%20Sanitaryware_1.jpg",
  ];

  const sliderImages2 = [
    "https://luckybee.in/wp-content/uploads/2022/06/31P2HARTyHL.jpg",
    "https://www.pooky.com/cdn/shop/articles/smaller-albert-table-lamp-1_1024x1024.jpg?v=1640001168",
    "https://images.jdmagicbox.com/quickquotes/images_main/switches-and-accessories-377151678-z9ryw.jpg",
    "https://www.jainsonsemporio.com/cdn/shop/products/NS60467-2W.jpg?v=1742369366",
    "https://cdn.thewirecutter.com/wp-content/media/2024/12/BVEST-32-INCH-TVS-2048px-2870-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024",
    "https://thepurpleturtles.com/cdn/shop/products/IMG_7275_560x700.jpg?v=1736780393",
    "https://whirlpoolindia.vtexassets.com/arquivos/ids/164350-800-auto?v=638731268849000000&width=800&height=auto&aspect=true",
  ];

  const products = [
    { id: 1, img: "/images/f2.jpg", name: "Stylish Floating Wall Shelves" },
    { id: 2, img: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/guides-and-how-tos/choosing-living-room-furniture/Title-living-room-interior-design.jpg.transform/bh-tb-image-container/image.webp", name: "Premium King-Size Upholstered Bed" },
    { id: 3, img: "https://www.thespruce.com/thmb/yq9k04epX9jysWlbaTBIo9xIKuA=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/transforming-furniture-for-small-spaces-4058276-0490f69ad6114680920b7545b42abb92.jpg", name: "Multi-Purpose Wardrobe" },
    { id: 4, img: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-section-1.jpg", name: "Modern Minimalist Coffee Table" },
    { id: 5, img: "https://cdn.media.amplience.net/i/shadesoflight/XU_Cat3", name: "Luxury Recliner Sofa" },
    { id: 6, img: "https://www.ulcdn.net/media/collection%20and%20listing/sofa.jpg?1688453493", name: "Elegant Wooden Dining Set" },
  ];

  const products1 = [
    { id: 1, img: "/images/tiles/t1.webp", name: "Stylish Floating Wall Shelves" },
    { id: 2, img: "https://www.hrjohnsonindia.com/assets/images/blog/armilo-silver-thumb-og.jpg", name: "Premium King-Size Upholstered Bed" },
    { id: 3, img: "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272_1280.jpg", name: "Multi-Purpose Wardrobe" },
    { id: 4, img: "https://www.hrjohnsonindia.com/assets/images/blog/johnson-eile-30x60-damson.jpg", name: "Modern Minimalist Coffee Table" },
    { id: 5, img: "https://5.imimg.com/data5/SELLER/Default/2025/1/484416379/TP/JO/MK/75241939/sanitary-tile-500x500.jpg", name: "Luxury Recliner Sofa" },
    { id: 6, img: "https://www.kagindia.com/image/cache/catalog/slider-2-1680x820.jpg", name: "Elegant Wooden Dining Set" },
  ];

  const products2 = [
    { id: 1, img: "https://images.mansionglobal.com/im-24387340?width=1299&height=866", name: "Stylish Floating Wall Shelves" },
    { id: 2, img: "https://media.istockphoto.com/id/487313304/photo/luxurious-living-room.jpg?s=612x612&w=0&k=20&c=10KEkIYpaaklaSrrB_vgS_GL_4OKD6IdAzs9wfNvmMs=", name: "Premium King-Size Upholstered Bed" },
    { id: 3, img: "https://www.magiklights.com/blog/wp-content/uploads/2021/05/Feature-1.jpg", name: "Multi-Purpose Wardrobe" },
    { id: 4, img: "https://www.braunhousehold.com/medias/en-ADP-SCS-what-to-look-for-when-buying-an-iron-AutoOff-icon2023-1080x810.jpg?context=bWFzdGVyfHJvb3R8MTIyNTM4fGltYWdlL2pwZWd8YUdWaEwyZ3laaTgwTnpZMk9UTXlOamN3T0RjMk5pOWxiaTFCUkZCZlUwTlRYM2RvWVhRdGRHOHRiRzl2YXkxbWIzSXRkMmhsYmkxaWRYbHBibWN0WVc0dGFYSnZibDlCZFhSdlQyWm1YMmxqYjI0eU1ESXpYekV3T0RCNE9ERXdMbXB3Wnd8MDJmZDhhNjM4YzgyMmQ0ZDVlNGE4Mzg1OGRmNDJlYzg5NDA5ZDdjYzNjMDVkMzhlMmJkZDhkZmE2MmY2MGY1OQ", name: "Modern Minimalist Coffee Table" },
    { id: 5, img: "https://static.vecteezy.com/system/resources/thumbnails/040/726/007/small/ai-generated-3d-render-of-modern-white-kitchen-interior-with-gas-stove-and-oven-photo.jpg", name: "Luxury Recliner Sofa" },
    { id: 6, img: "https://img.freepik.com/premium-photo/different-modern-kitchen-appliances-table-indoors-interior-element_495423-59658.jpg", name: "Elegant Wooden Dining Set" },
  ];


  return <>
    <Title>Rolif India</Title>
    <main className="w-full">
      <Banners />
      <Heading>Furnitures</Heading>
      <FurnitureAbout image="/images/furniture/2.gif" />
      <FurnitureSlider sliderImages={sliderImages} />
      <FurnitureGrid products={products} image="/banners/living-room-banner.png" />

      <Heading>Tiles & Sanitary Ware</Heading>
      <TilesAbout image="https://assets.zyrosite.com/mePvqjMrPwTro60x/leading-immigration-4-YZ92gNze4JtxbXnl.gif" />
      <FurnitureSlider sliderImages={sliderImages1} />
      <FurnitureGrid products={products1}  />

      <Heading>Electric Services</Heading>
      <ElectricAbout />
      <FurnitureSlider sliderImages={sliderImages2} />
      <FurnitureGrid products={products2} />

      <Review />
      {/* <Heading>EPC Projects</Heading>
      <EpcAbout />
      <FurnitureSlider sliderImages={sliderImages} />
      <FurnitureGrid products={products} /> */}


    </main>
  </>
}

export default Home;