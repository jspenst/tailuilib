export async function GET() {
  try {
    const res = await fetch(
      `https://pagesapi.engajamedesign.com.br/api/landing-pages/1?populate=deep`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    const testimonials = await data.data.attributes.section[4].testimonial;
    console.log(testimonials);
    return new Response(testimonials).json();
  } catch (e) {
    console.log(`The error is ${e}`);
    return new Response([]).json();
  }
}
