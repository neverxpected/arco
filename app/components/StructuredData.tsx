export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Arco Fit Gym & Wellness',
        url: 'https://www.arcofitgym.com',
        description:
          '27,000 sq ft strength training and group fitness facility in Fulshear, TX featuring 120+ pieces of equipment, personal training, group fitness, reformer Pilates, yoga, custom saunas, kids club, and smoothie bar.',
        sameAs: [
          'https://www.instagram.com/arcofitgym/',
          'https://www.facebook.com/profile.php?id=100093109776783',
        ],
        serviceType: [
          'Strength Training',
          'Personal Training',
          'Group Fitness Classes',
          'Reformer Pilates',
          'Yoga',
          'Kids Club',
          'Smoothie Bar',
        ],
      },
      {
        '@type': 'WebSite',
        url: 'https://www.arcofitgym.com',
        name: 'Arco Fit Gym & Wellness',
      },
      {
        '@type': ['LocalBusiness', 'HealthClub'],
        name: 'Arco Fit Gym & Wellness',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6527 Skyline Dr, Building C',
          addressLocality: 'Fulshear',
          addressRegion: 'TX',
          postalCode: '77441',
          addressCountry: 'US',
        },
        telephone: '(346) 553-2726',
        email: 'Info@arcofitgym.com',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.6897,
          longitude: -95.8979,
        },
        priceRange: '$$',
        url: 'https://www.arcofitgym.com',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
