import React from 'react';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
  id: 1,
  name: "Premium Corner Settee",
  description: "കട്ടിയുള്ള തടി ഉപയോഗിച്ച് നിർമ്മിച്ച സ്പേഷ്യസ് കോണർ സോഫാ, സുഖപ്രദമായ കുഷനുകളോടും കൃതിയായ കൈത്തരിപ്പണിയോടും കൂടെ",
  image: "/corner_sofa.jpg",
  category: "Living Room"
}
,
  {
    id: 2,
    name: "Corner Settee",
    description: "കോർണർ സെറ്റി – കോണുകൾ അലങ്കരിക്കുന്ന തനിപ്പാട്",
    image: "/royal-wood-gallery/Corner_sofa_black.jpg",
    category: "Living Room"
  },
  {
    id: 3,
    name: "Corner Settee",
    description: "കോർണർ സെറ്റി – കോണുകൾ അലങ്കരിക്കുന്ന തനിപ്പാട്",
    image: "/royal-wood-gallery/corner_sofa_red.jpg",
    category: "Living Room"
  },
  {
    id: 4,
    name: "Single Seater Recliner",
    description: "റീക്ലൈനർ സിംഗിൾ സെറ്റി – സുഖപ്രദമായ വിശ്രമത്തിന്",
    image: "/royal-wood-gallery/Recliner_settee.jpg",
    category: "living Room"
  },
  {
    id: 5,
    name: "Single Seat Settee",
    description: "സിംഗിൾ സീറ്റ് സെറ്റി – സ്റ്റൈലിഷും കമ്പാക്റ്റുമായ ഇരിപ്പിടം",
    image: "/royal-wood-gallery/Single_sofa.jpg",
    category: "Living Room"
  },
  {
    id: 6,
    name: "Wooden Swing",
    description: "വുഡൻ ഊഞ്ഞാൽ (Swing) – തനത് ശൈലിയിൽ സുഖകരമായ വിശ്രമമുറ",
    image: "/royal-wood-gallery/Chair.jpg",
    category: "SitOut"
  },
  {
    id: 7,
    name: "TV Stand",
    description: "പ്രീമിയം ടിവി സ്റ്റാൻഡ് – മനോഹരമായ ഡീസൈൻ, മികച്ച സൗകര്യം",
    image: "/royal-wood-gallery/TV_stand.jpg",
    category: "Main Hall and Living Room"
  },
];

const FurnitureGallery: React.FC = () => {
  return (
    <section className="bg-stone-50">
      {/* ✅ Full-width top image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src="/royal-wood-gallery/landscape.jpg" // Make sure this is in /public
          alt="Royal Wood Gallery"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Product Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">
            Our Handcrafted Collection
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Each piece is meticulously crafted by skilled artisans using traditional techniques 
            and the finest quality wood, ensuring durability and timeless beauty.
            മികച്ച ഗൃഹാലങ്കാരത്തിന് – ക്ലാസിക്കായും ആധുനികവുമായ ഫർണിച്ചറുകൾ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3 font-serif">
                  {product.name}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    Enquire Now
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* ✅ WhatsApp CTA */}
        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">
            Looking for custom designs? We create bespoke furniture tailored to your specific needs.
          </p>
          <a 
            href="https://wa.me/918086581611" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FurnitureGallery;
