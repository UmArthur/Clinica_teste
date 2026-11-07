export type Specialty = { slug: string; name: string; description: string };

export const specialties: Specialty[] = [
  { slug: "medical-dermatology", name: "Medical Dermatology", description: "Diagnosis and treatment of skin, hair and nail conditions such as acne, eczema, psoriasis, rosacea and skin cancer screenings." },
  { slug: "surgical-dermatology", name: "Surgical Dermatology", description: "Surgical removal of skin cancers, moles, cysts and lesions, including precise techniques that protect healthy skin and minimize scarring." },
  { slug: "cosmetic-dermatology", name: "Cosmetic Dermatology", description: "Treatments that refresh and rejuvenate your appearance, improving tone, texture, wrinkles and signs of aging." },
  { slug: "phototherapy", name: "Phototherapy", description: "Controlled ultraviolet light treatments that calm chronic conditions like psoriasis, eczema and vitiligo." },
  { slug: "photodynamic-therapy", name: "Photodynamic Therapy", description: "A light-activated treatment that targets precancerous spots (actinic keratoses), sun damage and certain types of acne." },
  { slug: "superficial-radiation-therapy", name: "Superficial Radiation Therapy", description: "A non-surgical option for treating basal and squamous cell skin cancers with low-energy radiation, without cutting." },
  { slug: "lab-testing", name: "Lab Testing", description: "In-house lab tests and biopsies that give fast, accurate answers to guide your diagnosis and treatment." },
  { slug: "injectables-and-fillers", name: "Injectables and Fillers", description: "Neuromodulators and dermal fillers that smooth lines, restore volume and enhance natural facial contours." },
  { slug: "skin-care", name: "Skin Care", description: "Personalized medical-grade skin care routines and products for healthy, glowing, protected skin." },
  { slug: "face-and-body-contouring", name: "Face and Body Contouring", description: "Non-invasive treatments that reduce stubborn fat and tighten skin to sculpt the face and body." },
  { slug: "laser-hair-removal", name: "Laser Hair Removal", description: "Safe, long-lasting reduction of unwanted hair on the face and body with advanced laser technology." },
  { slug: "skinpen", name: "SkinPen", description: "FDA-cleared microneedling that stimulates collagen to improve acne scars, fine lines and skin texture." },
];

export const clinic = {
  name: "Dermatology Clinic, P. A.",
  address: "1410 N Woodlawn, Suite E",
  city: "Derby, Kansas 67037",
  phone: "(316) 247-6451",
};

export const specialtyName = (slug: string) => specialties.find((s) => s.slug === slug)?.name ?? slug;
