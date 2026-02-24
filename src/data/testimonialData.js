const testimonialData = {
  volkan: {
    name: "Volkan Kaya",
    role: (
      <>
        Founder of{" "}
        <a
          className="font-semibold text-gray-950 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-500"
          href="https://versoly.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Versoly
        </a>
      </>
    ),
    image: "/client/volkan.webp",
    quote:
      "Great freelancer, I tested 40 of them and Priyanshu was the only one that passed the vetting process. I have already recommended him to friends and customers who similarly had good experiences.",
  },
  dmitry: {
    name: "Dmitry Kolyadyuk",
    role: "Marketing Manager",
    image: "/client/dmitry.webp",
    quote:
      "Priyanshu is very attentive to the details and follows the instructions very precisely which is rare and very valuable. Great communication, high level of productivity.",
  },
};

export default testimonialData;
