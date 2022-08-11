const products = [
    {
      name: "Iphone 12 Black",
      varients: ["64GB", "128GB", "256GB"],
      prices: [
        {
          '64GB': 80000,
          '128GB': 85000,
          '256GB': 95000,
        },
      ],
      category: "Iphone",
      image: "/images/iphone12.jpg",
      description: "Super Retina XDR display \
      6.1‑inch (diagonal) all‑screen OLED display \
      2532‑by‑1170-pixel resolution at 460 ppi",
    },
    {
      name: "Corsair HS35 Stereo 3.5mm Gaming Headphone Carbon Black",
      varients: ["black"],
      prices: [
        {
          'black': 3200,
          
        },
      ],
      category: "Headset",
      image: "/images/hs35.jpg",
      description:
        "Key Features \
        MPN: CA-9011195-AP \
        Model: Corsair HS35 \
        Best for PC, Xbox One, PS4, Nintendo Switch & mobile devices \
        Crystal-clear communication \
        On-ear volume and mute controls \
        Input jack 3.5 mm analog,"
    },
    {
      name: "Apple AirPods Pro 2021 with Magsafe Charging Case",
      varients: ["white"],
      prices: [
        {
          'white': 22000
        },
      ],
      category: "airpods",
      description:
        "Press once to play, pause, or answer a phone call\
        Press twice to skip forward \
        Press three times to skip back \
        Press and hold to switch between Active Noise Cancellation and Transparency mode",
      image: "/images/airpodspro.jpg",
    },
    {
      name: "Samsung Galaxy Note 10",
      varients: ["white", "black"],
      prices: [
        {
          'white': 87000,
          'black': 87000
        },
      ],
      category: "samsung",
      image: "/images/note10.jpg",
      description:
        "Samsung Galaxy Note 10 comes with 6.3 inches high-quality Dynamic AMOLED screen. Both front and back sides are protected by strong 6th generation Gorilla Glasses. It has a Max-View punch-hole design. ",
    },
    {
      name: 'MSI Modern 14 B10MW Core i3 10th Gen 14" Full HD Laptop',
      varients: ["core i3", "core i5"],
      prices: [
        {
        "core i3": 46500,
         "core i5": 58000,
          
        },
      ],
      category: "MSI",
      image: "/images/msi.jpg",
      description:
        "Key Features\
        Model: MSI Modern 14 B10MW\
        Intel Core i3 10110U Processor (4MB Cache, 2.1Ghz up to 4.1Ghz)\
        4GB 2666mhz DDR4 RAM\
        256GB NVMe SSD\
        14 (1920 x 1080) FHD Display",
    },
    {
      name: "BenQ GW2283 | 21.5 inch Eye-care Stylish IPS Monitor",
      varients: ["ips", "no ips"],
      prices: [
        {
          "ips": 25000,
          "no ips": 19000,
          
        },
      ],
      category: "benq",
      image: "/images/benq.jpg",
      description:
        "The BenQ GW2283 21.5-inch Eye-care Stylish IPS Monitor features a Full HD (1920x1080) display, a slim bezel design, and dual HDMI connectivity. BenQ's GW2283 21.5 inch frameless monitor is intended for stunning simplicity, with ultra-slim bezels and hidden wire management. ",
    },
  ];
  export default products;
