const ProductDetails = () => {
  return (
    <>
      <img src="/banners/layout.jpg" alt="banner" className="w-auto" />
      <main className="w-full px-4 lg:px-8 py-3 grid justify-start gap-6 items-start grid-cols-2">
        <div className="w-full">
          <img
            src="https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/Home-Centre/Test-UI/Living_Desktop_cat_1-25Mar20251.jpg"
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <h2 className="font-semibold text-[28px]">Sofas</h2>
          <p className="text-gray-800">
            The <b>Cleo Bedside Table</b> is a modern and functional addition to
            your bedroom. With its sleek design and premium craftsmanship, it
            provides a stylish and convenient surface for your nighttime
            essentials. This Side Table for Bed Crafted with attention to detail
            and using quality materials, it enhances your bedroom decor while
            offering practical bedside storage.
          </p>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
