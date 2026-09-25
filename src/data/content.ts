export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const hero = {
  eyebrow: "Dallas, Texas",
  headlineLead: "Your roof protects everything.",
  headlineEmph: "Make sure it's ready.",
  body: "StormShield Roofing inspects, repairs, and replaces roofs across Dallas. Start with a free inspection — we'll tell you what your roof actually needs.",
  chips: ["Roof Inspection", "Repair", "Replacement", "Storm Damage"],
};

export const problems = [
  {
    title: "Storm damage",
    copy: "North Texas storms leave marks you might not see from the ground. An inspection shows what changed — and what didn't.",
  },
  {
    title: "Leaks",
    copy: "A stain on the ceiling is a late signal. We trace it to the source so you aren't guessing with buckets.",
  },
  {
    title: "Aging roofs",
    copy: "Shingles dry, flashings loosen, and small gaps add up. Knowing where you stand is better than waiting for a failure.",
  },
  {
    title: "Missing shingles",
    copy: "Wind lift is common after a front moves through. Replacing a few now is often simpler than replacing a section later.",
  },
  {
    title: "Hail",
    copy: "Hail can bruise a roof without punching a hole. We assess granule loss and impact so you can decide with a clear picture.",
  },
  {
    title: "Emergency repairs",
    copy: "If something is open to the weather, we'll help you stabilize it first, then talk through the lasting fix.",
  },
] as const;

export const services = [
  {
    id: "inspection",
    title: "Roof Inspection",
    copy: "A professional look at the full roof system — covering, flashings, vents, and drainage — with a plain-language recap.",
    image: "/images/inspect.jpg",
    alt: "Roofing professional inspecting architectural shingles on a Dallas home",
  },
  {
    id: "repair",
    title: "Roof Repair",
    copy: "Targeted work on the parts that failed so the rest of a sound roof can keep doing its job.",
    image: "/images/repair.jpg",
    alt: "Craftsman placing a new architectural shingle during a repair",
  },
  {
    id: "replacement",
    title: "Roof Replacement",
    copy: "When repair is no longer the honest option, a clean replacement with a straightforward estimate.",
    image: "/images/replacement.jpg",
    alt: "Completed architectural shingle roof on a Texas brick home",
  },
  {
    id: "storm",
    title: "Storm Damage Repair",
    copy: "After high wind or a severe cell, we document what happened and restore weather-tight coverage.",
    image: "/images/storm.jpg",
    alt: "Dallas neighborhood after a passing storm, sunlight breaking through clouds",
  },
  {
    id: "hail",
    title: "Hail Damage Assessment",
    copy: "A careful read of impact, not a rushed verdict. You'll know if you need repair, replacement, or simply monitoring.",
    image: "/images/hail.jpg",
    alt: "Inspector checking a roof edge and gutter after hail",
  },
  {
    id: "emergency",
    title: "Emergency Roofing",
    copy: "Same-day attention when a leak or storm opening can't wait for a scheduled visit.",
    image: "/images/dusk.jpg",
    alt: "Dallas home at dusk with a standing-seam metal roof against a twilight sky",
  },
] as const;

export const reasons = [
  {
    title: "A real inspection",
    copy: "We look at the roof, not just the sales number. You get a clear picture of condition before anyone talks product.",
  },
  {
    title: "Transparent recommendations",
    copy: "Repair when repair is right. Replace when it isn't. We'll say so, and we'll explain why in language you can use.",
  },
  {
    title: "Quality workmanship",
    copy: "Details at the edges, flashings, and penetrations are what keep water out. That's where we spend attention.",
  },
  {
    title: "Responsive communication",
    copy: "You'll know who is coming, when they're coming, and what happens next. No disappearing after the first visit.",
  },
  {
    title: "Straightforward estimates",
    copy: "Line items you can read. Scope you can compare. No buried allowances designed to shift later.",
  },
  {
    title: "Customer-focused service",
    copy: "Your home stays occupied. We work around that — clean job sites, clear timelines, and a single point of contact.",
  },
] as const;

export const processSteps = [
  {
    id: "request",
    number: "01",
    title: "Request your inspection",
    copy: "Tell us about your roof — a leak, a storm, or simply its age. A short form is enough to get started.",
    image: "/images/interior.jpg",
    alt: "Bright Dallas living room looking out toward the roof eaves and patio",
  },
  {
    id: "inspect",
    number: "02",
    title: "We inspect",
    copy: "A roofing professional assesses the covering, flashings, and drainage, then documents what they find.",
    image: "/images/inspect.jpg",
    alt: "Inspector kneeling on a roof with a tablet, examining shingles",
  },
  {
    id: "options",
    number: "03",
    title: "Get your options",
    copy: "You receive a clear recommendation and estimate — repair, replace, or monitor — so you can decide with confidence.",
    image: "/images/metal.jpg",
    alt: "Modern Dallas home with a charcoal standing-seam metal roof",
  },
] as const;

export const testimonialsNote =
  "Customer stories belong here. Add real names, neighborhoods, and photos after the first completed jobs — never invented reviews.";

export const testimonialSlots = [
  {
    heading: "Replace with a real review",
    prompt: "A short quote from a Dallas homeowner after an inspection or repair.",
    image: "/images/shingles.jpg",
  },
  {
    heading: "Replace with a real review",
    prompt: "A storm or hail job, told in the customer's words, with permission.",
    image: "/images/replacement.jpg",
  },
  {
    heading: "Replace with a real review",
    prompt: "A replacement story: timeline, communication, and how the roof looks now.",
    image: "/images/metal.jpg",
  },
] as const;

export const faqs = [
  {
    q: "How much does a roof inspection cost?",
    a: "The inspection is free. You are not charged to have us look at the roof and explain what we find.",
  },
  {
    q: "What happens during the inspection?",
    a: "A roofing professional reviews the covering, flashings, vents, and drainage. Afterward you'll get a plain-language summary and, if work is needed, a clear estimate.",
  },
  {
    q: "Do you repair storm damage?",
    a: "Yes. Wind, hail, and storm openings are a core part of the work. We'll document the condition and recommend repair or replacement based on what we see.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most homes are completed in a few days once materials are on site. Weather, roof size, and complexity set the exact window — we'll give you one before work starts.",
  },
  {
    q: "Do I need to replace my entire roof?",
    a: "Not always. If the field is sound and the failure is local, repair is the honest answer. We'll tell you if replacement is actually necessary.",
  },
  {
    q: "What areas do you serve?",
    a: "Dallas–Fort Worth and surrounding North Texas communities. If you're nearby and unsure, send the address — we'll confirm.",
  },
  {
    q: "How do I request an estimate?",
    a: "Use the inspection form on this page, call, or message us on WhatsApp. The inspection is how we build an accurate estimate.",
  },
] as const;

export const serviceNeeds = [
  { value: "repair", label: "Roof Repair" },
  { value: "replacement", label: "Roof Replacement" },
  { value: "storm", label: "Storm Damage" },
  { value: "hail", label: "Hail Damage" },
  { value: "leak", label: "Leak" },
  { value: "inspection", label: "Inspection" },
  { value: "other", label: "Other" },
] as const;

export type ServiceNeed = (typeof serviceNeeds)[number]["value"];
