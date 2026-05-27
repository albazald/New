/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pkg_4week',
    name: 'SDA 4-Week Premium Spring Refresh',
    tagline: 'The complete physical turnaround program for premium properties.',
    description: 'Our intensive four-week restoration campaign bundled into a single high-impact contract. Includes Exterior, Floors, Amenities, and Technical modules.',
    longDescription: 'Prepare your property for the main summer season with our acclaimed 4-Week restoration plan. This all-inclusive premium sequence aggregates all independent restorative operations—including high-rise facade window washing, subterranean garage chemical flushing, lobby high-dusting, carpets steam-extraction, rubbish chutes chemical purge, and hard floor stripping/rewaxing—into a highly choreographed, disruption-free master plan.',
    price: 9800,
    category: 'Packages',
    imageUrl: '/images/sda_facilities_sanitize_1779840656309.png',
    gallery: [
      '/images/sda_facilities_sanitize_1779840656309.png',
      '/images/sda_exterior_wash_1779840623753.png',
      '/images/sda_floor_care_1779840641574.png'
    ],
    features: ['Week 1: Hardscape & Exterior Wash', 'Week 2: Amenities & Disinfection', 'Week 3: Deep Indoor Fabric Sweeps', 'Week 4: Technical Upkeeps & Waxing', 'All-Inclusive Flat-Rate Bundle Pricing']
  },
  {
    id: 'pkg_annual',
    name: 'SDA Continuous Annual Premium Upkeep',
    tagline: 'Absolute structural safety and aesthetic consistency all year round.',
    description: 'Our complete 4-week Spring Refresh plus continuous bi-monthly floor care, 24/7 support line, seasonal transitions, and certified structural audits.',
    longDescription: 'Establish flawless standards for your luxury property or condominium complex. Our Annual Premium Upkeep ensures continuous operational excellence. It guarantees the comprehensive 4-Week Spring Refresh, followed by bi-monthly mechanical scrubs and steam extractions in lobbies, quarterly rubbish chute deodorizing, semi-annual parking lot sweeps, HVAC filter upgrades, pre-winter structural seals, and dedicated priority emergency response dispatch 24 hours a day.',
    price: 21600,
    category: 'Packages',
    imageUrl: '/images/sda_technical_upkeep_1779840670329.png',
    gallery: [
      '/images/sda_technical_upkeep_1779840670329.png',
      '/images/sda_floor_care_1779840641574.png'
    ],
    features: ['Includes Full 4-Week Spring Refresh', 'Bi-Monthly Lobby & Corridor Steaming', 'Pre-Winter Insulation & Pipe Seals', '24/7 Support Line & Priority Dispatch', 'Quarterly Rubbish & Drain Chemical Purge', 'Semi-Annual Parking Lot Sweeping', 'Predictive Asset Integrity Audits']
  },
  {
    id: 'p1',
    name: 'Exterior & Hardscape Restoration',
    tagline: 'Preserving premium structural integrity and first impressions.',
    description: 'High-level window cleaning, comprehensive perimeter landscaping debris cleanup, and mechanical garage powerwashing to remove winter salt and oil.',
    longDescription: 'Ensure your condominium or commercial property transitions seamlessly into the warm season with exterior renewal. This high-impact technical service package tackles high-altitude window cleaning across all facades, thorough leaf and debris removal around perimeters and gardens, and complete high-pressure garage flushing to clean out destructive winter salt deposits, dirt, and heavy engine oil.',
    price: 3450,
    category: 'Exterior',
    imageUrl: '/images/sda_exterior_wash_1779840623753.png',
    gallery: [
      '/images/sda_exterior_wash_1779840623753.png'
    ],
    features: ['High-rise Facade Window Cleaning', 'Detailed Garden & Leaf Removal', 'Subterranean Garage Powerwashing']
  },
  {
    id: 'p2',
    name: 'Floors & Common Area Care',
    tagline: 'Deep restoration and durable protective coatings.',
    description: 'Mechanical scrubbing, steam extraction for lobby and hallway carpets, protective strip and wax, and high-gloss polishing.',
    longDescription: 'Common area floors take the brunt of winter weathering. This package restores depth, safety, and luster to high-traffic zones. We handle deep mechanical floor scrubbing, sanitizing wash, high-extraction hot carpet steaming, and a multi-coat stripping, waxing, and mechanical burnishing to give hard surface floors a pristine, anti-slip glaze that lasts. ',
    price: 2800,
    category: 'Floors',
    imageUrl: '/images/sda_floor_care_1779840641574.png',
    gallery: [
      '/images/sda_floor_care_1779840641574.png'
    ],
    features: ['Deep Carpet Steam Extraction', 'Mechanical Floor Deep Scrub', 'Multi-Coat Strip, Seal & Wax']
  },
  {
    id: 'p3',
    name: 'Specialized Facilities Sanitization',
    tagline: 'Certified safety and sanitization for shared amenities.',
    description: 'Scrubbing & disinfection of pools and changerooms, high dusting of chandeliers/ducts, and thorough garbage chute sanitizing.',
    longDescription: 'Shared premium amenities require specialized sanitation routines. Our certified team performs thorough mechanical scrubbing of locker rooms and changerooms, pool deck tile scale removal, high-altitude dust eradication on lobby light fixtures, ducts, and chandeliers, and complete pressurized steam deodorization and chemical flushing of multi-floor rubbish garbage chutes.',
    price: 1950,
    category: 'Specialized',
    imageUrl: '/images/sda_facilities_sanitize_1779840656309.png',
    gallery: [
      '/images/sda_facilities_sanitize_1779840656309.png'
    ],
    features: ['Changeroom Chemical Scrub', 'Lobby High-Altitude Dusting', 'Rubbish Chute Vapor Deodorizing']
  },
  {
    id: 'p4',
    name: 'Units & Technical Upkeep',
    tagline: 'Aesthetic touch-ups, plumbing checks, and balcony soot removal.',
    description: 'Drywall patching, hallways color-matching painting, main plumbing visual checks, minor electrical upkeep, and detailed exterior balcony washdowns.',
    longDescription: 'Maintain the physical value and comfort of individual residential suites and structural boundaries. This package tackles balcony steam washing to remove unsightly winter soot and bird debris, storage locker clearing for abandoned contents, general commercial drywall patching, professional wall paint touch-ups inside corridors, and key checks on utility and plumbing fittings.',
    price: 3200,
    category: 'Technical',
    imageUrl: '/images/sda_technical_upkeep_1779840670329.png',
    gallery: [
      '/images/sda_technical_upkeep_1779840670329.png'
    ],
    features: ['Balcony High-Pressure Washdown', 'Corridor Drywall & Paint Matching', 'Locker Room Content Sorting', 'Certified Upkeep Checks']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: "Week 1: Exterior Restoration Campaign",
    date: "Roadmap: Phase 1",
    excerpt: "We start strong with high-power garage flushing, structural facade glass washing, and garden leaf cleanouts.",
    image: "/images/sda_exterior_wash_1779840623753.png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
        "Winter leaves behind more than cold memories; it builds up a layer of corrosive grit that undermines brick, stone, and subterranean structures. That's why Week 1 focuses on building outer defenses."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Our garage powerwashing crew removes high concentrations of road salts, oil, and sand using commercial-grade turbo hot water pressure washers. Salt eating into rebar is a leading cause of concrete deterioration, making this initial step critical for structural lifespan."
      ),
      React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
        "\"Weekly transitions ensure minimal noise pollution. Facade and garage restoration happens during hours designed to respect residents' downtime.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Simultaneously, our height-access specialists carry out window cleaning on high-rise facades, and our landscape crew initiates perimeter clearance of nested winter debris, restoring proper water drainage to your greenery."
      )
    )
  },
  {
    id: 2,
    title: "Week 2: Facilities & Amenities Optimization",
    date: "Roadmap: Phase 2",
    excerpt: "Refreshing active community spaces: thorough pool scrubbing, locker room disinfections, and odor neutralization.",
    image: "/images/sda_facilities_sanitize_1779840656309.png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Active amenities like gym changerooms and swimming pools are high-moisture centers where mold and biological film easily accumulate during winter."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "During Week 2, we execute industrial mechanical scrubbing and chemical sanitization in locker rooms using medical-grade broad-spectrum virucides. This process cleans and restores grout, tile work, and lockers."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
        React.createElement("p", null, "Sanitized changerooms and pool decks"),
        React.createElement("p", null, "Pressurized steam rubbish chute clearing"),
        React.createElement("p", null, "Complete soot and carbon balcony removal"),
        React.createElement("p", null, "A fresh environment of absolute safety.")
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Furthermore, our dedicated plumbing cleanout techs steam-sanitize the entire multi-floor garbage chute system—completely purging bacteria, winter grime, and nested vector odors."
      )
    )
  },
  {
    id: 3,
    title: "Week 3: Deep Interior Structural Cleaning",
    date: "Roadmap: Phase 3",
    excerpt: "Removing hidden dust from architecture, extracting fibers from lobby carpets, and clearing storage blocks.",
    image: "/images/sda_floor_care_1779840641574.png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Indoor air quality is defined by what settles out of reach. Hallway ceilings, vents, light fixtures, and expansive lobby chandeliers accumulate layers of fine gray particles over the winter heating months."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Week 3 tackles this high-altitude challenge. Our teams utilize scaffolding and extendable industrial vacuums to high-dust architectural surfaces, lights, and duct grilles safely."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "We follow this with hot-water dynamic carpet steam extraction. Our high-suction truck-mounted rigs draw dirt and salt particles out from deep within heavy common-area carpets, leaving fibers dry, sanitized, and structurally sound. Finally, we coordinate with your staff to clear abandoned clutter from locker storages."
      )
    )
  },
  {
    id: 4,
    title: "Week 4: Final Finishes & Technical Maintenance",
    date: "Roadmap: Phase 4",
    excerpt: "Corridor drywall styling, protective wax applications, water flow compliance, and electrical syncs.",
    image: "/images/sda_technical_upkeep_1779840670329.png",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "The final week is about polish, safety compliance, and aesthetic refinement. Minor scratches and drywall dings in corridors are meticulously patched, sanded, and painted over with perfectly color-matched coatings."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
        React.createElement("p", null, "Corridor walls restored with crisp fresh paint"),
        React.createElement("p", null, "Hard floors glazed with a micro-seal outer wrap"),
        React.createElement("p", null, "Certified plumbing and electrical checks complete"),
        React.createElement("p", null, "Professional reliability in every corner.")
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
        "Finally, all hard stone and tile areas undergo mechanical floor stripping, removing aged layers, followed by a multi-coat application of high-durability acrylic floor finish. Techs round out the week doing plumbing pressure syncs, flushing main floor drains, and confirming that all commercial light fixtures and sensors are operating perfectly."
      )
    )
  }
];

export const BRAND_NAME = 'SDA';
export const PRIMARY_COLOR = 'slate-950'; 
export const ACCENT_COLOR = 'amber-600';
