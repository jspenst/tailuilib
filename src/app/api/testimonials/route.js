export async function loadTestimonials() {
  try {
    const res = await fetch(
      `https://pagesapi.engajamedesign.com.br/api/landing-pages/1?populate=deep`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    const testimonials = await data.data.section[4].testimonial;
    return testimonials;
  } catch (e) {
    console.log(`The error is ${e}`);
    return [];
  }
}
