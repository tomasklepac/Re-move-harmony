export default function Testimonials() {
    const testimonials = [
        {
            text: "Masér Max byl velmi profesionální a celý průběh odpovídal mým očekáváním. Po masáži jsem cítil lehké doznívání bolesti, což je u mě běžné, ale během dne vše odeznělo.",
            author: "Martin",
            rating: 5
        },
        {
            text: "Jedna z nejlepších masáží, jaké jsem kdy zažila. Profesionální prostředí, atmosféra mě okamžitě naladila na relax. Masér přesně odhadl, kde mám největší napětí.",
            author: "Nikola",
            rating: 5
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <p className="section-label">Hodnocení klientů</p>
                <h2>Co o nás říkají</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {'⭐'.repeat(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-author">— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
                <div className="testimonials-cta">
                    <a href="https://www.reservio.cz/b/re-move-harmony" target="_blank" rel="noopener" className="btn-outline">
                        Zobrazit všechny recenze
                    </a>
                </div>
            </div>
        </section>
    );
}
