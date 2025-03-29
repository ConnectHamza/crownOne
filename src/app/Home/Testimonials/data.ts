import Testimonial1 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial1.webp'
import Testimonial2 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial2.webp'
import Testimonial3 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial3.webp'
import Testimonial4 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial4.webp'
import Testimonial5 from '../../../../public/Assets/home/TestimonialsIMG/Testimonial5.webp'


export interface Testimonial {
    name: string;
    testimonial: string;
    image: string;
    designation: string;
}

export const testimonialsData: Testimonial[] = [
    {
        designation: "Crown One User",
        name: "Fida Hussain Abbasi.",
        testimonial: "The application is really great. I highly appreciate Crown Group for their initiative in digitalizing their services.",
        image: Testimonial1.src,
    },
    {
        designation: "Crown One User",
        name: "Rana Subhan Ahmed.",
        testimonial: "Crown One is a really great app. It works seamlessly, and the good part is that the user can scan to verfiy the authenticity of parts.",
        image: Testimonial2.src,
    },
    {
        designation: "Crown One User",
        name: "Rehman Khan.",
        testimonial: "It is an awesome app for us, thanks to Crown Group for taking the initiative to make everything at one step from mobile.",
        image: Testimonial3.src,
    },
    {
        designation: "Crown One User",
        name: "Abid Ali.",
        testimonial: "The Crown Group have done a fabulous job for making things easier. I really appreciate the work Crown Group has done.",
        image: Testimonial4.src,
    },
    {
        designation: "Crown One User",
        name: "Ali Hassan.",
        testimonial: "Good opportunity for mechanics to gain points and earn money.",
        image: Testimonial5.src,
    },
    {
        designation: "Crown One User",
        name: "Sohail Autos.",
        testimonial: "Autobazaar feature is really good that helps us to have the data at one place.",
        image: Testimonial5.src,
    },
];