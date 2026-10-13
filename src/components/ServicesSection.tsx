import React from 'react';
import { ChevronRight, Star, Clock, Sparkles } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  services: ServiceCategory[];
  onSelectService: (service: ServiceCategory) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
}) => {
  return (
    <section id="services" className="services-section-wrapper" aria-label="Explore Services">
      <div className="content-container">
        <div className="section-title-header">
          <h2 className="section-main-title">Easy Booking. Expert Service.</h2>
          <p className="section-sub-title">
            Select a verified service category. All equipment and eco-safe supplies are brought by our specialist.
          </p>
        </div>

        <div className="services-desktop-grid">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-grid-card"
              onClick={() => onSelectService(service)}
              role="button"
              tabIndex={0}
              aria-label={`View details and book ${service.title}`}
            >
              <div className="service-card-media">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img-full"
                  loading="lazy"
                />
                {service.tag && (
                  <span className="service-tag-chip">{service.tag}</span>
                )}
                <div className="service-arrow-round-btn">
                  <ChevronRight size={18} />
                </div>
              </div>

              <div className="service-card-body">
                <div>
                  <h3 className="service-card-heading">{service.title}</h3>
                  <p className="service-card-short-desc">{service.shortDesc}</p>
                </div>

                <div className="service-card-footer">
                  <div className="service-price-block">
                    <span className="service-starts-from">Starts from</span>
                    <span className="service-price-text">₹{service.priceStart}</span>
                  </div>

                  <div className="service-rating-pill">
                    <Star size={13} fill="#FFDF00" color="#D48806" />
                    <span>{service.rating}</span>
                    <span style={{ color: '#6B7280', fontSize: '11px', fontWeight: 500 }}>({(service.reviewCount / 1000).toFixed(1)}k)</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
